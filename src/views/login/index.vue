<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-sm-8 col-md-6 m-auto mt-5 pt-5" style="height: 500px;">
				<div class="card">
					<div class="card-header bg-white">
						<h2 class="mb-0">VSV-Admin</h2>
					</div>
					<div class="card-body">
						<el-form :model="form" ref="loginForm" :rules="rules">
							<el-form-item prop="email">
								<el-input v-model="form.email" placeholder="Email"></el-input>
							</el-form-item>
							<el-form-item prop="password">
								<el-input placeholder="Password" v-model="form.password" show-password></el-input>
							</el-form-item>
							<el-button class="w-100" @click="login()">Login</el-button>
						</el-form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data() {
  	return {
    	form: {
    		email: '',
    		password: ''
    	},
    	rules: {
    		email: [
    			{
    				required: true, message: 'Please enter email', trigger: 'blur'
    			},
    			{
    				type: 'email', message: 'Please enter the correct email', trigger: 'blur'
    			}
    		],
    		password: [
	    		{
	    			required: true, message: 'Please enter password', trigger: 'blur'
	    		},
	    		{
	    			min: 6, message: 'At least 6 caracters', trigger: 'blur'
	    		}
    		]
    	}
    }
  },
  methods: {
  	login() {
  		this.$refs.loginForm.validate((e) => {
  			if (!e) return;
  			this.$router.push({name: 'dashboard'})
  		})
  	}
  }
}
</script>