import Web3 from "web3";

const getWeb3 = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return new Web3(window.ethereum);
    } catch (error) {
      throw new Error('User denied account access');
    }
  } else if (window.web3) {
    return new Web3(window.web3.currentProvider);
  }
  throw new Error('No Ethereum browser extension detected');
};

export default getWeb3;