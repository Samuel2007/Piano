import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface OctaveType {
  currentOctave: number;
  octaveAmount: number;
  setOctaveAmount: (ocatve: number) => void;
}

// Create context with initial values
// const OctaveAmountContext = createContext<OctaveType>({
//   octaves: [1, 2],
//   octaveAmount: 1,
//   setoctaveAmount: () => {},
// });

// Create context with initial values
const OctaveContext = createContext<OctaveType>({
  // octaves: [1, 2, 3, 4, 5, 6, 7, 8],
  currentOctave: 3,
  octaveAmount: 1,
  setOctaveAmount: () => {},
  // setoctaveAmount: () => {},
});

// Create a provider component
interface MyContextProviderProps {
  children: ReactNode;
}

export const OctaveContextProvider = ({ children }: MyContextProviderProps) => {
  const [octaveAmount, setOctaveAmount] = useState<number>(1);

  const currentOctave = 3;
  const contextValue: OctaveType = {
    currentOctave,
    octaveAmount,
    setOctaveAmount,
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
