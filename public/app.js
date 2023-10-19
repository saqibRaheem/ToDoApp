
function logIn(){
  var email = document.getElementById('email').value
   var password = document.getElementById('password').value

   axios.post('http://localhost:5000'+'/login',{
    email:email,
    password:password
   })
   .then((res)=>{
      console.log(res);
      localStorage.setItem('token', res.data.token)
      alert(res.data.message)
      window.location.href = "/todo.html"
    })
    .catch((err)=>{
     console.log(err);
     console.log("fail")
   })
}

function signUp(){
   var name = document.getElementById('name').value
   var email = document.getElementById('email').value
   var password = document.getElementById('password').value
   var phone = document.getElementById('phone').value

   console.log(name,email,password,phone);

   
   axios.post('http://localhost:5000'+'/register' , {
    name:name,
    email:email,
    password:password,
    phone:phone
   },{withCredentials:true})
   .then((res)=>{
    console.log(res)
    alert(res.data.message)
    window.location.href = "/signup.html"
   })
   .catch((err)=>{
    console.log(err)
    console.log("fail")
   })
}
// ********  TODO FUNCTIONALITY ********* //
var todo_list = document.getElementById('todo-list')

function addtodo(){
   var item = document.getElementById('iteam').value
   const token = localStorage.getItem('token');
    // console.log(item);
    axios.post('http://localhost:5000'+'/item',{
      item:item
    },{
      headers: {
        'Authorization': token
      },
    }).then((res)=>{
      alert(res.data.message)
      getData();
      document.getElementById('iteam').value = ""
      console.log(res.data.message);
    }).catch(()=>{
      console.log("fail")
    })
    
    
}

function getData() {
     console.log("get");
     const token = localStorage.getItem('token');
     axios.get('http://localhost:5000'+'/item',{
      headers: {
        'Authorization': token
      },
     })
    .then((res)=>{
        document.getElementById('todo-list').innerHTML = ""
        res.data.data.map((data)=>{
                    var newData = `
                        <li class="item-input" id=${data._id}>${data.item}</li>
                        <br /> 
                        <button class="removebtn" href="javascript:void(0)" onclick="deletebtn('${data._id}')">Delete |</button>
                        <button href="javascript:void(0)" class="editbtn" onclick="editBtn('${data._id}', '${data.item}');">| Edit</button>
                    `;
                    document.getElementById('todo-list').innerHTML += newData;
                
        })

      console.log(res.data.data);
    }).catch(()=>{
      console.log("fail")
    })
     
} 

function editBtn(id,item){
  // console.log(id , item);
  document.getElementById(id).innerHTML = `
<li><input type="text" id="editVal" value="${item}" /></li>
<br />
<button class="editbtn" onclick=update("${id}")>| update</button>
` 
// document.getElementById(id).innerHTML = newData
}

function update(id){
  var todo = document.getElementById('editVal').value
  const token = localStorage.getItem('token')
  axios.put('http://localhost:5000/item/'+id ,{
    item:todo,
  },{
    headers: {
      'Authorization': token
    },
  })
  .then((res)=>{
    console.log(res);
      alert(res.data.message)
      getData();
  }).catch((err)=>{
       console.log(err);
  })
  // console.log(id, todo);
}

function deletebtn(id){
  const token = localStorage.getItem('token')
axios.delete('http://localhost:5000/item/'+id,{
  headers: {
    'Authorization': token
  },})
.then((res)=>{
   alert(res.data.message)
   getData();
  }).catch((err)=>{
    console.log(err);
  })
}

function deleteall(){
  localStorage.removeItem('token')
  window.location.href = './signup.html'
}
     getData();