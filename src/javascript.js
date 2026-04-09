function calcular(tipo, valor){ //Pega o tipo e o valor do botão clicado
    
    if(tipo === "acao"){ //Se o tipo for ação, ele vai verificar qual é a ação

        if(valor === "c"){

            document.getElementById("campo").value = ""; //Limpa o campo de texto
        }

        else if(valor === "+" || valor === "-" || valor === "*" || valor === "/"){
            
            document.getElementById("campo").value += valor ; //Pega o valor do campo de texto e adiciona o símbolo de adição
        }

        else if(valor === "="){
            
            var resultado = eval(document.getElementById("campo").value); //Pega o valor do campo de texto e calcula o resultado
            document.getElementById("campo").value = resultado; //Mostra o resultado no campo de texto
        }

    }else if(tipo === "valor"){ //Se o tipo for valor, ele vai adicionar o valor do botão clicado no campo de texto

        document.getElementById("campo").value += valor; //Pega o valor do campo de texto e adiciona o valor do botão clicado
    }

}