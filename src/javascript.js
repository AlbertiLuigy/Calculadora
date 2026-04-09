function alternarCientifica() {
    var cientifica = document.getElementById("cientifica");
    if (cientifica.style.display === "block") {
        cientifica.style.display = "none";
    } else {
        cientifica.style.display = "block";
    }
}

function calcular(tipo, valor){ //Pega o tipo e o valor do botão clicado
    
    var campo = document.getElementById("campo");

    if(tipo === "acao"){ //Se o tipo for ação, ele vai verificar qual é a ação

        if(valor === "c"){

            campo.value = ""; //Limpa o campo de texto
        }

        else if(valor === "+" || valor === "-" || valor === "*" || valor === "/"){
            
            campo.value += valor ; //Pega o valor do campo de texto e adiciona o símbolo de adição
        }

        else if(valor === "="){
            
            var resultado = eval(campo.value); //Pega o valor do campo de texto e calcula o resultado
            campo.value = resultado; //Mostra o resultado no campo de texto
        }

        else if(valor === "sin"){
            campo.value = Math.sin(eval(campo.value));
        }

        else if(valor === "cos"){
            campo.value = Math.cos(eval(campo.value));
        }

        else if(valor === "tan"){
            campo.value = Math.tan(eval(campo.value));
        }

        else if(valor === "log"){
            campo.value = Math.log10(eval(campo.value));
        }

        else if(valor === "sqrt"){
            campo.value = Math.sqrt(eval(campo.value));
        }

        else if(valor === "pow"){
            campo.value = Math.pow(eval(campo.value), 2);
        }

    }else if(tipo === "valor"){ //Se o tipo for valor, ele vai adicionar o valor do botão clicado no campo de texto

        campo.value += valor; //Pega o valor do campo de texto e adiciona o valor do botão clicado
    }

}