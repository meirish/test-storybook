import { configure, setJSONDoc } from '@storybook/ember';
import json from '../dist/storybook-docgen/index.json';


setJSONDoc(json);

configure([
  require.context('../stories', true, /.stories.js$/),
 require.context('../stories', true, /.stories.mdx$/),
], module);
