# Pictor

### Project Description and Idea

Pictor is an open source decentralized app and uses two smart contracts that run on the Tezos Blockchain. One of them is an NFT contract that employs the FA2 standard, while the other is a time-locked English Auction. The idea behind them is to have the address of the winner of the auction stored in the FA2 contract. The NFT contract will then use that address when minting the new token. You can take a more detailed look into the contracts in this [link.](https://github.com/HajdiBengu/pictor-contracts)

Basically, the dapp serves as the interface of the english auction. We’ll take a look at how to use the dapp below, but once you know how the two smart contracts work, you’ll be able to understand and test the dapp better.

### How to Install and Run the Project

The project uses ReactJS and is written in Typescript. Use these steps to run the project locally:

* ```git clone https://github.com/HajdiBengu/pictor4```
* ```npm install```
* ```npm run start```

### How to Use the Project

In order to test the dapp, you will need at least two Tezos addresses. The more the better, in order to simulate the auction. The dapp serves as the interface of the english auction. Take an in-depth look at the auction contract here, in order to learn how to use it.

In the dapp, use the button in the top right corner to connect the wallet. Once connected, you can click again to disconnect it. Below the image, you can find the input interface for the auction. You can bid and cancel the bid. The auction should be live Monday to Thursday. On Monday, a “Start Auction” button appears that anyone can click for the auction to restart. On Thursday, an “End Auction” button appears, so that people can end the auction, making the project fully decentralized.

In order to force the start and end button to appear without having to wait days, you can go to source/auction.tsx and manipulate the condition in line 25 from

```(weekday > 3)``` to ```(weekday > x)``` where x can be anything from 0 to 6, depending on the day of the week you are testing the dapp.

### How the project can be improved

As you might notice when testing the dapp, the image itself isn’t available and it is not linked to the NFT contract. So the first improvement for the project can be to make the image generative after each auction and have it minted automatically for the winner of the auction.

Another improvement point is to have the Start and End of auction automatically applied after their respective timelocks. (I deliberately didn't make those changes, in order to test functionalities locally, in development mode)

Furthermore, the project could be improved by removing the ability of the Top Bidder to use the “Cancel Bid” button in the UI.

##### License: GNU GPLv3
