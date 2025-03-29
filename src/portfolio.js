import dhruvi_about_image from './assets/dhruvi_images/dhruvi_image_4.jpg';
import dalhousie_university_image from './assets/education_images/dalhousie_university.jpg';
import gujarat_technological_university_image from './assets/education_images/gujarat_technological_university.jpg';
import medium_logo from './assets/logo_images/medium_logo.jpg';

export const portfolio = {
    aboutme: {
        fullName: "Dhruvi Shah",
        email: "dhruvishah1817@gmail.com",
        profileImage: dhruvi_about_image,
        linkedInLink: "https://www.linkedin.com/in/dhruvi-shah-aa47a71b4//",
        githubLink: "https://github.com/Dhruvi199930",
        instagramLink: "Instagram",
        facebookLink: "https://www.facebook.com/",
        twitterLink: "https://twitter.com/",
        heading: "Hi all, I'm Dhruvi Shah",
        paragraph: "A passionate coder with a penchant for crafting end-user applications through the thoughtful application of software design and development principles. My expertise spans Android development, Web development, Software development, and Cloud technologies. I'm here to bring your brilliant ideas to life. Let's connect and stay in touch!",
        resumeLink: "Resume"
    },
    experiences: [
        {
            company: "90Seond Health | Halifax, CA",
            position: "Full Stack Developer | June 2023 - Current",
            projects: [
                {
                    name: "Healthletters system",

                }
            ],
            work: [

                "Designed and implemented dynamic, user-friendly front-end features using React.js, enhancing the overall user experience and subscriber engagement.",
                "Collaborated on UI/UX design improvements, ensuring intuitive interfaces and seamless user interactions, aligned with modern design principles.",
                "Developed and maintained full-stack solutions by integrating React.js for the front end and Laravel for the back end, optimizing system performance and scalability.",
                "Managed CI/CD pipelines using AWS services, automating deployments, and streamlining development workflows to ensure rapid delivery of high-quality updates..",
                "Actively participated in technical discussions and decision-making, bridging the gap between backend database management and React-driven UI/UX enhancements.",
                "Implemented cloud-based solutions and infrastructure improvements on AWS, enabling scalability and reliability for critical application components."
            ]
        },
        {
            company: "Eadie Technologies | Halifax, CA",
            position: "Software Developer | May 2022 - Dec 2022",
            projects: [
                {
                    name: "Glaucoma disese Machine",

                }
            ],
            work: [

                "Contributed to the development and design of the website for the Head Mount Device product as a MERN stack developer, leveraging React, Node.js, MongoDB, and JavaScript..",
                "Integrated hardware communication by connecting C++ code with the Node.js-based application, enabling real-time interactions with the device.",
                "Utilized REST APIs to manage backend interactions and streamline data flow between components.",
                "Dockerized the application for consistent development and production environments, and deployed it using AWS services for scalable and reliable hosting..",
                "Collaborated with teams using JIRA, conducted code reviews, and implemented best practices to maintainhigh-quality standards."
            ]
        },
        {
            company: "Amkay Software Solution | Ahmedabad, IN",
            position: "Web Developer  | Aug 2020 - Nov 2020",
            projects: [],
            work: [
                "Designed and developed multiple e-commerce websites using CMS platforms, delivering customized solutions to meet client requirements.",
                "Created and optimized scripts using JavaScript, HTML5, CSS3, and Bootstrap to craft engaging user interfaces that align with unique branding and marketing strategies.",
                "Diagnosed and resolved technical issues efficiently, ensuring smooth website performance and a seamless user experience, with minimal downtime. "
            ]
        },
        {
            company: "DesignX | Ahmedabad, IN",
            position: "Java Developer  | July 2019 - Sept 2019",
            projects: [],
            work: [
                "Assisted in the development of an online food ordering application following the Agile Scrum methodology,gaining hands-on experience in collaborative team environments.",
                "Supported the creation of Spring Boot applications and microservices to improve platform functionality under guidance from senior developers..",
                "Participated in unit testing and functional testing activities to ensure application security and reliability,enhancing understanding of software quality assurance practices.",
                "Worked in designing and implementing different projects as a beginner"
            ]
        },

    ],
    educations: [
        {
            shortform: "DU",
            name: "Dalhousie University | Halifax, CA",
            years: "Jan 2021 - Sept 2022",
            course: "Master of Applied Computer Science",
            //cgpa: null,
            image: dalhousie_university_image,
            imageAlt: "Dalhousie University Logo and Text",

        },
        {
            shortform: "GTU",
            name: "Gujarat Technological University | Ahmedabad, IN",
            years: "Jul 2016 - May 2020",
            course: "Bachelors in Computer Engineering",
            //cgpa: null,
            image: gujarat_technological_university_image,
            imageAlt: "Gujarat Technological University Logo and Text",

        },
    ],
    skills: {
        technologies: ["Kotlin", "Java", "HTML", "CSS", "JavaScript", "XML", "JSON", "Maven", "Android SDK", "Jenkins"],
        frameworks: ["Material UI", "BootStrap", "Embedded JavaScript (EJS)", "React.js", "Express.js", "Node.js", "Flutter"],
        databases: ["SQL", "SQLite", "MySQL", "NoSQL", "Firebase Database", "MongoDB"],
        cloudTechnologies: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Firebase Console"],
        industryKnowledge: ["Algorithms", "Data Structures", "Object-Oriented Programming (OOP)", "Design Patterns", "Software Development Life Cycle (SDLC)", "Code Refactoring", "SOLID Principles", "Test-Driven Development (TDD)", "CI/CD", "Agile Methodology", "Scrum", "JIRA"],
        versionControl: ["Git", "GitHub", "GitLab", "BitBucket", "Azure DevOps", "Gerrit"],
        dataScience: ["Hadoop", "NumPy", "Pandas", "Keras"]
    },

    projects: [
        {
            projectName: "Portfolio Website",
            projectTechnologies: ["React.js", "Material UI", "Node.js", "NPM", "Lottie Animations", "AOS", "Git", "GitHub"],
            projectAbout: "Developed portfolio using a modern tech stack including ReactJS, Material-UI,Lottie Animations, and AOS (Animate On Scroll) library.",
            projectGitHubLink: null,
            projectDeploymentLink: null
        },
        {
            projectName: "JobApplicationPlatfrom",
            projectTechnologies: ["React.js", "Material UI", "Express.js", "Node.js", "NPM", "Git", "GitHub", "Docker"],
            projectAWSTechnologies: null,
            projectGCPTechnologies: null,
            //projectDuration: "Jul 2019 - June 2020",
            projectAbout: "Our project aims to create a user-friendly job application platform that simplifies the job-hunting process.The platform is designed to streamline the application process, making it easier for job seekers to find and apply for the right opportunities efficiently.",
            projectGitHubLink: null,
            projectDeploymentLink: null
        },
        {
            projectName: "OnlineDriveApplication",
            projectTechnologies: ["React.js", "UUID", "ReactHooks", "Node.js", "NPM", "Git", "GitHub", "Docker"],
            projectAWSTechnologies: null,
            projectGCPTechnologies: null,
            //projectDuration: "Jul 2019 - June 2020",
            projectAbout: "An intuitive file and folder management system built with React. This application simulates the basic functionalities of an online file storage system like Google Drive. Users can create, rename, delete, and navigate through folders and files.",
            projectGitHubLink: null,
            projectDeploymentLink: null
        },
        {
            projectName: "University Management System",
            projectTechnologies: ["React.js", "Material UI", "Express.js", "Node.js", "NPM", "AWS", "GCP", "Git", "GitHub", "Docker"],
            projectAWSTechnologies: ["Amazon DynamoDB", "Amazon S3", "Amazon Lambda", "Amazon Lex"],
            projectGCPTechnologies: ["Google Container Registry", "Google Cloud Run", "GCP Pub/Sub", "Google Firebase Firestore", "Google Data Studio"],
            projectDuration: "May 2021 - Aug 2021",
            projectAbout: "Designed web application of university management using React components for front-end.Used node.js for the backend of the website and API calls to respond to the request.Students can get information about different universities and their available coursesStudents can also get access to library facility online also can book for their residency services.",
            projectGitHubLink: null,
            projectDeploymentLink: null
        },

        {
            projectName: "Blood Book",
            projectTechnologies: ["Java", "JUnit", "Maven", "MySQL", "JIRA", "Git", "GitLab", "IntelliJ", "Heroku", "Data Structures", "Algorithms"],
            projectAWSTechnologies: null,
            projectGCPTechnologies: null,
            projectDuration: "May 2021 - Aug 2021",
            projectAbout: "A blood bank management system implemented using industrial software development standards such as Agile Methodology, SOLID principles, Design Patterns, Object-Oriented Programming, and Test Driven Development (TDD). Maintained a high-quality codebase following Seperation of Concerns, High Cohesion, Low Coupling, and clean code practices. Automated the application's deployment using GitLab's CI/CD pipeline to increase the team's performance and quality.",
            projectGitHubLink: null,
            projectDeploymentLink: null
        },
        {
            projectName: "Simple RDB and RDBMS",
            projectTechnologies: ["Java", "JUnit", "Maven", "Git", "GitLab", "IntelliJ", "Data Structures", "Algorithms"],
            projectAWSTechnologies: null,
            projectGCPTechnologies: null,
            projectDuration: "May 2021 - Aug 2021",
            projectAbout: "A Simple Custom Relational Database (RDB) and its Management System (RDBMS) provides features like Multi-factor authentication, Query Parser (For DDL, DQL, DML and TCL Queries), Query Processor (For DDL, DQL, DML and TCL Queries), Data Dictionary Generator/View, Meta Data Generator/View, SQL Dump Generator/View (SQL Dump Export), SQL Dump Import, ERD Generator/View, and Log Generator/View (General Logs, Query Logs, Event Logs).",
            projectGitHubLink: null,
            projectDeploymentLink: null
        },


    ],
    blogs: [
        {
            name: "AppBar in Flutter",
            logo: medium_logo,
            logoAlt: "Medium Logo",
            link: null,
            description: "The app bar is an important design element which stays generally on top of each screen below the status bar. It provides better user interaction and experience by allowing screen navigation and views switching.",
            dateOfPublish: "Dec 30, 2020"
        }
    ],
    certifications: [
        {
            name: "Designing RESTful APIs",
            issuer: "Linkedin",
            issueDate: "Mar 03, 2023",
            credentialId: "AZkmZp9bsH-8OFp-oX9DFp-vN-eb",
            credentialLink: null,
        },

    ],

    contactMe: {
        line: "Discuss a project or just want to say Hi? I am open for a conversation.",
        number: "+1 (782) 882 1793"
    }
};
