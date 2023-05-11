import {useState, useEffect} from "react"
import {Clock,Container} from '../styled-components/Date.styled';
import backgroundImage from '../images/Background.png';
export default function CurrentDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the date every second

    return () => {
      clearInterval(timer); // Clear the interval when the component unmounts
    };
  }, []);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (

   <div style={containerStyle}>
    <bgImage></bgImage>
     <Clock>
      <h1>Current Date</h1>
      <p>{currentDate.toDateString()}</p>
      <p>{currentDate.toLocaleTimeString()}</p>
    </Clock>
   </div>
  );
  
};