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
  username: "TejasKumar",
  title: "Hi all, I'm Tejas!",
  subTitle: emoji(
    "I am a full-stack developer 🚀 with a BTech in Information Technology, specializing in web technologies and cybersecurity. My experience includes web development,database management, and API integration. I've also contributed to building a cybersecurity team at my university. I am eager to join an organization that values creativity, diversity, and collaboration."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WID3KvLPhpdycg-jjKlZxqSc5RQ5SJlD/view?usp=drive_linkg", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tejas303525",
  linkedin: "https://www.linkedin.com/in/tejas-kumar-8a110a185/",
  gmail: "tejas303525@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/tejas.kumar.14019",
  medium: "https://medium.com/@tejas303525",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I work on developing new websites, upskilling myself and constantly looking forward for new ways to contribute in the tech world and keep gaining knowledge, whether it is via development or by security, I am a huge advocate for cybersecurity and protecting digital footprints, So I often participate in research about security related stuff, participate in CTF events, do some online hacking challenges, etc",
  skills: [
    emoji(
      "⚡ -> Developed few full stack projects and also security tool for demonstrating ARP protocol which also can perform MITM attack"
    ),
    emoji(
      "⚡ :) Created Web application using the MERN stack and blazor framework"
    )
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
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
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
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
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
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
      schoolName: "Indian High School, Ras Al Khaimah",
      logo: require("./assets/images/indianschool.png"),
      subHeader: "High school",
      duration: "2007 - 2019",
      desc: "Was able to be a part of multiple clubs and volunteering services. Took physics,computer and maths in 11th and was able to secure decent grade to join one of th top universities"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Sastra Deemed University",
      logo: require("./assets/images/sastra.png"),
      subHeader: "Bachelor of Technology, Information Technology",
      duration: "2019 - 2023",
      desc: "4 year course with various aspects in the field of IT and recieved my bachelors degree.",
      descBullets: [
        "Participated in events, conducted workshops and was a member of Developer Student Club(DSC)",
        "Was part of the universities only cybersecurity team, in the domain of binary exploitation"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full stack web dev-intern",
      company: "Commnet System Consultancy",
      companylogo: require("./assets/images/commnet.webp"),
      date: "Feb 2023 – May 2023",
      desc: "Worked as an intern for a company in dubai for 4 months , developing a web application for managing their day to day tasks.",
      descBullets: [
        "Developed a program using Reactjs for frontend, node js for backend that serves the company to manage their day-to-day tasks easily        ",
        "Implemented Mongodb as their database to access their data anytime anywhere",
        "Uploaded to a free hosting service in the internet along with their database to access their datas"
      ]
    }
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certified in cybersecurity(ISC2)",
      subtitle: "I am certified in cybersecurity by the ISC^2 organisation",
      image: require("./assets/images/cc.png"),
      imageAlt: "Certified in cybersecurity by isc^2",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1nmrXy1UvsZ_qsih9-1bHraXwfNkNodPi/view?usp=sharing"
        },
        {
          name: "Badge",
          url: "https://www.credly.com/badges/a25f9bee-4e72-44f8-8228-f2ea3dc7a747/public_url"
        }
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Information Security-5-Secure-System",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/nptel.png"),
      imageAlt: "Secure system certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/13ee-tGRIpEvMXHFu2u2xJzs6XF0jFERU/view?usp=sharing"
        }
      ]
    },

    {
      title: "Network security and Database vulnerability",
      subtitle: "Completed IBM Network security and vulnerability course",
      image: require("./assets/images/net.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/228e550597fc99e887a7533ffdbc1a33"
        },
        {
          name: "Badge",
          url: "https://www.credly.com/badges/96c37ff2-84ad-44dc-aed3-284ed060f85b/public_url"
        }
      ]
    },
    {
      title: "Fortinet NSE 3 Network Security Associate",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/NSE.png"),
      imageAlt: "Fortinet Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1toJ5aXESe8r8YYeHfj1bZqH_FqeCz3mb/view?usp=sharing"
        }
      ]
    },
    {
      title: "Cybersecurity Roles, Processes & Operating System Security",
      subtitle:
        "Completed Certifcation from Coursera for Cybersecurity Roles, Processes & Operating System Security",
      image: require("./assets/images/cyberrole.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/18b5ed2f-f9ab-432e-888d-2de2142ae8ab/public_url"
        },
        {
          name: "Certification",
          url: "https://coursera.org/share/421cf9afc92a55d8c7c480f9a754e4f1"
        }
      ]
    },
    {
      title: "Python Programming Essentials",
      subtitle:
        "Completed Certifcation from Coursera for Python Programming Essentials",
      image: require("./assets/images/python.png"),
      imageAlt: "Coursera cert ",
      footerLink: [
        // {
        //   name: "Badge",
        // url: "https://www.credly.com/badges/18b5ed2f-f9ab-432e-888d-2de2142ae8ab/public_url"
        // },
        {
          name: "Certification",
          url: "https://coursera.org/share/12967b5900e3ec11c1eb0a38fc2f6755"
        }
      ]
    },
    {
      title: "Web Application Security Testing with Burp Suite",
      subtitle:
        "Completed Certifcation from Coursera for Web Application Security Testing with Burp Suite",
      image: require("./assets/images/bp.png"),
      imageAlt: "Coursera cert ",
      footerLink: [
        // {
        //   name: "Badge",
        // url: "https://www.credly.com/badges/18b5ed2f-f9ab-432e-888d-2de2142ae8ab/public_url"
        // },
        {
          name: "Certification",
          url: "/account/accomplishments/?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=project"
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
  display: true // Set false to hide this section, defaults to true
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
  number: "+971-563829891",
  email_address: "tejas303525@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Tejasku303525", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
