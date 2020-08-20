import React from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";

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
  //return <ViewImageScreen />;
  //return <WelcomeScreen />;
  //return <ListingDetailsScreen />;
  // return <MessagesScreen />;
  // return <ListingEditScreen />;
  //return <LoginScreen />;
  // return <ListingEditScreen />;
  //return <LoginScreen />;
  //return <ListingEditScreen />;
  return <AccountScreen />;
}
