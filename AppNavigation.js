import { createStackNavigator } from "react-navigation-stack";
import {HomeScreen, SecondScreen, ThirdScreen, FourthScreen} from "./screens/index"
import { createAppContainer } from "react-navigation";

const AppNavigation = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        SecondScreen:SecondScreen,
        ThirdScreen: ThirdScreen,
        FourthScreen: FourthScreen
    }
);

export default createAppContainer(AppNavigation);

