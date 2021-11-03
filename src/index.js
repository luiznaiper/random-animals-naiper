const messages = [
    'Tiger',
    'Lion',
    'Crocodile',
    'Dog',
    'Cat',
    'Bear',
    'Serpent',
    'Worm',
    'Jiraffe',
    'Eagle'
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }