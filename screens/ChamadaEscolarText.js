import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ChamadaEscolarText = () => {
  return <Text style={styles.chamadaEscolar}>Chamada escolar</Text>;
};

const styles = StyleSheet.create({
  chamadaEscolar: {
    fontSize: FontSize.size_8xl,
    fontWeight: "900",
    fontFamily: FontFamily.beVietnamProBlack,
    color: Color.colorWhite,
    textAlign: "left",
    width: 204,
    height: 33,
  },
});

export default ChamadaEscolarText;
