import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';
import axios from 'axios'

const DemoColumn = () => {
    const [Value1,setValue1]=useState([])
    useEffect(()=>{
            axios.get(`http://localhost:3000/dashboard/getalluser`).then(res=>{
              
            
                setValue1(res.data)
                console.log(res.data)
                console.log(Value1.filter(e=>e.Type=="Internship").length)
  
            })
    },[])
  var data = [
    {
      type: 'Internship',
      sales: Value1.filter(e=>e.Type=="Internship").length,
    },
    {
        type: 'Contract',
        sales: Value1.filter(e=>e.Type=="Contract").length,
    },
    {
        type: 'Internal',
        sales: Value1.filter(e=>e.Type=="Internal").length,
    },
   
  
  
  ];
  var config = {
    data: data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: 'Count' },
      sales: { alias: 'People count' },
    },
  };
  return <div className='border p-4 m-3'>
      <Column {...config} />
  </div>;
};

export default DemoColumn;