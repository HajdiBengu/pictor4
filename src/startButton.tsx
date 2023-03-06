import { useState } from "react";
import { startAuctionOperation } from "./utils/operation";

const StartButton = () => {
    
    const [starting, setStarting] = useState(false);
    const onStart = async () => {
        try {
            setStarting(true);
            await startAuctionOperation();
            alert("Auction Started")
        } catch (error) {
            alert("Auction start failed!")
        }
        setStarting(false);
    };
    
    return ( 
        <button onClick={onStart} className="timer"> { starting === true ? "Starting..." : "Start Auction" } </button>
     );
}
 
export default StartButton;