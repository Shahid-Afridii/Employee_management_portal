import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import axios from "axios";

import { Column } from '@ant-design/charts';

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
      value: 22,
    },
    {
        type: 'Contract',
        value: Value1.filter(e=>e.Type=="Contract").length,
    },
    {
        type: 'Internal',
        value: Value1.filter(e=>e.Type=="Internal").length,
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
      type: { alias: '类别' },
      sales: { alias: '销售额' },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;