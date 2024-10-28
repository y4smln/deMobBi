import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const TelaSerie = () => {
  return (
    <View style={styles.telaserie}>
      <View style={[styles.btn2, styles.btnPosition]}>
        <View style={[styles.blocoazulcad, styles.btnPosition]} />
        <Text style={[styles.ano, styles.anoPosition]}>2º Ano</Text>
      </View>
      <View style={[styles.btn1, styles.btnPosition]}>
        <View style={[styles.blocoazulcad, styles.btnPosition]} />
        <Text style={[styles.ano, styles.anoPosition]}>1º Ano</Text>
      </View>
      <View style={[styles.btn3, styles.btnPosition]}>
        <View style={[styles.blocoazulcad, styles.btnPosition]} />
        <Text style={[styles.ano, styles.anoPosition]}>3º Ano</Text>
      </View>
      <Image
        style={styles.circuloIcon}
        contentFit="cover"
        source={require("../assets/circulo.png")}
      />
      <Text style={[styles.selecioneASrie, styles.anoPosition]}>
        Selecione a série
      </Text>
      <Image
        style={styles.imgselecioneIcon}
        contentFit="cover"
        source={require("../assets/imgselecione.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnPosition: {
    height: 57,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  anoPosition: {
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  blocoazulcad: {
    marginTop: -28.5,
    marginLeft: -147,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDeepskyblue,
    width: 295,
  },
  ano: {
    marginTop: -22.5,
    marginLeft: -148,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    width: 296,
  },
  btn2: {
    marginTop: 77,
    marginLeft: -140,
    width: 296,
  },
  btn1: {
    marginTop: -32,
    marginLeft: -142,
    width: 296,
  },
  btn3: {
    marginTop: 180,
    marginLeft: -141,
    width: 296,
  },
  circuloIcon: {
    top: -145,
    left: -22,
    width: 404,
    height: 346,
    position: "absolute",
  },
  selecioneASrie: {
    marginTop: -91,
    marginLeft: -180,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.beVietnamProSemiBold,
    color: Color.colorBlack,
    width: 360,
    height: 33,
  },
  imgselecioneIcon: {
    top: 45,
    left: 46,
    width: 288,
    height: 168,
    position: "absolute",
    overflow: "hidden",
  },
  telaserie: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default TelaSerie;
