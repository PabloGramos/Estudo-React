'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novo_numero = true;
let operador;
let numero_anterior;

const operacao_pendente = () => operador !== undefined;

const calcular = () => {
    if(operacao_pendente()){
        const numero_atual = parseFloat(display.textContent.replace('.','').replace(',','.'));
        novo_numero = true;
        const resultado = eval(`${numero_anterior}${operador}${numero_atual}`);
        atualizar_display(resultado);
    }
}