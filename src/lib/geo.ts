/** Equirectangular projection tuned to the Greek bounding box.
 *  Good enough for a stylised map; not for navigation. */
export const MAP_WIDTH = 600;
export const MAP_HEIGHT = 620;

/** Padded beyond Greece's true bounding box so region labels sitting in open
 *  sea are not clipped by the viewBox edge. */
const LON_MIN = 18.2;
const LON_MAX = 29.4;
const LAT_MIN = 34.2;
const LAT_MAX = 42.2;

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
