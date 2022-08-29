"use strict";

let mintAddress = "0x8C5136228796911158e61733c520659c1D200D1A"
let mintABI = [{ "constant": true, "inputs": [], "name": "PERCENTS_DIVIDER", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "referrer", "type": "address" }], "name": "invest", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserDividends", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserAvailable", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserPercentRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_TIME", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "TIME_STEP", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserReferrer", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "projectAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PROJECT_FEE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalWithdrawn", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalInvested", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "benificiaryThree", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "REFERRAL_PERCENTS", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "BASE_PERCENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "CONTRACT_BALANCE_STEP", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getContractBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalDeposits", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserTotalDeposits", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "BENIFCIARY_THREE_RATE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "benificiaryFour", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "BENIFCIARY_FOUR_RATE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "isActive", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "marketingAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserAmountOfDeposits", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MARKETING_FEE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalUsers", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }, { "name": "index", "type": "uint256" }], "name": "getUserDepositInfo", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserCheckpoint", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "INVEST_MIN_AMOUNT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserReferralBonus", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserTotalWithdrawn", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getContractBalanceRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "marketingAddr", "type": "address" }, { "name": "projectAddr", "type": "address" }, { "name": "_benificiaryThree", "type": "address" }, { "name": "_benificiaryFour", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "user", "type": "address" }], "name": "Newbie", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "NewDeposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Withdrawn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "referrer", "type": "address" }, { "indexed": true, "name": "referral", "type": "address" }, { "indexed": true, "name": "level", "type": "uint256" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "RefBonus", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "totalAmount", "type": "uint256" }], "name": "FeePayed", "type": "event" }]

let provider, selectedAccount;
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

window.addEventListener('load', async () => {
    onConnect()
});

async function onConnect() {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: "https://bsc-dataseed.binance.org/",
                },
                chainId: 56,
                infuraId: "d85fda7b424b4212ba72f828f48fbbe1",
                pollingInterval: "10000",
            },
        },
    };

    let web3Modal = new Web3Modal({
        providerOptions,
        cacheProvider: false,
        disableInjectedProvider: false,
    });

    try {
        provider = await web3Modal.connect();
        onProvider(provider);
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }
}

async function onProvider() {
    const web3 = new Web3(provider);
    let accounts = await web3.eth.getAccounts();
    selectedAccount = accounts[0];
    $(".selectedAccount").val(selectedAccount);
    $(".trxWallet").val(selectedAccount)
    $('.authTrue').show(); // Shows
    $('.authFalse').hide(); // hides
    readValues()
}

async function readValues() {
    let web3 = new Web3(provider)
    let instance = new web3.eth.Contract(mintABI, mintAddress)

    let totalUsers = await instance.methods.totalUsers().call()
    console.log("totalUsers:", totalUsers)
    let totalInvested = await instance.methods.totalInvested().call()
    console.log("totalInvested:", totalInvested)

    totalInvested = fromWei(totalInvested)
    $(".totalUsers").html(totalUsers);
    $(".totalInvested").html(totalInvested);

    let BASE_PERCENT = await instance.methods.BASE_PERCENT().call()
    console.log("BASE_PERCENT:", BASE_PERCENT)

    let getUserTotalDeposits = await instance.methods.getUserTotalDeposits(selectedAccount).call()
    console.log("getUserTotalDeposits:", getUserTotalDeposits)

    let getUserTotalWithdrawn = await instance.methods.getUserTotalWithdrawn(selectedAccount).call()
    console.log("getUserTotalWithdrawn:", getUserTotalWithdrawn)

    let getUserAvailable = await instance.methods.getUserAvailable(selectedAccount).call()
    console.log("getUserAvailable:", getUserAvailable)


    let getUserReferralBonus = await instance.methods.getUserReferralBonus(selectedAccount).call()
    console.log("getUserReferralBonus:", getUserReferralBonus)



    let base_percent = BASE_PERCENT / 10;
    let invested = fromWei(getUserTotalDeposits);
    let withdrawn = fromWei(getUserTotalWithdrawn);
    let referral_bonus = fromWei(getUserReferralBonus);
    let for_withdraw = fromWei(getUserAvailable);

    $(".userPercentRate").html(base_percent)
    $(".userTotalDeposits").html(invested)
    $(".userTotalWithdrawn").html(withdrawn)
    $(".userAvailable").html(for_withdraw)
    $(".userRefsEarned").html(referral_bonus)

    $(".trxWallet").val(selectedAccount)
    $(".reflink").html("https://zhonghe45678.github.io/?ref=" + selectedAccount)
    $("#reflink").val("https://zhonghe45678.github.io/?ref=" + selectedAccount)

}

