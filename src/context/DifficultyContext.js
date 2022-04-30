import React, { createContext, useState } from 'react'

export const DiffiContext = createContext();

export function DifficultyContext({ children }) {
    const [difficulty, setDifficulty] = useState("Fácil");
    return (
        <DiffiContext.Provider
            value={{
                difficulty,
                setDifficulty
            }}
        >
            {children}
        </DiffiContext.Provider>
    )
}