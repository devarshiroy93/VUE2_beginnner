Vue.component('questionContainer',{
    props:['question'],
    template : ` <div><div><mcq-behaviour v-on:change-question= "updateQuestion($event)" :data = "question[x]" :previousActive = "prevActive" :nextActive = "nextActive"></mcq-behaviour></div></div>`, 
    data : function() { 
        return {x :0, prevActive :false,nextActive : true}
		            
    },
    methods: {
        updateQuestion : function(button){
            button === 'next' ? this.x++ : this.x--;
			this.x === this.question.length-1 ? this.nextActive = false : this.nextActive = true;
			this.x === 0 ? this.prevActive = false : this.prevActive = true;	
        }
    }
})
         
    


Vue.component('mcqBehaviour', {
  props: ['data','previousActive','nextActive'],
  template: `	
  <div class= "mngMrgin">
  
	<div class="panel panel-primary" >
		<div class="panel-heading">Question</div>
		<div class="panel-body">{{data.question}}</div>
	</div>
		<div v-for = "(opt,i) in data.options"  v-on:mouseover= "mouseOver(i,opt.id,opt)">
			<div class="well well-sm" v-bind:class ="{myClass : opt.id-1 === selected  ,selClss : opt.id-1 === selected1}" v-on:click= "mouseClick(i,opt.id,opt)" >{{opt.text}}</div>
		</div>
	<div class ="row">	
	<div class="col-md-4"><button type="button" class="btn btn-primary btn-md"  :disabled="!previousActive" v-on:click = "previousPress()">Previous</button></div>
	<div class="col-md-4"><button type="button" class="btn btn-primary btn-md" v-on:click = "checkAnswer()">Check Answer</button></div>
	<div class="col-md-4"><button type="button" class="btn btn-primary btn-md" :disabled="!nextActive" v-on:click = "nextPress()">NEXT</button></div>
	</div>
	<hr>
	</div>
	</div>
	</div>`,
    data : function(){
        return{
        selected : false,
        selected1 : false,
	    selectedObj : {},
        }
    }
,
    methods : {
        
        nextPress : function(){
            this.clearDom();
            this.$emit('change-question','next');       
    },
        previousPress : function(){
            this.clearDom();
            this.$emit('change-question','previous');
    },
        mouseOver: function(index,id,item){
			   this.selected = index    
              console.log('a');
        },
        mouseClick : function(index,id,item){
			   this.selectedObj = item;
			   this.selected1 = index
		},
        checkAnswer : function(){
			
			 this.selectedObj.id === this.data.correctAnsid ? alert('correct'):  alert('Not Correct');
		},
        clearDom :function(){
             this.selected = false;
             this.selected1 = false;
        
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
      {'text' : 'Copper',id : 1},
      {'text' : 'Tungsten' ,id : 2 },
      {'text' : 'Iron',id : 3},
    {'text' : 'Aluminium' ,id : 4},
    ],
    "question": "What is the material of the filament of a light bulb made up of?",
	"correctAnsid" : 2
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
  },
  {
    "_id": "5927f07c3c1501cd57889080",
    "options": [
      {'text' : 'inky',id : 1},
      {'text' : 'pinky' ,id : 2 },
      {'text' : 'ponky',id : 3},
    {'text' : 'crazy' ,id : 4},
    ],
    "question": "What is the Question?",
	"correctAnsid" : 4
  }
]
	}
})
