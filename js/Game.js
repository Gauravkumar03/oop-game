/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Game class consists of three properties and many methods. handleInteraction method handles most of the logic.

class Game {
    constructor() {
        this.missed = 0
        this.phrases = [new Phrase('I love you'), new Phrase('Never give up'), new Phrase('Work like hell'), new Phrase('Chill Out'), new Phrase('Stay Strong')]
        this.activePhrase = null
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)]
    }

    startGame() {
        document.getElementById('overlay').style.display = 'none'
        const randomPhrase = this.getRandomPhrase()
        const phrase = new Phrase(randomPhrase.phrase)
        this.activePhrase = phrase
        phrase.addPhraseToDisplay()
        
    }

    checkForWin() {
        let winFlag = true
        const lis = document.querySelectorAll("#phrase li")
        for (let item of lis) {
            if(item.classList.contains('hide')) {
                winFlag = false 
                break
            }
        }
        if (winFlag) {
            return true
        } else {
            return false
        }
    }

    removeLife() {
        if (this.missed === 4) {
            this.gameOver(false)
        }
        const images = document.querySelectorAll("#scoreboard ol li img")
        const image = images[this.missed]
        const newPath = image.src.replace('live', 'lost')
        image.src = newPath 
        this.missed++
    }

    gameOver(bool) {
        this.missed = 0
        const gameOver = document.getElementById('game-over-message')
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'flex'
        if (bool) {
            overlay.classList.add('win')
            overlay.classList.remove('lose')
            gameOver.textContent = 'Great Job!'
        } else {
            overlay.classList.add('lose')
            overlay.classList.remove('win')
            gameOver.textContent = 'Sorry, better luck next time!'
        }
    }

    handleInteraction(button) {
        const phrase = this.activePhrase
        button.classList.add('disabled')
        button.disabled = true
        console.log(phrase.phrase)
        if (phrase.checkLetter(button.textContent)) {
            button.classList.add('chosen')
            phrase.showMatchedLetter(button.textContent)
            if (this.checkForWin()) {
                this.gameOver(true)
            }
        } else {
            button.classList.add('wrong')
            this.removeLife()
        }
    }
}
