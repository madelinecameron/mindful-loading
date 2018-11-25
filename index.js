const messages = require('./messages')

module.exports = () => {
  const randomIndex = Math.round(Math.random() * messages.length)

  return messages[randomIndex]
}