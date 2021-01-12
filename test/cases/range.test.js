import selectors from '../model/selectors.js';

fixture(`FizzBuzz Fixed Range Page!`)
    .page('http://localhost:8080');

test('Check FizzBuzz fixed range page heading and behavior', async tc => {
    await tc
        .click(selectors.rangeMenu)
        .expect(selectors.heading2.innerText).eql("FizzBuzz Fixed Range")
        .expect(selectors.firstItem.innerText).eql("1")
        .expect(selectors.lastItem.innerText).eql("Buzz")
});