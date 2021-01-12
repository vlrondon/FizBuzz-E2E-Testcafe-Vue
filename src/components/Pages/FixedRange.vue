<template>
	<div>
		<div class="card text-center">
			<div class="card-header">
				<h2>FizzBuzz Fixed Range</h2>
				<h5>From 1 to 100</h5>
			</div>
			<div class="card-body container">
				<range from="1" to="100"></range>
			</div>
		</div>
	</div>
</template>

<script>
    import Range from "./Range";

    export default {
        components: {
            Range
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