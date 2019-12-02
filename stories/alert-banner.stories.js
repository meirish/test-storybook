import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/AlertBanner',
  component: 'AlertBanner'
};

export const standard = () => ({
    template: hbs`
    <AlertBanner @message="foo" @title="warning" />
  `
});


export const nonstandard = () => ({
    template: hbs`
    <AlertBanner @message="foo" @title="warning" />
  `
});
