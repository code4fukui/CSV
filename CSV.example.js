import { CSV } from "./CSV.js";

const url = "https://code4fukui.github.io/mac-address/move/42.csv";
const res = await CSV.fetchJSON(url, []);
console.log(res);