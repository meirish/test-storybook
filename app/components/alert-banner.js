import Component from '@ember/component';
import layout from '../templates/components/alert-banner';

/**
 *
 * `AlertBanner` components are used to inform users of important messages.
 *
 * # a header here
 * ```js
 *              <AlertBanner @type="danger" @message="{{model.keyId}} is not a valid lease ID"/>
 *
 * <AlertBanner @type="danger" @message="{{model.keyId}} is not a valid lease ID"/>
 * ```
 *
 * @class AlertBanner
 */


/**
 * The message to display within the banner. Maybe will be a number.-
 * @argument message
 * @type {string}
 * @default null
 */

/**
 *
 * A title to show above the message. If this is not provided, there are default values for each type of alert.
 *
 * @argument title
 * @required
 * @type string
 *
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
