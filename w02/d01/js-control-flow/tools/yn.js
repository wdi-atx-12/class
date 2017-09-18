'use strict';

module.exports = (val, opts) => {
  val = String(val).trim();
  opts = Object.assign({
    default: null
  }, opts);

  if (opts.default !== null && typeof opts.default !== 'boolean') {
    throw new TypeError(`Expected the \`default\` option to be of type \`boolean\`, got \`${typeof opts.default}\``);
  }

  if (/^(?:y|yes|true|1)$/i.test(val)) {
    return true;
  }

  if (/^(?:n|no|false|0)$/i.test(val)) {
    return false;
  }

  return opts.default;
};
