const img=[];
const pagina=[];
let index=0;

function caroselloStart(){
    //inserisci nell'array le immagini
    img.push("Immagini/ludoBanner.png");
    img.push("Immagini/slotBanner.png");
    img.push("Immagini/thelemaBanner.png");

    //carica le immagini
    document.getElementById("slideCarosello").style.backgroundImage="url('Immagini/slotBanner.png')";
    document.getElementById("slideCarosello").style.backgroundImage="url('Immagini/thelemaBanner.png')";
    document.getElementById("slideCarosello").style.backgroundImage="url('Immagini/ludoBanner.png')";

    //inserisci i link corrispondenti alle pagine delle immagini
    pagina.push("index.html");
    pagina.push("index.html");
    pagina.push("pagine/thelema.html");

    setInterval(function(){
        document.getElementById("slideCarosello").style.backgroundImage="url("+img[index]+")";
        document.getElementById("link-carosello").href=pagina[index];
        index++;
        if(index>=img.length){
            index=0;
        }
    },8000);
}

function muovi(a){
    index=index+a;
    if(index>=img.length){
        index=0;
    }
    if(index<0){
        index=img.length-1;
    }
    document.getElementById("slideCarosello").style.backgroundImage="url("+img[index]+")";
    document.getElementById("link-carosello").href=pagina[index];
}