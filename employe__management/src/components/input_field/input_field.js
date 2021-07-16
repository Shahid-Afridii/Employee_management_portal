import React, {useEffect,useState} from "react";
import axios from "axios";

const Inputfield = () =>
{
  const [name,setName]=useState("");
  const [id,setId]=useState("");
  const [Type,setType]=useState("");
  const [Gender,setGender]=useState("");
  const [Department,setDept]=useState("");
  const [Purpose,setPurp]=useState("");
  const [error,SetError]=useState({
    name:"",
    id:"",
    Type:"",
    Gender:"",
    Department:"",
    Purpose:"",
    error:""
  });

 const onsubmit=()=>{
   if(name ==""){
     SetError({
       name:"Name is Required"
     })
    }
     else if(name ==""){
      SetError({
        name:"Name is Required"
      })
    }
      else if(id ==""){
        SetError({
          id:"Id is Required"
        }) 
      }
        else if(Gender ==""){
          SetError({
            Gender:"Gender is Required"
          })
        }
        else if(Department ==""){
          SetError({
            Department:"Department is Required"
          })
        }
        else if(Purpose ==""){
          SetError({
            Purpose:"Purpose is Required"
          })
        }else{
          let data={
            name,id,Type,Gender,Department,Purpose
          }
          axios.post(`http://localhost:3000/input/insert`,data).then(res=>{
            setName("") 
            setId("")
            setDept("")
            setType("")
            setGender("")
            setPurp("")
            
          })
        //   console.log("Name is :"+name)
        //   console.log("Id is :"+id)
        //   console.log("Employee type is :"+Type)
        //  console.log("Gender is :"+Gender)
        //  console.log("Department is :"+Department)
        //  console.log("The purpose is :"+Purpose)
        }
   


  }
  
    return(
       <div className="text-center w-100 mt-4" no > 
       <div className="centercard">
       <div className="container" >

<div class="card justify-content-center align-items-center centercard"  >
<div class="card-body col=12">

<h5 class="card-title " style={{color:"darkblue"}}>Log in</h5>

<div class="row">
<div class="col">
<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} class="form-control" placeholder=" Name" aria-label="Name"/>
<div className="text-danger" >{error.name}
</div>
</div>
<div class="col">
<input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} class="form-control" placeholder="Enter your Id" aria-label="Enter Your ID"/>
<div className="text-danger" >{error.id}
</div>
</div>
</div>

<div class="row">
<div class="col">
<br/>
<select class="form-select form-select- sm-3" onChange={(e)=>{setType(e.target.value)}} aria-label=".form-select-lg example" style={{width:525}}>

<option selected>Employee Type</option>
<option value="Internship">Internship</option>
<option value="Contract">Contract</option>
<option value="Internal">Internal</option>

</select>
</div>
<div class="col">
<br/>
<select class="form-select form-select- sm-3" onChange={(e)=>{setGender(e.target.value)}} aria-label=".form-select-lg example" style={{width:525}}>
<option selected>Gender</option>
<option value="Male">Male</option>
<option value="Female">Female</option>



</select>
</div>

</div>


<div class="row">
<div class="col">
<br/>
<select class="form-select form-select- sm-3" onChange={(e)=>{setDept(e.target.value)}}aria-label=".form-select-lg example" style={{width:525}}>
<option selected>Department</option>
<option value="Hardware">Hardware</option>
<option value="Techniqal">Techniqal</option>
<option value="Support">Support</option>
<option value="Testing">Testing</option>
<option value="Designing">Designing</option>
<option value="Developing">Developing</option>

</select>
</div>
<div class="col">
<br/>
<input type="text" class="form-control" placeholder="Purpose" onChange={(e)=>{setPurp(e.target.value)}} aria-label="Purpose" style={{width:525}}/>
<div className="text-danger" >{error.Purpose}
</div>
</div>

</div>
<br/>
<button onClick={()=>{onsubmit()}} type="submit" class=" btn-lg" style={{width:170}}>Submit</button>




</div>
</div>
</div>
       </div>

            
          </div>


    )
}

export default Inputfield;