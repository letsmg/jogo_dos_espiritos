// function tecla(){
//     window.alert("O código da tecla pressionada foi: " + event.keyCode);
// }


// document.onkeypress = tecla;
document.onload = valor = 1,contagem = 0, nperg = "",letra = 1;resposta = "";

//assim nao funcionou:
// function config(){
//     var valor = 0;
//     var contagem = 0;
// }

var perg = [];

perg['0'] = "Aposto que o senhor não sabe o que acabamos de";
perg['1'] = "Óh bons espíritos, poderia por favor provar sua presença perante nós, nos dizendo qual objeto está em minhas mãos?";
perg['2'] = "Se existe algum espírito nesse recinto, peços que demonstre sua presença nos dizendo o que é que estamos ";
perg['3'] = "Olá, poderia nos dizer se o senhor está presente demonstrando através deste computador o que ";
perg['4'] = "Espíritos do além, poderiam entrar em contato conosco através deste computador e nos mostrar se podem nos ver dizendo ";
perg['5'] = "Por favor, bons espíritos, peço que venham a nós para que possamos nos comunicar. Se estiverem aqui presentes, poderiam dizer o que é o objeto que ";
perg['6'] = "Tem alguém aí que esteja nos vendo e possa dizer o que foi que acabamos de";
perg['7'] = "Algum bom espírito de luz que poderia nos dizer o que foi que ";
perg['8'] = "Senhores espíritos, poderiam nos dizer o que acabamos de ";
perg['9'] = "Olá, poderiam nos dizer se estiverem por perto qual";
perg['10'] = "Nós gostaríamos de saber se por acaso o senhor sabe";




function verifica_tecla(){
    
    //para descobrir o codigo da tecla que escolher descomente abaixo:
    // alert("a tecla apertada foi "+event.keyCode);
    
    if(event.keyCode == 61 || event.keyCode == 59)   {  //se teclar = ou ; permite terminar a pergunta manualmente
        event.preventDefault(); //nao mostra o = ou ;
        if(valor == 0){
            valor = 1;
            
        }else{
            valor = 0;            
        }                        
    }else{   

        
        if(event.keyCode){
            document.getElementById('resposta').innerHTML = "";
        }

        if(event.keyCode == 13){ //se teclar enter, mostra resposta
            mostra_resposta();
        }

        if(valor == 0){ //se nao apertou = ou ;ainda, segue o plano        
            // guarda_texto();
            return engana_bobo();        
        }

        
    }
    
}




function engana_bobo(){
    //alert(String.fromCharCode(event.keyCode));
    resposta += String.fromCharCode(event.keyCode);
    
    event.preventDefault(); //previne de prencher o texto ao teclar
    
    //document.getElementById('resposta').innerHTML = (perg.1)
    qtdep = Object.getOwnPropertyNames(perg);
    //alert("length: "+qtdep.length);

    if(nperg == ""){ //se a pergunta não foi selecionada, escolhe randomicamente
        var rand = Math.floor(Math.random(qtdep.length )* 10);
        //alert(rand);
        //vai escolher a pergunta

        nperg = rand; //define para que seja usada essa pergunta até o final
        //alert(perg);
        /*
        o math random so randomiza entre 0 e 1, por isso multiplicando por 5
        a resposta nunca será maior que 5, e o floor apenas arredonda o número
        */
        //alert(rand);

        document.getElementById('texto').value = perg[nperg].substring(0,letra);
        letra++;
    }else{
        //alert(perg['p'+nperg]);
        //alert(perg['p'+nperg].substring(0,letra));

        document.getElementById('texto').value = perg[nperg].substring(0,letra);
        //resposta += event.data();
        letra++;
    }
}






var erro = [];

erro['0'] = "Brincadeira tola, pergunte algo importante";
erro['1'] = "Estou atrás de você";
erro['2'] = "Não me faça perder meu tempo mortal";
erro['3'] = "Não devia brincar com o que nao conhece";
erro['4'] = "Você não é digno de nossa atenção";
erro['5'] = "Seu espírito é fraco, não entendi sua pergunta";
erro['6'] = "Dirija-se a mim com mais respeito";
erro['7'] = "Vocês não estão sendo educados";
erro['8'] = "Não sou seu escravo";
erro['9'] = "Nem sabe o que te espera essa noite";


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

    if(resposta == "" || resposta ==  undefined || resposta == "=" || resposta == ";"){
        // alert(resposta);                        
        var qtder = Object.getOwnPropertyNames(erro);                
                
        n = Math.floor(Math.random(qtder.length) * 9);
                
        resp.innerHTML = "<h1>"+erro[n]+"</h1>"; //exibe resposta na div    
    }else{
        // alert(resposta);
        resp.innerHTML = "<h1>"+resposta+"</h1>"; //exibe resposta na div    
    }
    
    resp.scrollIntoView();

    document.getElementById('texto').value = ""; //limpa a pergunta       
    document.getElementById('texto').focus(); //foca no input

    valor = 1,contagem = 0, nperg = "",letra = 1;resposta = ""; //zera para nova pergunta    
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