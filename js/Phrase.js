/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Phrase class consists of phrase property and three methods to display phrase, check if the letter exists in the phrase and show the matched letter in the placeholder.


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }
    addPhraseToDisplay() {
        let html = ''
        for (let letter of this.phrase) {
            let className
            if (letter !== ' ') {
                className = `hide letter ${letter}`
            } else {
                className = 'space'
            }
            html += `<li class="${className}">${letter}</li>`
        }
        document.querySelector("#phrase ul").innerHTML = html 
    }
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true
        } else {
            return false
        }
    }
    showMatchedLetter(letter) {
        const lis = document.querySelectorAll("#phrase li")
        for(let item of lis) {
            if(item.textContent === letter) {
                item.classList.remove('hide')
                item.classList.add('show')
            }
        }
    }
}