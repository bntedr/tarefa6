//Exercício 1
let par = []
let impar = []

for(let n = 0; n < 10; n++) {
    if (n % 2 === 0) {
        par.push(n)
    } else {
        impar.push(n)
    }
}
console.log(par)
console.log(impar)

//Exercício 2
num = [10,5,2,6,7]
soma = 0
for(let i = 0; i < num.length; i++){
    soma += num[i]
}
console.log(soma)