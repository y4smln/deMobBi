import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const UpAluno = () => {
  return (
    <View style={styles.upaluno}>
      <View style={[styles.bannerazul, styles.formreLayout]} />
      <Image
        style={styles.imgupIcon}
        contentFit="cover"
        source={require("../assets/imgup.png")}
      />
      <View style={[styles.formre, styles.formreLayout]} />
      <Text style={[styles.atualizarAluno, styles.continuarPosition]}>
        Atualizar aluno
      </Text>
      <View style={[styles.txtboxserie, styles.txtboxserieLayout1]}>
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
      <View style={[styles.txtboxserie2, styles.txtboxserieLayout1]}>
        <View style={[styles.txtserieWrapper, styles.continuarFlexBox]}>
          <Text style={styles.txtserie}>Selecione a série do aluno</Text>
        </View>
      </View>
      <View style={[styles.txtboxserie3, styles.txtboxserieLayout]}>
        <View style={[styles.txtserieWrapper, styles.continuarFlexBox]}>
          <Text style={styles.txtserie}>Nome do aluno</Text>
        </View>
      </View>
      <View style={[styles.txtboxcurso1, styles.txtboxcursoLayout]}>
        <View style={[styles.txtserieWrapper, styles.continuarFlexBox]}>
          <Text style={styles.txtserie}>Selecione o curso do aluno</Text>
        </View>
      </View>
      <View style={[styles.btncontinuar, styles.blocobrancoPosition]}>
        <View style={[styles.blocobranco, styles.blocobrancoPosition]} />
        <Text style={[styles.continuar, styles.continuarFlexBox]}>
          Continuar
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formreLayout: {
    width: 360,
    position: "absolute",
  },
  continuarPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  txtboxserieLayout1: {
    justifyContent: "center",
    height: 35,
    width: 307,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    left: 29,
    padding: Padding.p_3xs,
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  continuarFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  txtboxserieLayout: {
    left: 24,
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
  blocobrancoPosition: {
    width: 305,
    height: 35,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  bannerazul: {
    top: 0,
    left: -2,
    height: 170,
    backgroundColor: Color.colorDeepskyblue,
  },
  imgupIcon: {
    top: 16,
    left: 86,
    width: 184,
    height: 146,
    position: "absolute",
    overflow: "hidden",
  },
  formre: {
    top: 159,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20.5,
    elevation: 20.5,
    shadowOpacity: 1,
    height: 656,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    width: 360,
  },
  atualizarAluno: {
    marginTop: -206,
    marginLeft: -141,
    fontSize: FontSize.size_8xl,
    fontWeight: "900",
    fontFamily: FontFamily.beVietnamProBlack,
    color: Color.colorBlack,
    width: 289,
    height: 33,
    textAlign: "left",
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
    top: 324,
    padding: Padding.p_3xs,
  },
  txtboxserie1: {
    top: 251,
  },
  txtboxcurso: {
    top: 397,
  },
  txtboxserie2: {
    top: 537,
    padding: Padding.p_3xs,
  },
  txtboxserie3: {
    top: 464,
  },
  txtboxcurso1: {
    top: 610,
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
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    width: 249,
    height: 14,
    fontSize: FontSize.size_base,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  btncontinuar: {
    marginTop: 277,
    marginLeft: -156,
  },
  upaluno: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default UpAluno;
