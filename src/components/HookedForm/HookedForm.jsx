import useHandleStateInput from "../../Hooks/handleStateInput";

const HookedForm = () => {

    // const [name,setName]=useHandleStateInput('hello')
    const handleEmail=useHandleStateInput('hello')

    const handleSubmit =(e)=>{
        e.preventDefault();
        // console.log(name)
        console.log(handleEmail.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={setName} type="text" name="name" />
        <br /> */}
        <input {...handleEmail} type="email" name="email" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value="submit" />
      </form>
        </div>
    );
};

export default HookedForm;