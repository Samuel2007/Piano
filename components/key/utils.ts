import { NoteType } from "./Key.types";

export const getNotePath = (note: NoteType) => {
  switch (note) {
    case "C":
      return require(`../../assets/pianoNotes/C3.mp3`);
    case "Db":
      return require(`../../assets/pianoNotes/Db3.mp3`);
    case "D":
      return require(`../../assets/pianoNotes/D3.mp3`);
    case "Eb":
      return require(`../../assets/pianoNotes/Eb3.mp3`);
    case "E":
      return require(`../../assets/pianoNotes/E3.mp3`);
    case "F":
      return require(`../../assets/pianoNotes/F3.mp3`);
    case "Gb":
      return require(`../../assets/pianoNotes/Gb3.mp3`);
    case "G":
      return require(`../../assets/pianoNotes/G3.mp3`);
    case "Ab":
      return require(`../../assets/pianoNotes/Ab3.mp3`);
    case "A":
      return require(`../../assets/pianoNotes/A3.mp3`);
    case "Bb":
      return require(`../../assets/pianoNotes/Bb3.mp3`);
    case "B":
      return require(`../../assets/pianoNotes/B3.mp3`);
    case "C":
      return require(`../../assets/pianoNotes/C4.mp3`);

    default:
      return require(`../../assets/pianoNotes/E3.mp3`);
  }
};

export function getTopOffeset(isBlackKey: boolean, index: number) {
  if (isBlackKey) {
    const baseOffset = 75;
    const spacing = 50;
    let adjustedIndex = index;
    if (index > 5) adjustedIndex += 1;
    if (index > 10) adjustedIndex += 1;

    return baseOffset + (adjustedIndex - 1) * spacing;
  }
  return 1000;
}
