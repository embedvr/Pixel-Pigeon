import { Application } from "pixi.js";
import Config from "./types/Config";
import State from "./classes/State";

interface StateSchema {
  readonly app: Application | null;
  readonly config: Config | null;
  readonly currentTime: number;
  readonly hasInteracted: boolean;
  readonly heldGamepadButtons: number[];
  readonly heldKeys: string[];
  readonly isInitialized: boolean;
  readonly levelID: string | null;
  readonly loadedAssets: number;
}
const state: State<StateSchema> = new State<StateSchema>({
  app: null,
  config: null,
  currentTime: 0,
  hasInteracted: false,
  heldGamepadButtons: [],
  heldKeys: [],
  isInitialized: false,
  levelID: null,
  loadedAssets: 0,
});

export default state;
