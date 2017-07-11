var firstComponent = Vue.component('component1', {
    'template': `<div>
    <div><div id="example-3">
    <v-container fluid>
      
      <v-layout row>

        <v-flex xs6 offset-xs3>
        <v-card dark class="primary">
          <v-card-text>xs7 offset-xs5</v-card-text>
        </v-card>
      </v-flex>
        
        
      </v-layout>

     
    </v-container>
  </div>
      </div>`,


    methods: {
        clickMethod: function () {
            alert('componeent1');
        }
    },
    created() {
        //this.fetchData();
    },
})
var secondComponent = Vue.component('component2', {
    'template': `  <div>
                    <div>
					<div v-on:click="clickMethod2">List of all posts</div><div v-for = 'p in post'>
                     <v-container fluid>
                      <v-layout row>
                      <v-flex xs6 offset-xs3>
                    <v-card>
                    <v-card-title primary-title>
                    <div>
                    <h3 class="headline mb-0"><span>{{p.id}}</span>{{p.title}}</h3>
                    <div>{{p.body}}</div>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-btn flat class="orange--text">Share</v-btn>
                    <v-btn flat class="orange--text">Explore</v-btn>
                    </v-card-actions>
                    </v-card>
                    </v-layout>
                     </v-container>
                    </div>
                    </div>
                </div>`,
    data: function () {
        return {
            'post': null,
            'error': null
        }
    },
    methods: {
        clickMethod2: function () {
            alert('componeent2');
        },
        fetchData: function () {
            var self = this._data;
            axios.get('http://jsonplaceholder.typicode.com/' + this.$route.params.id)
                .then(response => this.post = response.data)

        }
    },
    created() {
        //alert('in created 2');
        this.fetchData();
    },
})


const routes = [
    { path: '/page1/:id', component: firstComponent },
    { path: '/page2/:id', component: secondComponent }
]
const router = new VueRouter({
    routes
})
var app = new Vue({
    router,
    el: "#app",
}).$mount('#app')





