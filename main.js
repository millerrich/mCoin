const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('77009d02a3c4eb747f6631d4f3f12a1ceec812d3712c3c03ed5badec0f550050');
const myWalletAddress = myKey.getPublic('hex');

let mCoin = new Blockchain();


//function to create 5 transactions
function testTransactions(){
    for(var i = 0; i < 5; i++){
        const tx = new Transaction(myWalletAddress, 'public key goes here', 10);
        tx.signTransaction(myKey);
        mCoin.addTransaction(tx);
        
        console.log("\n Starting the miner...");
        mCoin.minePendingTransactions(myWalletAddress);
        
        
        console.log('\n Balance of miner is ', mCoin.getBalanceOfAddress(myWalletAddress));
        
        console.log('is chain valid?', mCoin.isChainValid());
    }
}

testTransactions();

// const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
// tx1.signTransaction(myKey);
// mCoin.addTransaction(tx1);

// console.log("\n Starting the miner...");
// mCoin.minePendingTransactions(myWalletAddress);


// console.log('\n Balance of miner is ', mCoin.getBalanceOfAddress(myWalletAddress));

// console.log('is chain valid?', mCoin.isChainValid());