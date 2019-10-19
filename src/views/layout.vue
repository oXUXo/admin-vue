<template>
	<el-container style="position: absolute; top: 0; bottom: 0; right: 0; left: 0; overflow: hidden; background: #e8eaf1;">
	  <el-aside width="200px" class="sidebar">
	  	<h2 class="logo">{{$conf.logo}}</h2>
	  	<el-menu style="background: #f7f7f7;">
	  		<el-menu-item-group>
	  			<el-menu-item :index="index.toString()" @click="handleClick(navItem.pathname)" v-for="(navItem, index) in sideNav" :key="index">
	  				<i :class="navItem.icon"></i> {{navItem.title}}
	  			</el-menu-item>
	  			<!-- <el-menu-item index="2">
	  				<i class="el-icon-goods
"></i> Product
	  			</el-menu-item >
	  			<el-menu-item index="3">
	  				<i class="el-icon-tickets"></i> Order
	  			</el-menu-item>
	  			<el-menu-item index="4">
	  				<i class="el-icon-edit-outline"></i> Blog
	  			</el-menu-item> -->
	  		</el-menu-item-group>
	  	</el-menu>
	  	<div class="account">
	  		<el-avatar icon="el-icon-user-solid"></el-avatar>Sean
	  	</div>
	  </el-aside>
	  <el-container>
	    <el-header>
	    	<div class="breadcrumb" v-if="bran.length > 0" style="background: #e8eaf1;">
	    		<el-breadcrumb separator-class="el-icon-arrow-right" >
				  <el-breadcrumb-item v-for="(item, index) in bran" :key="index" :to="{path: item.path}">{{item.name}}</el-breadcrumb-item>
				</el-breadcrumb>
	    	</div>
	    	
	    </el-header>
	    <el-main>
	    	<router-view></router-view>
	    	<el-backtop target=".el-main"></el-backtop>
	    </el-main>
	  </el-container>
	</el-container>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				sideNav: [],
				bran: []
			}
		},
		created() {
			this.sideNav= this.$conf.sideNav;
			this.getRouterBran();
		},
		watch: {
			'$route'(to, from) {
				this.getRouterBran()
			}
		},
		methods: {
			getRouterBran() {
				const b = this.$route.matched.filter(v=>v.name)
				let arr = []
				b.forEach((v,k) => {
					if (v.name === 'dashboard' || v.name === 'layout') return
					arr.push({
						name: v.name,
						path: v.path,
					})
				})
				if (arr.length > 0) {
					arr.unshift({name: 'Home', path: '/dashboard'})
				}
				this.bran = arr
			},
			handleClick(pathname) {
				this.$router.push({name: pathname})
			}
		}
	}
</script>
<style type="text/css">
	.sidebar {
		background: #f7f7f7;
	}
	.logo {
		margin: 1rem;
	}
	.account {
		margin-top:320px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>