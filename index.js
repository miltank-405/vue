// データをDOMに描画
var app = new Vue ({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
});
// 上記のDOMを更新
app.message = 'I have change the data!';