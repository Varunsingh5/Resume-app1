import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@material-ui/icons/GitHub";
//import YouTubeIcon from '@mui/icons-material/YouTube';

import React from "react";
import { AssignmentOutlined, GitHub, Language, WebOutlined, YouTube } from "@material-ui/icons";


export default{
    name: "Varun Singh",
    title: "Mern stack developer",

    birthday:"9th oct. 1998",
    email:"cu.16bcs2071@gmail.com",
    address:"jammu",
    phone:"123 456 7890",

    
   
    socials: {
        Facebook: {
            link: "https://www.facebook.com/profile.php?id=100013123815270",
            text: "My Facebook",
            icon: <FacebookIcon />

        },
       Istagram: {
            link: "https://www.instagram.com/varunsingh910/",
            text: "My Instagram",
            icon: < InstagramIcon/>

        },
        Linkedin: {
            link: "https://www.linkedin.com/in/varun-singh-b76530212",
            text: "MyLinkedin",
            icon: <LinkedInIcon />

        },
        GitHub: {
            link: "https://github.com/Varunsingh5",
            text: "MyGithub",
            icon: <GitHubIcon />

        },
    },

about:"  Hello,  My name is Varun Singh. I am basically from Jammu.Presently i am living in Mohali(punjab). I had done my 10th from Sacred Heart Convent High School Phinter(Billawar, J&K) . I had done my 12th from Billawar Public School Billawar(J&K). I had done my Bachelor degree in Computer Science And Engineering from Chandigarh University(2016-2020). My short-term goal is to learn programming language . My Long-term goal is to reach higher position  and to become a successful software developer ",
experiences :[
    {
        title:"HTML,CSS and Bootstrap",
        date:"12/07/21 - 12/09/21",
        description:'HTML   (Hypertext Markup Language) is the code that is used to structure a web page and its content.    Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. \n\n Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.'
},
    {
        title:"Java Scripit and ES6",
        date:'12/09/21 - 12/11/21',
        description:'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user. ECMAScript 2015 or ES2015 is a significant update to the JavaScript programming language. It is the first major update to the language since ES5 which was standardized in 2009. Therefore, ES2015 is often called ES6. '
    },
    {
        title:"React JS",
        date:'12/09/21 - 12/01/22',
        description:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. '
    },
],

educations :[
    {
        title:"High School",
        date:'2002- 2014',
        description:'Think for a moment: would you rather purchase from a business you know nothing about, or would you go for somebody with a friendly face shared on their About page and a story  that you find exciting? The latter one, right? '
    },
    {
        title:"High Secondary ",
        date:'2014- 2016',
        description:'Think for a moment: would you rather purchase from a business you know nothing about, or would you go for somebody with a friendly face shared on their About page and a story  that you find exciting? The latter one, right? '
    },
    {
        title:"Chandigarh University",
        date:'2016- 2020',
        description:'Think for a moment: would you rather purchase from a business you know nothing about, or would you go for somebody with a friendly face shared on their About page and a story that you find exciting? The latter one, right? '
    },
],

services: [
    {
        title:'Web Devlopment',
        description:'I am learning',
        icon:<WebOutlined />
    },
    {
        title:'Branding Identity',
        description:'We will make you brand that is catchy and leaves a trace',
        icon:<AssignmentOutlined />
    },
    {
        title:'Illusator',
        description:'I am working on Illustrator',
        icon:<WebOutlined />
    },
],
 
skills: [
    {
        title:'Front-End' , description: [
            "ReactJs",
            "JavaScript",
            "BootStrap",
            "TyprScript",
            "MaterailUi",
        ],
    },
    {
    title:'Back-End' , description: [
        "NodeJs",
        "Java",
        "Phyton",
        "Solidity"
      
    ],
},
{
    title:'Database' , description: [
        "Firebase",
        "MySQL",
        "Ms SQl Server",
        "MongoDB"
       
    ],
},
{
    title:'Source Control' , description: [
        "Git",
        "GitHub",
        "SCRUM/Agile"
       
    ],
},
],

projects:  [
    {
        tag: 'React',
       images:['https://images.pexels.com/photos/1590882/pexels-photo-1590882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',       
       
    ],
    title:"Project 1",
        caption:' A Short description',
        description:'This is my project description. Please fill it in.',
        links: [
            {  link:'http://www.google.com ', icon : <YouTube /> },
            {  link:'http://www.google.com ', icon : <GitHub /> },
            {  link:'http://www.google.com ', icon : <Language />  } ,
        ] ,
    },
    {
        tag: 'Java',
        images: ['https://images.pexels.com/photos/1590882/pexels-photo-1590882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    title:"Java Project 1",
        caption:' A Short description',
        description:'This is my project description. Please fill it in.',
        links: [
            { link:'http://www.google.com ', icon : <YouTube />  },
            { link:'http://www.google.com ', icon : <GitHub />  },
            {     link:'http://www.google.com ', icon : <Language /> } ,
        ] ,
    },
    {
        tag: 'Python',
        images: ['https://images.pexels.com/photos/1590882/pexels-photo-1590882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    title:"Python Project 1",
        caption:' A Short description',
        description:'This is my project description. Please fill it in.',
        links: [
            { link:'http://www.google.com ', icon : <YouTube /> },
            { link:'http://www.google.com ', icon : <GitHub />      },
            {link:'http://www.google.com ', icon : <Language />   } ,
        ] ,
    },
    {
        tag: 'React js',
       images:['https://images.pexels.com/photos/1590882/pexels-photo-1590882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',       
       
    ],
    title:"Project 2",
        caption:' A Short description',
        description:'This is my project description. Please fill it in.',
        links: [
            {  link:'http://www.google.com ', icon : <YouTube /> },
            {  link:'http://www.google.com ', icon : <GitHub /> },
            {  link:'http://www.google.com ', icon : <Language />  } ,
        ] ,
    },
]
};