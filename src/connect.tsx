const Connect = () => {
    const walletConnect = () => {
        console.log('clicked wallet')
    }

    return (
        <nav className="connect">
            <h1 className="logo">PICTOR</h1>
            <button className="wallet" onClick={walletConnect}>Connect Wallet</button>
        </nav>
    );
}
 
export default Connect;