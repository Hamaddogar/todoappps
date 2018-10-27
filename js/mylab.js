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
 var selectedindex = -1;

 function dataSubmit() {


     var student = localStorage.getItem('editObject');

     if (student) {
         student = JSON.parse(student);


     } else {

         student = new Studentdata();
         student.id = Math.round(Math.random() * 100);

     }


     student.StudentName = stuName.value;
     student.FatherName = stufname.value;
     student.StudentCnic = CNIC.value;
     student.SubmittDate = datecurrent.value;
     student.city = typeselectt.value;
     student.Address = Address.value;
     student.gender = document.querySelector(".Gender:checked").value;

     
     var tElement = studentArray.filter(function(sStudent){
            return sStudent.id == student.id;
     })[0];

     if(tElement){
         var eIndex = studentArray.indexOf(tElement);
         studentArray[eIndex] = student;
         localStorage.removeItem('editObject');
     }else{
         studentArray.push(student);
     }




     //  if (selectedindex === -1) {

     //      studentArray.push(student);
     //  } else {
     //      console.log("SsS");
     //      studentArray.splice(selectedindex, 1, student);
     //  }
     localStorage.setItem("Student Data", JSON.stringify(studentArray));





 }


 let editObejct = (index) => {


     selectedindex = index;
     var updatedate = studentArray[index];
     localStorage.setItem('editObject', JSON.stringify(updatedate));
     location.href = 'index.html';

 }

 let itemupdate = (index) => {


     let editignObject = localStorage.getItem('editObject');

     if (!editignObject) {
         return
     }


     editignObject = JSON.parse(editignObject)

     var updatedate = editignObject

     stuName.value = updatedate.StudentName;

     stufname.value = updatedate.FatherName
     CNIC.value = updatedate.StudentCnic;
     datecurrent.value = updatedate.SubmittDate;
     typeselectt.value = updatedate.city;
     Address.value = updatedate.Address;
     document.querySelector(".Gender:checked").value = updatedate.gender;
     document.getElementById("Submitt").innerHTML = "Update";
     myfuntion();


 }

 let itemDelete = (index) => {

     studentArray.splice(index, 1);
     localStorage.setItem("Student Data", JSON.stringify(studentArray));
     myfuntion();

 }






 function myfuntion() {
     var studentArray = JSON.parse(localStorage.getItem("Student Data")) || [];


     dis.innerHTML = "";
     studentArray.map((item, index) => {
         //console.log('index:',item);

         dis.innerHTML += `<div class="container"><table class="striped" id="myid"><thead id="tblhead"><tr></tr><th>Name</th><th>Father Name</th> <th>Student Cnic </th>
     <th>Submitt Date</th>
     <th>city</th>
     <th>Address</th>
     <th>Gender</th>
     <th>Opertion</th>

     
 </tr></thead> <tbody id="tblbody"><tr>
 <td>${item.StudentName}</td>
 <td>${item.FatherName}</td>
 <td>${item.StudentCnic}</td>
 <td>${item.SubmittDate}</td>
 <td>${item.city}</td>
 <td>${item.Address}</td>
 <td>${item.gender}</td>
 
 
 <td><div><button onclick=itemDelete(${index}) class="waves-effect waves-light btn"> Delete </button>&nbsp;&nbsp;<button onclick=editObejct(${index}) class="waves-effect waves-light btn"> Update </button></td></tr></tbody>  </table><div/>`;


     });
 }