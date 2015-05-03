
var conversions = require('..');
var assert = require('assert');

describe('conversions', function() {
  describe('#keyword2rgb(str)', function() {
    it('should return rgb', function() {
      assert.deepEqual([255, 255, 255], conversions.keyword2rgb('white'));
      assert.deepEqual([0, 0, 0], conversions.keyword2rgb('black'));
      assert.deepEqual([255, 0, 0], conversions.keyword2rgb('red'));
    });
  });

  describe('#hex2rgb(str)', function() {
    it('should return rgb', function() {
      assert.deepEqual([0, 0, 0], conversions.hex2rgb('000'));
      assert.deepEqual([255, 255, 255], conversions.hex2rgb('ffffff'));
      assert.deepEqual([255, 0, 0], conversions.hex2rgb('f00'));
    });
  });

  describe('#cmyk2rgb(...args)', function() {
    it('should return rgb', function() {
      assert.deepEqual([255, 255, 255], conversions.cmyk2rgb(0, 0, 0, 0));
      assert.deepEqual([0, 0, 0], conversions.cmyk2rgb(0, 0, 0, 100));
      assert.deepEqual([255, 0, 0], conversions.cmyk2rgb(0, 100, 100, 0));
    });
  });

  describe('#hsl2rgb(...args)', function() {
    it('should return rgb', function() {
      assert.deepEqual([0, 0, 0], conversions.hsl2rgb(0, 0, 0));
      assert.deepEqual([255, 255, 255], conversions.hsl2rgb(0, 0, 100));
      assert.deepEqual([255, 0, 0], conversions.hsl2rgb(0, 100, 50));
    });
  });

  describe('#hsv2rgb(...args)', function() {
    it('should return rgb', function() {
      assert.deepEqual([0, 0, 0], conversions.hsv2rgb(0, 0, 0));
      assert.deepEqual([255, 255, 255], conversions.hsv2rgb(0, 0, 100));
      assert.deepEqual([255, 0, 0], conversions.hsv2rgb(0, 100, 100));
    });
  });

  describe('#rgb2keyword(...args)', function() {
    it('should return keyword', function() {
      assert.deepEqual(['white'], conversions.rgb2keyword(255, 255, 255));
      assert.deepEqual(['black'], conversions.rgb2keyword(0, 0, 0));
      assert.deepEqual(['red'], conversions.rgb2keyword(255, 0, 0));
    });
  });

  describe('#rgb2hex(...args)', function() {
    it('should return hex', function() {
      assert.deepEqual(['000000'], conversions.rgb2hex(0, 0, 0));
      assert.deepEqual(['ffffff'], conversions.rgb2hex(255, 255, 255));
      assert.deepEqual(['ff0000'], conversions.rgb2hex(255, 0, 0));
    });
  });

  describe('#rgb2cmyk(...args)', function() {
    it('should return cmyk', function() {
      assert.deepEqual([0, 0, 0, 0], conversions.rgb2cmyk(255, 255, 255));
      assert.deepEqual([0, 0, 0, 100], conversions.rgb2cmyk(0, 0, 0));
      assert.deepEqual([0, 100, 100, 0], conversions.rgb2cmyk(255, 0, 0));
    });
  });

  describe('#rgb2hsl(...args)', function() {
    it('should return hsl', function() {
      assert.deepEqual([0, 0, 0], conversions.rgb2hsl(0, 0, 0));
      assert.deepEqual([0, 0, 100], conversions.rgb2hsl(255, 255, 255));
      assert.deepEqual([0, 100, 50], conversions.rgb2hsl(255, 0, 0));
    });
  });

  describe('#rgb2hsv(...args)', function() {
    it('should return hsv', function() {
      assert.deepEqual([0, 0, 0], conversions.rgb2hsv(0, 0, 0));
      assert.deepEqual([0, 0, 100], conversions.rgb2hsv(255, 255, 255));
      assert.deepEqual([0, 100, 100], conversions.rgb2hsv(255, 0, 0));
    });
  });
});
