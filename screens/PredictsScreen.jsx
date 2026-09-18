import { FlatList, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getMatches } from "../services/matchesApi";
import { getPredicts } from "../services/predictsApi";
import PredictCard from "../components/PredictCard";
import { useChampionship } from "../context/ChampionshipContext";
import { useUser } from "@clerk/expo";

export default function PredictsScreen() {

    const [matches, setMatches] = useState([]);
    const [predicts, setPredicts] = useState([]);
    
    const { championship } = useChampionship();
    const { user } = useUser();

    // cargo los partidos
    useEffect(() => {
        if (!championship) return;
        async function loadMatches() {
            try {
                const data = await getMatches(
                    championship._id,
                    {
                        status: "pending"
                    }
                );
                setMatches(data);
            } catch (error) {
                console.error(error);
            }
        }
        loadMatches();
    }, [championship]);


    // cargo las predicciones
    useEffect(() => {

        if(!user) return
        
        async function loadPredicts() {
            try {
                const data = await getPredicts();
                setPredicts(data);
            } catch (error) {
                console.error(error);
            }
        }
        loadPredicts();
    }, [user, matches]);


    function linker(matchId, predicts) {
        return predicts.find(
            predict => predict.match === matchId
        );
    }

    const sortedMatches = [...matches].sort((a, b) => {
        return new Date(a.date) - new Date(b.date);

    });


    return (
        <View style={styles.container}>
            <FlatList
                data={sortedMatches}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <PredictCard
                        match={item}
                        predict={linker(item._id, predicts)}
                    />
                )}
            />
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,0.00)",
    },

});