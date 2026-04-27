import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar.component';
import { Hero } from './components/hero/hero.component';
import { About } from './components/about/about.component';
import { Experience } from './components/experience/experience.component';
import { Education } from './components/education/education.component';
import { Skills } from './components/skills/skills.component';
import { Projects } from './components/projects/projects.component';
import { Contact } from './components/contact/contact.component';
import { Footer } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    About,
    Experience,
    Education,
    Skills,
    Projects,
    Contact,
    Footer
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('cv-digital');
}
