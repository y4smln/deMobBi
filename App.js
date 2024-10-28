const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import DesAluno from "./screens/DesAluno";
import ChamadaEscolarText from "./screens/ChamadaEscolarText";
import TelaSerie from "./screens/TelaSerie";
import Slice from "./screens/Slice";
import UpAluno from "./screens/UpAluno";
import VerChamada from "./screens/VerChamada";
import CadAluno from "./screens/CadAluno";
import CadProfessor from "./screens/CadProfessor";
import TelaCurso from "./screens/TelaCurso";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "BeVietnamPro-Regular": require("./assets/fonts/BeVietnamPro-Regular.ttf"),
    "BeVietnamPro-SemiBold": require("./assets/fonts/BeVietnamPro-SemiBold.ttf"),
    "BeVietnamPro-Bold": require("./assets/fonts/BeVietnamPro-Bold.ttf"),
    "BeVietnamPro-Black": require("./assets/fonts/BeVietnamPro-Black.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="DesAluno"
              component={DesAluno}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChamadaEscolarText"
              component={ChamadaEscolarText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaSerie"
              component={TelaSerie}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Slice"
              component={Slice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpAluno"
              component={UpAluno}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerChamada"
              component={VerChamada}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadAluno"
              component={CadAluno}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadProfessor"
              component={CadProfessor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaCurso"
              component={TelaCurso}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
