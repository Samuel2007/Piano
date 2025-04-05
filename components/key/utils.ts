import { NoteType } from "./Key.types";

export const getNotePath = (note: NoteType) => {
  switch (note) {
    case "C3":
      return require(`../../assets/pianoNotes/C3.mp3`);
    case "Db3":
      return require(`../../assets/pianoNotes/Db3.mp3`);
    case "D3":
      return require(`../../assets/pianoNotes/D3.mp3`);
    case "Eb3":
      return require(`../../assets/pianoNotes/Eb3.mp3`);
    case "E3":
      return require(`../../assets/pianoNotes/E3.mp3`);
    case "F3":
      return require(`../../assets/pianoNotes/F3.mp3`);
    case "Gb3":
      return require(`../../assets/pianoNotes/Gb3.mp3`);
    case "G3":
      return require(`../../assets/pianoNotes/G3.mp3`);
    case "Ab3":
      return require(`../../assets/pianoNotes/Ab3.mp3`);
    case "A3":
      return require(`../../assets/pianoNotes/A3.mp3`);
    case "Bb3":
      return require(`../../assets/pianoNotes/Bb3.mp3`);
    case "B3":
      return require(`../../assets/pianoNotes/B3.mp3`);
    case "C4":
      return require(`../../assets/pianoNotes/C4.mp3`);
    case "Db4":
      return require(`../../assets/pianoNotes/Db4.mp3`);
    case "D4":
      return require(`../../assets/pianoNotes/D4.mp3`);
    case "Eb4":
      return require(`../../assets/pianoNotes/Eb4.mp3`);
    case "E4":
      return require(`../../assets/pianoNotes/E4.mp3`);
    case "F4":
      return require(`../../assets/pianoNotes/F4.mp3`);
    case "Gb4":
      return require(`../../assets/pianoNotes/Gb4.mp3`);
    case "G4":
      return require(`../../assets/pianoNotes/G4.mp3`);
    case "Ab4":
      return require(`../../assets/pianoNotes/Ab4.mp3`);
    case "A4":
      return require(`../../assets/pianoNotes/A4.mp3`);
    case "Bb4":
      return require(`../../assets/pianoNotes/Bb4.mp3`);
    case "B4":
      return require(`../../assets/pianoNotes/B4.mp3`);
    case "C5":
      return require(`../../assets/pianoNotes/C5.mp3`);

    default:
      return require(`../../assets/pianoNotes/E3.mp3`);
  }
};

export function getTopOffeset(
  isBlackKey: boolean,
  index: number,
  hasTwoOctaves: boolean
) {
  if (isBlackKey) {
    const baseOffset = hasTwoOctaves ? 75 / 2 : 75;
    const spacing = hasTwoOctaves ? 50 / 2 : 50;
    let adjustedIndex = index;
    if (index > 5) adjustedIndex += 1;
    if (index > 10) adjustedIndex += 1;
    if (hasTwoOctaves) {
      if (index > 15) adjustedIndex += 1;
    }
    return baseOffset + (adjustedIndex - 1) * spacing;
  }
  return 1000;
}
