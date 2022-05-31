<template>
	<SidebarComponent/>
	<router-view></router-view>
	<footer id='footer' class='footer'>
		<FooterComponent/>
	</footer>
</template>

<script>

	import "bootstrap/dist/css/bootstrap.min.css";
	import SidebarComponent from './components/Sidebar.vue';
	import FooterComponent from './components/Footer.vue';
		
	export default {
		name: 'App',
		components: {
			SidebarComponent,
			FooterComponent
		},

	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>