<template>
	<div>
		<div class="card">
			<div class="card-header">
				<h2 class="text-center">FizzBuzz</h2>
			</div>
			<div class="card-body container">
				<h3>Description</h3>
				<p>
					Fizz buzz is a group word game for children to teach them about division. Players take turns to
					count incrementally, replacing any number divisible by three with the word "fizz", and any number
					divisible by five with the word "buzz".
				</p>
				<h3>Play</h3>
				<p>
					Players generally sit in a circle. The player designated to go first says the number "1", and the players then count upwards in turn. However, any number divisible by three is replaced by the word fizz and any number divisible by five by the word buzz. Numbers divisible by 15 become fizz buzz. A player who hesitates or makes a mistake is eliminated from the game.

					For example, a typical round of fizz buzz would start as follows:

					1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
				</p>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                counter: 0,
                users: [
                    {id: 1, name: "John"},
                    {id: 2, name: "Hardik"},
                    {id: 3, name: "Becky"},
                ]
            }
        },
        methods: {
            evaluateRange: function (from, to) {
                let list = [];
                let counter = 0;

                if (from > to) {
                    throw new TypeError("[From] value cannot be slower than [To] value")
                }

                for (let i = from; i <= to; i++) {
                    if (i % 15 === 0) {
                        list[counter] = {key: i, value: 'FizzBuzz'}
                    } else if (i % 3 === 0) {
                        list[counter] = {key: i, value: 'Fizz'}
                    } else if (i % 5 === 0) {
                        list[counter] = {key: i, value: 'Buzz'}
                    } else {
                        list[counter] = {key: i, value: i}
                    }

                    counter++;
                }
                return list;
            }
        }
    }
</script>

<style>
	.box {
		display: table-cell;
		width: 80px;
		height: 80px;
		color: #FFF;
	}
</style>