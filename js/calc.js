
function insereNumeroNoVisor(botao,visor) {

    if(botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/"){

        if(visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/"){

            visor.value[visor.value.length-1] = botao.value;
            visor.value.slice(1);
        }else{
            visor.value += botao.value;
        }
    }else{
        visor.value += botao.value;
    }
}

function resultadoDasOperacoes(visor){
   visor.value  = eval(visor.value);
}