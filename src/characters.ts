const letras: string[] = [];
const numeros: string[] = [];
const simbolos: string[] = ["@", "#", "$", "%", "&", "_"]

for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
  letras.push(String.fromCharCode(i));
}

for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
  letras.push(String.fromCharCode(i));
}

for (let i = 0; i <= 9; i++) {
  numeros.push(String(i));
}

const words: (string)[] = letras.concat(numeros, simbolos);

export default function RandomPassword() {
  const password: string[] = []

  for(let i = 0; i < 12; i++) {
    password.push(words[Math.floor(Math.random() * words.length)])
  }

  return password.join("")
}