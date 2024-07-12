var NumerosGenerados = new Array();
var NumeroPregunta = 0;
var contador = 0;

var musicadeterror;
var Victoria;
var Derrota;

var preguntas=new Array(10);


for (var i = 1; i <=10; i++)
{
preguntas[i] = new Array(5);
}

//alert("1");

preguntas[1][0]="Donde vive Ismael";
preguntas[1][1]="Albacete, Castilla La Mancha";
preguntas[1][2]="Daimiel, Ciudad Real, Castilla La Mancha";
preguntas[1][3]="Ciudad Real, Castilla La Mancha";
preguntas[1][4]="2";
//alert("2");

preguntas[2][0]="Que juego es este";
preguntas[2][1]="La puerta misteriosa de preguntas";
preguntas[2][2]="Aventuras en el tiempo";
preguntas[2][3]="Piedra, papel o tijeras";
preguntas[2][4]="1";
//alert("3");

preguntas[3][0]="En que instituto esta Ismael ahora";
preguntas[3][1]="Ies Masestre de Calatrava (Ciudad Real)";
preguntas[3][2]="Ies Leonardo Da Vinci (Albacete)";
preguntas[3][3]="Ies Amparo Sanz (Albacete)";
preguntas[3][4]="3";

preguntas[4][0]="Cual es de estos lenguajes es lenguaje de programación:";
preguntas[4][1]="HTML";
preguntas[4][2]="CSS";
preguntas[4][3]="JavaScript";
preguntas[4][4]="3";

preguntas[5][0]="Una base de datos es: ";
preguntas[5][1]="Es un programa de escritorio que gestionar los datos de los usuarios que están almacenados en el disco duro.";
preguntas[5][2]="Conjunto de datos de distinto tipo reaciones entre sí, junto con un programa de gestión y acceso a dichos datos.";
preguntas[5][3]="Un programa para gestionar ficheros muy grandes.";
preguntas[5][4]="2";

preguntas[6][0]="Los Componentes principales de un sistema de Base de datos son";
preguntas[6][1]="La Base de Datos y el Sistema de Gestión de Base de Datos.";
preguntas[6][2]="La Base de Datos, el Sistema de Gestión de Base de Datos los Usuarios o Programas.";
preguntas[6][3]="La Base de Datos, el Sistema Operativo, los Usuarios o Programas.";
preguntas[6][4]="2";

preguntas[7][0]="Que instituto se saco el grado medio Ismael";
preguntas[7][1]="Ies Leonardo Da Vinci(Albacete)";
preguntas[7][2]="Ies Estados del duque(Malagón)";
preguntas[7][3]="Ies Maestre de Calatrava(Ciudad Real)";
preguntas[7][4]="2";

preguntas[8][0]="¿Cuál es la cláusula utilizada para filtrar registros en una consulta SQL?";
preguntas[8][1]="WHERE";
preguntas[8][2]="SELECT";
preguntas[8][3]="FROM";
preguntas[8][4]="1";

preguntas[9][0]="¿Cual es el ciclo formativo de grado superior que desarrollas y programas páginas web?";
preguntas[9][1]="CFGS: Administración de Sistemas Informáticos en Red";
preguntas[9][2]="CFGS: Desarrollo de Aplicaciones Multiplataforma";
preguntas[9][3]="CFGS: Desarrollo de Aplicaciones Web";
preguntas[9][4]="3";

preguntas[10][0]="¿En que asignatura se da SQL?";
preguntas[10][1]="Entornos de desarrollo";
preguntas[10][2]="Base de datos";
preguntas[10][3]="Sistemas Informáticos";
preguntas[10][4]="2";

