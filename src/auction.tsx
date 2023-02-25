import { useState } from "react";
import { bidOperation, cancelBidOperation } from "./utils/operation";

const Auction = () => {

    const [loading, setLoading] = useState(false)
    const [cancelling, setCancelling] = useState(false)
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

    const onCancel = async () => {
        try {
            setCancelling(true);
            await cancelBidOperation();
            alert("Cancellation Confirmed")
        } catch (error) {
            alert("Cancellation failed!")
        }
        setCancelling(false);
    };

    return ( 
    <div className="grid">
    <div className="image">Image of NFT to be minted</div>
    <input onChange={setBid} type="text" className="bid" id="bid" placeholder="tez" value={tez}/>
    <button onClick={onBid} className="placeBid">
        { loading === true ? "Bidding..." : "Place Bid" }
    </button>
    <button onClick={onCancel} className="cancelBid">
        { cancelling === true ? "Cancelling..." : "Cancel Bid" }
    </button>
    <p className="topBid">Currect Bid: <span className="bidspan">CurrentBid Tez</span></p>
    <div className="timer">
    </div>
    </div>
     );
}
 
export default Auction;