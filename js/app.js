/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game

// adding start game functionality

const reset_button = document.getElementById('btn__reset')
const buttons = document.querySelectorAll('#qwerty button')

// two conditions are applied first condition for the first time the game is played and second condition when the game is won or lost after playing for the first time and resetting all the values to default.
reset_button.addEventListener('click', () => {
    const gameOver = document.getElementById('game-over-message')
    if (gameOver.textContent === '') {
        game = new Game()
        game.startGame()
        buttons.forEach((item) => {
            item.addEventListener('click', (e) => {
                game.handleInteraction(e.target)
            })
        })
        const keys = document.querySelectorAll("#qwerty .key");
        document.addEventListener('keyup', (e) => {
            keys.forEach((key) => {
                if (key.textContent === e.key) {
                    game.handleInteraction(key)
                }
            })
        })
    } else {
        document.querySelector("#phrase ul").innerHTML = ''
        buttons.forEach((item) => {
            item.disabled = false
            item.classList.remove('chosen')
            item.classList.remove('wrong')
        })
        const images = document.querySelectorAll("#scoreboard ol li img")
        images.forEach((image) => {
            const newPath = image.src.replace('lost', 'live')
            image.src = newPath
        })
        game = new Game()
        game.startGame()
    }

    // adding functionality to quit button to restart the game again
    const quitBtn = document.getElementById('quit-game')
    quitBtn.addEventListener('click', () => {
        game.gameOver(true)
        const overlay = document.getElementById('overlay')
        overlay.classList.remove('win')
        overlay.classList.remove('lose')
    })

})








