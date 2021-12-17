// filename: ./src/util.js
export function getDate(time) {
  return new Date(time).toISOString().split("T")[0]; // "YYYY-MM-DD"
}
