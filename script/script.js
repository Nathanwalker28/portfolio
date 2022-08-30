var nantenaina = {
    image : "../images/pdp.jpg",
    name : "Randriamihamintsoa",
    firstname : "Nantenaina",
    post : "Developpeur Web",
    adress : " Lot ive 145 j Ambodimita",
    tel : "0347068264",
    age : "23 ans",
    github : "https://github.com/",
    facebook : "https://www.facebook.com/",
    linkedin : "",
    description : "jeune passionné par l'informatique, je suis en formation en developpement web chez Passion for humanity, pour elargir mes compétences et decouvrir davantage sur ma passion.",
    experiences : [
        {
            "poste" : "opérateur de saisie",
            "dure" : "juillet 2021 - décembre 2021",
            "entreprise" : "Freelance"
        },
        {
            "poste" : "opérateur de saisie",
            "dure" : "juillet 2020 - mai 2021",
            "entreprise" : "Numen Madagascar"
            
        },
        {
            "poste" : "opérateur de saisie",
            "dure" : "juillet 2019 - mars 2020",
            "entreprise" : "Numen Madagascar"
            
        }
    ],
    education : [
        {
            "diplome" : "Formation en marketing digital : developpement web",
            "periode" : "juin 2022 - decembre 2022",
            "ecole" : "TALENT FACTORY - Passion for Humanity"
        },
        {
            "diplome" : "Baccalauréat en electronique",
            "periode" : "2014 - 2017",
            "ecole" : "LTP Alarobia"
        }
    ],
    skills : [
        "javascript", "php", "git&github", "jquery", "bootstrap", "html", "css"
    ]
}




var myName = document.getElementById("name");
var jobTitle = document.getElementById("title-job");
var image = document.querySelector("img");
var description = document.getElementById("description");
var myFirstname = document.querySelectorAll(".firstname");
var listItemExperiences = "";
var listItemEducation = "";
var listItemSkills ="";



for (let i = 0; i < myFirstname.length; i++) {
    myFirstname[i].innerText = nantenaina.firstname;
}

myName.innerText = nantenaina.name;
jobTitle.innerText = nantenaina.post;
description.innerText = nantenaina.description;
image.setAttribute("src", nantenaina.image);
document.getElementById("github").setAttribute("href", nantenaina.github);

for (let i = 0; i < nantenaina.experiences.length; i++) {
    listItemExperiences += '<li>'+'<strong>'+nantenaina.experiences[i].poste+ '</strong>'+"<br>"
    +'<em>'+ nantenaina.experiences[i].dure+'</em>' + " : " + nantenaina.experiences[i].entreprise+'</li>';
}

document.getElementById('list_experiences').innerHTML = listItemExperiences;

for (let i = 0; i < nantenaina.education.length; i++) {
    listItemEducation += '<li>'+'<strong>'+ nantenaina.education[i].diplome+ '</strong>'+"<br>"
    +'<em>' +nantenaina.education[i].periode +'</em>'  + " : " + nantenaina.education[i].ecole+'</li>';
}
document.getElementById('list_education').innerHTML = listItemEducation;

// for (let i = 0; i < nantenaina.skills.length; i++) {
//     listItemSkills += '<li>' + nantenaina.skills[i] + '</li>';
// }
// document.getElementById('list_skills').innerHTML = listItemSkills;