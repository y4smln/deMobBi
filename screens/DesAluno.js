import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const DesAluno = () => {
  return (
    <View style={styles.desaluno}>
      <View style={[styles.txtboxserie, styles.txtboxserieLayout]}>
        <View style={[styles.txtserieWrapper, styles.continuarFlexBox]}>
          <Text style={styles.txtserie}>Selecione a série do aluno</Text>
        </View>
      </View>
      <View style={[styles.txtboxserie1, styles.txtboxserieLayout]}>
        <View style={[styles.txtserieWrapper, styles.continuarFlexBox]}>
          <Text style={styles.txtserie}>Nome do aluno</Text>
        </View>
      </View>
      <View style={[styles.txtboxcurso, styles.txtboxcursoLayout]}>
        <View style={[styles.txtserieWrapper, styles.continuarFlexBox]}>
          <Text style={styles.txtserie}>Selecione o curso do aluno</Text>
        </View>
      </View>
      <View style={[styles.txtboxcurso1, styles.txtboxcursoLayout]}>
        <View style={[styles.txtserieWrapper, styles.continuarFlexBox]}>
          <Text style={styles.txtserie}>Código do aluno</Text>
        </View>
      </View>
      <View style={styles.btncontinuar}>
        <View style={styles.blocobranco} />
        <Text style={[styles.continuar, styles.continuarPosition]}>
          Continuar
        </Text>
      </View>
      <View style={[styles.retangulo, styles.retanguloLayout]} />
      <View style={[styles.retangulo1, styles.retanguloLayout]} />
      <View style={[styles.retangulo2, styles.retanguloLayout]} />
      <Image
        style={styles.imgdesIcon}
        contentFit="cover"
        source={require("../assets/imgdes.png")}
      />
      <Text style={[styles.desvincularAluno, styles.continuarPosition]}>
        Desvincular aluno
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txtboxserieLayout: {
    justifyContent: "center",
    height: 35,
    width: 307,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    padding: Padding.p_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  continuarFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  txtboxcursoLayout: {
    left: 27,
    padding: Padding.p_3xs,
    justifyContent: "center",
    height: 35,
    width: 307,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  continuarPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  retanguloLayout: {
    borderRadius: Border.br_87xl_5,
    backgroundColor: Color.colorDeepskyblue,
    position: "absolute",
  },
  txtserie: {
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorDimgray,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  txtserieWrapper: {
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  txtboxserie: {
    top: 433,
    left: 29,
    padding: Padding.p_3xs,
  },
  txtboxserie1: {
    top: 360,
    left: 24,
    padding: Padding.p_3xs,
  },
  txtboxcurso: {
    top: 506,
  },
  txtboxcurso1: {
    top: 579,
  },
  blocobranco: {
    marginTop: -17.65,
    marginLeft: -152.5,
    backgroundColor: Color.colorDeepskyblue,
    width: 305,
    left: "50%",
    top: "50%",
    height: 35,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  continuar: {
    marginTop: -6.55,
    marginLeft: -126.4,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    width: 249,
    height: 14,
    fontSize: FontSize.size_base,
    alignItems: "center",
    justifyContent: "center",
  },
  btncontinuar: {
    marginTop: 277,
    marginLeft: -156,
    width: 305,
    left: "50%",
    top: "50%",
    height: 35,
    position: "absolute",
  },
  retangulo: {
    top: -88,
    left: 194,
    width: 105,
    height: 302,
  },
  retangulo1: {
    top: -25,
    left: -34,
    width: 370,
    height: 176,
  },
  retangulo2: {
    top: -75,
    left: 278,
    width: 102,
    height: 336,
  },
  imgdesIcon: {
    top: 57,
    left: 53,
    width: 254,
    height: 187,
    position: "absolute",
    overflow: "hidden",
  },
  desvincularAluno: {
    marginTop: -100,
    marginLeft: -147,
    fontSize: FontSize.size_8xl,
    fontWeight: "900",
    fontFamily: FontFamily.beVietnamProBlack,
    color: Color.colorBlack,
    width: 289,
    height: 33,
    textAlign: "left",
  },
  desaluno: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default DesAluno;
