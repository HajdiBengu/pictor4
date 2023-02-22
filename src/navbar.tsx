import { connect, getAccount } from "./utils/wallet"

const Connect = () => {
    const onConnectWallet = async () => {
        await connect();
        const account = await getAccount();
    }
    
    return (
        <nav className="connect">
            <h1 className="logo">PICTOR</h1>
            <button className="wallet" onClick={onConnectWallet}>Connect Wallet</button>
        </nav>
    );
}
 
export default Connect;