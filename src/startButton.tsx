import { useState } from "react";
import { startAuctionOperation } from "./utils/operation";

const startButton = () => {
    
    const [starting, setStarting] = useState(false);
    const onStart = async () => {
        try {
            setStarting(true);
            await startAuctionOperation();
            alert("Auction Ended")
        } catch (error) {
            alert("Auction end failed!")
        }
        setStarting(false);
    };
    
    return ( 
        <button onClick={onStart} className="timer"> { starting === true ? "Ending..." : "End Auction" } </button>
     );
}
 
export default startButton;