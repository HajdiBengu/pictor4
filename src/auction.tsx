import { useEffect, useState } from "react";
import { bidOperation, cancelBidOperation, endAuctionOperation } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";

const Auction = () => {

    const [loading, setLoading] = useState(false);
    const [cancelling, setCancelling] = useState(false);
    const [tez, setTez] = useState("");
    const [bid, setTopBid] = useState(0);
    const [live, setLive] = useState(true);
    const [ending, setEnding] = useState(false);
    const setBid = (event: React.ChangeEvent<HTMLInputElement>) => {
        let bidAmount: string = event.target.value;
        setTez(bidAmount)
    }
   
    useEffect(() => {
        (async () => {
            const today = new Date();
            const weekday = today.getDay();
            if (weekday > 3) {
                setLive(true)
            } else {
                setLive(false)
            };
            const storage = await fetchStorage();
            setTopBid(storage.topBidder);
        })();
    }, []);

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
    <p className="topBid">Currect Top Bidder: <span className="bidspan">{bid}</span></p>
    <button className="timer" onClick={onEnd}> { live === true ? "Auction Ends Wednesday 24:00" : "End Auction" } </button>
    </div>
     );
}
 
export default Auction;