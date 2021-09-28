/* 1) Calcular a tabuada de multiplicar de 5.
a) Adicionar o resultado de cada cálculo em um array.
b) Transformar o array em string.
c) Exibir no console. */

let valor = 5;
let multiplicar;
let resultado;

for(let i = 1; i < 11; i++){
  multiplicar = valor * i;
  resultado = [multiplicar];
  console.log(resultado.toString());
}

/* 2) Utilizar a fórmula abaixo para que converter uma temperatura de Fahrenheit para Celsius: (n - 32) / 1.8 
a) n é o valor da temperatura a ser convertida.
b) Dado o array  de temperaturas com os valores  54, 78, 56, 98, 0, 12, 11, 37
c) Exibir no console cada uma das temperaturas convertidas de Fahrenheit para Celsius. */

let temperatura = [54, 78, 56, 98, 0, 12, 11, 37]
let n;
let valorCelsius;

for(i = 0; i < temperatura.length; i++){
  n = temperatura[i];
  valorCelsius = (n - 32) / 1.8;
  console.log(n + "° Fahrenheit são " + valorCelsius.toFixed(0)+ "° em Celsius") 
}