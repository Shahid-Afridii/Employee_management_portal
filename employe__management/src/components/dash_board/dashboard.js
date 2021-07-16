import React ,{useEffect,useState} from "react"
import axios from "axios"
import Chart1 from "./Chart1"
import Chart from "./Chart"
const Dashboard = () =>
{
    const [data,setData]=useState([])
    useEffect(()=>{
            axios.get(`http://localhost:3000/input/getalluser`).then(res=>{
                setData(res.data)
                console.log(res.data)

            })
    },[])
    return(
        <div class="container">
<div class="row">
      <div class="col-lg-6">
        <Chart1/>
        </div>
        <div class="col-lg-6">
        <Chart/>
        </div>
  </div>
         <br/>
          <table  class="table table-striped">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Employee Id</th>
      <th scope="col">Gender</th>
      <th scope="col">Employee Type</th>
      <th scope="col">Department</th>
      <th scope="col">Purpose</th>
    </tr>
  </thead>
  <tbody>
        {data.map((e,index)=>{
            return   <tr>
            <th scope="row">{index+1}</th>
            <td>{e.name}</td>
            <td>{e.Emp_Id}</td>
            <td>{e.Gender}</td>
            <td>{e.Type}</td>
            <td>{e.Department}</td>
            <td>{e.Purpose}</td>
          
          </tr>
        })}
  </tbody>
</table>
          </div>


    )
}

export default Dashboard;