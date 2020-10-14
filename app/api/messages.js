import client from "./client";

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
};
