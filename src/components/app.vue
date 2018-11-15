<template>
	<div id="wrapper" class="flex-item">
		<msg-list />
		<msg-input />
		<info />
	</div>
</template>

<script>
	import msgList from '../components/msg-list.vue';
	import msgInput from '../components/msg-input.vue';
	import info from '../components/info.vue';

	export default {
		name: 'app',
		data: () => {
			return {
				wall: '3PPPPPpPDKZYvBHmSB71PTwnepyWHMrNgfY',
				node: 'https://nodes.wavesplatform.com'
			}
		},
		components: {
			msgList,
			msgInput,
			info
		}
	}
</script>

<style scoped>
	#wrapper {
		flex-direction: column;
		justify-content: space-between;
		height: calc(100vh - 16px);
	}
	.token-input {
		border: 0px;
		padding: 0px;
		margin: 0px;
		text-align: right;
	}
</style>