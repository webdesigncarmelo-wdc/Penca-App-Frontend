import { View, Text, Pressable, Modal, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { getCompetitions } from "../services/competitionsApi.js";
import { getSeasonsByCompetition } from "../services/seasonsApi.js";
import { getChampionshipsBySeason } from "../services/championshipsApi.js"
import AppButton from "./ButtonCard.jsx";

export default function Selector() {

  const [visible, setVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);


  // datos seleccionados: inciiales o elegidos
  const [competition, setCompetition] = useState(null);

  const [season, setSeason] = useState(null);

  const [championship, setChampionship] = useState(null);

  // datos del getCompetitions
  const [competitions, setCompetitions] = useState([]);
  
  useEffect(() => {
      async function loadCompetitions() {
        try {
          const data = await getCompetitions();
          setCompetitions(data);
          setCompetition(data[0]);
        } catch (error) {
          console.error(error);
        }
      }
      loadCompetitions();
      
    }, 
  []);
  
  // datos del getSeasonsByCompetitions
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    if (!competition) return;

    async function loadSeasons() {
      try {
        const data = await getSeasonsByCompetition(competition._id);

        setSeasons(data);
        setSeason(data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    loadSeasons();
    }, [competition]);

  // datos del getChampionshipBySeason
  const [championships, setChampionships] = useState([]);

  useEffect(() => {
    if (!season) return;

    async function loadChampionships() {
      try {
        const data = await getChampionshipsBySeason(season._id);

        setChampionships(data);
        setChampionship(data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    loadChampionships();
    }, [season]);

  const toggleDropdown = (name) => {

    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }

  };

  

  return (
    <View style={styles.container}>

      {/* SELECTOR */}

      <Pressable
        style={styles.selector}
        onPress={() => setVisible(true)}
      >

        <View>

          <Text style={styles.title}>
             {competition?.name}
          </Text>

          <Text style={styles.subtitle}>
            {season?.name} • {championship?.name}
          </Text>

        </View>

        <Text style={styles.arrow}>
          ▼
        </Text>

      </Pressable>


      {/* PANEL */}

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >

        <View style={styles.modalOverlay}>

          <View style={styles.panel}>


            {/* COMPETITION */}

            <Text style={styles.label}>
              Competición
            </Text>

            <Pressable
              style={styles.dropdownHeader}
              onPress={() => toggleDropdown("competition")}
            >

              <Text>
                {competition?.name}
              </Text>

              <Text>
                {openDropdown === "competition" ? "▲" : "▼"}
              </Text>

            </Pressable>


            {openDropdown === "competition" && (

              <ScrollView
                style={styles.dropdown}
                showsVerticalScrollIndicator={false}
              >

                {competitions.map((item) => (

                  <Pressable
                    key={item._id}
                    style={styles.option}
                    onPress={() => {
                      setCompetition(item);
                      setOpenDropdown(null);
                    }}
                  >

                    <Text>
                      {item.name}
                    </Text>

                    {competition?._id === item._id && (
                      <Text>✓</Text>
                    )}

                  </Pressable>

                ))}

              </ScrollView>

            )}


            {/* SEASON */}

            <Text style={styles.label}>
              Temporada
            </Text>

            <Pressable
              style={styles.dropdownHeader}
              onPress={() => toggleDropdown("season")}
            >

              <Text>
                {season?.name}
              </Text>

              <Text>
                {openDropdown === "season" ? "▲" : "▼"}
              </Text>

            </Pressable>


            {openDropdown === "season" && (

              <ScrollView
                style={styles.dropdown}
                showsVerticalScrollIndicator={false}
              >

                {seasons.map((item) => (

                  <Pressable
                    key={item._id}
                    style={styles.option}
                    onPress={() => {
                      setSeason(item);
                      setOpenDropdown(null);
                    }}
                  >

                    <Text>
                      {item.name}
                    </Text>

                    {season?._id === item && (
                      <Text>✓</Text>
                    )}

                  </Pressable>

                ))}

              </ScrollView>

            )}


            {/* CHAMPIONSHIP */}

            <Text style={styles.label}>
              Campeonato
            </Text>

            <Pressable
              style={styles.dropdownHeader}
              onPress={() =>
                toggleDropdown("championship")
              }
            >

              <Text>
                {championship?.name}
              </Text>

              <Text>
                {openDropdown === "championship"
                  ? "▲"
                  : "▼"}
              </Text>

            </Pressable>


            {openDropdown === "championship" && (

              <ScrollView
                style={styles.dropdown}
                showsVerticalScrollIndicator={false}
              >

                {championships.map((item) => (

                  <Pressable
                    key={item._id}
                    style={styles.option}
                    onPress={() => {
                      setChampionship(item);
                      setOpenDropdown(null);
                    }}
                  >

                    <Text>
                      {item.name}
                    </Text>

                    {championship?._id === item && (
                      <Text>✓</Text>
                    )}

                  </Pressable>

                ))}

              </ScrollView>

            )}


            {/* BOTÓN */}

            <AppButton
              width={"50%"}
              onPress={() => {
                setOpenDropdown(null);
                setVisible(false);
              }}
            > Aplicar 
            </AppButton>

          </View>

        </View>

      </Modal>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    width: "100%",
    maxWidth: "50%",
  },

  selector: {
    width: 200,
    maxWidth: "50%",

    paddingVertical: 10,
    paddingHorizontal: 10,

    borderRadius: 50,

    backgroundColor: "#FFF",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 4,

    fontSize: 14,

    color: "#414141",
  },

  arrow: {
    marginLeft: 10,
    color: "#000000",
  },

  modalOverlay: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(0,0,0,0.35)",
  },

  panel: {
    width: "80%",
    maxWidth: 600,

    maxHeight: "70%",

    backgroundColor: "#FFF",

    borderRadius: 45,

    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 15,
    fontWeight: "700",

    marginTop: 15,
    marginBottom: 5,
  },

  dropdownHeader: {
    minHeight: 38,

    paddingHorizontal: 14,

    borderWidth: 1,
    borderColor: "#EEE",

    borderRadius: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dropdown: {
    maxHeight: 180,

    marginTop: 5,

    borderWidth: 1,
    borderColor: "#EEE",

    borderRadius: 12,
  },

  option: {
    minHeight: 38,

    paddingHorizontal: 14,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },

  button: {
    marginTop: 10,

    backgroundColor: "#1976D2",

    borderRadius: 50,

    paddingVertical: 10,

    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
  },

});