Vue.component('mcqBehaviour', {
  props: ['data'],
  template: `	
  <div class= "mngMrgin">
  <div v-for='(q,index) in data'>
	<div class="panel panel-primary" >
		<div class="panel-heading">Question :{{index+1}}</div>
		<div class="panel-body">{{q.question}}</div>
	</div>
		<div v-for = "(opt,i) in q.options">
			<div class="well well-sm" >{{opt.text}}</div>
		</div>
	
	<div>
	<div class ="row">	
	<div class="col-md-4"><button type="button" class="btn btn-primary btn-md" v-on:click = "previousQuestion()">Previous</button></div>
	<div class="col-md-4"><button type="button" class="btn btn-primary btn-md" v-on:click = "checkAnswer()">Check Answer</button></div>
	<div class="col-md-4"><button type="button" class="btn btn-primary btn-md" v-on:click = "previousQuestion()">NEXT</button></div>
	</div>
	<hr>
	</div>
	</div>
	</div>`
})

var app= new Vue({
	el : '#root',
	data: {
    message: "Hello from Vue",
	details : [
  {
    "_id": "5927f07c3c1501cd533519d6",
    "options": [
      {'text' : 'answer1',id : 1},
      {'text' : 'answer2' ,id : 2 },
      {'text' : 'answer3',id : 3},
    {'text' : 'answer4' ,id : 4},
    ],
    "question": "Hello, undefined! You have 2 unread messages.",
	"correctAnsid" : 1
  },{
    "_id": "5927f07c3c1501cd53351956",
    "options": [
      {'text' : 'answer1',id : 1},
      {'text' : 'answer2' ,id : 2 },
      {'text' : 'answer3',id : 3},
    {'text' : 'answer4' ,id : 4},
    ],
    "question": "Hello, undefined! You have 3 unread messages.",
	"correctAnsid" : 4
  }
]
	}
})