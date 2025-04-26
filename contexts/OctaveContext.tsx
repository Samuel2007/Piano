import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface OctaveType {
  currentOctave: number;
  octaveAmount: number;
  setOctaveAmount: (ocatve: number) => void;
  setCurrentOctave: (octave: number) => void;
  octaves: number[];
}
const octaves = [0, 1, 2, 3, 4, 5, 6, 7]; // Define the octaves

const OctaveContext = createContext<OctaveType>({
  octaves,
  currentOctave: 3,
  octaveAmount: 1,
  setOctaveAmount: () => {},
  setCurrentOctave: () => {},
});

// Create a provider component
interface MyContextProviderProps {
  children: ReactNode;
}

export const OctaveContextProvider = ({ children }: MyContextProviderProps) => {
  const [octaveAmount, setOctaveAmount] = useState<number>(1);
  const [currentOctave, setCurrentOctave] = useState<number>(3);

  const contextValue: OctaveType = {
    octaves,
    currentOctave,
    octaveAmount,
    setOctaveAmount,
    setCurrentOctave,
  };

  return (
    <OctaveContext.Provider value={contextValue}>
      {children}
    </OctaveContext.Provider>
  );
};

// Create a custom hook to use the context
export const useOctaveContext = () => {
  const context = useContext(OctaveContext);
  if (!context) {
    throw new Error("useOctaveContext must be used within a OctaveProvider");
  }
  return context;
};
