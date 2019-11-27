import Component from '@ember/component';
import layout from '../templates/components/alert-banner';

/**
 * @module AlertBanner
 * `AlertBanner` components are used to inform users of important messages.
 *
 * @example
 * ```js
 * <AlertBanner @type="danger" @message="{{model.keyId}} is not a valid lease ID"/>
 * ```
 *
 * @argument type=null {String} - The banner type. This comes from the message-types helper.
 * @argument [message=null {String}] - The message to display within the banner.
 * @argument [title=null {String}] - A title to show above the message. If this is not provided, there are default values for each type of alert.
 *
 */

export default Component.extend({
  layout,
  type: null,
  message: null,
  title: null,
  yieldWithoutColumn: false,
  classNameBindings: ['containerClass'],
});
