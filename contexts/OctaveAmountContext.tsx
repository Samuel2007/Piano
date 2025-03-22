import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface OctaveAmountType {
  octaves: number[];
  currentOctave: number;
  setCurrentOctave: (ocatve: number) => void;
}

// Create context with initial values
const OctaveAmountContext = createContext<OctaveAmountType>({
  octaves: [1, 2],
  currentOctave: 1,
  setCurrentOctave: () => {},
});

// Create a provider component
interface MyContextProviderProps {
  children: ReactNode;
}

export const OctaveAmountContextProvider = ({
  children,
}: MyContextProviderProps) => {
  const [currentOctave, setCurrentOctave] = useState<number>(1);
  const octaves = [1, 2];
  const contextValue: OctaveAmountType = {
    octaves,
    currentOctave,
    setCurrentOctave,
  };

  return (
    <OctaveAmountContext.Provider value={contextValue}>
      {children}
    </OctaveAmountContext.Provider>
  );
};

// Create a custom hook to use the context
export const useOctaveAmountContext = () => {
  const context = useContext(OctaveAmountContext);
  if (!context) {
    throw new Error("useMyContext must be used within a OctaveAmountProvider");
  }
  return context;
};
