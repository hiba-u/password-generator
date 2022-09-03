const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const btn = document.getElementById("btn")
const passwordOneEl = document.getElementById("pass-1")
const passwordTwoEl = document.getElementById("pass-2")

function generateRandomPassword(){

    let password = ""
    for(let i=0; i<15; i++){

        let randomIndex = Math.floor(Math.random() * 91);
        password += characters[randomIndex]
    }

    return password
}

btn.addEventListener("click", function() {

    let passOne = generateRandomPassword()
    let passTwo = generateRandomPassword()

    passwordOneEl.textContent = passOne
    passwordTwoEl.textContent = passTwo
})