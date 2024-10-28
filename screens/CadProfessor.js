import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const CadProfessor = () => {
  return (
    <View style={styles.cadprofessor}>
      <Text style={[styles.cadastreSe, styles.cadastrarPosition]}>
        Cadastre-se
      </Text>
      <View style={[styles.txtboxserie, styles.txtboxnomeLayout]}>
        <View style={[styles.txtserieWrapper, styles.cadastrarFlexBox1]}>
          <Text style={styles.txtserie}>Senha</Text>
        </View>
      </View>
      <View style={[styles.txtboxcurso, styles.txtboxnomeLayout]}>
        <View style={[styles.txtserieWrapper, styles.cadastrarFlexBox1]}>
          <Text style={styles.txtserie}>Confirme a senha</Text>
        </View>
      </View>
      <View style={[styles.btncontinuar, styles.blocobrancoLayout]}>
        <View style={[styles.blocobranco, styles.retanguloBg]} />
        <Text style={[styles.cadastrar, styles.cadastrarFlexBox]}>
          Cadastrar
        </Text>
      </View>
      <View style={[styles.txtboxnome, styles.txtboxnomeLayout]}>
        <View style={[styles.txtserieWrapper, styles.cadastrarFlexBox1]}>
          <Text style={styles.txtserie}>Login</Text>
        </View>
      </View>
      <Text style={[styles.jTemContaContainer, styles.cadastrarFlexBox]}>
        <Text style={styles.jTemConta}>
          <Text style={styles.jTemConta1}>Já tem conta?</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.conecteSe1}>Conecte-se</Text>
        </Text>
      </Text>
      <View style={[styles.retangulo, styles.retanguloBg]} />
      <Image
        style={styles.imgcadprofIcon}
        contentFit="cover"
        source={require("../assets/imgcadprof.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cadastrarPosition: {
    left: "50%",
    top: "50%",
  },
  txtboxnomeLayout: {
    justifyContent: "center",
    width: 291,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    left: 34,
    padding: Padding.p_3xs,
    height: 50,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  cadastrarFlexBox1: {
    alignItems: "center",
    justifyContent: "center",
  },
  blocobrancoLayout: {
    width: 305,
    height: 50,
    left: "50%",
    top: "50%",
  },
  retanguloBg: {
    backgroundColor: Color.colorDeepskyblue,
    position: "absolute",
  },
  cadastrarFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  cadastreSe: {
    marginTop: -171,
    marginLeft: -146,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.beVietnamProSemiBold,
    color: Color.colorDeepskyblue,
    width: 312,
    height: 33,
    textAlign: "left",
    position: "absolute",
  },
  txtserie: {
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  txtserieWrapper: {
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  txtboxserie: {
    top: 367,
    padding: Padding.p_3xs,
  },
  txtboxcurso: {
    top: 438,
    padding: Padding.p_3xs,
  },
  blocobranco: {
    marginTop: -25,
    marginLeft: -152.5,
    width: 305,
    height: 50,
    left: "50%",
    top: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDeepskyblue,
  },
  cadastrar: {
    marginTop: -9.3,
    marginLeft: -126.4,
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorWhite,
    display: "flex",
    width: 249,
    height: 20,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    top: "50%",
  },
  btncontinuar: {
    marginTop: 208,
    marginLeft: -148,
    position: "absolute",
  },
  txtboxnome: {
    top: 296,
    padding: Padding.p_3xs,
  },
  jTemConta1: {
    color: Color.colorBlack,
  },
  text: {
    color: Color.colorSlateblue,
  },
  jTemConta: {
    fontFamily: FontFamily.interRegular,
  },
  conecteSe1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  jTemContaContainer: {
    top: 692,
    left: 28,
    fontSize: 14,
    width: 289,
    height: 50,
    textAlign: "center",
  },
  retangulo: {
    top: -106,
    left: -112,
    borderRadius: Border.br_87xl_5,
    width: 472,
    height: 243,
  },
  imgcadprofIcon: {
    height: "24.25%",
    width: "60.83%",
    top: "4.38%",
    right: "18.06%",
    bottom: "71.38%",
    left: "21.11%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cadprofessor: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default CadProfessor;
