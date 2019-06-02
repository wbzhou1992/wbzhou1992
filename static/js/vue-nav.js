(function () {
	var tm = '<ul class="pagination">' +
		'<li v-if="cur==1" class="disabled"><span><i class="fa fa-angle-double-left"></i></span></li>' +
		'<li v-if="cur!=1"><a @click="btnClick(cur-1)"><i class="fa fa-angle-double-left"></i></a></li>' +
		'<li v-for="index in indexs" v-bind:class="{ \'active\': cur == index}">' +
		'<span v-on:click="btnClick(index)">{{ index }}</span>' +
		'</li>' +
		'<li v-if="cur==all" class="disabled"><span><i class="fa fa-angle-double-right"></i></span></li>' +
		'<li v-if="cur!=all"><a @click="btnClick(cur+1)"><i class="fa fa-angle-double-right"></i></a></li>' +
		'</ul>'
	var navBar = Vue.extend({
		template: tm,
		props: {
			cur: {
				type: [String, Number],
				required: true
			},
			all: {
				type: [String, Number],
				required: true
			},
			callback: {
				default() {
					return function callback() {
					}
				}
			}
		},
		computed: {
			indexs() {
				var left = 1
				var right = this.all
				var ar = []
				if (this.all >= 11) {
					if (this.cur > 5 && this.cur < this.all - 4) {
						left = this.cur - 5
						right = this.cur + 4
					} else {
						if (this.cur <= 5) {
							left = 1
							right = 10
						} else {
							right = this.all
							left = this.all - 9
						}
					}
				}
				while (left <= right) {
					ar.push(left)
					left++
				}
				return ar
			}
		},
		methods: {
			btnClick(page) {
				if (page != this.cur) {
					this.callback(page)
				}
			}
		}
	})

	window.Vnav = navBar

})()