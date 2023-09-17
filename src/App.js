// Dependencies
import React, { useState } from "react";
import { generateDate,months } from "./utils/calender";
import cn from "./utils/cn";
import dayjs from "dayjs";
import {GrFormNext, GrFormPrevious } from "react-icons/gr"
export default function App() {
 
  const days = ["Mon","Tue", "Wed","Thu","Fri", "Sat","Sun"];

  const currentDate=dayjs();
  const [today, setToday]=useState(currentDate);
  const [selectDate,setSelectDate]= useState(currentDate)
  
  return (
    //calender frame
  <div className=" flex  mx-auto my-44 border-2 rounded w-96  sm:py-3.5   sm:px-3.5   ">
    <div className="w-96  h-full  font-semibold">
    {/* header of calender */}
   <div className="flex justify-between sm:py-3.5 sm:px-3.5 px-1 py-1">
   {/* to display the month name and year */}
    <h1>{months[today.month()]}   {today.year()}</h1>

     {/* Buttons back and forward */}
   <div className="flex items-center gap-5 ">
   <GrFormPrevious className="w-5 h-5 cursor-pointer border-2 rounded-full "  
   
   onClick={() =>{
    setToday(today.month(today.month()-1));
   }}/>
   <GrFormNext  className="w-5 h-5 cursor-pointer border-2 rounded-full" 
   
   onClick={() =>{
    setToday(today.month(today.month()+1));
   }}/>

   </div>
   </div>

  
{/* Days  */} 

    <div  className="w-full grid grid-cols-7  bg-neutral-100 rounded"> 

    {days.map((day,index)=>{
      return <h1 key={index} className="h-10 grid place-content-center">{day}</h1>;
    })}

    </div>
    {/* Days */}
    <div className="w-full  grid grid-cols-7 ">
      {generateDate(today.month(),today.year()).map(({ date, currentMonth, today }, index) => {
        return (    
          
          <div key={index} className="h-5 sm:h-10 grid place-content-center">
             <h1 className={
              cn(currentMonth? "":"text-gray-400",
              today ?"border-solid   rounded-full border-2 h-6 w-6":"",
              selectDate.toDate().toDateString()===date.toDate().toDateString()
              ?" bg-green-300"
              : "",
              "h-6 w-6 grid place-content-center  hover:bg-orange-300 rounded-full transition-all cursor-pointer" 
              )}
              onClick={()=>{
                setSelectDate(date);
              }}
              >
              {date.date()}</h1>  {/*displaying each day here */}
          </div>
        );
      })}
    </div>
    </div>
    </div>
  );
}
