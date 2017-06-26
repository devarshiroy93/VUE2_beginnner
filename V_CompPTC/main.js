Vue.component('questionContainer',{
    props:['question'],
    template : ` <div><div><mcq-behaviour v-on:change-question= "updateQuestion($event)" :data = "question[x]"></mcq-behaviour></div></div>`, 
    data : function() { 
        return {x :0}
    },
    methods: {
        updateQuestion : function(button){
            button === 'next' ? this.x++ : this.x--
        }
    }
})
         
    


Vue.component('mcqBehaviour', {
  props: ['data'],
  template: `	
  <div class= "mngMrgin">
  
	<div class="panel panel-primary" >
		<div class="panel-heading">Question</div>
		<div class="panel-body">{{data.question}}</div>
	</div>
		<div v-for = "(opt,i) in data.options">
			<div class="well well-sm" >{{opt.text}}</div>
		</div>
	<div class ="row">	
	<div class="col-md-4"><button type="button" class="btn btn-primary btn-md" v-on:click = "previousPress()">Previous</button></div>
	<div class="col-md-4"><button type="button" class="btn btn-primary btn-md" v-on:click = "checkAnswer()">Check Answer</button></div>
	<div class="col-md-4"><button type="button" class="btn btn-primary btn-md" v-on:click = "nextPress()">NEXT</button></div>
	</div>
	<hr>
	</div>
	</div>
	</div>`
,
    methods : {
        
        nextPress : function(){
            this.$emit('change-question','next');       
    },
        previousPress : function(){
        this.$emit('change-question','previous');
    }
        
    }
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
    "question": "Hello, 1st question! You have 2 unread messages.",
	"correctAnsid" : 1
  },{
    "_id": "5927f07c3c1501cd53351956",
    "options": [
      {'text' : 'option1',id : 1},
      {'text' : 'option2' ,id : 2 },
      {'text' : 'option3',id : 3},
    {'text' : 'option3' ,id : 4},
    ],
    "question": "Hello, 2nd question! You have 3 unread messages.",
	"correctAnsid" : 4
  }
]
	}
})