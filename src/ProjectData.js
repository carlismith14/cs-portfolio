export const projectData = [
  {
    title: "eProcess Development",
    subtitle: "optimized website overhaul",
    description:
      "Business website optimized for accessibility, load time, & seo. Built with Next.js and tailwind CSS and deployed via AWS Amplify.",
    lightText: false,
    // img: require("./images/ep.webp"),
    img: require("./images/ep.webp"),

    link: "eprocess",
    alt: "Image",
    link2: "epd2",
    projectInfo: {
      media: {
        img: true,
        imgSrc: require("./images/ep.webp"),
        vid: false,
        vidSrc: null,
      },
      intro:
        "Revamping the business website for my contracted company involved identifying critical shortcomings and executing a comprehensive overhaul in both design and development. Using Next.js, we optimized the site for page load efficiency, accessibility, and SEO, laying a solid foundation for eProcess Development’s digital presence.",
      role: "Developer & Web Designer",
      techStack: ["Next.js", "TailwindCSS", "Nodemailer", "AWS"],
      challenges: [
        "Establishing Site Infastructure & Framework",
        "Implementation of Contact Form",
        "Optimizing towards Performance, Accessibility & SEO Performance",
        "Deployment via AWS Amplify",
      ],
      lessons:
        "Adopting Next.js taught me how it can simplify development workflows and optimize performance. I found Tailwind CSS to be incredibly flexible, which made rapid prototyping and design adjustments much easier. Navigating the deployment process on AWS Amplify also gave me valuable experience in efficient and scalable deployment practices.",
      note: false,
      noteContext: "",
      githubLink: "https://github.com/kurtrodenhizer/epd2024",
      demoLink: "https://eprocessdevelopment.com/",
    },
  },
  {
    title: "FARIS Dashboard",
    subtitle: "asset management tool & dashboard",
    description:
      "Interactive asset management dashboard with advanced sort and filter capabilities, built with React and Material UI components. Utilizes APIs for dynamic data fetching and display.",
    lightText: false,
    img: require("./images/faris_project_mainimage Background Removed.webp"),
    link: "/cmsdashboard",
    alt: "Image",
    link2: "cms2",
    projectInfo: {
      media: {
        img: true,
        imgSrc: require("./images/faris_project_mainimage Background Removed.webp"),
        vid: false,
        vidSrc: null,
      },
      intro:
        "The File Asset Resource Intelligence System (FARIS) is a centralized hub for storing and sharing business assets. As the front-end developer, I brought Figma designs to life and collaborated with back-end developers to integrate all relevant data. For this demo, I focused on the “recently shared” dashboard, and used Mockaroo's API to generate an anonymized data set.",
      role: "Frontend Developer",
      techStack: ["React", "Material UI", "API"],
      challenges: [
        "Advanced Table Features ",
        "API Integration & Data Handling",
        "Code Refactoring",
      ],
      lessons:
        "Adapting to the project’s existing infrastructure required me to learn quickly and efficiently. I joined the project later in its development, which meant I had to get up to speed with Material UI and integrate seamlessly into the current tech stack. Initially, I struggled with understanding and customizing Material UI components, but as I persisted, I began to appreciate the value of using pre-built components, recognizing both their advantages and limitations.",
      note: true,
      githubLink: "https://github.com/carlismith14/farisdashboard",
      demoLink: "https://faris-dashboard.netlify.app/",
    },
  },

  {
    title: "Philips IntelliVue",
    subtitle: "telemetry device simulation",
    description:
      "Hybrid mobile/web app built with React to simulate Philips’s IntelliVue telemetry device for effective medical staff training and device practice.",
    img: require("./images/projects/philips/philipsprojectimg1.webp"),
    alt: "Image",
    link: "/intellivue",
    link2: "intellivue2",
    projectInfo: {
      media: {
        img: false,
        imgSrc: null,
        vid: true,
        vidSrc: require("./images/philipsscreendemo.mov"),
      },
      intro:
        "The IntelliVue Sim File, built with React, serves as a versatile hybrid mobile/web application. It mirrors the form, function, and user experience of Philips's portable patient monitoring system. The goal was to create a user-friendly and accessible tool for nurses and hospital staff. This application allows them to become familiar with the monitor's operation using their mobile devices, simplifying their workflow and enhancing convenience.",

      role: "Sole Developer & Project Manager",
      techStack: [
        "React",
        "React Router",
        "React Context API",
        "Styled Components",
        "Capcitor",
      ],
      challenges: [
        "Managing State",
        "Event Handling",
        "Enabling Password Protection",
        "Building & Optimizing for Native",
      ],
      lessons:
        "While I stepped into the role with a foundation of skills, much of my growth happened in real-time, an invaluable experience that enhanced my knowledge far more than any tutorial ever could. I had the privilege of direct client engagement, taking charge of timelines, and shaping expectations. Looking ahead, I've come to appreciate the critical significance of robust project architecture and the art of crafting reusable code, lessons that will undoubtedly integrate into future projects.",
      note: true,
      noteContext:
        "*Please note that the demo link and source code for this project are not available due to privacy concerns. However, you are welcome to view screenshots and read the project writeup on the GitHub repository.",
      githubLink: "https://github.com/carlismith14/philips-intellivue",
    },
  },
  {
    title: "Ai Chatbot",
    subtitle: "interactive OpenAi application",
    description:
      "Interactive OpenAI-based chatbot app developed with Next.js. Combines AI with proprietary data for a company-wide training tool.",
    img: require("./images/cb.webp"),
    alt: "Image",
    link: "/aichatbot",
    link2: "aichatbot2",
    projectInfo: {
      media: {
        img: false,
        imgSrc: null,
        vid: true,
        vidSrc: require("./images//projects/aichatbot/ai-demo-video.mov"),
      },
      intro:
        "The AI Chatbot combines the power of AI with proprietary product information to act as a company-wide training tool. One of the key highlights of this project was the collaborative efforts between front-end and back-end engineers. Together, we developed an interactive application that leverages OpenAI and offers a seamless user experience.",
      role: "Front-end Developer",
      techStack: ["Next.js", "TailwindCSS", "Typescript", "OpenAi", "Github"],
      challenges: [
        "Responsive Design",
        "User Authorization",
        "Data Integration",
      ],
      lessons:
        "This project marked my first experience working closely with other developers, and it emphasized the significance of clear communication and coordination. Learning GitHub, including forking repositories and submitting pull requests, streamlined our collaborative efforts and ensured the seamless integration between front-end and back-end components. This experience enhanced my technical skills and underscored the pivotal role of teamwork in project success.",
      note: true,
      noteContext:
        "*Please note that the demo link and source code for this project are not available due to privacy concerns. However, you are welcome to view screenshots and read the project writeup on the GitHub repository.",
      githubLink: "https://github.com/carlismith14/ai-chatbot",
    },
  },
  {
    title: "Punta Cana",
    subtitle: "responsive restaurant website",
    description:
      "Responsive restaurant website project demonstrating HTML, CSS, and JavaScript skills. Focused on responsive design challenges like navigation and menu display.",
    img: require("./images/pc2.png"),
    alt: "Image",
    link: "/puntacana",
    link2: "pc2",
    projectInfo: {
      media: {
        img: true,
        imgSrc: require("./images/pc2.webp"),
        vid: false,
        vidSrc: null,
      },
      role: "Developer & Designer",
      intro:
        "For my first website project, Punta Cana, I served as both designer and developer, discovering my passion for coding and clarifying my career aspirations in web development. I used HTML, CSS, and JavaScript to build a responsive restaurant site with features like a navigation bar, CSS Grid menu, and fixed background effects.",
      techStack: ["HTML5", "CSS", "JavaScript", "Netlify"],
      challenges: [
        "Responsive Navigation Bar",
        "Menu Display via CSS Grid",
        "Fixed Background",
        "BEM Naming Conventions",
      ],
      lessons:
        "This project taught me the importance of organizational practices like BEM naming conventions for clear and maintainable code. Although I built the site with raw HTML, CSS, and JavaScript, the project’s complexity highlighted the need for frameworks to improve code management and efficiency.",
      note: false,
      noteContext: "",
      githubLink: "https://github.com/carlismith14/puntacana",
      demoLink: "https://punta-cana-restaurant.netlify.app/",
    },
  },
];
