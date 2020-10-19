$('document').ready(()=>
    {
        //alert("helloo");
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/users",
            method:"GET",
            success:(data)=>{
              for(var i=0;i<data.length;i++)
              
                {
                    $("#tbody").append( `<tr>`+
                     `<td>`+data[i].id+`</td>`+
                     `<td>`+data[i].name+`</td>`+
                     `<td>`+data[i].username+ `</td>`+
                     `<td>`+data[i].email+`</td>`+
                     `<td>`+data[i].phone+`</td>`+
                  `</tr>`)
                }
                $("#mytab").DataTable();
            },
            error:(e)=>{
                alert("error"+e);
            }
          
        })
       
    }
)