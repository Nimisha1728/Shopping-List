function veg()
{
    
   
    var txt="";
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
           
            var response=JSON.parse(this.responseText);
            var Jlist=response.list;
            txt+="<table>";
              txt+="<tr><td> "+ Jlist[2].serialNo +"</td><td>"+Jlist[2].name+ "</td><td>"+ Jlist[2].quantity+ "</td><td>"+ Jlist[2].unit + "</td><td>"+ Jlist[2].department+ "</td><td>"+ Jlist[2].notes+ "</td></tr>";
                 txt+="<tr><td> "+ Jlist[3].serialNo +"</td><td>"+Jlist[3].name+ "</td><td>"+ Jlist[3].quantity+ "</td><td>"+ Jlist[3].unit + "</td><td>"+ Jlist[3].department+ "</td><td>"+ Jlist[3].notes+ "</td></tr>";
                 txt+="<tr><td> "+ Jlist[5].serialNo +"</td><td>"+Jlist[5].name+ "</td><td>"+ Jlist[5].quantity+ "</td><td>"+ Jlist[5].unit + "</td><td>"+ Jlist[5].department+ "</td><td>"+ Jlist[5].notes+ "</td></tr>";
                
            txt+="</table>";
            
             document.getElementById("list-table").innerHTML=txt;


            
        }
    }
    xhttp.open("GET","list.json",true);
    xhttp.send();

   
}

function grocery()
{
    var txt="";
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
           
            var response=JSON.parse(this.responseText);
            var Jlist=response.list;
            txt+="<table>";
                 txt+="<tr><td> "+ Jlist[0].serialNo +"</td><td>"+Jlist[0].name+ "</td><td>"+ Jlist[0].quantity+ "</td><td>"+ Jlist[0].unit + "</td><td>"+ Jlist[0].department+ "</td><td>"+ Jlist[0].notes+ "</td></tr>";
                 txt+="<tr><td> "+ Jlist[1].serialNo +"</td><td>"+Jlist[1].name+ "</td><td>"+ Jlist[1].quantity+ "</td><td>"+ Jlist[1].unit + "</td><td>"+ Jlist[1].department+ "</td><td>"+ Jlist[1].notes+ "</td></tr>";
                 txt+="<tr><td> "+ Jlist[6].serialNo +"</td><td>"+Jlist[6].name+ "</td><td>"+ Jlist[6].quantity+ "</td><td>"+ Jlist[6].unit + "</td><td>"+ Jlist[6].department+ "</td><td>"+ Jlist[6].notes+ "</td></tr>";
                 txt+="<tr><td> "+ Jlist[8].serialNo +"</td><td>"+Jlist[8].name+ "</td><td>"+ Jlist[8].quantity+ "</td><td>"+ Jlist[8].unit + "</td><td>"+ Jlist[8].department+ "</td><td>"+ Jlist[8].notes+ "</td></tr>";
                 txt+="<tr><td> "+ Jlist[9].serialNo +"</td><td>"+Jlist[9].name+ "</td><td>"+ Jlist[9].quantity+ "</td><td>"+ Jlist[9].unit + "</td><td>"+ Jlist[9].department+ "</td><td>"+ Jlist[9].notes+ "</td></tr>";
                
            txt+="</table>";
            
             document.getElementById("list-table").innerHTML=txt;


            
        }
    }
    xhttp.open("GET","list.json",true);
    xhttp.send();
}
 
 function fruits()
 {
     
    
     var txt="";
     var xhttp=new XMLHttpRequest();
     xhttp.onreadystatechange=function(){
         if(this.readyState==4&&this.status==200){
            
             var response=JSON.parse(this.responseText);
             var Jlist=response.list;
             txt+="<table>";
             txt+="<tr><td> "+ Jlist[4].serialNo +"</td><td>"+Jlist[4].name+ "</td><td>"+ Jlist[4].quantity+ "</td><td>"+ Jlist[4].unit + "</td><td>"+ Jlist[4].department+ "</td><td>"+ Jlist[4].notes+ "</td></tr>";
             txt+="<tr><td> "+ Jlist[7].serialNo +"</td><td>"+Jlist[7].name+ "</td><td>"+ Jlist[7].quantity+ "</td><td>"+ Jlist[7].unit + "</td><td>"+ Jlist[7].department+ "</td><td>"+ Jlist[7].notes+ "</td></tr>"; 
                 
             txt+="</table>";
             
              document.getElementById("list-table").innerHTML=txt;
 
 
             
         }
     }
     xhttp.open("GET","list.json",true);
     xhttp.send();
 
    
 }