<template>
    <div class="hello">
    
    <!-- This header displays the 'Data Analytics and Deep Learning Lab' text. It can be modified in App.vue -->
    <h1>{{ msg }}</h1>

    
    <!-- Displays the DADL Logo on the homepage  -->
    <img alt="DADL Logo" src="../assets/logo.png">


    <!-- Area for broader explanations of project  -->
    <p>
      This would be the section for an explanation of the lab and the broader application areas.
    </p>

    <!-- The Application areas will provide insight into the uses of the technology.
    There will likely be image and paragraph sections for each application area. -->
    <h2>Application Areas</h2>
    <p>
      Here we will go more indepth into each application area, perhaps providing image along with a small paragraph of text.
    </p>

    <!-- The Recent News section should contain hyperlinks to relevant articles/blogs. There maybe text accompanying each article title, but
    each link should ideally be sorted by the date of the article's creation  -->
    <h2>Recent News</h2>
    <p>
      Here we would have links related to news articles and blog posts about progress directly in the lab or the Deep Learning field.
    </p>


    <!-- The footer will contain sections where a user can find links to Github, relevant social medias and contact information -->
    <h3>Footer Placeholders</h3>

    <footer>
      <ul>
        <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Github</a></li>
        <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">Come Visit Section</a></li>
        <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">Contact Information</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  
  methods: {
    sliderIndicator(id) {
      let el = this.$refs[`menu-item_${id}`][0];
      this.sliderPosition = el.offsetLeft;
      this.selectedElementWidth = el.offsetWidth;
      this.selectedIndex = id;
    },
  },
  computed: {
    positionToMove() {
      return this.sliderPosition + "px";
    },
    sliderWidth() {
      return this.selectedElementWidth + "px";
    },
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --active-color: #ffee93;
  --link-text-color: #f1faee;
  --menu-background-color: #1d3557;
  --active-background-color: #132238;
}

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
