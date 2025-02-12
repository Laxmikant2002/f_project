import { createContext, useContext, useState, useEffect } from 'react';
import getWeb3 from '../utils/getWeb3';
import ElectionContract from '../contracts/Election.json';

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        const web3Instance = await getWeb3();
        const accounts = await web3Instance.eth.getAccounts();
        
        const networkId = await web3Instance.eth.net.getId();
        const deployedNetwork = ElectionContract.networks[networkId];
        const instance = new web3Instance.eth.Contract(
          ElectionContract.abi,
          deployedNetwork && deployedNetwork.address
        );

        setWeb3(web3Instance);
        setAccount(accounts[0]);
        setContract(instance);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    initWeb3();
  }, []);

  return (
    <Web3Context.Provider value={{ web3, account, contract, loading }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);