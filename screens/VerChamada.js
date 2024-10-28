import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";

const VerChamada = () => {
  return (
    <View style={styles.verchamada}>
      <View style={[styles.bannerazul, styles.bannerazulLayout]} />
      <Image
        style={[styles.imgchamadaIcon, styles.bannerazulLayout]}
        contentFit="cover"
        source={require("../assets/imgchamada.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerazulLayout: {
    height: 151,
    position: "absolute",
  },
  bannerazul: {
    top: -14,
    left: 0,
    backgroundColor: Color.colorDeepskyblue,
    width: 360,
  },
  imgchamadaIcon: {
    top: 51,
    left: 25,
    width: 162,
    overflow: "hidden",
  },
  verchamada: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default VerChamada;
