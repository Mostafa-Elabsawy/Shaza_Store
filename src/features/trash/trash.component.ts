import { Component } from '@angular/core';

@Component({
  selector: 'app-trash',
  imports: [],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.css',
})
export class TrashComponent {chapters1 = [
  {
    id: 1,
    label: 'CHAPITRE I',
    title: 'Masculine',
    notes: 'DEEP • WOODY • POWERFUL • INTENSE',
    description:
      'Rich cedarwood, earthy vetiver, and smoky incense create a bold and unforgettable presence.',
    compositions: 4,
    image: './male_scent.png',
    alt: 'Dark emerald perfume bottle surrounded by deep forest textures and earthy elements.',
  },
  {
    id: 2,
    label: 'CHAPITRE II',
    title: 'Feminine',
    notes: 'SOFT • FLORAL • GRACEFUL • DELICATE',
    description:
      'Luminous florals, radiant citrus, and warm amber blend into an elegant and captivating scent.',
    compositions: 3,
    image: 'female_scent.png',
    alt: 'Golden perfume bottle surrounded by delicate flowers and warm golden light.',
  },
  {
    id: 3,
    label: 'CHAPITRE III',
    title: 'Unisex',
    notes: 'BALANCED • DISTINCTIVE • VERSATILE • TIMELESS',
    description:
      'Rich woods, warm amber, and aromatic resins unite in a distinctive, timeless harmony.',
    compositions: 5,
    image: 'shared_scent4.png',
    alt: 'Emerald perfume bottle surrounded by aromatic woods, amber resin, and atmospheric incense smoke.',
  },
];
chapters=[...this.chapters1]
}
