const longestWord = (frase) => {
  frase = frase.split(' ');
  const palavras = frase.sort((a, b) => a - b);
  console.log(palavras[palavras.length - 1]);
}

longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')