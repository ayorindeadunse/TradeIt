import client from "./client";

const deleteMessage = (messageId) =>
  //client.delete("/messages/id", { messageId });
  client.delete(`/messages/${messageId}`, {});

const send = (message, listingId) =>
  client.post("/messages", {
    message,
    listingId,
  });

// get messages by user
const getMessages = () => client.get("/messages", {});

export default {
  send,
  getMessages,
  deleteMessage,
};
