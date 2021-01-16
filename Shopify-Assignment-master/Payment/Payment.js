import Web3 from 'web3';

// function Payment setProvider() => {
//     if (window.ethereum) {
//       const ethereum = window.ethereum
//       const web3Provider = new Web3(ethereum)
      
      
//     }
//   }

//   export default Payment;

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
console.log(web3)