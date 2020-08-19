import React, { useState } from "react";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Electronics",
    value: 3,
  },
];

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
  const [category, setCategory] = useState();
  // return <ViewImageScreen />;
  // return <WelcomeScreen />;
  //return <ListingDetailsScreen />;
  // return <MessagesScreen />;
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon='apps'
        placeholder='Category'
      />
      <AppTextInput icon='email' placeholder='Email' />
    </Screen>
  );
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
