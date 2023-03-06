import { useEffect, useState } from "react";
import { bidOperation, cancelBidOperation } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";
import StartButton from "./startButton";
import EndButton from "./endButton";

const Auction = () => {

    let message;
    const [loading, setLoading] = useState(false);
    const [cancelling, setCancelling] = useState(false);
    const [tez, setTez] = useState("");
    const [bid, setTopBid] = useState(0);
    const [live, setLive] = useState(true);
    const [liveAuction, setLiveAuction] = useState(true);
    const setBid = (event: React.ChangeEvent<HTMLInputElement>) => {
        let bidAmount: string = event.target.value;
        setTez(bidAmount)
    }
   
    useEffect(() => {
        (async () => {
            const today = new Date();
            const weekday = today.getDay();
            if (weekday > 3) {
                setLive(false)
            } else {
                setLive(true)
            };
            const storage = await fetchStorage();
            setTopBid(storage.topBidder);
            setLiveAuction(storage.live)
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

    if(live === false && liveAuction) {
        message = <EndButton />
    } else if (live && liveAuction === false) {
        message = <StartButton />
    } else {
        message = null
    };

    return ( 
    <div className="grid">
    <div className="image">Image of NFT to be minted</div>
    <input onChange={setBid} type="text" className="bid" id="bid" placeholder="tez" value={tez}/>
    <button onClick={onBid} className="placeBid"> { loading === true ? "Bidding..." : "Place Bid" } </button>
    <button onClick={onCancel} className="cancelBid"> { cancelling === true ? "Cancelling..." : "Cancel Bid" } </button>
    <p className="topBid">Currect Top Bidder: <span className="bidspan">{bid}</span></p>
    <div>{message}</div>
    </div>
     );
}
 
export default Auction;