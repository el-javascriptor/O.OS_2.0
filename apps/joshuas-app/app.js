/*
	soupsoupsoupsoupsoup!

	Here's some example code to get you started. Also, note that
	you will have to first install your app in the operating system
	terminal using `sudo app install <yourappname>`, at the current moment:

		sudo apt install joshuas-app

	Also, you'll want to use devtools to put it in a phone shape because
	my RWD is *struggling* ;)

	The O.OS uses localStorage() to store data (what apps are downloaded,
	files, settings, etc.)

	If your app wishes to store data, all the keys to the data should be prefixed
	by your app name. EX:

		NOT: localStorage.setItem("username", "owen");
		YES: localStorage.setItem("joshuas-app-username", "owen")
*/


//this name must be the same as the folder title, and the component name
export const app_name = "joshuas-app";

//example code
let username = "Josh";



//creating the component (app), this here registers it under the name (see above) with HTML and a boot script
export const app = _component("joshuas-app",html`

	<!-- attach the styling -->
	<link rel='stylesheet' type='text/css' href='./apps/joshuas-app/styles.css'>

	<main-area>
		
		<!-- recommend adding app HTML here -->
		Hello, ${username}

	</main-area>

`,boot_up_app)




//the following function runs every time the app is *opened* (from a not-open state)
function boot_up_app(app) {

	//code
	alert("Hello World!")
}