function odliczanie() {
            let Data = new Date();

            let dzien = Data.getDate();
            let miesiac = Data.getMonth()+1;
            let rok = Data.getFullYear();

            let godzina = Data.getHours();
            if(godzina<10) godzina = "0"+godzina;
            let minuta = Data.getMinutes();
            if(minuta<10) minuta = "0"+minuta;
            let sekunda = Data.getSeconds();
            if(sekunda<10) sekunda = "0"+sekunda;

            document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+"|"+godzina+":"+minuta+":"+sekunda;

            setTimeout("odliczanie()", 1000)
        }