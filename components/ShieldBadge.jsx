import { View, Text, Image, StyleSheet } from "react-native";

export default function ShieldBadge({ image, size = 60 }) {
  return (
    <View style={styles.container}
          style={{ 
            width: size, 
            height: size }}>
      <View style={styles.logoContainer}>
        <Image source={image}
          resizeMode="contain"
          style={{
            width: size * 0.8,
            height: size * 0.8,}}
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

    borderColor: '#16235f',
    borderWidth: 3,

    borderRadius: 50,

    backgroundColor: "#ffffff",
    elevation: 8,
  }
});