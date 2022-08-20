//Inverte string
let word = 'tryber';
let invertida = '';

for (let i = word.length -1; i >= 0; i -= 1) {
 invertida += word[i];
}

console.log(invertida);