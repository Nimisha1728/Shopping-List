function list()
{
   
    var txt="";
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
           
            var response=JSON.parse(this.responseText);
            var Jlist=response.list;
            txt+="<table>";
            
            for(var i=0;i<Jlist.length;i++)
            {
                 txt+="<tr><td> "+ Jlist[i].serialNo +"</td><td>"+Jlist[i].name+ "</td><td>"+ Jlist[i].quantity+ "</td><td>"+ Jlist[i].unit + "</td><td>"+ Jlist[i].department+ "</td><td>"+ Jlist[i].notes+ "</td></tr>";
               

            }
            txt+="</table>";
            
             document.getElementById("list-table").innerHTML=txt;


            
        }
    }
    xhttp.open("GET","list.json",true);
    xhttp.send();

   
}

