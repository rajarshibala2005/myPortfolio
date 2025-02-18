const educationData = [
    {
        year: "2024",
        title: "PERSUING BACHELOR'S OF COMMPUTER APPLICATION",
        school: "PARUL UNIVERSITY",
        description: "Currently, I am in my 1st semester, learning the fundamentals of computer systems, including how computing works at a fundamental level, how the CPU interacts with the OS and software applications, and concepts like classes and objects (OOP). Additionally, I'm focusing on writing optimized code."
    },
    {
        year: "2024",
        title: "PASSED 12TH STANDARD WITH 59% MARKS FROM STATE BOARD",
        school: "BIDHANNAGAR GOVT. HIGH SCHOOL",
        description: "Passed 12th standard in the Arts stream with Bengali as the first language, English as the second language, and elective subjects including Computer Application, History, Political Science, and Geography."
    },
    {
        year: "2023",
        title: "LEARN FRONTEBD WEB DEVELOPMENT, REACTJS, mySQL",
        school: "OFFICIAL DOCUMENTATION, OPEN SOURCE, VIDEO TUTORIALS",
        description: "Gained hands-on experience in frontend web development with frameworks like ReactJS, focusing on building interactive and responsive websites, while also learning MySQL for effective database management and integration with web applications."
    },
    {
        year: "2022",
        title: "STARTED MY PROGRAMMING JOURNEY WITH THE PYTHON LANGUAGE",
        school: "OFFICIAL DOCUMENTATION, OPEN SOURCE, VIDEO TUTORIALS",
        description: "To enhance programming skills and deepen understanding of coding concepts, supplementing academic learning through self-directed study."
    },
    {
        year: "2021",
        title: "PASSED 10TH STANDARD WITH 89% MARKS FROM STATE BOARD",
        school: "NALANDA ENGLISH DAY HIGH SCHOOL",
        description: "Passed without taking the exam since all board exams were cancelled due to the COVID epidemic, and the marksheet was prepared using the 9th standard marksheet."
    }
];

// Function to render the education table dynamically
function renderEducationTable(data) {
    const table = document.createElement('table');

    data.forEach(entry => {
        const row = document.createElement('tr');

        row.innerHTML =
            `<td class="ex-edu-year">${entry.year}</td>
            <td>
                <div class="ex-adu-title">${entry.title}</div>
                <div class="ex-edu-subtitle">${entry.school}</div>
                <div class="ex-edu-description">${entry.description}</div>
            </td>`
            ;

        table.appendChild(row);
    });

    document.getElementById('education-table').appendChild(table);
}

renderEducationTable(educationData);

const projectDetails = [
    {
        link: "https://rajarshibala2005.github.io/Rock-paper-and-scussor/",
        image: "images/project3.png",
        title: "STONE PAPER SCISSOR",
        description: "A Rock-Paper-Scissors game, developed to enhance my JavaScript skills. This interactive project features a clean interface and dynamic gameplay logic, providing an engaging user experience."
    },
    {
        link: "https://rajarshibala2005.github.io/sample_website/",
        image: "images/project2.png",
        title: "RATHI-RAJ STUDIO",
        description: "Rath Raj Studio is a website I developed to refine my skills, featuring a modern design and seamless functionality. Built using HTML, CSS, and JavaScript, it demonstrates my proficiency in web development and attention to detail."
    },
    {
        link: "https://rajarshibala2005.github.io/Tic-Tac-Toe/",
        image: "images/project1.png",
        title: "TIC TAC TOE",
        description: "A digital Tic Tac Toe game built during my JavaScript course, featuring responsive design and seamless two-player gameplay. Developed with HTML, CSS, and JavaScript to showcase dynamic updates and game logic."
    },
    {
        link: "https://rajarshibala2005.github.io/swiftcart/",
        image: "images/project4.png",
        title: "SwiftCart",
        description: "SwiftCart is a responsive e-commerce site built for my BCA 1st semester project using HTML, CSS, Bootstrap, and JavaScript, showcasing my front-end skills with a clean UI, responsive design, and interactive features."
    }
];

function renderprojectdetails(data) {

    const div = document.getElementById('project-details');

    data.forEach(entry => {
        const row = document.createElement('div');
        row.classList.add('col-10', 'col-md-6', 'col-lg-4', 'd-flex', 'flex-column', 'align-items-center', 'px-3');

        row.innerHTML =
            `          
            <a href=${entry.link} target="blank" class="d-flex flex-column align-items-center text-decoration-none text-dark projrctcard"><img src=${entry.image} class="img-fluid col-8 rounded-circle mb-3 border border-dark" alt="Project 1">
            <h5 class="text-center">${entry.title}</h5>
            <p class="text-center lh-lg">${entry.description}</p></a>`
            ;

        div.appendChild(row);
    });
}

renderprojectdetails(projectDetails);
