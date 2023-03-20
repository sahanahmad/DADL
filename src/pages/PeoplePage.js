import React from 'react'
import './PeoplePage.css'

function PeoplePage() {
  return (
    <div className = "PeoplePage">
        {/* Temporary Navbar untill CSS added  */}
        <header>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="people">People</a></li>
            <li><a href="/">Research</a></li>
            <li><a href="/">Publications</a></li>
          </ul>
        </header>

        <h1>People</h1>

        {/* Need to split profile sections into Professors, Grad Students and Undergrad Students */}

        <div class="row">
          <div class="column">

            {/* Section for the bio of a lab participant  */}
            <h3>Name Placeholder</h3> {/* Name  */}
            <img src={require("../assets/portrait.png")} width="200" height="200">
            </img>
            <p>This section be used for a lab participant's bio and relation to the project</p> {/* Bio */}
            <ul>
              <li><a href="/people"><img src={require("../assets/github.png")} width="25" height="25"></img></a></li> {/* Github Link */}
              <li><a href="/people"><img src={require("../assets/linkedin.png")} width="25" height="25"></img></a></li> {/* LinkedIn Link */}
            </ul>

            {/* Section for the bio of a lab participant  */}
            <h3>Name Placeholder</h3> {/* Name  */}
            <img src={require("../assets/portrait.png")} width="200" height="200">
            </img>
            <p>This section be used for a lab participant's bio and relation to the project</p> {/* Bio */}
            <ul>
              <li><a href="/people"><img src={require("../assets/github.png")} width="25" height="25"></img></a></li> {/* Github Link */}
              <li><a href="/people"><img src={require("../assets/linkedin.png")} width="25" height="25"></img></a></li> {/* LinkedIn Link */}
            </ul>

          </div>
          <div class="column">
            {/* Section for the bio of a lab participant  */}
            <h3>Name Placeholder</h3> {/* Name  */}
            <img src={require("../assets/portrait.png")} width="200" height="200">
            </img>
            <p>This section be used for a lab participant's bio and relation to the project</p> {/* Bio */}
            <ul>
              <li><a href="/people"><img src={require("../assets/github.png")} width="25" height="25"></img></a></li> {/* Github Link */}
              <li><a href="/people"><img src={require("../assets/linkedin.png")} width="25" height="25"></img></a></li> {/* LinkedIn Link */}
            </ul>

            {/* Section for the bio of a lab participant  */}
            <h3>Name Placeholder</h3> {/* Name  */}
            <img src={require("../assets/portrait.png")} width="200" height="200">
            </img>
            <p>This section be used for a lab participant's bio and relation to the project</p> {/* Bio */}
            <ul>
              <li><a href="/people"><img src={require("../assets/github.png")} width="25" height="25"></img></a></li> {/* Github Link */}
              <li><a href="/people"><img src={require("../assets/linkedin.png")} width="25" height="25"></img></a></li> {/* LinkedIn Link */}
            </ul>

          </div>

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


    </div>
  )
}

export default PeoplePage