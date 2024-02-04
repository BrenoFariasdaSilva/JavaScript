// Usage: Run this script in the browser console on the Steam Account Licenses page to get the AppIds of all the packages that can be removed.
// Steam Account Licenses page: https://store.steampowered.com/account/licenses/

var appIds = []; // Array to store the AppIds
var rows = document.getElementsByClassName("account_table")[0].rows; // Get the rows of the table
i = 0; // Counter for the number of packages to remove

// Loop through the rows and get the packageId
for (let row of rows) { // Loop through the rows
	var cell = row.cells[1]; // Get the second cell of the row

	if (/\b(?:trailer|teaser|demo|cinematic|pegi|remove|complimentary|esrb)\b/i.test(cell.textContent)) { // Check if the cell contains any of the words
		packageId = /javascript:\s*RemoveFreeLicense\s*\(\s*(\d+)/.exec(cell.innerHTML); // Get the packageId

		if (packageId !== null) { // If the packageId is not null
			i++; // Increment the counter
			console.log(`[${i}] Removing: ${packageId[1]} - ${cell.innerHTML.split("</div>")[1].trim()}`); // Log the packageId and the name
			if (!appIds.includes(packageId[1])) appIds.push(packageId[1]); // Add the packageId to the array if it's not already there
		}
	}
}

// Save the estimate with two decimal places
var estimate = (appIds.length/60).toFixed(2);

// Console log the number of found appids and the estimate to remove them all.
console.log(`Found ${appIds.length} AppIds. Estimated time to remove all: ${estimate} minutes.`);
