import { COREANWSER } from "../Actions";
import { act } from "react-dom/test-utils";
// let initialState = [
//   {
//     core:10
//   }
// ];


export default (state , action) => {
  switch (action.type) {
   
    case COREANWSER:
      console.log("tesst core anwser", action.value);
      console.log("tesst core state",state);

      return {
        ...state,
      //  item:1
       
      };
    default:
      return state;
  }
};
