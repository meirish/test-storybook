import { configure } from '@storybook/ember';
import { setJSONDoc } from '@storybook/addon-docs/ember';
import json from '../dist/storybook-docgen/index.json';

setJSONDoc(json);

configure([
  require.context('../stories', true, /.stories.js$/),
 require.context('../stories', true, /.stories.mdx$/),
], module);
