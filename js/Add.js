 class Studentdata {
     constructor() {
         this.StudentName = null;
         this.FatherName = null;

         this.StudentCnic = null;
         this.SubmittDate = null;
         this.gender = null;
         this.city = null;
         this.Address = null;

     }


 }

 var studentArray = JSON.parse(localStorage.getItem("Student Data"))||[];

 function dataSubmit() {
     event.preventDefault();
     var student = new Studentdata();
     student.StudentName = stuName.value;
     student.FatherName = stufname.value = stufname.value;
     student.StudentCnic = CNIC.value;
     student.SubmittDate = datecurrent.value;
     student.city = typeselectt.value;
     student.Address = Address.value;
     student.gender = document.querySelector(".Gender:checked").value;
     studentArray.push(student);
     localStorage.setItem("Student Data", JSON.stringify(studentArray));
        
 
        

 }

 
 

  text ="<ul class='collapsile'>";
  for(var i=0;i<studentArray.length; i++)
  {
    
     text+= `<li><div class="collapsible-header">${studentArray[i].StudentName}</div><div class="collapsible-body"><span>${studentArray[i].FatherName}</span></div></li>`;
  

  }
  
  
 text+="<ul/>";
 
 dis.innerHTML =text;

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
    

       
       
//    });
   


         
