import React from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";

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
  // return <ViewImageScreen />;
  // return <WelcomeScreen />;
  //return <ListingDetailsScreen />;
  // return <MessagesScreen />;
  // return <ListingEditScreen />;
  //return <LoginScreen />;
  return <ListingEditScreen />;
}

/*<View
style={{
  backgroundColor: "#fff",
  flex: 1,
  flexDirection: "row", // horizontal axis
  justifyContent: "center", // align items along the main or primary axis
  alignItems: "center", // align items around the secondary axis
}}
>
<View
  style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
/>
<View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
<View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
</View>*/
