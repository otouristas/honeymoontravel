/** Matches `public/maps/greece.svg` — Lencer's Wikimedia location map
 *  (equirectangular, N/S stretch already baked into the viewBox). */
export const MAP_WIDTH = 1002.9881;
export const MAP_HEIGHT = 824.66919;

const LON_MIN = 19.1;
const LON_MAX = 29.9;
const LAT_MIN = 34.6;
const LAT_MAX = 42.0;

export function project([lon, lat]: [number, number]): [number, number] {
  const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * MAP_WIDTH;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * MAP_HEIGHT;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

export function polygon(points: [number, number][]): string {
  return `${points
    .map((p, i) => {
      const [x, y] = project(p);
      return `${i === 0 ? "M" : "L"}${x} ${y}`;
    })
    .join(" ")} Z`;
}

export type Constellation = {
  /** The full outline, for the hairline that draws itself. */
  d: string;
  /** Evenly spaced vertices, drawn as nodes. */
  nodes: [number, number][];
  /** Path length, so CSS can animate stroke-dashoffset without measuring. */
  length: number;
};

const round = (n: number) => Math.round(n * 10) / 10;

/** The classic parametric heart, sampled and fitted to a box in map pixel
 *  space. The atlas traces one across the Aegean. */
export function heartConstellation({
  center,
  width,
  steps = 240,
  nodeCount = 14,
}: {
  center: [number, number];
  width: number;
  steps?: number;
  nodeCount?: number;
}): Constellation {
  const raw: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    raw.push([
      16 * Math.sin(t) ** 3,
      // Negated because SVG's y axis points down.
      -(
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t)
      ),
    ]);
  }

  const xs = raw.map((p) => p[0]);
  const ys = raw.map((p) => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const scale = width / (maxX - minX);
  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const [cx, cy] = center;

  const points: [number, number][] = raw.map(([x, y]) => [
    round(cx + (x - midX) * scale),
    round(cy + (y - midY) * scale),
  ]);

  let length = 0;
  for (let i = 1; i < points.length; i++) {
    length += Math.hypot(
      points[i][0] - points[i - 1][0],
      points[i][1] - points[i - 1][1],
    );
  }

  const stride = Math.floor(steps / nodeCount);
  const nodes = points.filter((_, i) => i < steps && i % stride === 0);

  return {
    d: `${points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ")} Z`,
    nodes,
    length: Math.ceil(length),
  };
}
