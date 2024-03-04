import { atom } from "recoil";

export const phaseState = atom({
  key: "phase",
  default: "init",
});
