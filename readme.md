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

![][testdata]

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

[model]: ./data.jpg
[image1]: ./screen.png
[image2]: ./screen2.png
[stories]: ./storybook.png
[testdata]: ./test-data.json