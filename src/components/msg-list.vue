<template>
	<div id="msg-wrapper" class="bordered" ref="msgWrapper">
		<div id="msg-list">
			<template v-for="msg in messages">
				<div class="time">
					{{ formatTime(msg.time)}}
				</div>
				<div>
					<a :href="'https://wavesexplorer.com/tx/' + msg.id">{{ formatSender(msg.sender) }}</a>:
				</div>
				<div>
					{{ msg.text }} ({{ (msg.amount / 100000000).toLocaleString('ru-ru', {maximumSignificantDigits: 20}) }} WAVES)
				</div>
			</template>
		</div>
	</div>
</template>

<script>
	import utils from '../utils';
	import api from '../api';

	export default {
		data: () => {
			return {
				messages: [],
				pinnedMessage: {},
				last: 0,
				minAmount: 1,
				pinAmount: 1000000
			}
		},
		created: function() {
			this.update();
			setInterval(this.update, 1000);
		},
		methods: {
			formatSender: function(sender) {
				return '...' + sender.slice(-7);
			},
			formatTime: function(timestamp) {
				let time = new Date(timestamp);
				return time.toLocaleString();
			},
			update: async function() {
				let lastTx = await api.loadPosts(this.$parent.node, this.$parent.wall, 1);
				let lastTime = lastTx[0][0].timestamp;
				if (lastTime != this.last) {
					let data = await api.loadPosts(this.$parent.node, this.$parent.wall, 100);
					this.messages = [];
					await data[0].forEach(item => {
						if (item.attachment && item.amount >= this.minAmount && item.assetId == null) {
							let msg = utils.decode(item.attachment);
							this.messages.push({
								sender: item.sender,
								text: msg,
								time: item.timestamp,
								amount: item.amount,
								id: item.id
							});
						}
					});
					let pinned = await this.messages.reverse().find(element => {
						return element.amount > this.pinAmount ? element : false;
					});
					this.pinnedMessage = pinned ? pinned : '';
					this.$refs.msgWrapper.scrollTop = this.$refs.msgWrapper.scrollHeight;
					this.last = lastTime.valueOf();
				}
			}
		}
	}
</script>

<style scoped>
	#msg-wrapper {
		padding: 5px;
		overflow: auto;
		height: 100%;
	}
	#msg-list {
		display: grid;
		grid-template-columns: auto auto minmax(auto,100%);
		grid-column-gap: 10px;
		grid-row-gap: 5px;
		align-items: baseline;
	}
	.time {
		white-space:nowrap;
	}
</style>