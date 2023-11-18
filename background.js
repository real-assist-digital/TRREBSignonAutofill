function ephemeralContextInputLogin() {
  function getElementByXpath(path) {
	  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	}
  fetch('https://counterapi.com/api/real-assist.digital/view/trreb_login_autofill_v1?trackOnly');
  var auth=prompt("Please enter the authenticator password.","");
  getElementByXpath(`//*[@id="loginbtn"]`).focus();
  getElementByXpath(`//*[@id="clareity"]`).innerHTML = "your userID";     // EDIT this line prior to use
  getElementByXpath(`//*[@id="pin"]`).innerHTML = "your user PIN";        // EDIT this line prior to use
  getElementByXpath(`//*[@id="security"]`).innerHTML=auth;
}

TRREB_LOGIN_URL = "https://treb.clareityiam.net/idp/login";

chrome.action.onClicked.addListener(async (tab) => {
  doPopup=true;
  // If the tab isn't the login page, open a new tab with the login page
  if (!tab.url.includes(TRREB_LOGIN_URL)){
    chrome.tabs.create({url: TRREB_LOGIN_URL});
    // switch to the new tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.update(tabs[0].id, {selected: true});
      executeContextScript(tabs[0].id, ephemeralContextInputLogin);
    });
    doPopup=false;
  } else {
    executeContextScript(tab.id, ephemeralContextInputLogin);
    doPopup=false;
  }
  if (doPopup){
    chrome.windows.create({
      url: 'popup.html',
      type: 'popup',
      width: 300,
      height: 600,
      left: 100,
      top: 100,
    });
  }
});

chrome.commands.onCommand.addListener(async (command) => {
  let thisTab = (await chrome.tabs.query({active: true}))[0];
  if (command == "Autofill"){
    if (thisTab.url.includes(TRREB_LOGIN_URL)){
      executeContextScript(thisTab.id, ephemeralContextInputLogin);
    } 
  }
});


async function executeContextScript(tabID,f,args=[],pause=0){
  chrome.scripting.executeScript({
    target : { tabId : tabID},
    world : "MAIN",
    func : f,
    args : args,
  }); 
  if (pause>0) {
    console.log(`${f.name} execution sent, pausing ${pause}ms in service worker...`);
    await new Promise(r => setTimeout(r, pause));
  }
}







