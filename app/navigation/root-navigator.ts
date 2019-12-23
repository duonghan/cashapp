import { createStackNavigator } from "react-navigation"
import { PrimaryNavigator } from "./primary-navigator"
import { SigninScreen } from "../screens" // eslint-disable-line @typescript-eslint/no-unused-vars

export const RootNavigator = createStackNavigator(
  {
    signinScreen: { screen: SigninScreen },
    primaryStack: { screen: PrimaryNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
