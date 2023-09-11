import React from 'react'
import {useEffect, useState} from 'react';
import axios from "axios";

const Axios = () => {
    const[userData, setData]=useState([]);
    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        setData(response.data);
        
        });
    },[]);
  return (
    <div align="center"> 
         
            <div> 
            <table border="">
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
            {userData.map((data)=>{
                return (
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
            </tr>)})}
            </table>
            
            
            </div>
        

   
</div>
  );
};
export default Axios
