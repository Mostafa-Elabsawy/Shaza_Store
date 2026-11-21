import { Component, ElementRef, HostListener, Signal, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-bestsellers',
  imports: [],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.css',
})
export class BestsellersComponent {
products1 = [
  {
    id: 1,
    name: 'Oud Impérial',
    number: 'NO. 01',
    type: 'EXTRAIT',
    category: 'EXTRAIT DE PARFUM',
    price: '$360',
    description: 'Wild Cambodian Agarwood, Smoked Benzoin, Atlas Cedarwood, and Black Cistus Labdanum.',
    accord: 'Woody • Smoky • Opulent',
    concentration: '36% Pure Resin',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-p_QTlf_bF1BEAoSK5_ocE8zGuFdIUF6cuDcvId4xGqDhbpvVs-DCTaCgAxdXFhBZrO4fQNSdqwAYNvcDDp7lKZnJaiOadlhUsjlsyIj0n1xTS5zSRUP3tXbXGjwje8bT7KyXa56tyERYO7oqM_t6ZzOk3NVouLhu1k-m2KLTcTkhkOBa475DFvMCdplLNfEOy1UDZv6Fqjez563kx38ccFmNU-WGba3GmqdN-Oy_TU5r2apnKWZLWQ'
  },
  {
    id: 2,
    name: 'Rose Solaire',
    number: 'NO. 02',
    type: 'EAU DE PARFUM',
    category: 'EAU DE PARFUM',
    price: '$320',
    description: 'Centifolia Rose of May, Saffron Filament, Sunlit Ambergris, and Golden Beeswax.',
    accord: 'Solar Floral • Spicy Amber',
    concentration: '28% Floral Absolue',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3CyZtQKonEtX8tHMcg_4PVvPsqZ5yEU0z_5uRZTt7KydsFxXMZBDEkW_6sly-ipOE3gxX5eqjSgNGql3NGz3oDlXVt430C7Qsztjjvbu_Quzhe1oLynJqQVWRfcYPDVnReJwuznP-LWBivOz1jeHMFgyPLwjW_pwyvVYOwIMm3nBZQY5vOu-ftertj5F0_-o1zr9Ra7MSZNwDU_H-wQxV2lw3xg21NzPyOVkRJ68B6n5Gwv9zchBLw'
  },
  {
    id: 3,
    name: 'Santal Blanc',
    number: 'NO. 03',
    type: 'EXTRAIT',
    category: 'EXTRAIT DE PARFUM',
    price: '$340',
    description: 'Aged Australian Sandalwood, Crushed Green Cardamom, Cashmere Wood, and White Violet.',
    accord: 'Creamy Wood • Silken Iris',
    concentration: '34% Sandal Distillate',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy1c-2mXugHfioNpv5Z2LEyLR-BKBYOOl5LXv7Njw_cp2L6oGsQ6eOBJsdM7W27KcDWlZr8_042RHIFmzW6mFYX0tr4BtaqUdBwcnvNxodXaoV_AyID2TUzcjflHYWVNMm5GSLo4reVeoAOS_uRwiTTt6Cn7LGMVrASB7d2EXC_8IZToVVZrODQo8LFl5e2EgsfeL7AFp78UX4lvdn9JEbLIReGj7TOxMKG8vwRyeAbvX2r9tqvTdpbQ'
  },
  {
    id: 4,
    name: 'Cuir Noir Élixir',
    number: 'NO. 04',
    type: 'EXTRAIT',
    category: 'EXTRAIT DE PARFUM',
    price: '$380',
    description: 'Tuscan Leather, Smoked Birch Tar, Florentine Black Iris, and Bourbon Vanilla Pod.',
    accord: 'Cuir Fumée • Powdery Iris',
    concentration: '38% Raw Extrait',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACABT7-mVI0DGQmnzR-Pqs_SNAjY1eLMsgmkqnSEg71PcaYSPUY4Auhcm8lzpD2Mg4gXlswLhCuENObVHl5l3DQWZbx1Rg3qoKSJNIZojYC4zY20sOVCUW_5TZoUEAUkh9PahjZKdDoaGh9vbqPCpZhQXVbdWx4HKC3p_ByGir8MvveZNMNgdwiy8wBE83Tm_A2u84Xpwrx_zzFB95PD4F2OVa2Xj6yoEf931cujdSnz9TqKrRBPP3jA'
  }
];
products=[...this.products1,...this.products1,...this.products1	]
track = viewChild.required<ElementRef<HTMLElement>>('track');
x=this.track;

  canPrev = signal(false);
  canNext = signal(true);

  // products = [...]  (your existing array)

  ngAfterViewInit() {
    // wait a tick so the slides have rendered
    setTimeout(() => this.updateButtons());
  }

  scroll(direction: 1 | -1) {
    const el = this.track().nativeElement;
    const card = el.firstElementChild as HTMLElement;
    if (!card) return;
    el.scrollBy({ left: direction * card.offsetWidth, behavior: 'smooth' });
  }

  updateButtons() {
    const el = this.track().nativeElement;
    if (!el) return;
    this.canPrev.set(el.scrollLeft > 4);
    this.canNext.set(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }
}
