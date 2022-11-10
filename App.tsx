import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StatusBar, Platform } from "react-native";
import { useTheme, ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { Cairo_900Black } from "@expo-google-fonts/cairo";
import theme from "./src/styles/theme";
import { AppRoutes } from "./src/routes/app.routes";

const ApplicationContent = () => {
  const { colors: colorsOfTheme } = useTheme();

  const [fontsLoaded] = useFonts({
    Cairo_900Black,
    SuissesScreenBold: require("./assets/fonts/SuisseScreen-Bold.ttf"),
    SuissesScreenMedium: require("./assets/fonts/SuisseScreen-Medium.ttf"),
    SuissesScreenSemiBold: require("./assets/fonts/SuisseScreen-SemiBold.ttf"),
  });

  return (
    <>
      {fontsLoaded && (
        <>
          <SafeAreaView
            style={{ flex: 0, backgroundColor: colorsOfTheme.background }}
          />

          <SafeAreaView
            style={{
              flex: 1,
              paddingVertical: Platform.OS === "ios" ? 16 : 0,
              backgroundColor: colorsOfTheme.background,
            }}
          >
            <StatusBar barStyle="light-content" backgroundColor={"#131418"} />
            <AppRoutes />
          </SafeAreaView>
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ApplicationContent />
      </ThemeProvider>
    </>
  );
};

export default App;
