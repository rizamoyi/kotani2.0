const celoKIT = require('@celo/contractkit');
const nodeURL =
  'https://celo-alfajores.infura.io/v3/4c87fe5424264c3e93bc70264a3cc461';

const kit = celoKIT.newKit(nodeURL);

console.log('kit connected', kit);
