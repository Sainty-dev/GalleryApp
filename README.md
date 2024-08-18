# GalleryApp
![GalleryApp Logo](https://firebasestorage.googleapis.com/v0/b/apartment-management-sys-5cdc7.appspot.com/o/Mobile%20App%20Phone%20Mockup%20Sales%20Marketing%20Presentation%20in%20Blue%20and%20White%20Modern%20Photocentric%20Style(1).png?alt=media&token=c130ef83-a886-4b0d-b0b1-2dfb894fcdb0)
## Overview
GalleryApp is a mobile gallery application that allows users to view a list of images and see detailed views of each image. The app is designed to adapt to different device sizes and orientations and utilizes data from a public API.

## Requirements

### Redux
- Uses the Redux Toolkit to manage the app's state.

### Navigation and Routing
- Use React Navigation to manage screen transitions.
- The app include:
  - **Gallery Screen**: Displays thumbnails of images in a grid.
  - **Image Detail Screen**: Shows a larger view of the image along with additional details.

### Network Call
- Fetch data using axios from the provided JSONPlaceholder API endpoint ([https://jsonplaceholder.typicode.com/photos](https://jsonplaceholder.typicode.com/photos)).


## Features

### Gallery Screen
- Display images in a responsive grid layout.

### Image Detail Screen
- Show a larger version of the image.
- Display the image title
- Include a toolbar back button to return to the Gallery Screen.

### Lazy loading
- Pulls images when user scrolls.


## Setup and Running the Application

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sainty-dev/GalleryApp.git
   ```
2. **Navigate to the Project Directory**
     ```bash
     cd GalleryApp
     ```
4. **Install Dependencies**
   ```bash
   yarn install
   ```
6. **Run the Application**
   ```bash
   npx react-native run-android
  ```
