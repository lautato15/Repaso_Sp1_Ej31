function numeroFibonacci(num) {
  if (typeof num !== "number" && num < 1) return "Error de Parametros";
  let base = [0, 1, 1];
  result = [];
  for (let i = 0; i < num; i++)
    i < 3 ? result.push(base[i]) : result.push(result[i - 1] + result[i - 2]);
  return result[num - 1];
}

//   Ejercicio 31 (Extra)
// Crear una función en JavaScript llamada numeroFibonacci que reciba como parámetro un número natural, mayor que 0, y retorne como resultado el número que ocupa la posición indicada por el parámetro en la serie de Fibonacci.
// Ejemplos:
// ¿Qué pasa si se llama a la función con un número muy grande? Ejemplo: numeroFibonacci(500).
// Documento confidencial. No compartir con terceros. Página 43 de 44

// Input ---> Output
// numeroFibonacci(1) ---> 0
// numeroFibonacci(2) ---> 1
// numeroFibonacci(3) ---> 1
// numeroFibonacci(4) ---> 2
// numeroFibonacci(5) ---> 3
// numeroFibonacci(6) ---> 5
// numeroFibonacci(7) ---> 8
// numeroFibonacci(30) ---> 514229
