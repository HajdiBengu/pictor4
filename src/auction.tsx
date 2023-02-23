// resume on min 30

import { useState } from "react";
import { bidOperation } from "./utils/operation";

const Auction = () => {

    const [tez, setTez] = useState("")
    const setBid = (event: React.ChangeEvent<HTMLInputElement>) => {
        let bidAmount: string = event.target.value;
        setTez(bidAmount)
    }
   
    const onBid = async () => {
        // let y: number = +{tez};
        await bidOperation(Number(tez));
    };

    return ( 
    <div className="grid">
    <div className="image">image</div>
    <input onChange={setBid} type="text" className="bid" id="bid" placeholder="tez" value={tez}/>
    <input onClick={onBid} type="button" className="placeBid" value="Place Bid" />
    <input type="button" className="cancelBid" value="Cancel Bid" />
    <p className="topBid">Currect Bid: <span className="bidspan">CurrentBid Tez</span></p>
    <div className="timer">
    </div>
    </div>
     );
}
 
export default Auction;