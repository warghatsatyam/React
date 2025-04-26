import { cardContext } from "./Context";
//Refactor this to use the useContext hook
import {useContext} from "react";


export const Card = () => {
  const {color,text} = useContext(cardContext);
  console.log(color)
  console.log(text)
  return (
    <cardContext.Consumer>
      {() => {
        return (
          <div className="card" style={{ backgroundColor: color }}>
            <h3>{text}</h3>
          </div>
        );
      }}
    </cardContext.Consumer>
  );
};
