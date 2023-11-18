<a href="https://www.real-assist.digital/"> 
    <img src="https://framerusercontent.com/images/ok3R8n8N9DkFeec0todSZ8bdh4.svg" alt="Real Assist logo" title="Real Assist" align="right" height="40" /> 
</a>

# TRREB Sign-on Autofill

[![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcounterapi.com%2Fapi%2Freal-assist.digital%2Fview%2Ftrreb_login_autofill_v1%3FreadOnly%3Dtrue%26startNumber%3D574&query=%24.value&prefix=More%20than%20&suffix=0%20keystrokes%20saved!&label=Impact%20made%20to%20date%20)](https://counterapi.com/stats/real-assist.digital/view/trreb_login_autofill_v1)
[![License](https://img.shields.io/badge/License-MIT-Green
)](LICENSE)

TRREB Sign-on Autofill is a open-sourced software plugin for the Chrome browser that can help automatically fill in your saved userID and PIN. 
- Never waste time typing out your userID and PIN again
- Save 11 keystrokes per login
- Feel the speed!
- Completely Free!

We developed this software to help Toronto Realtors reclaim time from your busy days so that you can spend time making meaningful connections with your clients. Check us out at https://real-assist.digital.

## How it works
![how_it_works](how_it_works.gif)

The Extension helps simplify your login process to 4 easy steps. It can't get sweeter than that!

1. Click on the Extension to open the login page
2. Type the authenticator code into the popup
3. Press "Ok"
4. Press the "Log On" button

Enjoy!

## Installation

Ready to powerup your realtor experience? Follow the following steps to install the software!

1. Download from GitHub:
Visit the GitHub repository and locate the folder of the desired Chrome extension. Click on the green "Code" button and select "Download ZIP" to save the folder to your local machine. Unzip the download.

2. Locate the Lines for User ID and PIN:
Search for the following lines of code in the background.js file:
```javascript
getElementByXpath(`//*[@id="clareity"]`).innerHTML = "your userID"; // EDIT this line prior to use
getElementByXpath(`//*[@id="pin"]`).innerHTML = "your user PIN"; // EDIT this line prior to use
```

3. Edit and Save:
Modify "your userID" and "your user PIN" to include the actual user ID and PIN values you want to use for authentication within the extension. For example:

```javascript
getElementByXpath(`//*[@id="clareity"]`).innerHTML = "1234567"; // Your actual userID
getElementByXpath(`//*[@id="pin"]`).innerHTML = "1234"; // Your actual PIN
```

4. Access Chrome Extension Manager:
Open Google Chrome and navigate to the browser's menu (three dots on the top right). Choose "More Tools" and then select "Extensions" from the dropdown menu.

5. Load Unpacked Extension:
Once in the Extensions manager, ensure the "Developer mode" toggle in the top right corner is switched on. Click on "Load unpacked" and navigate to the downloaded folder's location on your computer. Select the folder and click "Open" to load the extension into Chrome.

6. Pin to Toolbar:
After loading the unpacked extension, you'll find its icon added to the Extensions manager. To pin it to the toolbar for easy access, locate the extension icon within the Extensions manager, then click on the extension's pin icon (often an image of a pin or the extension logo). This action will place the extension icon in your Chrome toolbar for quick access whenever needed.

Enjoy Your New Extension:
Your extension is now readily accessible from the Chrome toolbar. Click on the icon whenever you want to use its functionality.

## Terms of use & Security
This software is designed for offline and private use. It does not implement additional security measures to safeguard user credentials, such as PINs or userIDs, which are stored unprotected on the user's device. Similar to other confidential documents, exercise caution in sharing or storing this software. When sharing the program with others, only distribute it using the official link to the project. Users are responsible for the protection and safekeeping of their sensitive information while using this software.

Please read [the license](LICENSE) for more.

## Need help?

🌟 Unlock Solutions with Personalized Help Sessions! 🌟

🚀 Ready to Overcome Challenges and Find Solutions? 🚀

We're thrilled to offer you a one-on-one help session tailored to your needs! Whether it's tech troubles, creative conundrums, or any obstacle in your way, our dedicated team is here to assist you.

✨ Why Book a Help Session with Us? ✨

🔍 Personalized Attention: Get dedicated time and attention focused solely on your queries or issues.
🛠️ Customized Solutions: Tailored strategies and solutions crafted specifically for your unique situation.
🗣️ Expert Guidance: Benefit from our team's extensive expertise and knowledge in AI/automation, website design, marketing, digital advertising and more.
💡 Problem-Solving Together: Let's tackle challenges together and find effective solutions.

👉 How to Book Your Session 👈

Scheduling your session is quick and easy! Simply click [link] to book your preferred time slot. Our friendly team will be eagerly waiting to assist you!

🌟 Your Success is Our Priority! 🌟

Join us for a productive and enlightening help session. Let's work together to overcome obstacles and pave the way for your success!

🌐 [Booking Link] 🌐

Feel free to reach out if you have any questions before booking. We're here to help!

Warm regards,

The Real Assist Team

Email: [info@real-assist.digital](mailto:info@real-assist.digital)


