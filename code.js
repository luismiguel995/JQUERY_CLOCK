// JavaScript Document

$(function(){
        var intervalosHoras = setInterval(horas,1000);
        var intervalosMinutos = setInterval(minutos,1000);
        var intervalosSegundos = setInterval(segundos,1000);

        //Segundos
        function segundos() 
        {
            var secEntero = new Date().getSeconds();
            var valor = "";
            if(secEntero<=15)
            {
                if(secEntero < 16)
                {    
                    switch(secEntero){
                        case 0:
                            valor="Cero";
                            break;
                        case 1:
                            valor="Uno";
                            break;
                        case 2:
                            valor="Dos";
                            break;
                        case 3:
                            valor="Tres";
                            break;
                        case 4:
                            valor="Cuatro";
                            break;
                        case 5:
                            valor="Cinco";
                            break;
                        case 6:
                            valor="Seis";
                            break;
                        case 7:
                            valor="Siete";
                            break;
                        case 8:
                            valor="Ocho";
                            break;
                        case 9:
                            valor="Nueve";
                            break;
                        case 10:
                            valor="Diez";
                            break;
                        case 11:
                            valor="Once";
                            break;
                        case 12:
                            valor="Doce";
                            break;
                        case 13:
                            valor="Trece";
                            break;
                        case 14:
                            valor="Catorce";
                            break;
                        case 15:
                            valor="Quince";
                            break;    
                    }
                }
            }
            else
            {
                var sSeconds = secEntero.toString();
                var valor2="";
                var segundosPalabra="";

                switch(sSeconds.charAt(1)){
                        case "0":
                            valor2="cero";
                            break;
                        case "1":
                            valor2="uno";
                            break;
                        case "2":
                            valor2="dos";
                            break;
                        case "3":
                            valor2="tres";
                            break;
                        case "4":
                            valor2="cuatro";
                            break;
                        case "5":
                           valor2="cinco";
                            break;
                        case "6":
                            valor2="seis";
                            break;
                        case "7":
                            valor2="siete";
                            break;
                        case "8":
                            valor2="ocho";
                            break;
                        case "9":
                            valor2="nueve";
                            break;
                        }

                if(secEntero>15 && secEntero<20)
                {
                    valor = "Dieci"+valor2;
                }
                else if(secEntero==20)
                {
                    valor="Veinte";
                }
                else if(secEntero==30)
                {
                    valor="Treinta";
                }
                else if(secEntero==40)
                {
                    valor="Cuarenta";
                }
                else if(secEntero==50)
                {
                    valor="Cincuenta";
                }
                else if(secEntero>19 && secEntero<30)
                {
                    valor = "Veinti"+valor2;
                }
                else if(secEntero>29 && secEntero<40)
                {
                    valor = "Treinta y "+valor2;
                }
                else if(secEntero>39 && secEntero<50)
                {
                    valor = "Cuarenta y "+valor2;
                }
                else if(secEntero>49 && secEntero<60)
                {
                    valor = "Cincuenta y "+valor2;
                }
            } 
             
            $("#Segundos").html(valor)
        }

        //minutos
        function minutos()
        {
            var secEntero = new Date().getMinutes();
            var valor = "";
            if(secEntero<=15)
            {
                if(secEntero < 16)
                {    
                    switch(secEntero){
                        case 0:
                            valor="Cero Cero";
                            break;
                        case 1:
                            valor="Uno";
                            break;
                        case 2:
                            valor="Dos";
                            break;
                        case 3:
                            valor="Tres";
                            break;
                        case 4:
                            valor="Cuatro";
                            break;
                        case 5:
                            valor="Cinco";
                            break;
                        case 6:
                            valor="Seis";
                            break;
                        case 7:
                            valor="Siete";
                            break;
                        case 8:
                            valor="Ocho";
                            break;
                        case 9:
                            valor="Nueve";
                            break;
                        case 10:
                            valor="Diez";
                            break;
                        case 11:
                            valor="Once";
                            break;
                        case 12:
                            valor="Doce";
                            break;
                        case 13:
                            valor="Trece";
                            break;
                        case 14:
                            valor="Catorce";
                            break;
                        case 15:
                            valor="Quince";
                            break;    
                    }
                }
            }
            else
            {
                var sMinutes = secEntero.toString();
                var valor2="";
                var segundosPalabra="";

                switch(sMinutes.charAt(1)){
                        case "0":
                            valor2="cero";
                            break;
                        case "1":
                            valor2="uno";
                            break;
                        case "2":
                            valor2="dos";
                            break;
                        case "3":
                            valor2="tres";
                            break;
                        case "4":
                            valor2="cuatro";
                            break;
                        case "5":
                           valor2="cinco";
                            break;
                        case "6":
                            valor2="seis";
                            break;
                        case "7":
                            valor2="siete";
                            break;
                        case "8":
                            valor2="ocho";
                            break;
                        case "9":
                            valor2="nueve";
                            break;
                        }

                if(secEntero>15 && secEntero<20)
                {
                    valor = "Dieci"+valor2;
                }
                else if(secEntero==20)
                {
                    valor="Veinte";
                }
                else if(secEntero==30)
                {
                    valor="Treinta";
                }
                else if(secEntero==40)
                {
                    valor="Cuarenta";
                }
                else if(secEntero==50)
                {
                    valor="Cincuenta";
                }
                else if(secEntero>19 && secEntero<30)
                {
                    valor = "Veinti"+valor2;
                }
                else if(secEntero>29 && secEntero<40)
                {
                    valor = "Treinta y "+valor2;
                }
                else if(secEntero>39 && secEntero<50)
                {
                    valor = "Cuarenta y "+valor2;
                }
                else if(secEntero>49 && secEntero<60)
                {
                    valor = "Cincuenta y "+valor2;
                }
            } 
            $("#Minutos").html(valor)

        }

        //horas
        function horas()
        {
            var secEntero = new Date().getHours();
            var valor = "";
            if(secEntero<=15)
            {
                if(secEntero < 16)
                {    
                    switch(secEntero){
                        case 0:
                            valor="Cero Cero";
                            break;
                        case 1:
                            valor="Uno";
                            break;
                        case 2:
                            valor="Dos";
                            break;
                        case 3:
                            valor="Tres";
                            break;
                        case 4:
                            valor="Cuatro";
                            break;
                        case 5:
                            valor="Cinco";
                            break;
                        case 6:
                            valor="Seis";
                            break;
                        case 7:
                            valor="Siete";
                            break;
                        case 8:
                            valor="Ocho";
                            break;
                        case 9:
                            valor="Nueve";
                            break;
                        case 10:
                            valor="Diez";
                            break;
                        case 11:
                            valor="Once";
                            break;
                        case 12:
                            valor="Doce";
                            break;
                        case 13:
                            valor="Trece";
                            break;
                        case 14:
                            valor="Catorce";
                            break;
                        case 15:
                            valor="Quince";
                            break;    
                    }
                }
            }
            else
            {
                var sHours = secEntero.toString();
                var valor2="";
                var segundosPalabra="";

                switch(sHours.charAt(1)){
                        case "0":
                            valor2="cero";
                            break;
                        case "1":
                            valor2="uno";
                            break;
                        case "2":
                            valor2="dos";
                            break;
                        case "3":
                            valor2="tres";
                            break;
                        case "4":
                            valor2="cuatro";
                            break;
                        case "5":
                           valor2="cinco";
                            break;
                        case "6":
                            valor2="seis";
                            break;
                        case "7":
                            valor2="siete";
                            break;
                        case "8":
                            valor2="ocho";
                            break;
                        case "9":
                            valor2="nueve";
                            break;
                        }

                if(secEntero>15 && secEntero<20)
                {
                    valor = "Dieci"+valor2;
                }
                else if(secEntero==20)
                {
                    valor="Veinte";
                }
                else if(secEntero==30)
                {
                    valor="Treinta";
                }
                else if(secEntero==40)
                {
                    valor="Cuarenta";
                }
                else if(secEntero==50)
                {
                    valor="Cincuenta";
                }
                else if(secEntero>19 && secEntero<25)
                {
                    valor = "Veinti"+valor2;
                }
                
            } 
            $("#Horas").html(valor)

    }
        var myVar = setInterval(setColor, 1000);
        function setColor()
        {
          var x = document.body;
          x.style.backgroundColor = x.style.backgroundColor == "lightblue" ? "lightgreen" : "lightblue";
        }

      $("div").addClass(".center");
    $("div p").addClass(".texto");  

});





