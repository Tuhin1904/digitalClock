import React,{useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  let [ctime, setCTime]= useState(time)

  const updateTime=()=>{
    ctime=new Date().toLocaleTimeString();
    setCTime(ctime);
  }
  setInterval(updateTime,1000)
  return (
    <>
      <h1>Hi Tuhin the current time is {ctime}</h1>
    </>
    );
}

export default App;
