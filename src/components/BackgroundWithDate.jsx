import { useState, useEffect } from "react";
import {
  Clock,
  ContainerStyle,
  BgImage,
} from "../styled-components/bgWithDate.styled";
import backgroundImage from "../images/Background.png";

export default function BackgroundWithDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the date every second

    return () => {
      clearInterval(timer); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <ContainerStyle>
      <BgImage>
        <Clock>
          <p>{currentDate.toDateString()}</p>
          <p>{currentDate.toLocaleTimeString()}</p>
        </Clock>
      </BgImage>
    </ContainerStyle>
  );
}
