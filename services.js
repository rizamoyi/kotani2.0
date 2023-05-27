const celoKIT = require('@celo/contractkit');
const nodeURL =
  'https://celo-alfajores.infura.io/v3/4c87fe5424264c3e93bc70264a3cc461';

const kit = celoKIT.newKit(nodeURL);

// console.log('kit connected', kit);

// create wallet generate
const generateWalletAddress = async () => {
  const account = await kit.web3.eth.accounts.create();
  console.log('account', account);
  return account;
};

const walletAddress = '0x0246b5571dC21c0431a5c416875aB7f8a7693d0D';

// get balance fro cUSD
const getBalance = async (address) => {
  const tokenWrapper = await kit.contracts.getGoldToken();
  // const stableTokenWrapper = await kit.getStableToken(StableToken.cREAL);

  const balance = await tokenWrapper.balanceOf(address);
  console.log('balance', balance.toString());
  return balance;
};

module.exports = {
  generateWalletAddress,
  getBalance,
};
