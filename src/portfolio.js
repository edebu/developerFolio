/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Burak Ede",
  title: "Hi all, I'm Burak",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Angular / Vue / Reactjs / Nodejs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GwxODfAE2zjBIFj9S5-qnV3cE72XmYFl/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/edebu",
  linkedin: "https://www.linkedin.com/in/burak-ede-2ab924bb",
  gmail: "burak.ede24@gmail.com",
  gitlab: "https://gitlab.com/edebu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Istanbul Technical University",
      logo: require("./assets/images/ituLogo.jpg"),
      subHeader: "Master of Science in Electronics and Communication Engineering",
      duration: "September 2019 - – Present",
      desc: "Participated in the research of UAVs physical layer communication and published 2 papers.",
      descBullets: [
        "Measurement - Based Large Scale Statistical Modeling of Air - to - Air Wireless UAV Channels via Novel Time - Frequency Analysis (IEEE Wireless Communications Letters · Oct 22, 2021)" ,
        "Measurement Based Statistical Channel Characterization of Air-to-Ground Path Loss Model at 446 MHz for Narrow-Band Signals in Low Altitude UAVs (VTC2020-Spring · Jan 11, 2020)"
      ]
    },
    {
      schoolName: "Istanbul Technical University",
      logo: require("./assets/images/ituLogo.jpg"),
      subHeader: "Bachelor of Science in Electronics and Communication Engineering",
      duration: "September 2012 - April 2017",
      desc: "",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Resarcher",
      company: "TUBİTAK BİLGEM",
      companylogo: require("./assets/images/bilgemLogo.png"),
      date: "Aug 2019 – Present",
      desc: "Currently working as a researcher at TUBITAK BİLGEM. It develops software solutions in the field of wireless communication in line with the needs. Besides, it uses QT C++ on the algorithm development side and Angular/Nodejs on the frontend/backend side.",
      descBullets: [
        "Qt C++ projects for communication systems",
        "Web applications, NodeJs, Angular",
        "WebSockets, RxJs, MySQL, TypeScript, JQuery, HTML5, CSS3, Bootstrap, PrimeNG",
        "Docker, CI/CD pipelines with GitLab, Jenkins",
        "Gitlab-CE in air-gapped network setup, maintenance, improvement for CI/CD process"
      ]
    },
    {
      role: "Electronic Engineer",
      company: "Startech Electronics",
      companylogo: require("./assets/images/startechLogo.png"),
      date: "July 2018 – Dec 2018",
      desc: "Installation and testing of monitoring software for the development and monitoring of security devices on ATMs in the bank, Django web Framework monitoring application on the bank system, Installing the packages and dependencies required by the monitoring application and python offline and communicating with ATMs over the allowed ports on the firewall, Electronic ATM safe lock project that can be controlled by Raspberry Pi and integrated into the monitoring application."
    },
    {
      role: "Software Engineer Intern",
      company: "Aselsan",
      companylogo: require("./assets/images/aselsanLogo.png"),
      date: "July 2016 – Aug 2016",
      desc: "Data communication over TCP/IP using Java."
    },
    {
      role: "Embedded Software Engineer Intern",
      company: "ITU GSTL",
      companylogo: require("./assets/images/gstlLogo.png"),
      date: "June 2015 – July 2015",
      desc: "Embedded Linux Projects were implemented on Intel Galileo."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/risaleTabu.png"),
      projectName: "RisaleTaboo Game",
      projectDesc: "A Taboo game using Vue",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://risaletaboo.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bhbenerji.ico"),
      projectName: "BHB Solar Enerji",
      projectDesc: "BHB Solar Enerji company website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bhbenerji.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Angular - The Complete Guide (2023 Edition)",
      subtitle:
        "Master Angular and build awesome, reactive web apps with the successor of Angular",
      image: require("./assets/images/udemyLogo3.png"),
      imageAlt: "udemy-angular",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-b15d59f4-6f1d-4771-8946-995e119a128c/"
        }
      ]
    },
    {
      title: "Linux System Administration Basics",
      subtitle:
        "Within the scope of İLA trainings, the training coded ila-sy-rh-1012 covers introduction to system management and basic server management.",
      image: require("./assets/images/ila.png"),
      imageAlt: "Course Website",
      footerLink: [
        {
          name: "Course Website",
          url: "https://man.ila.itu.edu.tr/"
        }
      ]
    },

    {
      title: "Linux System Basics",
      subtitle: "Within the scope of İLA trainings, the training coded ila-sy-rh-1011 covers the basic topics in Linux distributions.",
      image: require("./assets/images/ila.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Course Website",
          url: "https://man.ila.itu.edu.tr/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+90-5387705960",
  email_address: "burak.ede24@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
