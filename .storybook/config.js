import { configure } from '@storybook/ember';


configure([
  require.context('../stories', true, /.stories.js$/),
  //require.context('../stories', true, /.stories.mdx$/),
], module);
