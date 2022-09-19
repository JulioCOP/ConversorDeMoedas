function Converter() {
  // puxar o valor do input do HTML referenciado pela id
  var valorElemento = document.getElementById("valor");
  // valor da variavel que puuxada do HTML
  var valor = valorElemento.value;
  // valor digitado transformado em valor númerico
  var valorDolarEmNumerico = parseFloat(valor);
  // Dollar = R$ 5,23
  var valorEmReal = valorDolarEmNumerico / 5.23;
  var valorFixado = valorEmReal.toFixed(2);
  // pegar o id da linha do comando h2, que é o espaço deixado com id convertido, para exibir o valor na tela
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    " Equivale a $ ".fontcolor("black") + valorFixado.fontcolor("black");
  // inserir dentro do elemento do HTML, entre as duas tags de abertura e fechamento
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterEuro() {
  var valorElementoEuro = document.getElementById("valor");
  var valorReais = valorElementoEuro.value;
  var valorEmReais = parseFloat(valorReais);
  // EURO = R$ 5,18
  var valorEmEuros = valorEmReais / 5.2;
  var valorFix = valorEmEuros.toFixed(2);
  var valorConvertidoEmEuro = document.getElementById("valorConvertidoEuro");
  var valorConvertidoEuro =
    "O valor equivale a €  ".fontcolor("black") + valorFix.fontcolor("black");
  valorConvertidoEmEuro.innerHTML = valorConvertidoEuro;
}
function ConverterBitCoin() {
  var elementoBitCoin = document.getElementById("valor");
  var valorBitCoin = elementoBitCoin.value;
  var valorEmReais = parseFloat(valorBitCoin);
  console.log(valorEmReais);
  //  BTC = R$ 99.579,13
  var moedaBitCoin = valorEmReais / 99579.13;
  var btcFixado = moedaBitCoin.toFixed(2);
  var convertidoEmBitCoin = document.getElementById("valorConvertidoBitCoin");
  var valorConvertidoBitCoin =
    "Com R$ ".fontcolor("black") +
    valorEmReais +
    " é possível comprar ".fontcolor("black") +
    btcFixado.fontcolor("yellow") +
    " ฿".fontcolor("yellow");
  convertidoEmBitCoin.innerHTML = valorConvertidoBitCoin;
}