const userName = prompt('What is your name')


if (userName !== '') {
    console.log(`Hello, ${userName}!`)
}
else {
    console.log('Hello')
}

const userQuestion = prompt('What is your question?')
console.log(`Your question ${userName} was ${userQuestion}`)

const randomNumber = Math.floor(Math.random() * 8);

const eightBall = ''

if (randomNumber === 0) {
    console.log('It is certain')
}
else if (randomNumber === 1) {
    console.log('Reply hazy try again')
}
else if (randomNumber === 2) {
    console.log('Cannot predict now')
}
else if (randomNumber === 3) {
    console.log('Do not count on it')
}
else if (randomNumber === 4) {
    console.log('My sources say no')
}
else if (randomNumber === 5) {
    console.log('It is decidedly so')
}
else if (randomNumber === 6) {
    console.log('Outlook not so good')
}
else if (randomNumber === 7) {
    console.log('Signs point to yes')
}
