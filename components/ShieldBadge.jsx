import { View, Text, Image, StyleSheet } from "react-native";

export default function ShieldBadge({ image, size = 60 }) {
  return (
    <View
  style={[
    styles.container,
    {
      width: size,
      height: size,
    },
  ]}
>
  <View
    style={[
      styles.logoContainer,
      {
        width: size * 0.9,
        height: size * 0.9,
        borderRadius: size * 0.45,
      },
    ]}
  >
    <Image
      source={image}
      resizeMode="contain"
      style={{
        width: size * 0.8,
        height: size * 0.8,
      }}
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

    borderColor: '#000000',
    borderWidth: 1,

    borderRadius: 50,

    backgroundColor: "#ffffff",
    elevation: 0,
  }
});