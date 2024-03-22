import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(nameRef.current.value)
    }
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    return (
        <div>
            <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input type="email" defaultValue={'hello@gmail.com'} name="email" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value="submit" />
      </form>
        </div>
    );
};

export default RefForm;