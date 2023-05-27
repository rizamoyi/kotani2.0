const express = require('express');
const router = express.Router();
const { ussdRouter } = require('ussd-router');

// post, delete, updatwe, read - call, send

router.post('/', (req, res, next) => {
  // define text, phone

  try {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;

    const footer = '\n0: Back 00: Home';
    let response = '';
    var data = text.split('*');

    if (text == '') {
      response = `
        CON Welcome to Celo Wallet
        1: Balance
      `;
    } else if (text == '1') {
      response = `
       CON Your balance is 1000 cUSD
       ${footer}
      `;
    }
  } catch (error) {
    console.log('err', error);
  }
});

module.exports = router;
