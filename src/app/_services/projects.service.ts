import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [

    {id: 0,
    name: "Angular Portfolio Website",
    summary: "Test Description",
    description: "",
    projectLink: "",
    pictures: ["../../assets/image1.png", "../../assets/image2.png", "../../assets/image3.png"],
    tag1: ["../../assets/angular-1-32.png"],
    tag2: ["../../assets/javascript-3-32.png"],
    tag3: ["../../assets/bootstrap-2-32.png"],
    
    },

   {id: 1,
    name: "Drum Instrument",
    summary: "Test Description",
    description: "",
    projectLink: "",
    pictures: ["../../assets/image1.png", "../../assets/image2.png", "../../assets/image3.png"],
    tag1: ["../../assets/4202020_css3_html_logo_social_social media_icon.png"],
    tag2: ["../../assets/javascript-3-32.png"],
    tag3: ["../../assets/html5-12-32.png"]
    },

    {id: 3,
      name: "API for retro products",
      summary: "Test Description",
      description: "",
      projectLink: "",
      pictures: ["../../assets/image1.png", "../../assets/image2.png", "../../assets/image3.png"],
      tag1: ["../../assets/react-32.png"],
      tag2: ["../../assets/javascript-3-32.png"],
      tag3: ["../../assets/nodejs-performance-platform-32.png"]
    },
    ];


  constructor() { }


  GetProjects() {
    return this.projects
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id)

    if (project === undefined) {
      throw new TypeError("There is no project that matches the id: " + id)
    }

    return project
  }
}

