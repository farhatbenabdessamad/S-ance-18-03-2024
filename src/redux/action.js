import { ADDTOCART } from "./actionType"

export const add = (data) =>{
  return   {
    type:ADDTOCART,
    payload:data
   } 
}