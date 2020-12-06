// function tecla(){
//     window.alert("O código da tecla pressionada foi: " + event.keyCode);
// }


// document.onkeypress = tecla;
document.onload = valor = 0,contagem = 0, nperg = "",letra = 1;resposta = "";

//assim nao funcionou:
// function config(){
//     var valor = 0;
//     var contagem = 0;
// }

var pergunta = [];

pergunta['p1'] = "Óh bons espíritos, poderia por favor provar sua presença perante nós, nos dizendo qual objeto está em minhas mãos?";
pergunta['p2'] = "Se existe algum espírito nesse recinto, peços que demonstre sua presença nos dizendo o que é que estamos ";
pergunta['p3'] = "Olá, poderia nos dizer se o senhor está presente demonstrando através deste computador o que ";
pergunta['p4'] = "Espíritos do além, poderiam entrar em contato conosco através deste computador e nos mostrar se podem nos ver dizendo ";
pergunta['p5'] = "Por favor, bons espíritos, peço que venham a nós para que possamos nos comunicar. Se estiverem aqui presentes, poderiam dizer o que é o objeto que ";



function verifica_tecla(){
    
    //para descobrir o codigo da tecla que escolher descomente abaixo:
    // alert("a tecla apertada foi "+event.keyCode);
    
    if(event.keyCode == 45)   {  //se teclar - permite terminar a pergunta manualmente
        if(valor == 0){
            valor = 1;
            event.preventDefault(); //nao mostra o -
        }else{
            valor = 0;            
        }
                        
    }   

    if(event.keyCode == 13){ //se teclar enter, mostra resposta
        mostra_resposta();
    }

    if(valor == 0){ //se nao apertou - ainda, segue o plano        
        // guarda_texto();
        return engana_bobo();        
    }
}




function engana_bobo(){
    //alert(String.fromCharCode(event.keyCode));
    resposta += String.fromCharCode(event.keyCode);

    event.preventDefault(); //previne de prencher o texto ao teclar
    
    //document.getElementById('resposta').innerHTML = (pergunta.p1)
    qtdep = Object.getOwnPropertyNames(pergunta);
    //alert("length: "+qtdep.length);

    if(nperg == ""){ //se a pergunta não foi selecionada, escolhe randomicamente
        var rand = Math.floor(Math.random(qtdep.length )* 5);
        //vai escolher a pergunta

        nperg = rand; //define para que seja usada essa pergunta até o final
        //alert(perg);
        /*
        o math random so randomiza entre 0 e 1, por isso multiplicando por 5
        a resposta nunca será maior que 5, e o floor apenas arredonda o número
        */
        //alert(rand);

        document.getElementById('texto').value = pergunta['p'+nperg].substring(0,letra);
        letra++;
    }else{
        //alert(pergunta['p'+nperg]);
        //alert(pergunta['p'+nperg].substring(0,letra));

        document.getElementById('texto').value = pergunta['p'+nperg].substring(0,letra);
        //resposta += event.data();
        letra++;
    }
}


function mostra_resposta(){
    // alert(resposta);

    //comente abaixo caso não queira que toque o áudio
    document.getElementById('voices').pause();
    document.getElementById('yt1').play();
    
    //comente o settimeout para não dar voltar a tocar
    setTimeout(() => {
        document.getElementById('voices').play();
    }, 2000);
    
    var resp = document.getElementById('resposta');
    
    resp.classList.remove('d-none');
    resp.classList.add('d-block');        
    resp.innerHTML = "<h1>"+resposta+"</h1>"; //exibe resposta na div    
    resp.scrollIntoView();

    document.getElementById('texto').value = ""; //limpa a pergunta       
    document.getElementById('texto').focus(); //foca no input

    valor = 0,contagem = 0, nperg = "",letra = 1;resposta = ""; //zera para nova pergunta
}


function limpar(){
    var resp = document.getElementById('resposta');    
    resp.classList.remove('d-block');
    resp.classList.add('d-none');
    document.getElementById('texto').focus(); //foca no input
    // se colocar esse jogo numa página muito comprida, descomente abaixo para voltar ao topo
    // var inicio = document.getElementById('container');    
    // inicio.scrollIntoView();
}