function generarPregunta() {
musicadeterror = document.getElementById('musica');
Victoria = document.getElementById('victoria');
Derrota = document.getElementById('derrota');

Derrota.pause();
Derrota.currentTime = 0;

Victoria.pause();
Victoria.currentTime = 0;

musicadeterror.loop = true;
musicadeterror.play();

document.getElementById('EmpezarAJugar').disabled = true;
document.getElementById('Reiniciar').disabled = false;

document.getElementById('PuertaImagenA').disabled = false;
document.getElementById('PuertaImagenB').disabled = false;
document.getElementById('PuertaImagenC').disabled = false;

NumeroPregunta = parseInt(Math.random() * (10)) + 1;

while (NumerosGenerados[NumeroPregunta]) {
    NumeroPregunta = parseInt(Math.random() * (10)) + 1;
}

NumerosGenerados[NumeroPregunta] = 1;

contador++;

//alert(contador);

document.getElementById('ContenedorDePreguntas').innerHTML = preguntas[NumeroPregunta][0];
document.getElementById('RespuestaA').innerHTML = preguntas[NumeroPregunta][1];
document.getElementById('RespuestaB').innerHTML = preguntas[NumeroPregunta][2];
document.getElementById('RespuestaC').innerHTML = preguntas[NumeroPregunta][3];

}

function verificarRespuesta(respuestaSeleccionada) {
var respuestaCorrecta = preguntas[NumeroPregunta][4]; 
if (respuestaSeleccionada == respuestaCorrecta - 1) { 
    if(contador == 10){
        mostrarVictoria();
    }
    else{
        generarPregunta(); 
    }
} else {
    mostrarDerrota();
}
}

function mostrarDerrota() {
document.getElementById('ContenedorDePreguntas').innerHTML = "Has perdido.";

musicadeterror.pause();
musicadeterror.currentTime = 0;

NumerosGenerados = []; 
NumeroPregunta = 0;
contador = 0;

if (musicadeterror) {
    musicadeterror.pause();
    musicadeterror.currentTime = 0;
}

derrota.play();

document.getElementById('EmpezarAJugar').disabled = false;
document.getElementById('Reiniciar').disabled = true;

document.getElementById('PuertaImagenA').disabled = true;
document.getElementById('PuertaImagenB').disabled = true;
document.getElementById('PuertaImagenC').disabled = true;
document.getElementById('ContenedorDePreguntas').innerHTML = "HAS PERDIDO, GAME OVER"; 
document.getElementById('RespuestaA').innerHTML = ""; 
document.getElementById('RespuestaB').innerHTML = "";
document.getElementById('RespuestaC').innerHTML = "";
}

function mostrarVictoria() {

NumerosGenerados = []; 
NumeroPregunta = 0;
contador = 0;

if (musicadeterror) {
    musicadeterror.pause();
    musicadeterror.currentTime = 0;
}

Victoria.play();

document.getElementById('EmpezarAJugar').disabled = false;
document.getElementById('Reiniciar').disabled = true;

document.getElementById('PuertaImagenA').disabled = true;
document.getElementById('PuertaImagenB').disabled = true;
document.getElementById('PuertaImagenC').disabled = true;
document.getElementById('ContenedorDePreguntas').innerHTML = "HAS GANADO, ENHORABUENA";
document.getElementById('RespuestaA').innerHTML = ""; 
document.getElementById('RespuestaB').innerHTML = ""; 
document.getElementById('RespuestaC').innerHTML = ""; 
}

function Reiniciar() {
NumerosGenerados = []; 
NumeroPregunta = 0;
contador = 0;

if (musicadeterror) {
    musicadeterror.pause();
    musicadeterror.currentTime = 0;
}

document.getElementById('EmpezarAJugar').disabled = false;
document.getElementById('Reiniciar').disabled = true;

document.getElementById('PuertaImagenA').disabled = true;
document.getElementById('PuertaImagenB').disabled = true;
document.getElementById('PuertaImagenC').disabled = true;
document.getElementById('ContenedorDePreguntas').innerHTML = ""; 
document.getElementById('RespuestaA').innerHTML = ""; 
document.getElementById('RespuestaB').innerHTML = "";
document.getElementById('RespuestaC').innerHTML = "";
}