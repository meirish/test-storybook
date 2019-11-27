import Component from '@ember/component';
/**
  A foo-bar component. Usage:

  ```hbs
    {{#foo-bar baz=123 as |hash|}}

    {{/foo-bar}}
  ```

  @class FooBarComponent
  @yield {Hash} hash
  @yield {number} hash.foo
*/
export default Component.extend({
  /**
    @argument baz
    @type {boolean}
  */
  baz: false,

  /**
    @argument wat
    @type {boolean}
  */
  wat: false
});
