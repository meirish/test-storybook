import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/AlertBanner',
};

export const Standard = () => {
  return {
    template: hbs`
    <AlertBanner @message="foo" @title="warning" />
  `
  }
}

