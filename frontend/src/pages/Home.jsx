import { useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {

    const [Topic,setTopic] = useState("");
    const [Message,setMessage] = useState("");

    const handleSubmit =()=>{
        
        const body = JSON.stringify({
            topic:Topic,
            message:Message
        })

        fetch('http://localhost:3001/publish/',{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body
        })
        .then((res)=>alert("Successful"))
        .catch((err)=>console.log(err))
    }


    return ( 
        <div>
            <Navbar/>
            <h1>Publish</h1>

            <div className="form">
                <label htmlFor="">Topic:</label>
                <input type="text" onChange={(e)=>setTopic(e.target.value)} /><br />
                <label htmlFor="">Message:</label>
                <input type="text" onChange={(e)=>{setMessage(e.target.value)}} /><br />
                <input type="submit" onClick={handleSubmit} value="Publish" />
            </div>
        </div>
     );
}
 
export default Home;