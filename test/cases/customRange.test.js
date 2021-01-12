import selectors from '../model/selectors.js';

fixture(`FizzBuzz Custom Range Page!`)
  .page('http://localhost:8080');

test('Check FizzBuzz custom range page heading and behavior.', async tc => {
	await tc
		.click(selectors.customRangeMenu)
		.expect(selectors.heading2.innerText).eql("FizzBuzz Custom Range")
		.typeText(selectors.fromInput,"5", {replace:true})
		.typeText(selectors.toInput,"38", {replace:true})
		.expect(selectors.firstItem.innerText).eql("Buzz")
		.expect(selectors.lastItem.innerText).eql("38")
});



