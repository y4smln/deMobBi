import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const TelaCurso = () => {
  return (
    <View style={styles.telacurso}>
      <View style={[styles.btnds, styles.btndsPosition]}>
        <View style={[styles.blocoazulcad, styles.btndsPosition]} />
        <Text
          style={[
            styles.desenvolvimentoDeSistemas,
            styles.selecioneOCursoPosition,
          ]}
        >
          Desenvolvimento de Sistemas
        </Text>
      </View>
      <View style={[styles.btnadm, styles.btndsPosition]}>
        <View style={[styles.blocoazulcad, styles.btndsPosition]} />
        <Text
          style={[
            styles.desenvolvimentoDeSistemas,
            styles.selecioneOCursoPosition,
          ]}
        >
          Administração
        </Text>
      </View>
      <View style={[styles.btnlog, styles.btnlogSpaceBlock]}>
        <View style={[styles.blocoazulcad, styles.btndsPosition]} />
        <Text
          style={[
            styles.desenvolvimentoDeSistemas,
            styles.selecioneOCursoPosition,
          ]}
        >
          Logística
        </Text>
      </View>
      <Image
        style={styles.circuloIcon}
        contentFit="cover"
        source={require("../assets/circulo.png")}
      />
      <Image
        style={styles.imgselecioneIcon}
        contentFit="cover"
        source={require("../assets/imgselecione.png")}
      />
      <Text style={[styles.selecioneOCurso, styles.selecioneOCursoPosition]}>
        Selecione o curso
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btndsPosition: {
    height: 57,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  selecioneOCursoPosition: {
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  btnlogSpaceBlock: {
    marginLeft: -148,
    width: 296,
  },
  blocoazulcad: {
    marginTop: -28.5,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDeepskyblue,
    width: 295,
    left: "50%",
    top: "50%",
    height: 57,
    marginLeft: -147,
  },
  desenvolvimentoDeSistemas: {
    marginTop: -22.5,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    marginLeft: -148,
    width: 296,
  },
  btnds: {
    marginTop: 79,
    width: 296,
    height: 57,
    left: "50%",
    top: "50%",
    marginLeft: -147,
  },
  btnadm: {
    marginTop: -30,
    marginLeft: -149,
    width: 296,
    height: 57,
    left: "50%",
    top: "50%",
  },
  btnlog: {
    marginTop: 182,
    height: 57,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  circuloIcon: {
    top: -151,
    left: -22,
    width: 404,
    height: 346,
    position: "absolute",
  },
  imgselecioneIcon: {
    top: 39,
    left: 46,
    width: 288,
    height: 168,
    position: "absolute",
    overflow: "hidden",
  },
  selecioneOCurso: {
    marginTop: -89,
    marginLeft: -180,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.beVietnamProSemiBold,
    color: Color.colorBlack,
    width: 360,
    height: 33,
  },
  telacurso: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default TelaCurso;
