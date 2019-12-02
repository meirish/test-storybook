import { configure, setDocJSON } from '@storybook/ember';
import json from '../dist/docs/index.json';


setDocJSON(json);

configure([
  require.context('../stories', true, /.stories.js$/),
  //require.context('../stories', true, /.stories.mdx$/),
], module);
