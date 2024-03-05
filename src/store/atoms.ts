import { atom } from "recoil";

type phaseType = "init" | "user" | "com";

export const phaseState = atom<phaseType>({
  key: "phase",
  default: "init",
});
