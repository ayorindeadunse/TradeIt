import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://154.66.23.207/:9005/api",
});

export default apiClient;
