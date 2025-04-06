//this name must be the same as the folder title, and the component name
export const app_name = "joshuas-app";

//creating the component (app), this here registers it under the name (see above) with HTML and a boot script
export const app = _component("joshuas-app",html`

	<!-- attach the styling -->
	<link rel='stylesheet' type='text/css' href='./apps/joshuas-app/styles.css'>

	<main-area>
		
		<!-- recommend adding app HTML here -->

	</main-area>

`,boot_up_app)

//the following function runs every time the app is *opened* (from a not-open state)
function boot_up_app(app) {
	//code
	alert("Hello World!")
}