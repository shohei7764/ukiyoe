//ページが読み込まれた時にweb3のインスタンスを定義する
$(document).ready(async () => {
    if(window.ethereum){
      web3 = new Web3(Web3.givenProvider);
    }
    priceData = await getPrice();
    console.dir(priceData);
  });

  //metamaskボタン
$(".btn.login").click(async () => {
    try {
      //メタマスクで接続してもいいですかの文を出す。うまくいったらアカウントが帰ってくる
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      user = accounts[0];
      dexInst = new web3.eth.Contract(abi.dex, dexAddr, {from: user});
    } catch (error){
      alert(error.message);
    }
  })