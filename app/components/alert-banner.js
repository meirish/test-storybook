import Component from '@ember/component';
import layout from '../templates/components/alert-banner';

/**
 * `AlertBanner` components are used to inform users of important messages.
 *
 * ```js
 * <AlertBanner @type="danger" @message="{{model.keyId}} is not a valid lease ID"/>
 * ```
 *
 * @class AlertBanner
 */


/**
 * @argument message
 * @default null
 * @type string
 * @description The message to display within the banner.
 */

/**
 * @argument title
 * @required
 * @type string
 * @description A title to show above the message. If this is not provided, there are default values for each type of alert.
 *
 */

export default Component.extend({
  layout,
/**
 * @argument type
 * @type string
 * @default null
 * @required
 * @description The banner type. This comes from the message-types helper.
 */
  type: null,
  message: null,
  title: null,
  yieldWithoutColumn: false,
  classNameBindings: ['containerClass'],
});
