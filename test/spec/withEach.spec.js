'use strict';

describeComponent('lib/withEach', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  describe('this.each', function() {
 
    it('should generate an increasing iteration count', function () {
      this.component.each([1, 2, 3], function(num, i){
          expect(num).toEqual(i + 1);
      })
    });
    
    it('should access conect object property correctly', function () {
      var answers = [];
      this.component.each([1, 2, 3], function(num){
          answers.push(num * this.multiplier);
      }, {multiplier: 5});
      expect(answers[0]).toEqual(5);
      expect(answers[1]).toEqual(10);
      expect(answers[2]).toEqual(15);
    });   
    
    it('should be aliased as forEach', function(){
      expect(this.component.each).toBe(this.component.forEach)
    })
    
    it('should also iterate over object while ignoring its prototype', function() {
      var answers = [];
      var obj = {one : 1, two : 2, three : 3};
      obj.constructor.prototype.four = 4;  
      this.component.each(obj, function(value, key) {
          answers.push(key);
      });
      expect(answers.length).toEqual(3);
      expect(answers[0]).toEqual("one");
      expect(answers[1]).toEqual("two");
      expect(answers[2]).toEqual("three");      
      delete obj.constructor.prototype.four;
    })
    
    it('should expose the original collection inside the iterator', function(){
      this.component.each([1, 2, 3], function(num, index, arr){
          expect([1, 2, 3]).toEqual(arr);
      });
    });
    
    it('should handle null properly', function() {
      var answers = 0;
      this.component.each(null, function() {
          ++answers;
      })
      expect(answers).toEqual(0);
    });

  });

});
