import Definable from "../classes/Definable";
import getDefinables from "./getDefinables";

const getDefinable = <T extends Definable>(prototype: new (...args: any[]) => T, slug: string): T => {
  const definable = getDefinables(prototype).get(slug);
  if (typeof definable === "undefined") {
    throw new Error(`Definable ${slug} of type ${prototype.name} does not exist.`);
  }
  return definable;
}

export default getDefinable;