/* eslint-disable dot-notation */
import sanitizeHtml from 'sanitize-html';

sanitizeHtml.defaults.allowedAttributes['div'] = ['class'];
sanitizeHtml.defaults.allowedAttributes['span'] = ['class'];
sanitizeHtml.defaults.allowedAttributes['*'] = ['style', 'id', 'title'];
sanitizeHtml.defaults.allowedAttributes['table'] = [
  'cellpadding',
  'cellspacing',
  'border',
  'width',
  'height',
];
sanitizeHtml.defaults.allowedAttributes['th'] = ['scope'];

export default sanitizeHtml.defaults;
