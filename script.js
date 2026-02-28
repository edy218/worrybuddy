const messages = [
  "You are stronger than this moment.",
  "It's okay to feel this way. You're human.",
  "This feeling won't last forever.",
  "Take a deep breath. You're doing your best.",
  "You matter more than you realize.",
  "Even storms run out of rain."
];

function submitWoe() {
  const input = document.getElementById("woeInput");
  const text = input.value.trim();

  if (text === "") return;

  // Clear the woe (not saved anywhere)
  input.value = "";

  // Generate comfort message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  document.getElementById("comfortMessage").textContent = randomMessage;
  document.getElementById("responseCard").classList.remove("hidden");
}
