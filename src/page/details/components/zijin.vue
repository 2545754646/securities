<template>
	<div class="pk"><!--盘口--资金-->
		<div v-show="cur==0">内容一</div>
		<div v-show="cur==1">内容二</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				cur: 0
			}
		}
	}
</script>

<style>
</style>