import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CvData } from '../../services/cv-data.service';
import { SectionTitle } from "../../shared/section-title/section-title.component";
import { ScrollAnimation } from '../../directives/scroll-animation.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Translate } from '../../services/translate.service';

@Component({
  selector: 'app-contact',
  imports: [SectionTitle, ScrollAnimation, FormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class Contact {
  cvData = inject(CvData);
  private ts = inject(Translate);
  data = this.cvData.personalInfo;

  formData = signal({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  get contactItems() {
    return [
      {   icon: '📧',   label: 'Email',     value: this.data().email,     href: `mailto:${this.data().email}`  },
      {   icon: '📱',   label: 'Teléfono',  value: this.data().phone,     href: `tel:${this.data().phone}`  },
      {   icon: '📍',   label: 'Ubicación', value: this.data().location,  href: null  },
      {   icon: '💼',   label: 'LinkedIn',  value: 'Ver perfil',          href: this.data().linkedin  }
    ];
  }

  onSubmit(): void {
    const { name, email, subject, message } = this.formData();
    const mailtoLink = `mailto:${this.data().email}?subject=${encodeURIComponent(subject || 'Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailtoLink, '_blank');
  }
}
