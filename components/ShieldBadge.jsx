import { View, Text, Image, StyleSheet } from "react-native";

export default function ShieldBadge({ image }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image}
          source={image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },

  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',

    width: 60,
    height: 60,

    borderColor: '#16235f',
    borderWidth: 3,

    borderRadius: 50,

    backgroundColor: "#ffffff",
    elevation: 8,
  },

  image: {
    width: 60,
    height: 60,
  }
});