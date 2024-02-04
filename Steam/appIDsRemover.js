// Usage: Run this script in the browser console on the Steam Account Licenses page to remove all the packages that can be removed (demos, trailers, free games, trials, etc), found in the getRemovableAppIDs.js script.
// Steam Account Licenses page: https://store.steampowered.com/account/licenses/

// This script will remove all AppIds from your account.
function removeNextPackage(appIds, i) {
   if (i >= appIds.length) { // If the counter is greater than or equal to the length of the array
      console.log("Removed all AppIds from account."); // Log that all the AppIds have been removed
      return;
   }

   // Fetch the remove license page with the packageId
   fetch("https://store.steampowered.com/account/removelicense", {
      "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
      },
      "referrer": "https://store.steampowered.com/account/licenses/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": `sessionid=${encodeURIComponent(window.g_sessionID)}&packageid=${appIds[i]}`,
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
   }).then((response) => { // If the response is received
      i++; // Increment the counter
      if (response.status !== 200){ // If the status is not 200 (OK)
         console.log(`Error: ${response.status} - ${response.statusText}`) // Log the error
      } else { // If the status is 200 (OK)
         var estimate = ((appIds.length - i)/60).toFixed(2); // Save the estimate with two decimal places
         console.log(`Removed: ${appIds[i]} (${i}/${appIds.length}). Time left estimate: ${estimate} minutes.`); // Log the packageId and the name
         removeNextPackage(appIds, i); // Call the function again
      }
   });
}

// Call the removeNextPackage function
removeNextPackage(appIds, 0);
