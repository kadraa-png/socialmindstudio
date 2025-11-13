"use client";

import { useEffect, useMemo, useRef } from "react";

type Position = {
  order?: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt?: number;
  color?: string;
};

type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat?: number;
    lng?: number;
    altitude?: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

type Vector3 = { x: number; y: number; z: number };

type PreparedArc = Position & {
  color: string;
  startVec: Vector3;
  endVec: Vector3;
  segments: Vector3[];
};

const DEG2RAD = Math.PI / 180;
const DEFAULT_ARC_COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#2dd4bf",
  "#5de0ff",
  "#60a5fa",
  "#38bdf8",
  "#818cf8",
  "#0ea5e9",
  "#67e8f9",
];

const DEFAULT_CONFIG: Required<GlobeConfig> = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "rgba(93,224,255,0.3)",
  atmosphereAltitude: 0.12,
  emissive: "#03143f",
  emissiveIntensity: 0.35,
  shininess: 30,
  polygonColor: "rgba(255,255,255,0.1)",
  ambientLight: "#0f172a",
  directionalLeftLight: "#5de0ff",
  directionalTopLight: "#ffffff",
  pointLight: "#5de0ff",
  arcTime: 2600,
  arcLength: 0.45,
  rings: 3,
  maxRings: 6,
  initialPosition: {
    lat: 18,
    lng: -30,
    altitude: 1.4,
  },
  autoRotate: true,
  autoRotateSpeed: 0.6,
};

const DEFAULT_POSITIONS: Position[] = [
  {
    order: 1,
    color: "#06b6d4",
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.35,
  },
  {
    order: 2,
    color: "#3b82f6",
    startLat: 40.7128,
    startLng: -74.006,
    endLat: -33.4489,
    endLng: -70.6693,
    arcAlt: 0.3,
  },
  {
    order: 3,
    color: "#6366f1",
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.32,
  },
  {
    order: 4,
    color: "#2dd4bf",
    startLat: 48.8566,
    startLng: 2.3522,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.28,
  },
  {
    order: 5,
    color: "#5de0ff",
    startLat: -33.9249,
    startLng: 18.4241,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.3,
  },
  {
    order: 6,
    color: "#60a5fa",
    startLat: 35.6895,
    startLng: 139.6917,
    endLat: 55.7558,
    endLng: 37.6173,
    arcAlt: 0.34,
  },
];

export type WorldProps = {
  data?: Position[];
  globeConfig?: GlobeConfig;
};

export function World({ data = [], globeConfig }: WorldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mergedConfig = useMemo(() => {
    return {
      ...DEFAULT_CONFIG,
      ...globeConfig,
      initialPosition: {
        ...DEFAULT_CONFIG.initialPosition,
        ...globeConfig?.initialPosition,
      },
    };
  }, [globeConfig]);

  const preparedArcs = useMemo<PreparedArc[]>(() => {
    const dataset = data?.length ? data : DEFAULT_POSITIONS;
    return dataset.map((arc, idx) => {
      const startVec = latLngToVector(arc.startLat, arc.startLng);
      const endVec = latLngToVector(arc.endLat, arc.endLng);
      const segments = buildArcSegments(
        startVec,
        endVec,
        64,
        arc.arcAlt ?? 0.25,
      );
      return {
        ...arc,
        color: arc.color ?? DEFAULT_ARC_COLORS[idx % DEFAULT_ARC_COLORS.length],
        startVec,
        endVec,
        segments,
      };
    });
  }, [data]);

  const ringTargets = useMemo(
    () =>
      preparedArcs
        .map((arc) => ({
          vec: arc.endVec,
          color: arc.color,
        }))
        .slice(0, mergedConfig.maxRings),
    [preparedArcs, mergedConfig.maxRings],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const tilt = (mergedConfig.initialPosition?.lat ?? 0) * DEG2RAD;
    let rotation = (mergedConfig.initialPosition?.lng ?? 0) * DEG2RAD;
    let animationFrame: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (mergedConfig.autoRotate) {
        const speed =
          ((mergedConfig.autoRotateSpeed ?? DEFAULT_CONFIG.autoRotateSpeed) *
            DEG2RAD) /
          1000;
        rotation = (rotation + delta * speed) % (Math.PI * 2);
      }

      drawScene(ctx, {
        arcs: preparedArcs,
        ringTargets,
        config: mergedConfig,
        rotation,
        tilt,
        timestamp: time,
      });

      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [preparedArcs, ringTargets, mergedConfig]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(94,224,255,0.15),transparent_55%)] blur-3xl opacity-70" />
      <canvas
        ref={canvasRef}
        className="relative h-full w-full rounded-full"
        aria-hidden
      />
    </div>
  );
}

