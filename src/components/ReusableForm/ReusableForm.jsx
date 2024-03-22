const ReusableForm = ({ title, submitButton,handleSubmit,children }) => {
    const localHandleSubmit = (e) => {
      e.preventDefault();
      const data ={
        name:e.target.name.value,
        email:e.target.email.value,
        phone:e.target.phone.value,
      }
      handleSubmit(data)
    };
    return (

      <div>
        {children}
        <form onSubmit={localHandleSubmit}>
          <input type="text" name="name" />
          <br />
          <input type="email" name="email" />
          <br />
          <input type="text" name="phone" />
          <br />
          <input type="submit" value={submitButton} />
        </form>
      </div>
    );
  };
  
  export default ReusableForm;
