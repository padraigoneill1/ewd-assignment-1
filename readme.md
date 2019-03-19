# Assignment 1 - ReactJS app.

Name: Padraig O Neill

## Overview.
This app is designed to be a a location to browse recipes. The user sees instructions on the how to make dishes and required ingredients, time etcetera.

 + View recipes
 + Upvote recipes
 + Search recipes
 + Sort recipes

## Installation requirements.

This shouldn't require additonal installation instructions apart from running npm install.

## Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

Example Json Test Data

{
    "ingredients":  [
        "2 (4 ounce) filet mignon steaks",  
    ], 
    "time": {
        "readyTime": "20m"
    }, 
    
    "directions": [
        "Sprinkle freshly ground pepper over both sides of each steak, and sprinkle with salt to taste."
    ], 
    "upvotes": 4, 
    
    "description": "This is an elegant and quick romantic dinner for two. Wonderful served with steamed asparagus and baby red potatoes.", 

    "id": "filet-mignon-with-rich-balsamic-glaze", 
    "images": [
        "img/recipes/filet-mignon-with-rich-balsamic-glaze.0.jpg"
    ], 
    "name": "Filet Mignon with Rich Balsamic Glaze"
}


Model

![][model]

## App Component Design.
![][stories]


## UI Design.

![][image1]

![][image2]

## Routing.
. . . . List each route supported and state the associated view . . . . . 

+ / - displays all published recipes
+ /recipe/:id - Detailed view of a particular recipe (:id)
+ /login - Login page
+ /saved - Page for viewing "saved" recipes only viewable after login (protected)
+ /about - Basic About page
+ /contact - Basic Contact Page

## Extra features
Psuedo authentication for Saved Recipes page

## Independent learning.
General Javascript/React/HTML

[model]: ./data.png
[image1]: ./screen.png
[image2]: ./screen2.png
[stories]: ./storybook.png
[testdata]: ./test-data.json