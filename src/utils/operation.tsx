import { tezos } from "./tezos";

export const bidOperation = async (tez: number) => {
    try{
        const contract = await tezos.wallet.at('KT1SXvgcy4jUQpJK8Q2dA8cNZs8bLxTj1E2r');
        const op = await contract.methods.bid().send({
            amount: tez,
            mutez: false,
        });
        await op.confirmation(1); 
    }catch(err){
        throw err;
    }
}

export const cancelBidOperation = async () => {

}

export const endAuctionOperation = async () => {

}