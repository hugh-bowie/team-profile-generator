const generateHTML = (personInput) =>
    `<!DOCTYPE html>
    <html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Team Profile</title>
  <link rel="stylesheet" href="./style.css">
</head>
    <body>
        <header class= "header">
            <h1> My Team </h1>
        </header>
        <div class = "container">
            <div class ="main">${roleSection(personInput)}</div>
        </div>
        <script src="https://kit.fontawesome.com/0cb0e7b636.js" crossorigin="anonymous"></script>
    </body>
</html>`;

module.exports = generateHTML;

const roleSection = (personInput) => {
    let prints = '';
    for (let i = 0; i < personInput.length; i++) {
        if (personInput[i].role === 'Engineer') {
            prints +=
                `
        <figure class ="card">
            <div class = "card-header">
                <h3 class ="name"> ${personInput[i].name}</h3>
                <h5 class ="role"><i class = "fas fa-glasses"></i> ${personInput[i].role}</h5>
            </div>
        <figcaption class="card-body">
          <ul class = "data">
            <li class = "card-info card-id"> ID: ${personInput[i].id}</li>
            <li class = "card-info card-email"> Email: <a href="mailto:${personInput[i].email}">${personInput[i].email}</a></li>
            <li class="card-info card-github">GitHub: <a href="https://github.com/${personInput[i].gitHub}" target="blank"> ${personInput[i].gitHub}</a></li>
          </ul>
       </figcaption>
    </figure>
      `;

        } else if (personInput[i].role === 'Intern') {
            prints +=
                `
      <figure class ="card">
        <div class = "card-header">
            <h3 class ="name"> ${personInput[i].name}</h3>
            <h5 class ="role"><i class="fas fa-user-graduate"></i> ${personInput[i].role}</h5>
        </div>
        <figcaption class="card-body">
          <ul class = "data">
            <li class = "card-info card-id">ID: ${personInput[i].id}</li>
            <li class = "card-info card-email">Email: <a href="mailto:${personInput[i].email}">${personInput[i].email}</a></li>
            <li class="card-info card-school">School Name: ${personInput[i].school}</li>
          </ul>
       </figcaption>
    </figure>
      `;
        } else if (personInput[i].role === 'Manager') {

            prints +=

                `
      <figure class ="card">
        <div class = "card-header">
            <h3 class ="name"> ${personInput[i].name}</h3>
            <h5 class ="role"><i class="fas fa-mug-hot"></i> ${personInput[i].role}</h5>
        </div>
        <figcaption class="card-body">
            <ul class = "data">
                <li class = "card-info card-id">ID: ${personInput[i].id}</li>
                <li class = "card-info card-email">Email: <a href="mailto:${personInput[i].email}"> ${personInput[i].email}</a></li>
                <li class="card-info card-manager">Office Number:  ${personInput[i].officeNumber}</li>
          </ul>
       </figcaption>
       </figure>
      `;
        }
    }
    return prints
};

