//------------------------------------------------------------------------------
    // 1) how to compare two JSON have the same properties without order? 
     
         let obj1={name:"person 1",age:5};
         let obj2={age:"5",name:"person 2",life:5};
         let flag=true
          for(let e in obj1){

           if(obj1[e]!==obj2[e]){
           flag=false;
           break;
         }
       }
       flag?console.log("Equal"):console.log("Not Equal")       
       
       
                
    //--------------------------------------------------------------------------------
    
    //    2)Display all countries flag and population

                function handleData(){
                
                let data = JSON.parse(this.responseText)
                console.log(data)
                for(i in data)
                 {
                    console.log(data[i].name.common,data[i].flag,data[i].population)
                }
            }
                 const req = new XMLHttpRequest();
                 req.addEventListener('load',handleData)
     
             req.open("GET","https://restcountries.com/v3.1/all")
             req.send()
    
    //_______________________________________________________________________//
   
    //     3)print all countries names,regions,subregion

         function handleData(){
                
                let data = JSON.parse(this.responseText)
                console.log(data)
                
                  for(i in data)
                 {
                     console.log(data[i].name.common,data[i].region,data[i].subregion,data[i].population)
                 }
                }
    
                const req1= new XMLHttpRequest();
                 req1.addEventListener('load',handleData)
     
               req1.open("GET","https://restcountries.com/v3.1/all")
               req1.send()