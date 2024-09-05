import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      name: 'Programador front-end Angular| Prodemge ',
      description:
        'Tenho dois anos nesta empresa, onde acredito que evoluí muito como profissional. Aprendi práticas de desenvolvimento em grupo, especialmente em metodologias ágeis, e pude me desenvolver como profissional. Infelizmente, não posso continuar o estágio, mas estou em busca de uma oportunidade para evoluir em outras áreas.',
      tags: [
        'JavaScript',
        'TypeScript',
        'Angular',
        'APIs RESTful',
        'GitHub',
        'Jenkins',
        'Scrum',
      ],
    },
  ];
}
