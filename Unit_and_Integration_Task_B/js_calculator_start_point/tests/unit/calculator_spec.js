var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(5, calculator.runningTotal)
  })

  it('it can subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('it can multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it('it can divide', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

 it('can concatenate on click', function(){
   calculator.runningTotal = 0
   calculator.numberClick(4)
   calculator.numberClick(1)
   calculator.numberClick(2)
   assert.equal(412, calculator.runningTotal)
 })

 it('can chain multiple operations together on click', function(){
   calculator.previousTotal = 2
   calculator.add(6)
   calculator.operatorClick("=")
   calculator.divide(2)
   assert.equal(4, calculator.runningTotal)
 })

 it('can clear on click', function(){
   calculator.previousTotal = 6
   calculator.add(3)
   calculator.operatorClick("=")
   calculator.clearClick()
   assert.equal(0, calculator.runningTotal)
   assert.equal(9, calculator.previousTotal)

 })







});
