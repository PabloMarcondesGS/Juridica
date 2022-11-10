import React from "react";
import { propsNavigationStack } from "./Models";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import SplashStraight from "../pages/Splashs/SplashStraight";
import SplashClock from "../pages/Splashs/SplashClock";
import SplashNeverForget from "../pages/Splashs/SplashNeverForget";
import SplashLearnIt from "../pages/Splashs/SplashLearnIt";
import SplashBook from "../pages/Splashs/SplashBook";
import SplashContent from "../pages/Splashs/SplashContent";
import SplashFinalStretch from "../pages/Splashs/SplashFinalStretch";
import ObjectiveFocus from "../pages/Objective/ObjectiveFocus";
import ObjectiveYears from "../pages/Objective/ObjectiveYears";
import ObjectiveHours from "../pages/Objective/ObjectiveHours";
import ObjectiveApprovals from "../pages/Objective/ObjectiveApprovals";
import Login from "../pages/Login/Login";
import RegistrationPlans from "../pages/Registration/RegistrationPlans";
import RegistrationAccount from "../pages/Registration/RegistrationAccount";
import RegistrationCard from "../pages/Registration/RegistrationCard";
import Loading from "../pages/Loading/Loading";
import Tabs from "./Tabs";
import SettingsCards from "../pages/Settings/SettingsCards";
import SettingsAddCard from "../pages/Settings/SettingsAddCard";
import Question from "../pages/Question/Question";
import QuestionRevision from "../pages/Question/QuestionRevision";
import Deepening from "../pages/Deepening/Deepening";
import SettingsEditCard from "../pages/Settings/SettingsEditCard";
import QuestionEdit from "../pages/Question/QuestionEdit";
import Results from "../pages/Results/Results";
import ResultsComplete from "../pages/Results/ResultsComplete";
import AddQuestion from "../pages/AddQuestion/AddQuestion";
import Activity from "../pages/Activity/Activity";
import List from "../pages/List/List";
import SettingsQuestions from "../pages/Settings/SettingsQuestions";
import CreateNotebook from "../pages/CreateNotebook/CreateNotebook";
import CycleComplete from "../pages/CycleComplete/CycleComplete";

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="SplashStraight"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="SplashStraight" component={SplashStraight} />
        <Screen name="SplashClock" component={SplashClock} />
        <Screen name="SplashNeverForget" component={SplashNeverForget} />
        <Screen name="SplashLearnIt" component={SplashLearnIt} />
        <Screen name="SplashBook" component={SplashBook} />
        <Screen name="SplashContent" component={SplashContent} />
        <Screen name="SplashFinalStretch" component={SplashFinalStretch} />
        <Screen name="ObjectiveFocus" component={ObjectiveFocus} />
        <Screen name="ObjectiveYears" component={ObjectiveYears} />
        <Screen name="ObjectiveHours" component={ObjectiveHours} />
        <Screen name="ObjectiveApprovals" component={ObjectiveApprovals} />
        <Screen name="Login" component={Login} />
        <Screen name="RegistrationPlans" component={RegistrationPlans} />
        <Screen name="RegistrationAccount" component={RegistrationAccount} />
        <Screen name="RegistrationCard" component={RegistrationCard} />
        <Screen name="Loading" component={Loading} />
        <Screen name="Home" component={Tabs} />
        <Screen name="SettingsCards" component={SettingsCards} />
        <Screen name="SettingsAddCard" component={SettingsAddCard} />
        <Screen name="Question" component={Question} />
        <Screen name="QuestionEdit" component={QuestionEdit} />
        <Screen name="QuestionRevision" component={QuestionRevision} />
        <Screen name="Deepening" component={Deepening} />
        <Screen name="SettingsEditCard" component={SettingsEditCard} />
        <Screen name="Results" component={Results} />
        <Screen name="ResultsComplete" component={ResultsComplete} />
        <Screen name="AddQuestion" component={AddQuestion} />
        <Screen name="Activity" component={Activity} />
        <Screen name="List" component={List} />
        <Screen name="SettingsQuestions" component={SettingsQuestions} />
        <Screen name="CreateNotebook" component={CreateNotebook} />
        <Screen name="CycleComplete" component={CycleComplete} />
      </Navigator>
    </NavigationContainer>
  );
};

export { AppRoutes };
