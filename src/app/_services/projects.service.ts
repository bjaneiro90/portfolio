import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [

    {
      id: 0,
      name: "Drum_Blaster",
      summary: "🥁",
      description: "The drum music instrument was the first group project created during the course, where the user could play and record music. We used events to create dynamics between the instrument's compounds and the user's keyboard, and CSS to create the aesthetics whenever a component was played.",
      projectLink: "https://github.com/tebanet/proyecto-bateria",
      pictures: ["../../assets/Drum_1.PNG"],
      tag1: ["../../assets/4202020_css3_html_logo_social_social media_icon.png"],
      tag2: ["../../assets/javascript-3-32.png"],
      tag3: ["../../assets/html5-12-32.png"]
    },

    {
      id: 1,
      name: "Retro Shop (Back-End)",
      summary: "🖥",
      description: "The online vintage product store backend project was the second project of the course, where we had to create a database of requests that responded to the designated routes. The main objective of this app was to develop a online process for selling, purchasing and rating vintage products through the creation of the registration and login process with token and validation with joi; production of a list of notes filtered by price, category, name and location; and the creation of a user experience evaluation system. ",
      projectLink: "https://github.com/tebanet/retrotech-shop",
      pictures: ["../../assets/retro_1.PNG", "../../assets/retro_2.PNG", "../../assets/retro_3.PNG"],
      tag1: ["../../assets/mysql.png"],
      tag2: ["../../assets/javascript-3-32.png"],
      tag3: ["../../assets/nodejs-performance-platform-32.png"]
    },
    {
      id: 2,
      name: "Noted App v1.0 (Front-End)",
      summary: "📝",
      description: "The online notebook project was my third, individual and last project during the bootcamp. The main objective of this application was to create an attractive look and implement a clean and objective design, capable of being maintained and scalable through the creation of the registration and login process with token and validation with joi; production of a list of notes for each user; and creation of a system for posting, editing and deleting posts with images.",
      projectLink: "https://github.com/bjaneiro90/appDeNotas",
      pictures: ["../../assets/noted_1.PNG", "../../assets/noted_2.PNG", "../../assets/noted_3.PNG"],
      tag1: ["../../assets/react-32.png"],
      tag2: ["../../assets/javascript-3-32.png"],
      tag3: ["../../assets/nodejs-performance-platform-32.png"]
    },
    {
      id: 3,
      name: "Noted App (Back-End)",
      summary: "🖥",
      description: "The online notebook project was my third, individual and last project during the bootcamp. The development of the API included not only the creation of a database, but also requests and responses capable of establishing a connection with the client in a secure way. The main objectives of this project were to create the registration and login process with token and validation with joi; create a list of notes; and post, edit and delete notes with images.",
      projectLink: "https://github.com/tebanet/retrotech-shop",
      pictures: ["../../assets/retro_1.PNG", "../../assets/retro_2.PNG", "../../assets/retro_3.PNG"],
      tag1: ["../../assets/mysql.png"],
      tag2: ["../../assets/javascript-3-32.png"],
      tag3: ["../../assets/nodejs-performance-platform-32.png"]
    },
    {
      id: 4,
      name: "Noted App v2.0 (Front-End)",
      summary: "📝",
      description: "The online notebook project was my third, individual and last project during the bootcamp. The main objective of this application was to create an attractive look and implement a clean and objective design, capable of being maintained and scalable through the creation of the registration and login process with token and validation with joi; production of a list of notes for each user; and creation of a system for posting, editing and deleting notes with images.",
      projectLink: "https://github.com/bjaneiro90/NoteiT",
      pictures: ["../../assets/Personal_Details.PNG", "../../assets/New_Note.PNG", "../../assets/Log_in.PNG"],
      tag1: ["../../assets/react-32.png"],
      tag2: ["../../assets/javascript-3-32.png"],
      tag3: ["../../assets/nodejs-performance-platform-32.png"]
    },
    {
      id: 5,
      name: "Abraza Galicia (Back-End)",
      summary: "🖥",
      description: "AbrazaGalicia is a cooperative project created by 3 people that consists of creating a social network/services for elderly people, where they can request palative services and chat through a platform in real time. The main objectives of this project are to create the registration and login process with token, validation with joi and confirm the registration by sending a confirmation email. Project in progress",
      projectLink: "https://github.com/bjaneiro90/backendabrazagalicia",
      pictures: ["../../assets/retro_1.PNG", "../../assets/retro_2.PNG", "../../assets/retro_3.PNG"],
      tag1: ["../../assets/mysql.png"],
      tag2: ["../../assets/javascript-3-32.png"],
      tag3: ["../../assets/nodejs-performance-platform-32.png"]
    }

  ];


  constructor() { }


  GetProjects() {
    return this.projects
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id)

    if (project === undefined) {
      throw new TypeError("There is no project that matches the id: " + id)
    }

    return project
  }
}

