<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ getIncome }}</h1>
  </div>
  <div>
    <h1>{{ count }}</h1>
    <button type="button" @click="count++">+</button>
    &nbsp;
    <button type="button" @click="count--">-</button>
  </div>
  <!-- <div v-for="tech in techStack" :key="tech">
    {{ tech }}
  </div>
  <div v-for="tech in techStacks" :key="tech">
    {{ tech.lang }} | {{ tech.type }}
  </div> -->
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      techStack: ['Java', 'PHP', 'Python', 'C-Sharp', 'Angular', 'React', 'Vue'],
      techStacks: [
        { type: 'Backend', lang: 'Java' },
        { type: 'Backend', lang: 'PHP' },
        { type: 'Backend', lang: 'Python' },
        { type: 'Backend', lang: 'C-Sharp' },
        { type: 'Frontend', lang: 'Angular' },
        { type: 'Frontend', lang: 'Vue' },
        { type: 'Frontend', lang: 'React' }
      ],
      balance: 100,
      expense: 200,
      count: 0
    }
  },
  computed: {
    getIncome() {
      return this.balance + this.expense
    }
  },
  created() {
    this.$watch('count', (num, last) => {
      if (num > 10) {
        console.log(num, last)
        alert("Max Limit")
      }
    })
  }
  // watch: {
  //   count(num, last) {
  //     if (num > 10) {
  //       console.log(num, last)
  //       alert("Max Limit")
  //     }
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
