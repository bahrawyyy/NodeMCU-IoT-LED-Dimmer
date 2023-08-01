# IoT_Brightness-of-LED-using-nodemcu
This repository contains an IoT project that allows you to control the brightness of an LED using NodeMCU (ESP8266) along with HTML, CSS, JavaScript, and Node.js. The project provides a web-based interface to adjust the LED brightness dynamically.

## Features
- Adjust LED brightness remotely through a web interface.
- Utilize NodeMCU as a client to control the LED brightness based on the data received from the server.


## Project Structure
The repository is organized as follows:

- views folder:  
Contains HTML, CSS, and JavaScript files that create the web-based interface with a range slider. This interface allows users to control the brightness of the LED by adjusting the slider, which sends the selected value to the server (index.js).
- NodeMCU_client:   
Contains the Arduino file that configures NodeMCU as a client. The NodeMCU client connects to the server and receives brightness values, which are then used to control the LED's brightness.

