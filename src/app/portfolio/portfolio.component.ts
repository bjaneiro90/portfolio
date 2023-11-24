import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: "Angular Portfolio Website",
    summary: "Test Description",
    description: "",
    projectLink: "",
    tags: ["Angular", "TypeScript"],
    pictures: []
  }

  constructor(private titleService:Title) {
    this.titleService.setTitle("Bruno Janeiro - Portfolio")
  }
}
