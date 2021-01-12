<template>
	<div>
		<nav class="navbar navbar-expand navbar-dark bg-primary">
			<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="navbar-collapse collapse justify-content-md-center" id="navbarTop" style="">
				<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<router-link active-class="active" class="nav-link" tag="a" to="/home">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link active-class="active" class="nav-link" tag="a" to="/range">Range</router-link>
						</li>
						<li class="nav-item">
							<router-link active-class="active" class="nav-link" tag="a" to="/custom-range">Custom Range</router-link>
						</li>
				</ul>
			</div>
		</nav>
		<div class="container mt-5">
			<div class="row">
				<div class="col-md-12">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
    export default {}
</script>

<style>

</style>