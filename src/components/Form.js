import { useState } from "react";

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        setEmail(e.target.email.value);
        setPassword(e.target.password.value);
        console.log(e.target.email.value + "  "+e.target.password.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="p-4 m-4 flex flex-row border border-black w-1/3">
                <input type="email" placeholder="Enter Email.." name="email" className="mx-2 px-2 border rounded-md  hover:bg-blue-200"/>
                <input type="password" placeholder="Enter Password" name="password"  className="mx-2 px-2 border rounded-md  hover:bg-blue-200"/>
                <button type="submit"  className="mx-2 p-2 bg-slate-400 rounded-md hover:bg-blue-400 ">Submit</button>
            </form>
            { email && <p className="m-5 text-green-800 font-bold">Thank You for registering with {email}.</p>}
        </div>
    );

}

export default Form;