// Dependencies
import React from "react";
import { generateDate } from "./utils/calender";

export default function App() {
  console.log(generateDate());
  const days = []
  return (
    <div class="w-96 h-96 grid grid-cols-7">
      {generateDate().map(({ date, currentMonth, today }, index) => {
        return (
          <div>
            <h1>{date.date()}</h1>
          </div>
        );
      })}
    </div>
  );
}
