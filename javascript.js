// tipos de variáveis
var string = "string";
var inteiro = 2;
var decimal = 2.5;
var flutuante = 2.3434;
var booleano = false;
var vetor = ["Banana","Maçã","Melancia", 2];


// Par ou impar usando if
if (9%2 == 0) {
    alert("Esse número é par");
} else if(9%2 == 1) {
    alert("Esse número é impar");
}
else {
    alert("Número inválido");
}

// Estrutura While
var x = 0;
while (x<10) {
    console.log(x);
    x++;
}

// Estrutra for
for (y=0; y<10; y++) {
    console.log ("Número", y);
}
 // Usando arrays
 for (x in vetor){
     alert(vetor[x]);
 }

