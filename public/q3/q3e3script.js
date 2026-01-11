// read from the localStorage saved as a string;
let acctString = localStorage.getItem("accounts")
if (!acctString) { accountList = {} } // initialize the variable to contain the list of accounts object
else accountList = JSON.parse(acctString) // converts string into the correct data type in this case object

const form = document.getElementById("dForm");

function showAccounts(event) {
  //event.preventDefault();
  //const form = event.target;
  username = uname.value
  accountList[username] = {};
	accountList[username]["pword"] = pword.value;
	accountList[username]["dob"] = dob.value;
//	accountList["username"]["pd"] = pd[0].value;
	accountList[username]["about"] = about.value;
	
	console.log(accountList)
	acctString = JSON.stringify(accountList)
	localStorage.setItem("accounts", acctString)
}
