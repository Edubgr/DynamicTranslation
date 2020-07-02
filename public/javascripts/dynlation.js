var divif=0
var tecla=0
var textodiv=""
var s=text

var arraystrn=s.split('\n')
btmais = document.getElementById("btmais")
btvoltar = document.getElementById("btvoltar")
function voltar(){
    location.href="/input"
}
var tag=1
btmais.onclick=function(){
    if(tag){
        tecla=16
        tag=0
        textodiv=""
    }else {
        tecla=0
        tag=1
    }
}

for(var n=0;n<arraystrn.length;n++){
    var str=arraystrn[n]
    var arraystr=str.split(' ')
    console.log(arraystr)
    
    console.log(arraystrn.length)
    divpar = document.createElement('p')
    divpar.setAttribute("id","p"+n)

    nom.insertAdjacentElement('beforeend',divpar)
    for(var i=0;i<arraystr.length;i++){
        divnew = document.createElement('span')
        var texto = document.createTextNode(arraystr[i]+" ")
        divnew.appendChild(texto)
        divnew.style.cursor="pointer"
        divnew.setAttribute("id","p"+n+"-"+i)
        console.log(divpar.id+"  "+divnew.id)
        divpar.insertAdjacentElement('beforeend',divnew)       
    }
    
    document.body.onclick= function(e){
        console.log(e.target.id)
        var display = document.getElementById("trad").style.display;
        if(display == "block" && e.target.id!=divif){
            document.getElementById("trad").style.display = 'none';
            divif=0
        }
    }
    document.addEventListener('keydown', function(){
                tecla = event.keyCode;
                console.log(tecla)
            })
    document.addEventListener('keyup', function(){
                tecla = 0;
                console.log(tecla)
            })    
    for(var i=0;i<arraystr.length;i++){
        var div=document.getElementById('p'+n+"-"+i)
    
        div.onclick = async(e)=>{
            divtrad = document.getElementById("trad")
            async function getText(e){
                if(tecla==16){
                    textodiv+=e.target.innerText+" "
                    console.log(textodiv)
                }else {
                    textodiv=e.target.innerText+" "  
                }
            }
            await getText(e)
            const response = await fetch('/tradutor/'+textodiv , { method: 'get'})
            const result = await response.text()
            const textotrad = result
            //fetch('/tradutor/'+textodiv , { method: 'get'}).then(result=>console.log(result.text().then(result=>console.log(result))))
            
            divtrad.innerText= textotrad
                if(divif==this.id){
                    divtrad.style.display="none";
                    textodiv=""
                    divif=0
                }
                else {
                    divif=this.id
                    divtrad.style.display="block"
                }
                coordenadas = e.target.getBoundingClientRect();
                coordenadas1 = divtrad.getBoundingClientRect();
                divtrad.style.top=String(e.target.offsetTop+coordenadas.height)+"px"
                if(e.target.offsetLeft+(coordenadas.width-coordenadas1.width)/2<5)divtrad.style.left="5px"
                else divtrad.style.left=String(e.target.offsetLeft+(coordenadas.width-coordenadas1.width)/2)+"px"
            //divtrad.innerText=textodiv
            
            
            
        }   
    }
}