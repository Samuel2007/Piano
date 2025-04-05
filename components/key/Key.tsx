import { View } from "react-native";
import React, { useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { getTopOffeset } from "./utils";
import { KeyProps } from "./Key.types";
import { getStyles } from "./Key.styles";
import { useKeySound } from "./hooks/useKeySound";
import { useOctaveAmountContext } from "../../contexts/OctaveAmountContext";

const Key = ({ note, index }: KeyProps) => {
  const isBlackKey = note.includes("b");
  const [activeTouches, setActiveTouches] = useState<{
    [key: string]: boolean;
  }>({});
  const { currentOctave } = useOctaveAmountContext();
  const hasTwoOctaves = currentOctave === 2;

  const styles = getStyles(getTopOffeset(isBlackKey, index, hasTwoOctaves));

  const { playSound, setVolumeDown } = useKeySound(note);

  const handleTouches = (event: any, isPressing: boolean) => {
    const touches = event.allTouches.map((touch: any) => ({
      id: touch.id,
      x: touch.absoluteX,
      y: touch.absoluteY,
    }));
    const updatedTouches: { [key: string]: boolean } = {};
    touches.forEach(({ id }: { id: string }) => {
      updatedTouches[id] = true;
      if (isPressing && !activeTouches[id]) {
        playSound();
      }
    });

    setActiveTouches(isPressing ? updatedTouches : {});
  };

  const gesture = Gesture.Pan()
    .onTouchesDown((event) => handleTouches(event, true))
    .onTouchesMove((event) => {
      handleTouches(event, true);
    })
    .onTouchesUp((event) => {
      setVolumeDown();
      handleTouches(event, false);
      setActiveTouches({});
    });

  const keyStyles = isBlackKey
    ? [styles.blackKey, currentOctave === 2 && styles.twoOcatvesBlackKey]
    : [styles.whiteKey, currentOctave === 2 && styles.twoOcatvesWhiteKey];

  return (
    <GestureDetector gesture={gesture}>
      <View
        style={[
          ...keyStyles,
          Object.keys(activeTouches).length > 0 && styles.pressedKey,
        ]}
        testID={note}
      />
    </GestureDetector>
  );
};

export default Key;
