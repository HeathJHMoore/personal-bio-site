// console.log("whats up");


const projects = [
  {
    title: "Cool Project 1",
    screenshot: "https://picsum.photos/200",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project 2",
    screenshot: "https://picsum.photos/200",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project 3", 
    screenshot: "https://picsum.photos/200", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project 4", 
    screenshot: "https://picsum.photos/200", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project 5", 
    screenshot: "https://picsum.photos/200", 
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
        domString +=    `<img src=${projects[i].screenshot} alt="random cool image">`
        domString +=    `<p><strong>Description:</strong> ${projects[i].description}</p>`
        domString +=    `<p><strong>Technologies Used:</strong> <br> ${projects[i].technologiesUsed}</p>`
        domString +=    `<p><a href=${projects[i].url}>Click Here to See Project</a></p>`
        domString +=    `<p><a href=${projects[i].githubUrl}>Click Here to find this project on GitHub</a></p>`
        domString += `</div>`
        }
    }
    return domString;
}

const init = () => { 
    printToDom('projectsPage', createProjectCards());
}

init();