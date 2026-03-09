export default function decorate(block) {
  const message = document.createElement("p");
  message.textContent = "Hello from eds-ue-test!";
  block.append(message);
}