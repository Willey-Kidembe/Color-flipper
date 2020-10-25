myImages = new Image()
const reviews = [
    {
        id: 0,
        name: "Sara Keith",
        job: "Mechanical Engineer",
        info: "Mechanical engineers research, design,\n"
            + "develop, build, and test mechanical and \n"
            + "thermal sensors and devices, including tools,\n"
            + "engines, and machines.",
        Img: myImages.src = "rev_images/rev9.jpg",
    },
    {
        id: 1,
        name: "William Kidembe",
        job: "Electrical and Electronics Engineer",
        info: "Electrical engineers design, develop \n"
            + "and test electrical devices and equipment,\n"
            + "including communications systems, power generators,\n"
            + "motors and navigation systems, and electrical systems \n"
            + "for automobiles and aircraft.\n"
            + "They also oversee the manufacture of these\n"
            + "devices, systems, and equipment.",
        Img: myImages.src = "rev_images/rev8.jpg",
    },
    {
        id: 2,
        name: "Chevy Woods",
        job: "Civil Engineer",
        info: "Civil engineers create, improve \n"
            + "and protect the environment in which we live.\n"
            + "They plan, design and oversee\n"
            + "construction and maintenance of building structures\n"
            + "and infrastructure, such as roads, railways, airports,\n"
            + "bridges, harbours, dams, irrigation projects, power plants,\n"
            + "and water and sewerage systems.\n"
            + "They also design and build tall buildings\n"
            + "and large structures that can withstand all weather conditions.",
        Img: myImages.src = "rev_images/chevy.jpg",
    },
    {
        id: 3,
        name: "Anna Gale",
        job: "Actress",
        info: "An actress is responsible for translating \n"
            + "a writer’s ideas into a full-blown character \n"
            + "with a unique set of gestures, accent, body language,\n"
            + "movement and even trademark dialogues.\n"
            + "This can be done on stage, radio, television,\n"
            + " video or motion picture productions to entertain,\n"
            + "instruct or inform an audience.\n"
            + "Depending on the script, an actress must interpret \n"
            + "comic or drama roles through hours of rehearsing,\n"
            + "training and studying real-life people.",
        Img: myImages.src = "rev_images/rev10.jpg",
    },
    {
        id: 4,
        name: "John Smilga",
        job: "Web developer",
        info: "Web developers design and build websites.\n"
            + "They are typically responsible for the appearance,\n"
            + "of the site and technical aspects, such as site speed\n"
            + "and how much traffic the site can handle.\n"
            + "Web developers may also create site content\n"
            + "that requires technical features.\n"
            + "They are sometimes known a web designer or full-stack\n"
            + "developer if they can do both front-end and back-end development.",
        Img: myImages.src = "rev_images/rev2.png",
    },
    {
        id: 5,
        name: "Mary Nyambura",
        job: "Data Scientist",
        info: "Data scientists utilize their analytical,\n"
            + "statistical, and programming skills to collect,\n"
            + "analyze, and interpret large data sets.\n"
            + "They then use this information to develop data-driven\n"
            + "solutions to difficult business challenges. \n"
            + "Data scientists commonly have a bachelor's degree in statistics,\n"
            + "math, computer science, or economics.\n"
            + "Data scientists have a wide range of technical \n"
            + "competencies including: statistics and machine learning,\n"
            + "coding languages, databases, machine learning, and reporting technologies.",
        Img: myImages.src = "rev_images/rev6.jpg",
    }
]
const img = document.getElementById("person_img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const randomBtn = document.querySelector(".random_button");
// set current item
let currentItem = 0;
window.addEventListener("DOMContentLoaded", () => {
    showPerson();
})
function showPerson() {
    const items = reviews[currentItem];
    img.src = items.Img;
    author.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.info;
}
next.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) currentItem = 0;
    showPerson();
})
prev.addEventListener("click", () => {
    currentItem--;
    if (currentItem < reviews.length - 1) currentItem = reviews.length;
    showPerson();
})
randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})
document.addEventListener("keydown", direction);
function direction(event) {
    if (event.keyCode === 37) {
        currentItem--;
        if (currentItem < reviews.length-1) currentItem = reviews.length;
        showPerson();
    };
    if (event.keyCode === 39) {
        currentItem++;
        if (currentItem > reviews.length - 1) currentItem = 0;
        showPerson();
    };
}



