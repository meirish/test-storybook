import hbs from 'htmlbars-inline-precompile'

export default {
  title: 'Components/AlertBanner',
  component: 'AlertBanner'
};

export const standard = () => ({
  template: hbs`
    <strong>strong</strong>
    <AlertBanner @message={{this.message}} @title={{this.title}} />
  `,
  context: {
    actions: {
      test() {
        debugger;
      }
    },
    message:"a message",
    title: "Title"
  }
});


export const nonstandard = () => ({
    template: hbs`
    <AlertBanner @message="foo" @title="warning" />
  `
});
