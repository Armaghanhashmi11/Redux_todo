import React, { useState } from "react";

const Todo = () => {
  const [inputData,setinputData] =useState('');
  const [items,setitems]=useState([]);
  const additems =()=>{
    if(!inputData){

    }
    else{
      setitems([...items,inputData]);
      setinputData('')
    }
  }
  const deleteitem=(id)=>{
    console.log(id)
    const updateditems =items.filter((elem,index)=>{
     return index !== id;
    });
    setitems(updateditems)
  }
  const Removeall=()=>{
    setitems([]);
  }
  return (
    <div className="bg-bgpurple w-[100%] h-screen  flex justify-center font-bold text-3xl text-center flex-col">
      <p className="text-gray-100">Add Your List Here ✌️</p>
      <div className="mt-5   w-96 rounded-full bg-white flex justify-center items-center mx-auto">
        <input
          className="rounded-full h-16 w-80 font-semibold outline-none text-base text-black"
          text="text"
          value={inputData}
          placeholder="✍️ additems..."
          required
          onChange={(e)=> setinputData(e.target.value) }
        />
        <img
          className=" h-7 cursor-pointer"
          src="./images/plus.svg"
          alt="/"
          onClick={additems}
        ></img>
      </div>
      {
        items.map((elem,index)=>{
          return (
            <div
        className="mt-5  outline-none w-96 h-16  rounded-full bg-white  flex justify-between items-center mx-auto"
      key={index}  
      >
        <h1 className="text-2xl  ml-5 text-black">{elem}</h1>
        <img
          className=" h-7 cursor-pointer mr-5"
          src="./images/trash.svg"
          alt="/"
          onClick={()=>deleteitem(index)}
        ></img>
      </div>
          )
        })
      }

      

      <div className="flex justify-center items-center mx-auto">
        <button className="bg-red-700  text-white text-3xl font-bold text-center rounded-full mt-8 h-16 w-56 hover:bg-gray-400 "
        onClick={Removeall}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default Todo;
