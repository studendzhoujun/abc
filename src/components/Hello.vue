<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      temArr:[{state:[]},{state:[]},{state:[]},{state:[]}]
    }
  },
  created () {
    for(let i=0;i<this.temArr.length;i++){
         for(let j=0;j<5;j++){
              if(j==0){ 
                  this.temArr[i].state.push({state:true})
              }else{
                  this.temArr[i].state.push({state:false})
              }
         }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
