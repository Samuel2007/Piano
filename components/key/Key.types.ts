export type NoteType =
  | "C3"
  | "Db3"
  | "D3"
  | "Eb3"
  | "E3"
  | "F3"
  | "Gb3"
  | "G3"
  | "Ab3"
  | "A3"
  | "Bb3"
  | "B3"
  | "C4"
  | "Db4"
  | "D4"
  | "Eb4"
  | "E4"
  | "F4"
  | "Gb4"
  | "G4"
  | "Ab4"
  | "A4"
  | "Bb4"
  | "B4"
  | "C5";

export type KeyProps = {
  note: NoteType;
  index: number;
  key: string;
};
