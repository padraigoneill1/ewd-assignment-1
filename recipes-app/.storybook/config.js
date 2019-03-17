import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  require('../stories/recipeApp.js');
}

configure(loadStories, module);