const img=[];
let index=0;

function caroselloStart(){
    img.push("Immagini/ludoBanner.png");
    img.push("Immagini/slotBanner.png");
    img.push("Immagini/thelemaBanner.png");
    document.getElementById("slideCarosello").style.backgroundImage="url('Immagini/slotBanner.png')";
    document.getElementById("slideCarosello").style.backgroundImage="url('Immagini/thelemaBanner.png')";
    document.getElementById("slideCarosello").style.backgroundImage="url('Immagini/ludoBanner.png')";

    setInterval(function(){
        document.getElementById("slideCarosello").style.backgroundImage="url("+img[index]+")";
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
}