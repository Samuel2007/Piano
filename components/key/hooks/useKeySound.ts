import { useEffect, useRef, useState } from "react";
import { getNotePath } from "../utils";
import { Audio } from "expo-av";
import { NoteType } from "../Key.types";

const VOLUME_DOWN_INTERVAL = 100;
const volumeArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export const useKeySound = (note: NoteType) => {
  const [sound, setSound] = useState<Audio.Sound>();
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const setKeySound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(getNotePath(note), {
        shouldPlay: false,
        progressUpdateIntervalMillis: 0,
      });
      setSound(sound);
    } catch (error) {
      console.error("Error loading sound:", error);
    }
  };

  useEffect(() => {
    setKeySound();
    return () => {
      sound?.unloadAsync();
    };
  }, []);

  async function playSound() {
    try {
      if (sound) {
        timeoutsRef.current.forEach((timeout) => {
          clearTimeout(timeout);
        });
        await sound.stopAsync();
        await sound?.setVolumeAsync(1);
        await sound.playAsync();
      }
    } catch (error) {
      console.error("Error playing sound:", error);
      await setKeySound();
    }
  }

  const setVolumeDown = () => {
    timeoutsRef.current = volumeArray.map((volume, index) => {
      return setTimeout(() => {
        sound?.setVolumeAsync(index / 11);
      }, VOLUME_DOWN_INTERVAL * volume);
    });
  };

  return { playSound, setVolumeDown };
};
