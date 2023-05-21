
// var contractAddress="0xc4caCf044798eCA147073d662dF0fa1fEA814cC1";
// var abi =  [
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_ref",
// 				"type": "address"
// 			}
// 		],
// 		"name": "Ido",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "IdoEnd",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "buy",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "canIdo",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "claim",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "claimAmount",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "cleanToken",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_token",
// 				"type": "address"
// 			}
// 		],
// 		"name": "setToken",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"stateMutability": "payable",
// 		"type": "receive"
// 	}
// ];

// var account = '';
// const metamaskChainID = 17777;
// const metamaskHexChainID = "0x4571";
// let eosBalance=0;


// //connect
// async function connect(){

//     let provider = new ethers.providers.JsonRpcProvider("https://api.evm.eosnetwork.com");

//     let accounts = await window.ethereum.request({method:"eth_requestAccounts"});
//     swal({
//       title: "Connect Success!",
//       text: "Success!",
//       icon: "success",
//       button: "ok",
//     });
//     $("#address").text(accounts[0].toString().substring(0,2)+"...."+accounts[0].toString().substring(accounts[0].length-3,accounts[0].length));
//     account=accounts[0];
//     await provider.getBalance(account).then((_res)=>{
//       eosBalance=ethers.utils.formatEther(_res);
//     });

//     // $("#balance").text(parseFloat(eosBalance).toFixed(3));

//     // console.log("balance:",eosBalance);

  

// }


// //copy




function buyether(){

  swal({
    title: "NFT NOT OPEN!",
    text: "Please Wait online!",
    icon: "info",
    button: "ok",
  });
}

function copy(){
      const dom = document.createElement("input");
   
  
     
      dom.value = "https://t.me/ZK_Bsc"
  
      document.body.appendChild(dom);
      dom.select();
      document.execCommand("copy");
      document.body.removeChild(dom);
      swal({
        title: "Good job!",
        text: "copy success!",
        icon: "success",
        button: "ok",
      });
  
    }

//     //get ref code
//     function GetQueryString(name) {
//         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//         var r = window.location.search.substr(1).match(reg);
//         if (r != null){
//           // console.log("邀请链接:",decodeURI(r[2]));
//           return decodeURI(r[2]);
//         } 
        
//         return null;  
//       }
//           // buy
    
//       async function buyether(select) {



//       let provider =new ethers.providers.Web3Provider(window.ethereum);
   
//           //构造合约对象
//       var  myContract = new ethers.Contract(contractAddress,abi,provider.getSigner());
      
//       if(account==''){
  
//         swal({
//           title: "connect error!",
//           text: "Please conncet first ",
//           icon: "error",
//           button: "ok",
//         });
  
  
    
     
//       }



//       var ether_amount ;


//       if(select==1){
//         ether_amount = ethers.utils.parseEther("10");
//         if(eosBalance<10){
//           swal({
//             title: "Insufficient balance!",
//             text: "Please maintain sufficient balance",
//             icon: "error",
//             button: "ok",
//           });
//           return ;

//         }

//       }

//       if(select==2){
//         ether_amount = ethers.utils.parseEther("20");
//         if(eosBalance<20){
//           swal({
//             title: "Insufficient balance!",
//             text: "Please maintain sufficient balance",
//             icon: "error",
//             button: "ok",
//           });
//           return ;
//         }

//       }

   
  
  
//       if (location.href.includes("ref")) {
        
//         var ref = GetQueryString("ref");
//         console.log("ref1====>>",ref);

//           if(ref=="" || ref.length<15) ref ="0x0000000000000000000000000000000000000000";
//           console.log("ref2====>>",ref);

  
//         myContract.Ido(ref,
//                   {
//                       gasLimit: 228251,
//                       gasPrice: ethers.utils.parseUnits("150", "gwei"),
//                       value: ether_amount
//                    }
                  
//                   ).then((res)=>{
//                     // console.log("res=>",res);
  
//                     // $("#buy").attr("disabled", true);
                 
//                     // $("#buycontent")[0].innerHTML=" <strong>恭喜您认购成功,IDO结束后记在此处领取</strong>";


                    
//                     swal({
//                       title: "Good job!",
//                       text: "Ido Success!",
//                       icon: "success",
//                       button: "ok",
//                     });
                    
   
  
              
//                   }).catch(e =>{
//                         swal({
//         title: "so hot !",
//         text: "try again!",
//         icon: "error",
//         button: "ok",
//       });
//                   })
//       } else {
//         var ref = "0x0000000000000000000000000000000000000000"
//         myContract.Ido(ref,
//                   {
//                       gasLimit: 228251,
//                       gasPrice: ethers.utils.parseUnits("150", "gwei"),
//                       value:ether_amount
//                    }
                  
//                   ).then(function (res) {
//                     // $("#buy").attr("disabled", true);
                 
//                     // $("#buycontent")[0].innerHTML=" <strong>恭喜您认购成功,IDO结束后记在此处领取</strong>";

//                     swal({
//                       title: "Good job!",
//                       text: "Ido Success!",
//                       icon: "success",
//                       button: "ok",
//                     });
                    
//                   }).catch( e =>{
//                     swal({
//                       title: "so hot !",
//                       text: "try again!",
//                       icon: "error",
//                       button: "ok",
//                     });
                    
//           console.log(e)
//         });
//       }
  
    
//   }

//   setInterval("getInfo()", 1000);
  
  
//   function getInfo(){
//     let provider =new ethers.providers.Web3Provider(window.ethereum);
   
//     //构造合约对象
// var  myContract = new ethers.Contract(contractAddress,abi,provider.getSigner());


// if(account==''){
  
//   connect();
// }

// var idoAmount =0.00;

// myContract.claimAmount(account).then(res=>{
//   idoAmount=res/10**18;
// })

// $("#sido").text(parseFloat(idoAmount).toFixed(2));


//   }
