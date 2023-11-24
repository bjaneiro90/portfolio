import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

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
    pictures: []},
   //tag: [Tag.ANGULAR]

   {id: 1,
    name: "Drum Instrument",
    summary: "Test Description",
    description: "",
    projectLink: "",
    pictures: []},

    {id: 3,
      name: "API for retro products",
      summary: "Test Description",
      description: "",
      projectLink: "",
      pictures: []}
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

