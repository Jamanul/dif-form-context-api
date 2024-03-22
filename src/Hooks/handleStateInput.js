import { useState } from "react"

const useHandleStateInput = (defaultValue='') =>{
    const [value,setValue]= useState(defaultValue);

    const onChange=(e)=>{
        setValue(e.target.value)

    }
    // const handleSetValue=(e)=>{
    //     setValue(e.target.value)

    // }
    //return [value,handleSetValue]
    return {
        value,
        onChange
    }
}

export default useHandleStateInput;