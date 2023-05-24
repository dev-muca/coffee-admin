import axios from "axios";

const API = axios.create({
  baseURL: "https://www.fateclins.edu.br/felipeMaciel/api/macieulsCoffee",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

export default API;
