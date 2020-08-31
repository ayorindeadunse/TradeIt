import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

/***Compiling this App will compile the code and translate it to their native widgets.
 *
 * Compiling this app for iOS will translate the View tag in the code below to UIView while for android
 *
 * it will be translated to AndroidView
 *
 * React Native helps you focus purely on your business logic, with out having to specifically
 *
 * code for a specific native component. In a sense it's a "write once, run anywhere" development paradigm.
 */
export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );

  // remember to push to online repo when power comes back on.
}
