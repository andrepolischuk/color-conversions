
'use strict';

var conversions = require('./');
var assert = require('assert');

describe('conversions', function() {
  describe('#rgb2keyword(...args)', function() {
    it('should return keyword', function() {
      assert.deepEqual(['black'], conversions.rgb2keyword(0, 0, 0));
      assert.deepEqual(['white'], conversions.rgb2keyword(255, 255, 255));
      assert.deepEqual(['red'], conversions.rgb2keyword(255, 0, 0));
    });
  });

  describe('#keyword2rgb(str)', function() {
    it('should return rgb', function() {
      assert.deepEqual([0, 0, 0], conversions.keyword2rgb('black'));
      assert.deepEqual([255, 255, 255], conversions.keyword2rgb('white'));
      assert.deepEqual([255, 0, 0], conversions.keyword2rgb('red'));
    });
  });

  describe('#rgb2hex(...args)', function() {
    it('should return hex', function() {
      assert.deepEqual(['000000'], conversions.rgb2hex(0, 0, 0));
      assert.deepEqual(['ffffff'], conversions.rgb2hex(255, 255, 255));
      assert.deepEqual(['ff0000'], conversions.rgb2hex(255, 0, 0));
    });
  });

  describe('#hex2rgb(str)', function() {
    it('should return rgb', function() {
      assert.deepEqual([0, 0, 0], conversions.hex2rgb('000'));
      assert.deepEqual([255, 255, 255], conversions.hex2rgb('ffffff'));
      assert.deepEqual([255, 0, 0], conversions.hex2rgb('f00'));
    });
  });

  describe('#rgb2cmyk(...args)', function() {
    it('should return cmyk', function() {
      assert.deepEqual([0, 0, 0, 100], conversions.rgb2cmyk(0, 0, 0));
      assert.deepEqual([0, 0, 0, 0], conversions.rgb2cmyk(255, 255, 255));
      assert.deepEqual([0, 100, 100, 0], conversions.rgb2cmyk(255, 0, 0));
    });
  });

  describe('#cmyk2rgb(...args)', function() {
    it('should return rgb', function() {
      assert.deepEqual([0, 0, 0], conversions.cmyk2rgb(0, 0, 0, 100));
      assert.deepEqual([255, 255, 255], conversions.cmyk2rgb(0, 0, 0, 0));
      assert.deepEqual([255, 0, 0], conversions.cmyk2rgb(0, 100, 100, 0));
    });
  });

  describe('#rgb2hsl(...args)', function() {
    it('should return hsl', function() {
      assert.deepEqual([0, 0, 0], conversions.rgb2hsl(0, 0, 0));
      assert.deepEqual([0, 0, 100], conversions.rgb2hsl(255, 255, 255));
      assert.deepEqual([0, 100, 50], conversions.rgb2hsl(255, 0, 0));
    });
  });

  describe('#hsl2rgb(...args)', function() {
    it('should return rgb', function() {
      assert.deepEqual([0, 0, 0], conversions.hsl2rgb(0, 0, 0));
      assert.deepEqual([255, 255, 255], conversions.hsl2rgb(0, 0, 100));
      assert.deepEqual([255, 0, 0], conversions.hsl2rgb(0, 100, 50));
    });
  });

  describe('#rgb2hsv(...args)', function() {
    it('should return hsv', function() {
      assert.deepEqual([0, 0, 0], conversions.rgb2hsv(0, 0, 0));
      assert.deepEqual([0, 0, 100], conversions.rgb2hsv(255, 255, 255));
      assert.deepEqual([0, 100, 100], conversions.rgb2hsv(255, 0, 0));
    });
  });

  describe('#hsv2rgb(...args)', function() {
    it('should return rgb', function() {
      assert.deepEqual([0, 0, 0], conversions.hsv2rgb(0, 0, 0));
      assert.deepEqual([255, 255, 255], conversions.hsv2rgb(0, 0, 100));
      assert.deepEqual([255, 0, 0], conversions.hsv2rgb(0, 100, 100));
    });
  });

  describe('#keyword2hex(str)', function() {
    it('should return hex', function() {
      assert.deepEqual(['000000'], conversions.keyword2hex('black'));
      assert.deepEqual(['ffffff'], conversions.keyword2hex('white'));
      assert.deepEqual(['ff0000'], conversions.keyword2hex('red'));
    });
  });

  describe('#hex2keyword(str)', function() {
    it('should return keyword', function() {
      assert.deepEqual(['black'], conversions.hex2keyword('000'));
      assert.deepEqual(['white'], conversions.hex2keyword('ffffff'));
      assert.deepEqual(['red'], conversions.hex2keyword('f00'));
    });
  });

  describe('#keyword2cmyk(str)', function() {
    it('should return cmyk', function() {
      assert.deepEqual([0, 0, 0, 100], conversions.keyword2cmyk('black'));
      assert.deepEqual([0, 0, 0, 0], conversions.keyword2cmyk('white'));
      assert.deepEqual([0, 100, 100, 0], conversions.keyword2cmyk('red'));
    });
  });

  describe('#cmyk2keyword(...args)', function() {
    it('should return keyword', function() {
      assert.deepEqual(['black'], conversions.cmyk2keyword(0, 0, 0, 100));
      assert.deepEqual(['white'], conversions.cmyk2keyword(0, 0, 0, 0));
      assert.deepEqual(['red'], conversions.cmyk2keyword(0, 100, 100, 0));
    });
  });

  describe('#keyword2hsl(str)', function() {
    it('should return hsl', function() {
      assert.deepEqual([0, 0, 0], conversions.keyword2hsl('black'));
      assert.deepEqual([0, 0, 100], conversions.keyword2hsl('white'));
      assert.deepEqual([0, 100, 50], conversions.keyword2hsl('red'));
    });
  });

  describe('#hsl2keyword(...args)', function() {
    it('should return keyword', function() {
      assert.deepEqual(['black'], conversions.hsl2keyword(0, 0, 0));
      assert.deepEqual(['white'], conversions.hsl2keyword(0, 0, 100));
      assert.deepEqual(['red'], conversions.hsl2keyword(0, 100, 50));
    });
  });

  describe('#keyword2hsv(str)', function() {
    it('should return hsv', function() {
      assert.deepEqual([0, 0, 0], conversions.keyword2hsv('black'));
      assert.deepEqual([0, 0, 100], conversions.keyword2hsv('white'));
      assert.deepEqual([0, 100, 100], conversions.keyword2hsv('red'));
    });
  });

  describe('#hsv2keyword(...args)', function() {
    it('should return keyword', function() {
      assert.deepEqual(['black'], conversions.hsv2keyword(0, 0, 0));
      assert.deepEqual(['white'], conversions.hsv2keyword(0, 0, 100));
      assert.deepEqual(['red'], conversions.hsv2keyword(0, 100, 100));
    });
  });

  describe('#hex2cmyk(str)', function() {
    it('should return cmyk', function() {
      assert.deepEqual([0, 0, 0, 100], conversions.hex2cmyk('000'));
      assert.deepEqual([0, 0, 0, 0], conversions.hex2cmyk('ffffff'));
      assert.deepEqual([0, 100, 100, 0], conversions.hex2cmyk('f00'));
    });
  });

  describe('#cmyk2hex(...args)', function() {
    it('should return hex', function() {
      assert.deepEqual(['000000'], conversions.cmyk2hex(0, 0, 0, 100));
      assert.deepEqual(['ffffff'], conversions.cmyk2hex(0, 0, 0, 0));
      assert.deepEqual(['ff0000'], conversions.cmyk2hex(0, 100, 100, 0));
    });
  });

  describe('#hex2hsl(str)', function() {
    it('should return hsl', function() {
      assert.deepEqual([0, 0, 0], conversions.hex2hsl('000'));
      assert.deepEqual([0, 0, 100], conversions.hex2hsl('ffffff'));
      assert.deepEqual([0, 100, 50], conversions.hex2hsl('f00'));
    });
  });

  describe('#hsl2hex(...args)', function() {
    it('should return hex', function() {
      assert.deepEqual(['000000'], conversions.hsl2hex(0, 0, 0));
      assert.deepEqual(['ffffff'], conversions.hsl2hex(0, 0, 100));
      assert.deepEqual(['ff0000'], conversions.hsl2hex(0, 100, 50));
    });
  });

  describe('#hex2hsv(str)', function() {
    it('should return hsv', function() {
      assert.deepEqual([0, 0, 0], conversions.hex2hsv('000'));
      assert.deepEqual([0, 0, 100], conversions.hex2hsv('ffffff'));
      assert.deepEqual([0, 100, 100], conversions.hex2hsv('f00'));
    });
  });

  describe('#hsv2hex(...args)', function() {
    it('should return hex', function() {
      assert.deepEqual(['000000'], conversions.hsv2hex(0, 0, 0));
      assert.deepEqual(['ffffff'], conversions.hsv2hex(0, 0, 100));
      assert.deepEqual(['ff0000'], conversions.hsv2hex(0, 100, 100));
    });
  });

  describe('#cmyk2hsl(...args)', function() {
    it('should return hsl', function() {
      assert.deepEqual([0, 0, 0], conversions.cmyk2hsl(0, 0, 0, 100));
      assert.deepEqual([0, 0, 100], conversions.cmyk2hsl(0, 0, 0, 0));
      assert.deepEqual([0, 100, 50], conversions.cmyk2hsl(0, 100, 100, 0));
    });
  });

  describe('#hsl2cmyk(...args)', function() {
    it('should return cmyk', function() {
      assert.deepEqual([0, 0, 0, 100], conversions.hsl2cmyk(0, 0, 0));
      assert.deepEqual([0, 0, 0, 0], conversions.hsl2cmyk(0, 0, 100));
      assert.deepEqual([0, 100, 100, 0], conversions.hsl2cmyk(0, 100, 50));
    });
  });

  describe('#cmyk2hsv(...args)', function() {
    it('should return hsv', function() {
      assert.deepEqual([0, 0, 0], conversions.cmyk2hsv(0, 0, 0, 100));
      assert.deepEqual([0, 0, 100], conversions.cmyk2hsv(0, 0, 0, 0));
      assert.deepEqual([0, 100, 100], conversions.cmyk2hsv(0, 100, 100, 0));
    });
  });

  describe('#hsv2cmyk(...args)', function() {
    it('should return cmyk', function() {
      assert.deepEqual([0, 0, 0, 100], conversions.hsv2cmyk(0, 0, 0));
      assert.deepEqual([0, 0, 0, 0], conversions.hsv2cmyk(0, 0, 100));
      assert.deepEqual([0, 100, 100, 0], conversions.hsv2cmyk(0, 100, 100));
    });
  });

  describe('#hsl2hsv(...args)', function() {
    it('should return hsv', function() {
      assert.deepEqual([0, 0, 0], conversions.hsl2hsv(0, 0, 0));
      assert.deepEqual([0, 0, 100], conversions.hsl2hsv(0, 0, 100));
      assert.deepEqual([0, 100, 100], conversions.hsl2hsv(0, 100, 50));
    });
  });

  describe('#hsv2hsl(...args)', function() {
    it('should return hsl', function() {
      assert.deepEqual([0, 0, 0], conversions.hsv2hsl(0, 0, 0));
      assert.deepEqual([0, 0, 100], conversions.hsv2hsl(0, 0, 100));
      assert.deepEqual([0, 100, 50], conversions.hsv2hsl(0, 100, 100));
    });
  });
});
