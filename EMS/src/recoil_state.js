import { atom } from "recoil";

export const selectedIndexState = atom({
  key: "selectedIndexList",
  default: 0,
});

export const timetableState = atom({
  key: "timetableState",
  default: [],
});
