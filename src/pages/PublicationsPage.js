import React, { useState } from "react";

const PublicationList = ({ publications }) => {
  const years = Array.from(new Set(publication?.map((pub) => pub.year))).sort(
    (a, b) => b - a
  );
  const [selectedBibTex, setSelectedBibTex] = useState(null);

  const handleBibTexClick = (bibTex) => {
    setSelectedBibTex(bibTex);
  };

  return (
    <div>
      {/* Temporary Navbar untill CSS added  */}
      <header>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="people">People</a></li>
          <li><a href="/">Research</a></li>
          <li><a href="/publications">Publications</a></li>
        </ul>
      </header>

      <h2>PUBLICATIONS</h2>
      {years.map((year) => (
        <p>{year} |</p>

      ))}

      {years.map((year) => (
        <div key={year}>
          <h3>{year}</h3>
          <ul>
            {publication
              .filter((pub) => pub.year === year)
              .map((pub) => (
                <li key={pub.id}>
                  <p>{pub.citation}</p>
                  <a href={pub.pdfUrl}>[PDF]</a>{" "}
                  <span>
                    [<a href="#" onClick={() => handleBibTexClick(pub.bibtex)}>
                      BIBTEX
                    </a>
                    ]
                  </span>
                </li>
              ))}
          </ul>
        </div>
      ))}
      {selectedBibTex && (
        <div className="bibTexDropdown">
          <button onClick={() => setSelectedBibTex(null)}>Close</button>
          <pre>{selectedBibTex}</pre>
        </div>
      )}
    </div>
  );
};

export default PublicationList;

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
    id: 1,
    year: 2022,
    title: "Database Gyms",
    citation: "W. S. Lim, M. Butrovich, W. Zhang, A. Crotty, L. Ma, P. Xu, J. Gehrke, and A. Pavlo, 'Database Gyms,' in CIDR 2023, Conference on Innovative Data Systems Research, 2023." ,
    pdfUrl: "https://example.com/database-gyms.pdf",
    bibtex:
      "@inproceedings{lim2023database,\n  title={Database Gyms},\n  author={Lim, W. S. and Butrovich, M. and Zhang, W. and Crotty, A. and Ma, L. and Xu, P. and Gehrke, J. and Pavlo, A.},\n  booktitle={CIDR 2023, Conference on Innovative Data Systems Research},\n  year={2023}\n}",
  },
  // ... more publication objects ...
];


<PublicationList publications={publication} />;