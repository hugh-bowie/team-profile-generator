function createEmployeeCard(employee, classes, text) {
	return `          <div class="card employee-card">
            <div class="card-header">
              <h2 class="card-title">${employee.getName()}</h2>
              <h3 class="card-title"><i class="${classes} mr-2"></i>${employee.getRole()}</h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">${text}</li>
              </ul>
            </div>
          </div>
`;
}

function createEmployeeCards(employees) {
	const employeeCards = [];

	for (const employee of employees) {
		let employeeCard = null;
		let classes = null;
		let text = null;

		switch (employee.getRole()) {
			case 'Manager':
				classes = 'fas fa-mug-hot';
				text = `Office Number: ${employee.getOfficeNumber()}`;
				employeeCard = createEmployeeCard(employee, classes, text);
				break;
			case 'Engineer':
				classes = 'fas fa-glasses';
				text = `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank" rel="noopener noreferrer">${employee.getGithub()}</a>`;
				employeeCard = createEmployeeCard(employee, classes, text);
				break;
			case 'Intern':
				classes = 'fas fa-user-graduate';
				text = `School: ${employee.getSchool()}`;
				employeeCard = createEmployeeCard(employee, classes, text);
				break;
		}
		employeeCards.push(employeeCard);
	}
	const result = employeeCards.join('');
	return result;
}

function generateHtml(employees) {
	return ` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        
        <!-- Bootstrap CSS -->
        <link
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" 
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" 
          crossorigin="anonymous"
        />

        <!-- Font Awesome CSS -->
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" 
          integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" 
          crossorigin="anonymous"
        />

        <link rel="stylesheet" href="style.css"/>

        <title>My Team</title>
      </head>

      <body>
        <header class="container-fluid">
          <div class="row">
            <div class="col-12 jumbotron mb-3 employees-heading">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </header>
    <main class="container">
      <div class="row">
        <div class="employee-area col-12 d-flex justify-content-center">
          ${createEmployeeCards(employees)}
        </div>
      </div>
    </main>
  </body>
</html>   
`;
}

module.exports = generateHtml;
