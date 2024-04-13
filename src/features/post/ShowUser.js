
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { users } from "../../dummy/users";
 

const ShowUser = () => {
  

  const [open, setOpen] = useState([]);
 
  const handleOpen = (value) => {
    if(open.includes(value)){
     const index = open.indexOf(value);
     open.splice(index, 1);
     setOpen([...open]);
    } else {
      setOpen([...open, value]);
    }
  };
 
  return (
    <div className="max-w-[390px]">

      {users.map((user) => {
        return <Accordion key={user.id} open={open.includes(user.id)}>
        <AccordionHeader onClick={() => handleOpen(user.id)}>{user.name}</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      })}
      
    </div>
  );
}


export default ShowUser