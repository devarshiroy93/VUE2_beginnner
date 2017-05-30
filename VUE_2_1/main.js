var app = new Vue({
	
	el : '#root',
	data: {
    message: "Hello from Vue",
	selected : false,selected1 : false,
	selectedObj : {},
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
  }
]
	},
	methods : {
		mouseOver: function(index,id,item){
           // alert('clicked')
		   
			   this.selected = index
			
		   
		   
        },
		mouseClick : function(index,id,item){
			   this.selectedObj = item;
			this.selected1 = index
		},
		checkAnswer : function(){
			
			 this.selectedObj.id === this.details[0].correctAnsid ? alert('correct'):  alert('Not Correct');
		}
		
		
	}
	
});