const button = document.getElementById("actionButton");
const output = document.getElementById("output");

const messages = [
  "Super! Du hast den Button geklickt.",
  "Weiter so – gleich probieren wir Pull Requests aus.",
  "Tippe: Öffne ein Issue für deine nächste Idee.",
];

let index = 0;

button.addEventListener("click", () => {
  output.textContent = messages[index % messages.length];
  index += 1;
});
