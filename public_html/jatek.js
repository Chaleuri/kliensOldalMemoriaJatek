var tomb = new Array();
var elso = true;
var elozo;
var alap;
var pontok = 0;



function init()
{
    
    for (var i = 0; i < 12; i++)
    {
        
        tomb[i] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        
    }
    
    console.log(tomb);
    $("kezdGomb").click("kezd()");
    kezd();
}

function kezd()
{
    
    for (var i = 0; i < 12; i++)
    {
        
        $("img").attr("src", "kepek/kartya_alap.jpg");
        $("img").click("ellenoriz(this.id)");
        $("img").attr("id",i);
        
    }
    
    kever();
    pontok = 0;
    
}

function kever()
{
    
    tomb.sort(function(a, b){return 0.5 - Math.random();});
    console.log(tomb);
    
}

function ellenoriz(akt)
{
    
    fordit(akt);
    
    
    if(elso)
    {
        
        elso = false;
        elozo = akt;
        
    }else
    {
        
        if(akt === elozo)
        {
            
            pontok++;
            
        }else
        {
            
            setTimeout(visszafordit, 1000);
            
        }
        
    }
    
}

function fordit(id) {
    
    szam = tomb[id]
    var szoveg = "kepek/kartya_" + szam + ".jpg";
    
    $("img").attr("src", szoveg);
    $("img")[i].click("");
    
}

function visszafordit() {
    
    
    
}

window.addEventListener('load', init, false);