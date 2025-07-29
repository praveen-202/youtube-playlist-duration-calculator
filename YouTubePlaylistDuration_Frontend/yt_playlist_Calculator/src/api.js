// Axios instance to make HTTP requests to Spring Boot backend
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080", // Base URL of the backend server
});

export default instance;
