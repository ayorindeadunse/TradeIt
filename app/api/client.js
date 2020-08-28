import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.10.102:9006/api",
});

export default apiClient;
