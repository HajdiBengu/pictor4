// resume on min 30

import { bidOperation } from "./utils/operation";

const Auction = () => {

    const onBid = async () => {
        await bidOperation();
    };

    return ( 
    <div className="grid">
    <div className="image">image</div>
    <input type="text" className="bid" placeholder="tez" />
    <input onClick={onBid} type="button" className="placeBid" value="Place Bid" />
    <input type="button" className="cancelBid" value="Cancel Bid" />
    <p className="topBid">Currect Bid: <span className="bidspan">CurrentBid Tez</span></p>
    <div className="timer">
    </div>
    </div>
     );
}
 
export default Auction;