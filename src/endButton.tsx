import { useState } from "react";
import { endAuctionOperation } from "./utils/operation";

const EndButton = () => {

    const [ending, setEnding] = useState(false);
    const onEnd = async () => {
        try {
            setEnding(true);
            await endAuctionOperation();
            alert("Auction Ended")
        } catch (error) {
            alert("Auction end failed!")
        }
        setEnding(false);
    };

    return ( 
        <button onClick={onEnd} className="timer"> { ending === true ? "Ending..." : "End Auction" } </button>
     );
}
 
export default EndButton;