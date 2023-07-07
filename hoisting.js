console.log("Existe antes do bloco de código? ", x)
// pelo var ser global, vai mostrar como se a variável exista, mas
// não vai ter valor, pois só foi atribuido valor no bloco na linha 6

{
  var x = 0
}

console.log("Existe depois do bloco de código? ", x)
