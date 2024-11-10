    const educationData = [
        {
            year: "2023",
            title: "LEARN FRONTEBD WEB DEVELOPMENT, REACTJS, mySQL ",
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
            
            row.innerHTML = `
                <td class="ex-edu-year">${entry.year}</td>
                <td>
                    <div class="ex-adu-title">${entry.title}</div>
                    <div class="ex-edu-subtitle">${entry.school}</div>
                    <div class="ex-edu-description">${entry.description}</div>
                </td>
            `;
            
            table.appendChild(row);
        });

        document.getElementById('education-table').appendChild(table);
    }

    // Render the table on page load
    renderEducationTable(educationData);

