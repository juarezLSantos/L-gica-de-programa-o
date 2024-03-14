let numero = 10;

console.log(`O numero inicial é: ${numero}`);

numero = numero + 10;

console.log(`somando 10: ${numero += 10}`);

console.log(`subtraindo 10: ${numero -= 10}`);
console.log(`multiplicando pór 10: ${numero *=10}`);
console.log(`dividindo por 10: ${numero /=10}`);
console.log(`Elevando à potência de 10: ${numero **=10}`);
console.log(`Obtendo o resto da divisão por 10: ${numero %=}`);
console.log(`Incrementando 1: ${++numero}`);
console.log(`Decrementando 1: ${--numero}`);
console.log(`O numero final é: ${numero}`);
~~~

Operadores de atribuição:

*`+=`-> o próprio valor somado ao novo valor
**`-=`-> o próprio valor subtraindo o novo valor
*`*=`-> o próprio valor multiplicado pelo novo valor
*`/=`-> o próprio valor dividido pelo novo valor
*`**=`-> o próprio valor elevado à potencia do novo valor
*`%=`-> o resto da divisão do próprio valor pelo novo valor
*`++`-> o próprio valor **incrementado(somado) com 1**(pode ser um - pré-decremento_ou _pós-decremento)