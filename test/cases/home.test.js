import selectors from '../model/selectors.js';

fixture(`Home Page!`)
  .page('http://localhost:8080');

test('Check heading is exist on home page! ', async tc => {
	await tc
		.expect(selectors.heading2.innerText).eql("FizzBuzz")
});