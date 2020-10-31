import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

// import messages api
import messagesApi from "../api/messages";
import useApi from "../hooks/useApi";

// update initialMessages to make call to restapi getMessages.
// parse the data object successfully returned and pass match parameters id,title,description and image to the fields

// Get the username from the useApi hook and set as title.
/*const initialMessages = [
  {
    id: 1,
    title: "Ayorinde Adunse",
    description: "Hey! Is this item still available?",
    image: require("../assets/ayorinde.jpg"),
  },
  {
    id: 2,
    title: "Ayorinde Adunse",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/ayorinde.jpg"),
  },
];*/

function MessagesScreen(props) {
  const getMessagesApi = useApi(messagesApi.getMessages);

  useEffect(() => {
    getMessagesApi.request();
  }, []);

  const [messages, setMessages] = useState(getMessagesApi.data);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = async (message) => {
    // Delete the message from messages
    /***
     * updated: Consider deleting messages from the database directly, or just from the screen.
     */
    // setMessages(messages.filter((m) => m.id !== message.id));
    await messagesApi.deleteMessage(message);
    setMessages(getMessagesApi.data);

    // console.log(deletemsg);
    // console.log(message);

    //call setMessages since the state has changed to return the messages for the user.
  };

  // delete

  return (
    <Screen>
      <FlatList
        //  data={messages}
        data={getMessagesApi.data}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.toUserId}
            subTitle={item.content}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(/*[
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/ayorinde.jpg"),
            },
          ]*/);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
