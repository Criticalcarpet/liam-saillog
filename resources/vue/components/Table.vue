<template>
	<table class="table table-bordered">
		<thead>
			<tr>
	  			<th v-for="header of headers">{{ header }}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="row of rows">
				<td v-for="column of row">{{ column }}</td>
			</tr>
		</tbody>
	</table>
</template>


<script>

	import data from '../data.js'

	data.sort((a, b) => {
		const dateOne = a.date.split('/');
		const dateTwo = b.date.split('/');
	
		return new Date(dateTwo[2], dateTwo[1], dateTwo[0]) - new Date(dateOne[2], dateOne[1], dateOne[0]);
	});
	
	const headers = ['Date', 'Class of Boat', 'Helm Hours', 'Crew Hours', 'Wind Speed', 'Type of activity', 'Actions'];
	let rows = [];

	for (const log of data) {
		rows.push([log.date, log.class, log.helmHours, log.crewHours, log.windSpeed, log.type, log.id ]);
	}
	
	export default {
		name: 'TableComponent',
		data() {
		    return {
				data, headers, rows
			};
		},
	}

</script>


<style>
	table {
		width: 800px;
		white-space: nowrap;
	}
</style>