function depositToken(selector) {
    let amount = document.querySelector(".trxAmount" + selector).value;

    let web3 = new Web3(provider)
    let instance = new web3.eth.Contract(mintABI, mintAddress)

    document.querySelector(".trxAmountError" + selector + "1").style.display = "none";
    document.querySelector(".trxAmountError" + selector + "2").style.display = "none";

    if (!amount) {
        document.querySelector(".trxAmountError" + selector + "1").style.display = "block";
        return
    } else if (Number(amount) < 0.03) {
        document.querySelector(".trxAmountError" + selector + "2").style.display = "block";
        return
    }
    let referralAddr = ""
    if (!!window.location.search)
        referralAddr = window.location.search.slice(5)
    else
        referralAddr = selectedAccount
    instance.methods.invest(referralAddr).estimateGas({
        from: selectedAccount,
        value: web3.utils.toWei(amount.toString(), "ether"),
    })
        .then(gasAmount => {
            console.log("gasAmount:", gasAmount);
            instance.methods.invest(referralAddr)
                .send({
                    from: selectedAccount,
                    value: web3.utils.toWei(amount.toString(), "ether"),
                    gasLimit: gasAmount

                })
                .on('transactionHash', function (hash) {
                    console.log("Transaction Hash: ", hash)
                    notify("Transaction is submitted to the network")
                })
                .on('receipt', function (receipt) {
                    console.log("Receipt: ", receipt)
                    notify("Approve Completed Successfully")
                })
                .on('error', function (error, receipt) {
                    console.log("Error receipt: ", error)
                    notify("Transaction Rejected")
                });
        })
        .catch(error => {
            notify("Insufficient funds for transfer")
            console.log("Gas Error: ", error)
        });
}

async function withdrawToken() {
    let web3 = new Web3(provider)
    let instance = new web3.eth.Contract(mintABI, mintAddress)
    instance.methods.withdraw().estimateGas({
        from: selectedAccount
    })
        .then(gasAmount => {
            console.log("gasAmount:", gasAmount);
            instance.methods.withdraw()
                .send({
                    from: selectedAccount,
                    gasLimit: gasAmount
                })
                .on('transactionHash', function (hash) {
                    console.log("Transaction Hash: ", hash)
                    notify("Transaction is submitted to the network")
                })
                .on('receipt', function (receipt) {
                    console.log("Receipt: ", receipt)
                    notify("Approve Completed Successfully")
                })
                .on('error', function (error, receipt) {
                    console.log("Error receipt: ", error)
                    notify("Transaction Rejected")
                });
        })
        .catch(error => {
            console.log("Gas Error: ", error)
            notify("User has no dividends")
        });
}

function timeConverter(UNIX_timestamp) {
    var unix = new Date(UNIX_timestamp * 1000);
    var time = new Date(unix).toLocaleTimeString('en-US')
    var date = new Date(unix).toLocaleDateString('en-US')
    return time + ' - ' + datemoment().format('MMMM Do YYYY, h:mm:ss a'); // October 17th 2021, 1:24:23 am

}

function fromWei(amount) {
    let web3 = new Web3(provider)
    return web3.utils.fromWei(amount.toString(), "ether")
}

function copyToClipboard() {
    var el = document.createElement('textarea');
    el.value = "https://zhonghe45678.github.io/?ref=" + selectedAccount;
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    notify("Copied!");
}

function notify(msg) {
    Toastify({
        text: msg,
        duration: 4000,
        gravity: "bottom",
        position: "right",
    }).showToast();
}