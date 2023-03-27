import React, { useState } from "react";
import './PublicationsPage.css'

{/* Publications list the bottom of the page  */}

const PublicationList = ({ publications }) => {
  const years = Array.from(new Set(publication?.map((pub) => pub.year))).sort(
    (a, b) => b - a
  );
  const [selectedBibTex, setSelectedBibTex] = useState(null);

  const handleBibTexClick = (bibTex) => {
    setSelectedBibTex(bibTex);

  };

  return (
    <div className = "PublicationsPage">
      {/* Temporary Navbar untill CSS added  */}
      <header>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="people">People</a></li>
          <li><a href="/">Research</a></li>
          <li><a href="/publications">Publications</a></li>
        </ul>
      </header>


    <div class = "pageContent">
      <h2>PUBLICATIONS</h2>
      {years.map((year) => (
        <span><a href = {'#'+year}> {year} </a>|</span>

      ))}

      {years.map((year) => (
        <div key={year}>
          <h3><a id = {year}>{year}</a></h3>
          <ul>
            {publication
              .filter((pub) => pub.year === year)
              .map((pub) => (
                <li key={pub.id}>
                  <span>• {pub.citation}</span>
                  <a href={pub.pdfUrl}>[PDF]</a>{" "}
                  <span>
                    [<a href="#" onClick={() => handleBibTexClick(pub.bibtex)}>
                      BIBTEX
                    </a>
                    ]
                  </span>
                </li>
              ))}
              {selectedBibTex && (
                <div className="bibTexDropdown">
                  <button onClick={() => setSelectedBibTex(null)}>Close</button>
                  <pre>{selectedBibTex}</pre>
                </div>
              )}
          </ul>
        </div>
      ))}

      {/* 
      {selectedBibTex && (
        <div className="bibTexDropdown">
          <button onClick={() => setSelectedBibTex(null)}>Close</button>
          <pre>{selectedBibTex}</pre>
        </div>
      )}
    
      */}
      </div>
    </div>
  );
};

export default PublicationList;

{/* publication is the list where the publication references can be stored with all of the relevant information

    id: indicates which refrence is being refered to in the list
    year: year of the publication
    title: title of the publictaion
    citation: formatted citation of the publication
    pdfUrl: Url that should lead to a pdf of the publication
    bibtext: formatted BIBTEXT for publication

    Right now the list is filled with placeholders that can be replaced

*/}
const publication = [
  {
    id: 1,
    year: 2023,
    title: "Database Gyms",
    citation: "W. S. Lim, M. Butrovich, W. Zhang, A. Crotty, L. Ma, P. Xu, J. Gehrke, and A. Pavlo, 'Database Gyms,' in CIDR 2023, Conference on Innovative Data Systems Research, 2023." ,
    pdfUrl: "https://example.com/database-gyms.pdf",
    bibtex:
      "@inproceedings{lim2023database,\n  title={Database Gyms},\n  author={Lim, W. S. and Butrovich, M. and Zhang, W. and Crotty, A. and Ma, L. and Xu, P. and Gehrke, J. and Pavlo, A.},\n  booktitle={CIDR 2023, Conference on Innovative Data Systems Research},\n  year={2023}\n}",
  },

  {
    id: 2,
    year: 2022,
    title: "Database Gyms",
    citation: "W. S. Lim, M. Butrovich, W. Zhang, A. Crotty, L. Ma, P. Xu, J. Gehrke, and A. Pavlo, 'Database Gyms,' in CIDR 2023, Conference on Innovative Data Systems Research, 2023." ,
    pdfUrl: "https://example.com/database-gyms.pdf",
    bibtex:
      "@inproceedings{lim2023database,\n  title={Daabase Gyms},\n  author={Lim, W. S. and Butrovich, M. and Zhang, W. and Crotty, A. and Ma, L. and Xu, P. and Gehrke, J. and Pavlo, A.},\n  booktitle={CIDR 2023, Conference on Innovative Data Systems Research},\n  year={2023}\n}",
  },

  {
    id: 3,
    year: 2021,
    title: "Database Gyms",
    citation: "W. S. Lim, M. Butrovich, W. Zhang, A. Crotty, L. Ma, P. Xu, J. Gehrke, and A. Pavlo, 'Database Gyms,' in CIDR 2023, Conference on Innovative Data Systems Research, 2023." ,
    pdfUrl: "https://example.com/database-gyms.pdf",
    bibtex:
      "@inproceedings{lim2023database,\n  title={Dabase Gyms},\n  author={Lim, W. S. and Butrovich, M. and Zhang, W. and Crotty, A. and Ma, L. and Xu, P. and Gehrke, J. and Pavlo, A.},\n  booktitle={CIDR 2023, Conference on Innovative Data Systems Research},\n  year={2023}\n}",
  },

  {
    id: 4,
    year: 2020,
    title: "Database Gyms",
    citation: "W. S. Lim, M. Butrovich, W. Zhang, A. Crotty, L. Ma, P. Xu, J. Gehrke, and A. Pavlo, 'Database Gyms,' in CIDR 2023, Conference on Innovative Data Systems Research, 2023." ,
    pdfUrl: "https://example.com/database-gyms.pdf",
    bibtex:
      "@inproceedings{lim2023database,\n  title={Databse Gyms},\n  author={Lim, W. S. and Butrovich, M. and Zhang, W. and Crotty, A. and Ma, L. and Xu, P. and Gehrke, J. and Pavlo, A.},\n  booktitle={CIDR 2023, Conference on Innovative Data Systems Research},\n  year={2023}\n}",
  },

  {
    id: 5,
    year: 2019,
    title: "Database Gyms",
    citation: "W. S. Lim, M. Butrovich, W. Zhang, A. Crotty, L. Ma, P. Xu, J. Gehrke, and A. Pavlo, 'Database Gyms,' in CIDR 2023, Conference on Innovative Data Systems Research, 2023." ,
    pdfUrl: "https://example.com/database-gyms.pdf",
    bibtex:
      "@inproceedings{lim2023database,\n  title={atabase Gyms},\n  author={Lim, W. S. and Butrovich, M. and Zhang, W. and Crotty, A. and Ma, L. and Xu, P. and Gehrke, J. and Pavlo, A.},\n  booktitle={CIDR 2023, Conference on Innovative Data Systems Research},\n  year={2023}\n}",
  },
  // ... more publication objects ...
];


<PublicationList publications={publication} />;