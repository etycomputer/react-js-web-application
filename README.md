# Project Description
Our project is a single-page web application built using React JS in TypeScript. 
The application will retrieve and store information from an existing backend API endpoint. 
As a stretch goal, we aim to make the web app a progressive app to enhance the user experience.

One of the key requirements for this project is to optimize load speed and performance. 
We will be using Google Lighthouse to evaluate performance and ensure the app meets high standards.
Additionally, we will be utilizing strong typing in TypeScript to catch errors before runtime and optimize the code.

The end goal of this project is to build a highly performant and user-friendly Progressive Web Application that provides a seamless experience for users.

## Main Sections
The application is divided into three main sections:

### Section 1 - Marker List & Properties
The first section lists the available markers, allowing users to select a marker to view its properties and update them if needed. 
This section provides a user-friendly interface for managing the markers.

### Section 2 - 3D View
The second section features a 3D view where users can see the markers in 3D space, pan, zoom, and click on a marker -represented as an orb - to view its latest readings and status. 
We will be using the Three.js library to implement this section and provide a visually rich and engaging experience.

### Section 3 - 2D Trace Chart
The third section displays the traces of the marker readings when a marker is selected, using a simple line chart. 
We will be using the D3.js library to implement this section, providing a clear and intuitive way for users to view the marker data.

# Project Requirements
- The web application must be a single-page web application built using React JS in TypeScript.
- The application must retrieve and store information from an existing backend API endpoint.
- The application must include three main sections: a marker list & properties section, a 3D view, and a 2D trace chart.
- The marker list section must allow users to select a marker to view its properties and update some of their properties if needed.
- The 3D view section must allow users to see the markers in 3D space, pan, zoom, and click on a marker to view its latest readings and status. This section must use the Three.js library.
- The 2D trace chart section must display the traces of the marker readings when a marker is selected, using a simple line chart. This section must use the D3.js library.
- The application must be optimized for load speed and performance, utilizing techniques such as code splitting, lazy loading, and caching to minimize unnecessary requests to the backend.
- The application's performance must be evaluated using Google Lighthouse to ensure it meets high standards.
- All modules and components of this web app needs to be unit tested.
- basic end-to-end testing is also needed.
- The end result of the project must be a highly performant and user-friendly web application that provides a seamless experience for managing and viewing marker data in both 2D and 3D spaces.

### Project User Stories

- [ ] As a user, I want to view a list of available markers and select a specific marker to view its properties.
- [ ] As a user, I want to be able to update the properties of a selected marker, such as its name or [X,Y,Z] location.
- [ ] As a user, I want to be able to view the markers in a 3D space and interact with them by panning, zooming, and clicking on them to view their latest readings and status, for example their latest temperature reading.
- [ ] As a user, I want to be able to view the traces of the marker readings in a simple line chart when a marker is selected, for example its temperature readings.
- [ ] As a user, I want the application to be fast and responsive, with minimal load times and smooth interactions.
- [ ] As a user, I want the application to be accessible while offline (PWA), to be able to view the previously retrieved marker readings.

### Project Use Cases:

1. Viewing the marker list

- [ ] The application retrieves the list of available markers. 
  - [ ] This is done at the beginning when the web app is loaded from the backend API endpoint.
  - [ ] A reload button should also be available to fetch new information from the backend API endpoint.
  - [ ] (optional) If offline the application would use the previously retrieved marker list in memory.
  - [ ] (optional) A periodic thread needs to pull the backend API endpoint.
- [ ] The user navigates to the marker list section of the application.
  - [ ] The user views the list of markers by scrolling up and down from the list.
  - [ ] The user selects a specific marker to view its properties.

2. Updating marker properties

- [ ] The user selects a marker from the marker list section.
  - [ ] The application displays the properties of the selected marker.
  - [ ] The property section displays the marker name in a text box.
  - [ ] The property section displays the marker [X,Y,Z] location with three number fields that accept float values.
- [ ] The user updates one or more properties of the marker, such as its name or [X,Y,Z] location.
  - [ ] The application sends a request to the backend API to update the marker properties.
  - [ ] (optional) If offline editing functionality would be disabled.

3. Viewing markers in 3D space

- [ ] The user navigates to the 3D view section of the application.
  - [ ] The application uses the retrieved the list of available markers to displays them in a 3D space as orbs.
- [ ] The user can interact with the markers by panning, zooming, and clicking on them.
  - [ ] When the user clicks on a marker, the application displays its latest readings and marker name in a popup next to the Marker orb.
  - [ ] When the user clicks on a different marker or some other place in the 3D view the popup box from the previous Marker would be removed, and if a new marker was clicked a new popup box would be displayed for that new Marker.

4. Viewing marker traces on a line chart

- [ ] The user selects a marker from the marker list section or the 3D view section.
  - [ ] The application retrieves the latest readings for the selected marker from the backend API endpoint.
  - [ ] The application displays the traces of the marker readings in a simple line chart, for example the temperature readings.
  - [ ] (optional) If offline the Marker readings collected previously would be used to draw the line chart.

5. Ensuring fast and responsive performance

- [ ] The application uses techniques such as code splitting, lazy loading, and caching to minimize unnecessary requests to the backend.
- [ ] The application is optimized for load speed and performance, with fast load times and smooth interactions.
- [ ] The application's performance is evaluated using Google Lighthouse or other performance monitoring tools, and any issues are addressed to ensure high performance and user satisfaction.

#Getting started
Explain how to set up the project locally, including any necessary dependencies and installation instructions. This section should be clear and concise to make it easy for someone to get started with your project.

#Usage
Give an overview of how your application works and how to use it. You can also include screenshots or a demo video to showcase your application.

