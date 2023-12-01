import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'heritoky-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Heritoky Mahenina | Full Stack Developer | Software Engineer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Backend, Full Stack Developer , Software Engineer, software, developer' },
      { name: 'description', content: 'As a seasoned full-stack developer with a deep focus on Angular and Spring Boot, I possess a thorough understanding of modern web development methodologies. My proficiency in JavaScript enables me to seamlessly navigate both front-end and back-end technologies, allowing me to create robust and scalable web applications. My expertise in Angular, a leading TypeScript-based framework, extends to building dynamic and interactive user interfaces. Simultaneously, my mastery of Spring Boot, a Java-based microservices framework, empowers me to develop efficient and reliable server-side solutions. This combination of skills makes me an invaluable asset in any team seeking to build high-performance web applications.' },
    ]);
    
    AOS.init();


  }
}
