import { ATLAS } from "@/content/atlas";
import IslandAtlasClient from "./IslandAtlasClient";

/** Server component: the map model is derived here so the island registry
 *  never reaches the client bundle. */
export default function IslandAtlas() {
  return <IslandAtlasClient regions={ATLAS} />;
}
