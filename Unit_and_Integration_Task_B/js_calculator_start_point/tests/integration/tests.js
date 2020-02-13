const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total')) //this is the running total
    element(by.css('#number2')).click(); //this is the number 2 button being clicked
    expect(running_total.getAttribute('value')).to.eventually.equal('2') //the result of this should be 2
  })

  it('should update display with result of operation', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })//works


//Can multiple operations be chained together?
it('should be able to chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
})//works


//Is the output as expected for a range of numbers (for example,
// positive, negative, decimals and very large numbers)?
it('should be able to have output as expected for a range of decimal nums', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();              //decimal test
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2.5')
})

it('should be able to have output as expected for a range of large nums', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2500')
})

it('should be able to have output as expected for a range of negative nums', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number7')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-2')
})


it('should not allow division by zero', function(){
running_total = element(by.css('#running_total'))
element(by.css('#number5')).click();
element(by.css('#operator_divide')).click();
element(by.css('#number0')).click();
element(by.css('#operator_equals')).click();
expect(running_total.getAttribute('value')).to.eventually.equal('error')
})




});
