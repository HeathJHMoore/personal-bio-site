// console.log("whats up");


const projects = [
  {
    title: "Cool Project 1",
    screenshot: "./python-brands.svg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project 2",
    screenshot: "./python-brands.svg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project 3", 
    screenshot: "./python-brands.svg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project 4", 
    screenshot: "./python-brands.svg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project 5", 
    screenshot: "./python-brands.svg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
];

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available === true) {
        domString += `<div id = 'project${(i+1)}' class = 'project_cards'>`
        domString +=    `<h2>${projects[i].title}</h2>`
        domString +=    `<img src=${projects[i].screenshot} alt="random cool image" height="200px">`
        domString +=    `<p><strong>Description:</strong> ${projects[i].description}</p>`
        domString +=    `<p><strong>Technologies Used:</strong> <br> ${projects[i].technologiesUsed}</p>`
        domString +=    `<p><a href=${projects[i].url}>Click Here to See Project</a></p>`
        domString +=    `<p><a href=${projects[i].githubUrl}>Click Here to find this project on GitHub</a></p>`
        domString += `</div>`
        }
    }
    return domString;
}

const singlePageHide = (e) => {
  if (e.target.id === 'navToBio') {
    document.getElementById('bioPageContainer').classList.remove('hide');
    document.getElementById('technologiesContainer').classList.add('hide');
    document.getElementById('projectsPage').classList.add('hide');
  } else if (e.target.id === 'navToTechnologies') {
    document.getElementById('bioPageContainer').classList.add('hide');
    document.getElementById('technologiesContainer').classList.remove('hide');
    document.getElementById('projectsPage').classList.add('hide');
  } else if (e.target.id === 'navToProjects') {
    document.getElementById('bioPageContainer').classList.add('hide');
    document.getElementById('technologiesContainer').classList.add('hide');
    document.getElementById('projectsPage').classList.remove('hide');
  } else if (e.target.id === 'Home') {
    document.getElementById('bioPageContainer').classList.remove('hide');
    document.getElementById('technologiesContainer').classList.remove('hide');
    document.getElementById('projectsPage').classList.remove('hide');
  }
}

const init = () => { 
    printToDom('projectsPage', createProjectCards());
    document.getElementById('navToBio').addEventListener('click', singlePageHide);
    document.getElementById('navToTechnologies').addEventListener('click', singlePageHide);
    document.getElementById('navToProjects').addEventListener('click', singlePageHide);
    document.getElementById('Home').addEventListener('click', singlePageHide);
}

init();