import React, { ReactElement } from "react";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeCard from "../pages/Home/Card/HomeCard";
import HomeQuestions from "../pages/Home/Questions/HomeQuestions";
import HomeCalendar from "../pages/Home/Calendar/HomeCalendar";
import HomeStatistic from "../pages/Home/Statistic/HomeStatistic";
import HomeProfile from "../pages/Home/Profile/HomeProfile";

interface Color {
  color: string;
}

function Tabs(): ReactElement {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 90,
          backgroundColor: "#1F1F23",
          alignItems: "center",
          padding: 20,
          borderTopColor: "transparent",
        },

        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Cards"
        component={HomeCard}
        options={{
          tabBarLabelStyle: {
            fontSize: 13,
            paddingBottom: 20,
          },

          tabBarIcon: ({ color }: Color) => (
            <AntDesign name="appstore-o" size={26} color={color} />
          ),
          tabBarActiveTintColor: "#09CBDA",
          tabBarInactiveTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Questions"
        component={HomeQuestions}
        options={{
          tabBarLabel: "Questões",
          tabBarLabelStyle: {
            fontSize: 13,

            paddingBottom: 20,
          },
          tabBarIcon: ({ color }: Color) => (
            <FontAwesome5 name="pencil-alt" color={color} size={22} />
          ),
          tabBarActiveTintColor: "#09CBDA",
          tabBarInactiveTintColor: "white",
        }}
      />
      <Tab.Screen
        name="HomeStatistic"
        component={HomeStatistic}
        options={{
          tabBarLabel: "Estatísticas",

          tabBarLabelStyle: {
            fontSize: 13,

            paddingBottom: 20,
          },
          tabBarIcon: ({ color }: Color) => (
            <AntDesign name="barschart" color={color} size={26} />
          ),
          tabBarActiveTintColor: "#09CBDA",
          tabBarInactiveTintColor: "white",
        }}
      />
      <Tab.Screen
        name="HomeCalendar"
        component={HomeCalendar}
        options={{
          tabBarLabel: "Calendário",
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: "#09CBDA",
          },
          tabBarLabelStyle: {
            fontSize: 13,

            paddingBottom: 20,
          },
          tabBarIcon: ({ color }: Color) => (
            <AntDesign name="calendar" color={color} size={26} />
          ),
          tabBarActiveTintColor: "#09CBDA",
          tabBarInactiveTintColor: "white",
        }}
      />
      <Tab.Screen
        name="HomeProfile"
        component={HomeProfile}
        options={{
          tabBarLabel: "Perfil",

          tabBarLabelStyle: {
            fontSize: 13,

            paddingBottom: 20,
          },
          tabBarIcon: ({ color }: Color) => (
            <Ionicons name="md-person-outline" color={color} size={26} />
          ),
          tabBarActiveTintColor: "#09CBDA",
          tabBarInactiveTintColor: "white",
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
