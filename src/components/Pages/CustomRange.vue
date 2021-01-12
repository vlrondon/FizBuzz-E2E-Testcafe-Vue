<template>
	<div>
		<div class="card text-center">
			<div class="card-header">
				<h2>FizzBuzz Custom Range</h2>
				<h5>From {{ from }} to {{ to }}</h5>
			</div>
			<div class="card-body container">
				<div class="row">
					<div class="col-md-2">
						<input id="fromControl" class="form-control" type="number" placeholder="From" v-model="from">
					</div>
					<div class="col-md-2">
						<input id="toControl" class="form-control" type="number" placeholder="To" v-model="to">
					</div>
				</div>
				<div class="row text-left text-danger" v-if="hasError">
					<div class="col">
						<p>{{ errorText }}</p>
					</div>
				</div>
				<range :from="from" :to="to"></range>
			</div>
		</div>
	</div>
</template>

<script>
    import Range from "./Range";

    export default {
        components: {
            Range
        },
        data() {
            return {
                from: 1,
                to: 10,
                errorText: ''
            }
        },
        errorCaptured(err) {
            this.errorText = err;
            this.isError = true;
            return false;
        },
        computed: {
            hasError: function () {
                return parseInt(this.from) > parseInt(this.to);
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