<template>
	<div id="input-wrapper" class="flex-item">
		<a class="button" :href="`https://client.wavesplatform.com/#send/WAVES?recipient=${$parent.wall}&amount=${amount}&attachment=${message}&strict=true`" @click="message = ''" target="_blank">Send</a>
		<div id="msg-count-wrapper" class="flex-item bordered">
			<div id="msg-input-wrapper" class="flex-item">
				<input id="msg" class="bordered" v-model="message" placeholder="Message" minlength ="1" maxlength="140" autofocus />
			</div>
			<div id="count-wrapper">{{message.length}}/140</div>
		</div>
		<div id="amount-wrapper" class="flex-item bordered">
			<div id="amount-input-wrapper" class="flex-item">
				<input type="number" step="0.001" min="0.001" id="amount" class="" v-model="amount" placeholder="Amount" minlength ="1" maxlength="5" />
			</div>
			<div id="count-wrapper">WAVES</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {
				message: '',
				amount: '0.001'
			}
		}
	}
</script>

<style scoped>
	#input-wrapper {
		align-items: center;
		justify-content: space-between;
		margin-top: 5px;
	}
	#msg-count-wrapper {
		flex-basis: 100%;
		align-items: center;
	}
	#msg {
		flex-basis: 100%;
		padding: 5px;
		outline: none;
		border: none;
	}
	#msg-input-wrapper {
		flex-basis: 100%;
	}
	#amount-wrapper {
		margin-left: 5px;
		align-items: center;
	}
	#amount {
		width: 60px;
		border: none;
		padding: 5px;
	}
	#count-wrapper {
		color: lightgray;
		margin-right: 5px;
	}
</style>