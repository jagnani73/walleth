import { createContext, ReactNode, useContext, useState } from "react";

interface DevNotesContextType {
  devNotes: boolean;
  setDevNotes: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DevNotesProviderProps {
  children: ReactNode;
}

const DevNotesContext = createContext<DevNotesContextType>(
  {} as DevNotesContextType
);

export const DevNotesProvider: React.FC<DevNotesProviderProps> = ({
  children,
}) => {
  const [devNotes, setDevNotes] = useState<boolean>(false);

  return (
    <DevNotesContext.Provider
      value={{
        devNotes: devNotes,
        setDevNotes: setDevNotes,
      }}
    >
      {children}
    </DevNotesContext.Provider>
  );
};

export const useDevNotes = () => useContext(DevNotesContext);
