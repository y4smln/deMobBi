import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CadAluno = () => {
  return (
    <View style={styles.cadaluno}>
      <View style={styles.bannerazul} />
      <Image
        style={styles.imgcadIcon}
        contentFit="cover"
        source={require("../assets/imgcad.png")}
      />
      <View style={styles.retangulo} />
      <View style={[styles.btncontinuar, styles.blocobrancoPosition]}>
        <View style={[styles.blocobranco, styles.blocobrancoPosition]} />
        <Text style={styles.continuar}>Continuar</Text>
      </View>
      <Text style={styles.cadastrarAluno}>Cadastrar aluno</Text>
      <View style={[styles.txtboxserie, styles.txtboxserieSpaceBlock]}>
        <View style={[styles.txtserieWrapper, styles.txtboxserieSpaceBlock]}>
          <Text style={styles.txtserie}>Selecione a série do aluno</Text>
        </View>
      </View>
      <View style={[styles.txtboxserie1, styles.txtboxserieSpaceBlock]}>
        <View style={[styles.txtserieWrapper, styles.txtboxserieSpaceBlock]}>
          <Text style={styles.txtserie}>Nome do aluno</Text>
        </View>
      </View>
      <View style={[styles.txtboxcurso, styles.txtboxserieSpaceBlock]}>
        <View style={[styles.txtserieWrapper, styles.txtboxserieSpaceBlock]}>
          <Text style={styles.txtserie}>Selecione o curso do aluno</Text>
        </View>
      </View>
      <View style={[styles.txtboxserie2, styles.txtboxserieLayout]}>
        <View style={[styles.txtserieWrapper, styles.txtboxserieSpaceBlock]}>
          <Text style={styles.txtserie}>Selecione a série do aluno</Text>
        </View>
      </View>
      <View style={[styles.txtboxserie3, styles.txtboxserieLayout]}>
        <View style={[styles.txtserieWrapper, styles.txtboxserieSpaceBlock]}>
          <Text style={styles.txtserie}>Nome do aluno</Text>
        </View>
      </View>
      <View style={[styles.txtboxcurso1, styles.txtboxserieLayout]}>
        <View style={[styles.txtserieWrapper, styles.txtboxserieSpaceBlock]}>
          <Text style={styles.txtserie}>Selecione o curso do aluno</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blocobrancoPosition: {
    height: 35,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  txtboxserieSpaceBlock: {
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  txtboxserieLayout: {
    left: 25,
    padding: Padding.p_3xs,
    width: 307,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    justifyContent: "center",
    height: 35,
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  bannerazul: {
    top: 0,
    left: 0,
    width: 360,
    height: 151,
    backgroundColor: Color.colorDeepskyblue,
    position: "absolute",
  },
  imgcadIcon: {
    top: 21,
    left: 227,
    width: 121,
    height: 109,
    position: "absolute",
    overflow: "hidden",
  },
  retangulo: {
    top: 134,
    left: 14,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20.5,
    elevation: 20.5,
    shadowOpacity: 1,
    width: 326,
    height: 607,
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  blocobranco: {
    marginTop: -17.65,
    marginLeft: -152.5,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDeepskyblue,
  },
  continuar: {
    marginTop: -6.55,
    marginLeft: -126.4,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    textAlign: "center",
    display: "flex",
    width: 249,
    height: 14,
    justifyContent: "center",
    alignItems: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  btncontinuar: {
    marginTop: 265,
    marginLeft: -155,
  },
  cadastrarAluno: {
    marginTop: -366,
    marginLeft: -141,
    fontSize: FontSize.size_8xl,
    fontWeight: "900",
    fontFamily: FontFamily.beVietnamProBlack,
    width: 188,
    height: 33,
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    top: "50%",
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
    alignItems: "center",
  },
  txtboxserie: {
    top: 247,
    width: 307,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    left: 27,
    padding: Padding.p_3xs,
    height: 35,
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  txtboxserie1: {
    top: 175,
    width: 307,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    left: 27,
    padding: Padding.p_3xs,
    height: 35,
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  txtboxcurso: {
    top: 319,
    width: 307,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    left: 27,
    padding: Padding.p_3xs,
    height: 35,
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  txtboxserie2: {
    top: 462,
  },
  txtboxserie3: {
    top: 390,
  },
  txtboxcurso1: {
    top: 534,
  },
  cadaluno: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default CadAluno;
