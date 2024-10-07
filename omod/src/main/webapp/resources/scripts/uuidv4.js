(function () {
  'use strict';

  var rng = function() {
    var rnds8 = new Uint8Array(16);
    crypto.getRandomValues(rnds8);
    return rnds8;
  };

  var byteToHex = [];
  for (var i = 0; i < 256; ++i) {
    byteToHex[i] = (i + 0x100).toString(16).substr(1);
  }

  function bytesToUuid(buf, offset) {
    var i = offset || 0;
    return (byteToHex[buf[i++]] + byteToHex[buf[i++]] +
            byteToHex[buf[i++]] + byteToHex[buf[i++]] + '-' +
            byteToHex[buf[i++]] + byteToHex[buf[i++]] + '-' +
            byteToHex[buf[i++]] + byteToHex[buf[i++]] + '-' +
            byteToHex[buf[i++]] + byteToHex[buf[i++]] + '-' +
            byteToHex[buf[i++]] + byteToHex[buf[i++]] +
            byteToHex[buf[i++]] + byteToHex[buf[i++]] +
            byteToHex[buf[i++]] + byteToHex[buf[i++]]).toLowerCase();
  }

  function v4(options, buf, offset) {
    var i = buf && offset || 0;

    if (typeof options === 'string') {
      buf = options === 'binary' ? new Uint8Array(16) : null;
      options = null;
    }
    options = options || {};

    var rnds = options.random || (options.rng || rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;

    // Return string or buffer
    if (buf) {
      for (var ii = 0; ii < 16; ++ii) {
        buf[i + ii] = rnds[ii];
      }
    }

    return buf || bytesToUuid(rnds);
  }

  window.uuidv4 = v4;
})();