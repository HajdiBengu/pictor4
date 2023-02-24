import { useState } from "react";
import { bidOperation } from "./utils/operation";

const Auction = () => {

    const [loading, setLoading] = useState(false)
    const [tez, setTez] = useState("")
    const setBid = (event: React.ChangeEvent<HTMLInputElement>) => {
        let bidAmount: string = event.target.value;
        setTez(bidAmount)
    }
   
    const onBid = async () => {
        try {
            setLoading(true);
            await bidOperation(Number(tez));
            alert("Transaction Confirmed")
        } catch (error) {
            alert("Transaction failed!")
        }
        setLoading(false);
    };

    return ( 
    <div className="grid">
    <div className="image">image</div>
    <input onChange={setBid} type="text" className="bid" id="bid" placeholder="tez" value={tez}/>
    <button onClick={onBid} className="placeBid">
        { loading === true ? "Loading..." : "Place Bid" }
    </button>
    <input type="button" className="cancelBid" value="Cancel Bid" />
    <p className="topBid">Currect Bid: <span className="bidspan">CurrentBid Tez</span></p>
    <div className="timer">
    </div>
    </div>
     );
}
 
export default Auction;