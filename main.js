/*

function jkono(){
  var btn=document.querySelector(".para")
  console.log('জোোনে')
}
function showAlert(){
    function f(){
        document.write("007 hanif");
        
    }
    setTimeout(f,3000)
    setInterval(f,1000)
}

var num=15;
console.log(num);
var newNum= num++;
console.log(num);
console.log(newNum);
console.log(num);



var a = 10
var b = 40;
var c = 40
console.log(a && b > 40);

let age = 20;
console.log((age > 18) ? "you Can voto" : "you cannot vote");
let p = document.querySelector(".para");
p.innerHTML = (age > 18) ? "🥰🥰🥰🥰" : "🧶🧵🎯a"


var num=20;
while(num<10) {
    
    console.log(num);
    num++
}


var num=15
do{
    console.log("inside loop");
    num++
    
}while(num<10)

var a= 20;
while(a<10){
    console.log('inside while');
}
for(var b=0; b<=10; b++){
    
    if(b===7){
        console.log(`${b} is skipped`)
        continue ;
    }
    console.log(`now we found ${b}`);
    
}
                
                
                
                
   var players=["shakib","tamim","mushfq"]             
    console.log(players.length);    
    players.push("মাশরাফি")
    console.log(players);
    players.pop()
    console.log(players);
    players.shift()
    console.log(players);
    players.unshift("নাইম")
    console.log(players);
    players.push("হাশিম আমলা","আলাউদ্দিন")
    
    console.log(players);
    for(i=0; i<players.length; i++){
        console.log(players[i]);
        
        
        
        
    }
            
            
            
            
    var obj={
        name:"kawsar",
        roll:34,
        vill:"lohadi",
        isMerrid:false,
       subj:['bangla','english']
        
    }       
    
    var arrObj=[
        `zonayed`,
        {
            name:"rafiw",
            roll:5,
            job:"student"
        },
        `bangladesh`
        ]
    
    console.log( typeof obj.isMerrid);
    console.log(typeof arrObj[2]);
    
    */
    
    function showNamta(){
        var inp=document.querySelector(".para").value;
        var pre=document.querySelector("#pre")
       
        inp=Number(inp)
       var p1=document.querySelector('#p1')
       var p2=document.querySelector('#p2')
       var p3=document.querySelector('#p3')
       var p4=document.querySelector('#p4')
       var p5=document.querySelector('#p5')
       var p6=document.querySelector('#p6')
       var p7=document.querySelector('#p7')
       var p8=document.querySelector('#p8')
       var p9=document.querySelector('#p9')
       var p10=document.querySelector('#p10')
    
       
       
       
       p1.innerHTML=inp +" ✕ " +1+"="+ inp*1;
       p2.innerHTML=inp +" ✕ " +2+"="+ inp*2;
       p3.innerHTML=inp +" ✕ " +3+"="+ inp*3;
       p4.innerHTML=inp +" ✕ " +4+"="+ inp*4;
       p5.innerHTML=inp +" ✕ " +5+"="+ inp*5;
       p6.innerHTML=inp +" ✕ " +6+"="+ inp*6;
       p7.innerHTML=inp +" ✕ " +7+"="+ inp*7;
       p8.innerHTML=inp +" ✕ " +8+"="+ inp*8;
       p9.innerHTML=inp +" ✕ " +9+"="+ inp*9;
       p10.innerHTML=inp +" ✕" +10+"="+ inp*10;
       pre.value=""
      
    }
    
    
        
     // for (num = 1; num <= 10; num++) {
           // var jarNamta = inp;
            
            //var result=jarNamta + " * " + num + "=" + num * jarNamta;
           // document.write(result+"<br>")
           
           
            

     //   }
        
        
   // }
    
    