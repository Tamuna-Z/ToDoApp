import { useState, useEffect } from "react";

import {
  Clock,
  ContainerStyle,
  BgImage,
  Day,
  Pm,
  ClockWrapper,
  ClockDayWrapper
} from "../styled-components/BgWithDate.styled";
import backgroundImage from "../images/Background.png";

export default function BackgroundWithDate({currentDate, setCurrentDate}) {
  

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentDate(new Date());
  //   }, 1000); // Update the date every second

  //   return () => {
  //     clearInterval(timer); // Clear the interval when the component unmounts
  //   };
  // }, []);

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
  };

  function formatDate(date) {
    const dayOfMonth = date.getDate(); // Get the day of the month
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" }); // Get the weekday (short format)
    return `${dayOfMonth} ${weekday}`;
  }
  return (
    <ContainerStyle>
      <BgImage>
        <ClockDayWrapper>
          <Day>{formatDate(currentDate)}</Day>
          <ClockWrapper>
            <Clock>{currentDate.toLocaleTimeString([], timeOptions)} </Clock>
            <Pm>{currentDate.getHours() >= 12 ? "PM" : "AM"}</Pm>
          </ClockWrapper>
        </ClockDayWrapper>
      </BgImage>
    </ContainerStyle>
   
  );
  
  
}
