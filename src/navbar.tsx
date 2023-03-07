import { useEffect, useState } from "react";
import { connect, disconnect, getAccount } from "./utils/wallet"

const Navbar = () => {
    const [account, setAccount] = useState("");

    useEffect(() => {
        (async () => {
            const activeAccount = await getAccount();
            setAccount(activeAccount);
        })();
    }, []);

    const onConnectWallet = async () => {
        if (account) {
            await disconnect();
            setAccount("");
        } else {
            await connect();
            const activeAccount = await getAccount();
            setAccount(activeAccount);
        }
    };

    return (
        <nav className="connect">
            <h1 className="logo">PICTOR</h1>
            <button className="wallet" onClick={onConnectWallet}>
                {account !== "" ? "Disconnect Wallet" : "Connect Wallet"}
            </button>
        </nav>
    );
}
 
export default Navbar;

        