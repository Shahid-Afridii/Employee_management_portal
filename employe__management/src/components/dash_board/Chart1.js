import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import axios from "axios";









const DemoPie = () => {
  const [Value,setValue]=useState([])
  useEffect(()=>{
          axios.get(`http://localhost:3000/dashboard/getalluser`).then(res=>{
            console.log(res)
          
              setValue(res.data)
              console.log(res.data)

          })
  },[])


  var data = [
    {
      type: 'Men',
      value: Value.filter(e=>e.Gender=="Male").length,
    },
    {
      type: 'women',
      value: Value.filter(e=>e.Gender=="Female").length,
    }
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat((percent * 100).toFixed(0), '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return <div className='border p-4 m-3'>
      <Pie {...config} />
  </div>;
};

export default DemoPie;