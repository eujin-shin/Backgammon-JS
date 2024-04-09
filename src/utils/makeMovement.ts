import { SpaceProps } from "@/components/Spaces";

type caseType = number[];

let cases: caseType[] = [];

const checkAvailablity = () => {};

const backTrack = (
  dices: number[],
  idx: number,
  state: SpaceProps[],
  cur: caseType,
  start: SpaceProps
) => {
  if (idx === dices.length) {
    cases.push(cur);
    return;
  }
  for (let i = 0; i < state.length; i++) {
    const element = state[i];
    const moves = dices[idx];
    cur[i]++;
  }
};

const generateCases = (
  dices: number[],
  state: SpaceProps[],
  start: SpaceProps
) => {
  cases = [];
  const cur = Array(25).fill(0);
  console.log("gen", dices, state);
  backTrack(dices, 0, state, cur, start);
  if (cases.length === 0) return null;
  return cases;
};

const selectCase = (
  dices: number[],
  state: SpaceProps[],
  start: SpaceProps
) => {
  console.log("sel");
  const cases = generateCases(dices, state, start);
  if (!cases) return null;

  // 각 케이스 검사하여 높은 점수값 갖는 케이스 (혹은 그러한 케이스들 중 랜덤 선택된) 결과 반환
  const selected = cases[0];
  return selected;
};

export { generateCases, selectCase };
