import { Component, EventEmitter, Output } from '@angular/core';
import { AppModule } from '../../app.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  @Output() clickEvent = new EventEmitter<string>();

  scrollToSection(id: string) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  enviarEvento(evento:string) {
    // Emite um evento com um valor
    this.clickEvent.emit(evento);
  }
}
