import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import SelectControls from '../src/components/selectControls';
import Recipe from '../src/components/recipe';
import Recipes from '../src/Data';   // Test data set
import RecipeList from '../src/components/recipeList';
import { action } from '@storybook/addon-actions';
import Images from '../src/components/recipeDetail/images';
import { MemoryRouter, Route } from 'react-router'
import Specification from '../src/components/recipeDetail/specification'


const recipe = 
        {
            "additionalFeatures": "Front Facing 1.3MP Camera", 
            "android": {
                    "os": "Android 2.2", 
                    "ui": "Dell Stage"
            }, 
            "availability": [
                    "T-Mobile"
            ], 
            "battery": {
                    "standbyTime": "", 
                    "talkTime": "", 
                    "type": "Lithium Ion (Li-Ion) (2780 mAH)"
            }, 
            "camera": {
                    "features": [
                            "Flash", 
                            "Video"
                    ], 
                    "primary": "5.0 megapixels"
            }, 
            "connectivity": {
                    "bluetooth": "Bluetooth 2.1", 
                    "cell": "T-mobile HSPA+ @ 2100/1900/AWS/850 MHz", 
                    "gps": true, 
                    "infrared": false, 
                    "wifi": "802.11 b/g"
            }, 
            "description": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around. Android\u2122 2.2-based tablet with over-the-air upgrade capability for future OS releases.  A vibrant 7-inch, multitouch display with full Adobe\u00ae Flash 10.1 pre-installed.  Includes a 1.3 MP front-facing camera for face-to-face chats on popular services such as Qik or Skype.  16 GB of internal storage, plus Wi-Fi, Bluetooth and built-in GPS keeps you in touch with the world around you.  Connect on your terms. Save with 2-year contract or flexibility with prepaid pay-as-you-go plans", 
            "display": {
                    "screenResolution": "WVGA (800 x 480)", 
                    "screenSize": "7.0 inches", 
                    "touchScreen": true
            }, 
            "hardware": {
                    "accelerometer": true, 
                    "audioJack": "3.5mm", 
                    "cpu": "nVidia Tegra T20", 
                    "fmRadio": false, 
                    "physicalKeyboard": false, 
                    "usb": "USB 2.0"
            }, 
            "id": "dell-streak-7", 
            "images": [
                    "img/recipes/dell-streak-7.0.jpg", 
                    "img/recipes/dell-streak-7.1.jpg", 
                    "img/recipes/dell-streak-7.2.jpg", 
                    "img/recipes/dell-streak-7.3.jpg", 
                    "img/recipes/dell-streak-7.4.jpg"
            ], 
            "name": "Dell Streak 7", 
            "sizeAndWeight": {
                    "dimensions": [
                            "199.9 mm (w)", 
                            "119.8 mm (h)", 
                            "12.4 mm (d)"
                    ], 
                    "weight": "450.0 grams"
            }, 
            "storage": {
                    "flash": "16000MB", 
                    "ram": "512MB"
            }
        }

storiesOf('Recipe List', module)
        .add('Images', 
        () =>  <Images recipe={recipe} />
        ) 
        .add('Specification', 
        () =>  <Specification recipe={recipe} />
        )
        .addDecorator(story => 
                <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
        )

        .add('Select controls', 
        () =>   <SelectControls 
                    onUserInput={ action('input changed') }
                    filterText='' /> 
        )
        .add('Recipe', 
        () =>  <Recipe recipe={Recipes[0]} /> 
        )
        .add('Recipe list', 
        () =>  <RecipeList recipes={Recipes} /> 
        )
        // .add('Images', 
        // () =>  <Images recipe={recipe} />
        // )      
 