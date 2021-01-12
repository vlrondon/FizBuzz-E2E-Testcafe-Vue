<template>
	<div class="row">
		<div class="col-md-2 p-3" v-for="(item, index) in evaluateRange(from, to)">
			<div class="bg-primary rounded box align-middle" v-bind:class="{ 'bg-primary': item.type === 'f', 'bg-success': item.type === 'b', 'bg-danger': item.type === 'fb', 'bg-secondary': item.type === 'n', first: index === 0, last: index === total - 1}">
				<h4>{{ item.value }}</h4>
				<span class="badge badge-light">{{ item.key }}</span>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        props: ['from', 'to'],
        data() {
            return {
                total: 0
            }
        },
        methods: {
            evaluateRange: function () {
                let from = parseInt(this.from);
                let to = parseInt(this.to);
                let list = [];
                let counter = 0;

                // The plus simbol
                if (to < from) {
                    throw new Error("[To] value cannot be slower than [From] value");
                }

                for (let i = from; i <= to; i++) {
                    if (i % 15 === 0) {
                        list[counter] = {key: i, value: 'FizzBuzz', type: 'fb'}
                    } else if (i % 3 === 0) {
                        list[counter] = {key: i, value: 'Fizz', type: 'f'}
                    } else if (i % 5 === 0) {
                        list[counter] = {key: i, value: 'Buzz', type: 'b'}
                    } else {
                        list[counter] = {key: i, value: i, type: 'n'}
                    }

                    counter++;
                }
                this.total = counter;

                return list;
            },
            last: function (key) {
                return key === this.to - 1;
            }
        }
    }
</script>

<style>
	.box {
		display: table-cell;
		width: 120px;
		height: 120px;
		color: #FFF;
	}
</style>