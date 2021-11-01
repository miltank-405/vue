// データをDOMに描画
var app = new Vue ({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
});
// 上記のDOMを更新
app.message = 'I have change the data!';
// これでhtmlを直接操作する必要がなくなった

// #app-2
var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on' + new Date().toLocaleString()
	}
})
// consoleに▼を打ち込むとtitle属性が更新される
// app2.message = 'some new message';

// 要素の有無の切り替え
var app3 = new Vur ({
	el: '#app-3',
	data: {
		seen: true
		// seen: false ←コンソールに入力すると、メッセージが消える
	}
})