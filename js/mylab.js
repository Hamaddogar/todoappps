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

 var studentArray = JSON.parse(localStorage.getItem("Student Data")) || [];

 function dataSubmit() {
     event.preventDefault();
     var student = new Studentdata();
     student.StudentName = stuName.value;
     student.FatherName = stufname.value;
     student.StudentCnic = CNIC.value;
     student.SubmittDate = datecurrent.value;
     student.city = typeselectt.value;
     student.Address = Address.value;
     student.gender = document.querySelector(".Gender:checked").value;
     studentArray.push(student);
     localStorage.setItem("Student Data", JSON.stringify(studentArray));




 }

 let itemupdate = (index) => {
    var stor= JSON.parse(localStorage.getItem("Student Data"))
   var gett =    stor[index];
   stuName.value   =  gett.StudentName;
 }

 let itemDelete = (index) => {
     studentArray.splice(index, 1);
     localStorage.setItem("Student Data", JSON.stringify(studentArray));
     
 }

//   function myFunction(index){
//     console.log(in)
//     // var stor= JSON.parse(localStorage.getItem("Student Data")) ;
//     //  var gett =stor[index];
//     //  console.log(gett);



//  }


 studentArray.map((item,index) => {
      //console.log('index:',item);

     dis.innerHTML +=`<div>Name : ${item.StudentName} FatherName: ${item.FatherName} <button onclick=itemDelete(${index})> Delete </button> <button onclick=itemupdate(${index})> Update </button> <div/>`;


 });

