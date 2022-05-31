<template>
	<header id='header' class='pageHeader'>
		<h1 class="mt-5 fw-bolder">Sailing Log</h1>
	</header>

	<div class="tableContainer">
		<TableComponent/>
	</div>
</template>

<script>

	import TableComponent from './../components/Table.vue';
		
	export default {
		name: 'Dashboard',
		components: {
			TableComponent
		}
	};
</script>

<style>
	.tableContainer {
		margin-left: 85px;
		margin-right: 20px;
		overflow-x: scroll;
	}
</style>