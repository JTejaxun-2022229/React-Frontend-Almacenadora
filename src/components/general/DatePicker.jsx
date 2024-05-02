import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  { useState } from "react";


export const DatePickerComponent = ({onChange}) => {
    
    const [fecha, setFecha] = useState(new Date());

    const handleChange = (date) => {
      setFecha(date); 
      onChange(date); 
    };
  
    return (
      <div className="">
        <div>
          <DatePicker selected={fecha} onChange={handleChange} />
        </div>
      </div>
    );
}
