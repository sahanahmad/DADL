import './App.css';

function App() {
  return (
    <div className="App">

      {/* Temporary Navbar untill CSS added  */}
      <header>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="people">People</a></li>
          <li><a href="/">Research</a></li>
          <li><a href="/">Publications</a></li>
        </ul>
      </header>

    <h1>Data Analytics and Deep Learning Lab</h1>

      {/* Displays the DADL Logo on the homepage  */}
      <img src={require("./assets/logo.png")}>
      </img>
    
      {/* -- Area for broader explanations of project  */}
      <p>
        This would be the section for an explanation of the lab and the broader application areas.
      </p>

      {/* -- The Application areas will provide insight into the uses of the technology.
      There will likely be image and paragraph sections for each application area. */}
      <h2>Application Areas</h2>
      <p>
        Here we will go more indepth into each application area, perhaps providing image along with a small paragraph of text.
      </p>

      {/*-- The Recent News section should contain hyperlinks to relevant articles/blogs. There maybe text accompanying each article title, but
      each link should ideally be sorted by the date of the article's creation  */}
      <h2>Recent News</h2>
      <p>
        Here we would have links related to news articles and blog posts about progress directly in the lab or the Deep Learning field.
      </p>


      {/* -- The footer will contain sections where a user can find links to Github, relevant social medias and contact information */}
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
  );
}

export default App;
