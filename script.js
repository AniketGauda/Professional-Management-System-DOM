let arr = [
    // {id:1,name:"jack",profession:"developer",age:23}, 
    // {id:2,name:"john",profession:"admin",age:28},
    // {id:3,name:"cathy",profession:"intern",age:21}
];

let nm = document.getElementById("name");
let pf = document.getElementById("profession");
let ag = document.getElementById("age");

let pDiv = document.getElementById("employees");

let esm = document.getElementById("esMsg");

function display(){
    if(arr.length==0){
        pDiv.innerHTML = `<p>You have 0 employees</p>`
    }
    else{
        let ans;
        pDiv.innerHTML = ``;
        arr.map((elt,idx)=>{
            ans=``;
            ans+=`<div>
            <div>
                <span>${elt.id}.</span>     
                <span>Name: ${elt.name}</span>    
                <span>Profession: ${elt.profession}</span>      
                <span>Age: ${elt.age}</span>
            </div>
            <button onclick = 'dltItem(${idx})'>Delete User</button>
            </div>`;
            pDiv.innerHTML += ans;
        });
    }
}

display();

function myFun(){
    esm.innerHTML = ``;
    if(nm.value.length==0||pf.value.length==0||ag.value.length==0){
        let d = document.createElement("span");
        d.textContent = `Error : Please Make sure All the fields are filled before adding in an employee !`
        d.setAttribute("style",`
            color: red;
            font-size: 17px;`
        );
        esm.appendChild(d);
    }
    else{
        let d = document.createElement("span");
        d.textContent = `Success : Employee added!`
        d.setAttribute("style",`
            color: lime;
            font-size: 17px;`
        );
        esm.appendChild(d);
        updateArr(nm.value,pf.value,ag.value);
    }
    nm.value="";pf.value="";ag.value="";
}

function updateArr(name,prof,age){
    let obj = {};
    obj.id = arr.length+1;
    obj.name = name;
    obj.profession = prof;
    obj.age = age;
    arr.push(obj);
    display();
}

function dltItem(idx){

    arr.forEach((elt,i)=>{
        if(i==idx){
            for(let j=i+1;j<arr.length;j++)
                arr[j].id--;
        }
    })

    arr = arr.filter((elt,i)=>{
        if(i!=idx)
            return elt;
    })
    
    display();
}