function drawScene(
  ctx: CanvasRenderingContext2D,
  {
    arcs,
    ringTargets,
    config,
    rotation,
    tilt,
    timestamp,
  }: {
    arcs: PreparedArc[];
    ringTargets: { vec: Vector3; color: string }[];
    config: Required<GlobeConfig>;
    rotation: number;
    tilt: number;
    timestamp: number;
  },
) {
  const canvas = ctx.canvas;
  const width = canvas.width / (window.devicePixelRatio || 1);
  const height = canvas.height / (window.devicePixelRatio || 1);
  const radius = Math.min(width, height) * 0.45;
  const centerX = width / 2;
  const centerY = height / 2;

  ctx.clearRect(0, 0, width, height);

  const baseGradient = ctx.createRadialGradient(
    centerX - radius * 0.25,
    centerY - radius * 0.3,
    radius * 0.2,
    centerX,
    centerY,
    radius,
  );
  baseGradient.addColorStop(0, hexToRgba(config.pointLight, 0.95));
  baseGradient.addColorStop(0.7, hexToRgba(config.globeColor, 1));
  baseGradient.addColorStop(1, hexToRgba(config.ambientLight, 0.6));
  ctx.fillStyle = baseGradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = hexToRgba(config.emissive, config.emissiveIntensity);
  ctx.beginPath();
  ctx.arc(centerX + radius * 0.15, centerY + radius * 0.25, radius * 0.6, 0, Math.PI * 2);
  ctx.fill();

  const rimGradient = ctx.createLinearGradient(
    centerX - radius,
    centerY,
    centerX + radius,
    centerY,
  );
  rimGradient.addColorStop(0, hexToRgba(config.directionalLeftLight, 0.25));
  rimGradient.addColorStop(1, hexToRgba(config.directionalTopLight, 0.15));
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.globalAlpha = clamp(config.shininess / 50, 0.15, 0.8);
  ctx.fillStyle = rimGradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  drawGrid(ctx, centerX, centerY, radius, config.polygonColor);

  if (config.showAtmosphere) {
    ctx.strokeStyle = hexToRgba(config.atmosphereColor, 0.8);
    ctx.lineWidth = radius * config.atmosphereAltitude;
    ctx.shadowBlur = radius * config.atmosphereAltitude * 1.5;
    ctx.shadowColor = hexToRgba(config.atmosphereColor, 0.8);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.97, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  arcs.forEach((arc, idx) => {
    const { segments } = arc;
    const points = segments
      .map((vec) => projectVector(vec, rotation, tilt, centerX, centerY, radius))
      .filter((point) => point && point.depth >= 0.02);

    if (!points.length) return;

    const dashWindow = Math.max(
      3,
      Math.floor((config.arcLength ?? DEFAULT_CONFIG.arcLength) * segments.length),
    );
    const arcDuration = config.arcTime ?? DEFAULT_CONFIG.arcTime;
    const offset = ((timestamp / arcDuration) + (idx * 0.07)) % 1;
    const activeIndex = Math.floor(offset * (segments.length - 1));

    ctx.save();
    ctx.lineWidth = 1.25;
    ctx.lineCap = "round";
    ctx.strokeStyle = hexToRgba(arc.color, 0.85);
    ctx.shadowColor = hexToRgba(arc.color, 0.85);
    ctx.shadowBlur = 12;

    ctx.beginPath();
    for (let i = 0; i < dashWindow; i++) {
      const point = points[(activeIndex + i) % points.length];
      if (!point) continue;
      if (i === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }
    ctx.stroke();
    ctx.restore();

    drawPoint(ctx, arc.startVec, rotation, tilt, centerX, centerY, radius, config, arc.color);
    drawPoint(ctx, arc.endVec, rotation, tilt, centerX, centerY, radius, config, arc.color);
  });

  const ringCount = Math.min(config.rings ?? DEFAULT_CONFIG.rings, ringTargets.length);
  for (let i = 0; i < ringCount; i++) {
    const target = ringTargets[i];
    const projected = projectVector(
      target.vec,
      rotation,
      tilt,
      centerX,
      centerY,
      radius,
    );
    if (!projected || projected.depth < 0) continue;

    const ringDuration = config.arcTime ?? DEFAULT_CONFIG.arcTime;
    const progress = ((timestamp / ringDuration) + i * 0.2) % 1;
    const ringRadius = progress * radius * 0.4;
    ctx.strokeStyle = hexToRgba(target.color, 1 - progress);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, ringRadius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawGrid(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  color: string,
) {
  ctx.save();
  ctx.strokeStyle = hexToRgba(color, 0.4);
  ctx.lineWidth = 0.5;

  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.arc(cx, cy, radius * (0.4 + i * 0.15), 0, Math.PI * 2);
    ctx.stroke();
  }

  for (let i = -1; i <= 1; i++) {
    ctx.save();
    ctx.translate(0, radius * 0.18 * i);
    ctx.beginPath();
    ctx.ellipse(cx, cy, radius * 0.9, radius * 0.4, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
  ctx.restore();
}

function drawPoint(
  ctx: CanvasRenderingContext2D,
  vector: Vector3,
  rotation: number,
  tilt: number,
  cx: number,
  cy: number,
  radius: number,
  config: Required<GlobeConfig>,
  color: string,
) {
  const projected = projectVector(vector, rotation, tilt, cx, cy, radius);
  if (!projected || projected.depth < 0) return;

  const size = clamp(config.pointSize, 1, 10);

  ctx.save();
  ctx.fillStyle = color;
  ctx.shadowColor = hexToRgba(color, 0.8);
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.arc(projected.x, projected.y, size / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function projectVector(
  vector: Vector3,
  rotation: number,
  tilt: number,
  cx: number,
  cy: number,
  radius: number,
): { x: number; y: number; depth: number } | null {
  const cosR = Math.cos(rotation);
  const sinR = Math.sin(rotation);
  const cosTilt = Math.cos(tilt);
  const sinTilt = Math.sin(tilt);

  const rotY = {
    x: vector.x * cosR - vector.z * sinR,
    y: vector.y,
    z: vector.x * sinR + vector.z * cosR,
  };

  const rotX = {
    x: rotY.x,
    y: rotY.y * cosTilt - rotY.z * sinTilt,
    z: rotY.y * sinTilt + rotY.z * cosTilt,
  };

  const depth = rotX.z;
  const x = cx + rotX.x * radius;
  const y = cy - rotX.y * radius;
  return { x, y, depth };
}

function latLngToVector(lat: number, lng: number): Vector3 {
  const latRad = lat * DEG2RAD;
  const lngRad = lng * DEG2RAD;
  return {
    x: Math.cos(latRad) * Math.cos(lngRad),
    y: Math.sin(latRad),
    z: Math.cos(latRad) * Math.sin(lngRad),
  };
}

function buildArcSegments(
  start: Vector3,
  end: Vector3,
  samples: number,
  arcAlt: number,
) {
  const normalizedStart = normalize(start);
  const normalizedEnd = normalize(end);
  const dot = clamp(
    normalizedStart.x * normalizedEnd.x +
      normalizedStart.y * normalizedEnd.y +
      normalizedStart.z * normalizedEnd.z,
    -1,
    1,
  );
  const omega = Math.acos(dot);
  const sinOmega = Math.sin(omega) || 1;
  const result: Vector3[] = [];

  for (let step = 0; step <= samples; step++) {
    const t = step / samples;
    const scale0 = Math.sin((1 - t) * omega) / sinOmega;
    const scale1 = Math.sin(t * omega) / sinOmega;
    const x = scale0 * normalizedStart.x + scale1 * normalizedEnd.x;
    const y = scale0 * normalizedStart.y + scale1 * normalizedEnd.y;
    const z = scale0 * normalizedStart.z + scale1 * normalizedEnd.z;
    const point = normalize({ x, y, z });
    const altitude = 1 + arcAlt * Math.sin(Math.PI * t);
    result.push({
      x: point.x * altitude,
      y: point.y * altitude,
      z: point.z * altitude,
    });
  }

  return result;
}

function normalize(vec: Vector3): Vector3 {
  const length = Math.hypot(vec.x, vec.y, vec.z) || 1;
  return {
    x: vec.x / length,
    y: vec.y / length,
    z: vec.z / length,
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function hexToRgba(hex: string, alpha = 1) {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(
    sanitized.length === 3
      ? sanitized
          .split("")
          .map((char) => char + char)
          .join("")
      : sanitized,
    16,
  );

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


export type { GlobeConfig, Position };
