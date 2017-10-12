<template>
  <div id="app">
	 	<ul>
			<li><router-link to='/one'>网页一</router-link></li>
			<li><router-link to='/two'>网页二</router-link></li>
			<li><router-link to='/three'>网页三</router-link></li>
			<li><router-link to='/foree'>网页四</router-link></li>
		</ul> 
    <router-view></router-view>
 
  </div>
</template>

<script>
	
export default {
  name: 'app'
}
</script>

<style scoped="">
	ul{
		width:300px;
		height: 30px;
		list-style: none;
		padding: 0px;
		margin: 0px auto;
	}
	li{
		float: left;
		margin-left: 10px;
	}
	a{
		text-decoration: none;
		color: orange;
	}
	div{
		margin:0px auto;
		height: 100%;
		width: 100%;
	}
</style>
</style>
