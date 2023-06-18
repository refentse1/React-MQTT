import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Message.css";

const Messages = () => {

    const [data,setData] = useState([]);
    const [isSet,setIsSet] = useState(false);

    useEffect(()=>{
        const things = async ()=>{

            const baseUrl = 'http://localhost:3001/subscribe/';
            const baseResponse  = await fetch('http://localhost:3001/subscribe/');
            const response = await baseResponse.json();
            setData(response);
            setIsSet(true);
            // .then((response)=>{
            //     if(response.ok){
            //         response.json()
            //     }
            // })
            // .then((data)=>{
            //     setData(data);
            //     setIsSet(true);
            // })
            // console.log(data);
        }
        things()
    })

   


    return (
        <div>
            <Navbar/>
            <h1>Messages</h1>
            {isSet?data.map((item)=>{
                return(
                    <div className="message-card" key={item._id}>
                        <h2>{item.topic}</h2>
                        <p>{item.message}</p>
                    </div>
                )
            })
            :<>Retrieving Messages...</>
            }
        </div>
     );
}
 
export default Messages;