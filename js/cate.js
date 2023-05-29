new Vue({
	el: '#app',
	data: function() {
		return {
			visible: false,
			title: 'test'
		}
	},
	mounted() {
		this.$message.success('test ui component')
	}
})
