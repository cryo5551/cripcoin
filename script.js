

const convert_to_json = function (convert) {
    return convert.json();
    // console.log(convert.json());
}
//prices fatch
const handle_data = function (data) {
const bitcoin_price  = document.getElementById("bitcoin_price");
const ethereum_price = document.getElementById("ethereum");
const tether_price   = document.getElementById("tether");
const bnb_price      = document.getElementById("bnb");
const usdcoin_price  = document.getElementById("usdcoin");
const solana_price   = document.getElementById("solana");
const xrp_price      = document.getElementById("xrp");
const cardano_price  = document.getElementById("cardano");
const terra_price    = document.getElementById("terra");
const avalanche_price = document.getElementById("avalanche");

var priceofbitcoin  = data.bitcoin.usd;
var priceofethereum = data.ethereum.usd;
var priceoftether   = data.tether.usd;
var priceofbnb      = data.binancecoin.usd;
var priceofsolana   = data.solana.usd;
var priceofxrp      = data.ripple.usd;
var priceofcardano  = data.cardano.usd;
// var priceofterra = data.terra-luna.usd;
// var priceofusdcoin = data.usd-coin.usd;
// var priceofavalanche = data.binance-peg-avalanche;

bitcoin_price.innerHTML =`$${priceofbitcoin}`
ethereum_price.innerHTML=`$${priceofethereum}`
tether_price.innerHTML  =`$${priceoftether}`
bnb_price.innerHTML     =`$${priceofbnb}`
solana_price.innerHTML  =`$${priceofsolana}`
xrp_price.innerHTML     =`$${priceofxrp}`
cardano_price.innerHTML =`$${priceofcardano}`
// terra_price.innerHTML=`$${priceofterra}`
// usdcoin_price.innerHTML=`$${priceofusdcoin}`
// avalanche_price.innerHTML=`$${priceofavalanche}`
}
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2CEthereum%2CTether%2Cbinance-peg-avalanche%2Cusd-coin%2Cripple%2Csolana%2Ccardano%2Cbinancecoin%2Cterra-luna&vs_currencies=usd')
.then(convert_to_json)
.then(handle_data);



// const handle_newdata = function (data) {
//     const price = document.getElementById("avalanche");
//     var coin = data.avalanche-2.usd;
//     console.log(coin);
//     price.innerHTML=`$${coin}`
// }

// fetch('https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd')
// .then(convert_to_json)
// .then(handle_newdata);
// //ethereum

