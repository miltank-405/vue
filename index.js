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
var app3 = new Vue ({
	el: '#app-3',
	data: {
		seen: true
		// seen: false ←コンソールに入力すると、メッセージが消える
	}
})

// v-forでリストを表示
var app4 = new Vue ({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
			// consoleに
			// app4.todos.push({ text: 'New item' })を入力すると
			// 4番目のリストが表示される
		]
	}
})

// v-onでメソッドの呼び出し
var app5 = new Vue ({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function () {
			// button押すと文字列が逆に表示される
			// もう一回押すと戻る
			this.message = this.message.split('').reverse().join('')
			// このメソッドの中ではDOM操作はやってない。
		}
	}
})

// v-model
var app6 = new Vue ({
	el: '#app-6',
	data: {
		message: 'Hello Vue!'
	}
})

// todo-itemってゆう新しいコンポーネントの定義
// Vue.component('todo-item', {
// 	template: '<li>This is a todo</li>'
// })

// var app = new Vue(...)
// プロパティを受け取れるようにコンポーネントの定義を変更
Vue.component('todo-item', {
	// todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  	// このプロパティは todo と呼ばれる。
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheese' },
			{ id: 2, text: 'Whatever else humans are supposed to eat' }
		]
	}
})

// Vueインスタンス
	// データとメゾット
	// vueインスタンスが作成されたらdataオブジェクトの全部のプロパティを
	// リアクティブシステムに追加される。
	// ▲プロパティ値の変更⇨ビューが反応して、新しい値に一致するように更新される

	// データオブジェクト
	var data = { a: 1 }
	// Vueインスタンスにオブジェクトを追加
	var vm = new Vue({
		data: data
	})
	// インスタンスのプロパティを取得すると
	// 元のデータからそのプロパティが返される
	vm.a == data.a // =>true
	// プロパティへの代入は元のデータにも反映される
	vm.a = 2
	data.a // => 2
	// そしてその逆も然り
	data.a = 3
	vm.a // => 3

	// データを変更するとvueが再レンダリングされる。

