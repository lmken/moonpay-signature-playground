# MoonPay URL Playground
The MoonPay URL Playground is designed to help those integrating the MoonPay widget with understanding input parameters for a widget, and how they affect the signature output.

## How to use:

 1. Add your Public Key (found in the "Developers" tab of your MoonPay Dashboard) to the API_KEY variable found in App.js.
 2.  Add your Secret Key (found in the "Developers" tab of your MoonPay Dashboard) to the secretKey variable found in signUrl.mjs.
 3. Use `node signUrl.mjs` to run the signature endpoint (port 5000, by default).
 4. Use `npm start` to run App.js (port 3000, by default).