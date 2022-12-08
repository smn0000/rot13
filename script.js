const input = document.querySelector('#text')
const output = document.querySelector('#output')
function rot13(text){
    let characters = []
    let charactersText = ''
    for (let i = 0; i < text.length; i++) {
         if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=77) characters = [...characters, text.charCodeAt(i) + 13]
        else if (text.charCodeAt(i) >= 78 && text.charCodeAt(i) <= 90) characters = [...characters, text.charCodeAt(i) - 13]
        else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 109) characters = [...characters, text.charCodeAt(i) + 13]
        else if (text.charCodeAt(i) >= 110 && text.charCodeAt(i) <= 122) characters = [...characters, text.charCodeAt(i) - 13]
        else characters = [...characters, text.charCodeAt(i)]
        charactersText = charactersText + String.fromCharCode(characters[i])
        }
    return charactersText;
    }
input.addEventListener('input', ()=> output.innerHTML = rot13(input.value))