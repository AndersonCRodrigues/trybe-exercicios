const longestWord = (frase) => frase.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));