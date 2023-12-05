import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {


  isEducationOpen: boolean = false;

  constructor(private titleService:Title, private renderer: Renderer2) {
    this.titleService.setTitle("Bruno Janeiro - Resume")
  }
  
  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href', '../../assets/Bruno_Miguel_Ventura_Janeiro_-Inglês.pdf')
    link.setAttribute('download','Bruno_Miguel_Ventura_Janeiro_-Inglês.pdf')
    link.click()
    link.remove()
  }
}
