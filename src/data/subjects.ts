import { Subject } from '../types/quiz';
import { avanzada3Intro, avanzada3Functions, avanzada3Iteraciones } from './avanzada3Questions';

export const subjects: Subject[] = [
  {
    id: 'avanzada3',
    title: 'Avanzada 3',
    description: 'Cuestionarios de Programación Avanzada 3',
    icon: 'Code',
    color: 'purple',
    categories: [
      avanzada3Intro,
      avanzada3Functions,
      avanzada3Iteraciones,
    ]
  }
];

