var firstComponent = Vue.component('component1',{'template'  :`<div><div v-on:click="clickMethod">First Component</div></div>`,
methods : {
	clickMethod : function(){alert ('componeent1');
	}
},
created () {
    //this.fetchData();
  },
})
var secondComponent = Vue.component('component2',{'template'  :`<div><div v-on:click="clickMethod2">second Component</div><div v-for = 'p in post'><span>Post No:{{p.id}}</span><h2>{{p.title}}</h2><h3>{{p.body}}</h3><span>{{p.userId}}</span><hr></div></div>`,
data : function(){
	return {
		'post': null,
        'error': null
	}
},
methods : {
	clickMethod2 : function(){alert ('componeent2');
	},
	fetchData : function(){
		var self = this._data;
		debugger;
	axios.get('http://jsonplaceholder.typicode.com/'+this.$route.params.id)
    .then(response => this.post = response.data)
		
	}
},
 created () {
   //alert('in created 2');
   this.fetchData();
  },
})


 const routes = [
        {path: '/page1/:id', component: firstComponent},
        {path: '/page2/:id', component: secondComponent}
    ]
 const router = new VueRouter({
        routes
    })
var app = new Vue({
        router,
		 el:"#app",
    }).$mount('#app')
	
	
	
	
	
	