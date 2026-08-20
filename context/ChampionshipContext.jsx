import { createContext, useContext, useState } from "react";

const ChampionshipContext = createContext();

export function ChampionshipProvider({ children }) {

    const [competition, setCompetition] = useState(null);
    const [season, setSeason] = useState(null);
    const [championship, setChampionship] = useState(null);

    return (
        <ChampionshipContext.Provider
            value={{
                competition,
                season,
                championship,
                setCompetition,
                setSeason,
                setChampionship,
            }}
        >
            {children}
        </ChampionshipContext.Provider>
    );
}

export function useChampionship() {
    return useContext(ChampionshipContext);
}