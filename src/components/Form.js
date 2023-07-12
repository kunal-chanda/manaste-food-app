
const Form = ()=>{
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.email.value + "  "+e.target.password.value)
    }
    return(
        <form onSubmit={handleSubmit} className="p-4 m-4 flex flex-row">
            <input type="email" placeholder="Enter Email.." name="email" className="mx-2 px-2 border rounded-md  hover:bg-blue-400"/>
            <input type="password" placeholder="Enter Password" name="password"  className="mx-2 px-2 border rounded-md  hover:bg-blue-400"/>
            <button type="submit"  className="mx-2 p-2 bg-slate-400 rounded-md hover:bg-blue-400 ">Submit</button>
        </form>
    );

}

export default Form;