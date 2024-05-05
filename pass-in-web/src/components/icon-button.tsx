import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<'button'>{
   tranparent?: boolean
}


export function IconButton({tranparent, ...props} : IconButtonProps){
    return(

<button{...props} 
className={tranparent? "bg-black/ border border/white/10 p-1 rounded-md p-1.5":"bg-white/10 border border/white/10 p-1 rounded-md p-1.5" }/>

)
}