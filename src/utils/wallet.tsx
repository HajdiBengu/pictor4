import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-types";
export const wallet = new BeaconWallet({
    name: "pictor",
    preferredNetwork: NetworkType.GHOSTNET,
});

export const connect = async () => {
    await wallet.requestPermissions({ network: {type: NetworkType.GHOSTNET} });
};

export const getAccount = async () => {
    const activeAccount = await wallet.client.getActiveAccount();

    if(activeAccount) {
        return activeAccount.address;
    } else {
        return "";
    }
};