const messages = [
  "Oscar",
  "Ana",
  "Sergio",
  "Diego",
  "Laura",
  "Yessica",
  "Paula",
  "Carolina"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()* messages.length)]
  console.log(message);
}

module.exports = { randomMsg };
