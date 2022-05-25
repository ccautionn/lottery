const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'shaft sudden east surprise amused infant ahead mean water merry crucial peanut',
    'https://rinkeby.infura.io/v3/30d617824a074154b57177c3cfd4bee4'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account:', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deploy to:',result.options.address);
    provider.engine.stop();
};

deploy();