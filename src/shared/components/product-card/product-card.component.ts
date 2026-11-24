import { Component, input } from '@angular/core';
export interface Product {
  id: number;
  number: string;
  type: string;
  image: string;
  name: string;
  category: string;
  price: string;
  description: string;
}


export const products: Product[] = [
  {
    id: 1,
    number: 'NO. 01',
    name: 'Oud Impérial',
    type: 'EXTRAIT',
    category: 'EXTRAIT DE PARFUM',
    price: '$360',
    description:
      'Wild Cambodian Agarwood, Smoked Benzoin, Atlas Cedarwood, and Black Cistus Labdanum.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-p_QTlf_bF1BEAoSK5_ocE8zGuFdIUF6cuDcvId4xGqDhbpvVs-DCTaCgAxdXFhBZrO4fQNSdqwAYNvcDDp7lKZnJaiOadlhUsjlsyIj0n1xTS5zSRUP3tXbXGjwje8bT7KyXa56tyERYO7oqM_t6ZzOk3NVouLhu1k-m2KLTcTkhkOBa475DFvMCdplLNfEOy1UDZv6Fqjez563kx38ccFmNU-WGba3GmqdN-Oy_TU5r2apnKWZLWQ'
  },
  {
    id: 2,
    number: 'NO. 02',
    name: 'Velvet Rose',
    type: 'EAU DE PARFUM',
    category: 'FLORAL · AMBER',
    price: '$285',
    description:
      'Damask Rose, Bulgarian Rose Absolute, Saffron, Velvet Musk, and Warm Amber.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3CyZtQKonEtX8tHMcg_4PVvPsqZ5yEU0z_5uRZTt7KydsFxXMZBDEkW_6sly-ipOE3gxX5eqjSgNGql3NGz3oDlXVt430C7Qsztjjvbu_Quzhe1oLynJqQVWRfcYPDVnReJwuznP-LWBivOz1jeHMFgyPLwjW_pwyvVYOwIMm3nBZQY5vOu-ftertj5F0_-o1zr9Ra7MSZNwDU_H-wQxV2lw3xg21NzPyOVkRJ68B6n5Gwv9zchBLw'
  },
  {
    id: 3,
    number: 'NO. 03',
    name: 'Noir Absolu',
    type: 'EXTRAIT',
    category: 'WOODY · SPICY',
    price: '$320',
    description:
      'Black Pepper, Incense, Haitian Vetiver, Leather Accord, and Deep Sandalwood.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy1c-2mXugHfioNpv5Z2LEyLR-BKBYOOl5LXv7Njw_cp2L6oGsQ6eOBJsdM7W27KcDWlZr8_042RHIFmzW6mFYX0tr4BtaqUdBwcnvNxodXaoV_AyID2TUzcjflHYWVNMm5GSLo4reVeoAOS_uRwiTTt6Cn7LGMVrASB7d2EXC_8IZToVVZrODQo8LFl5e2EgsfeL7AFp78UX4lvdn9JEbLIReGj7TOxMKG8vwRyeAbvX2r9tqvTdpbQ'
  },
  {
    id: 4,
    number: 'NO. 04',
    name: 'Santal Éternel',
    type: 'EAU DE PARFUM',
    category: 'CREAMY · WOODY',
    price: '$295',
    description:
      'Mysore Sandalwood, Creamy Tonka Bean, White Musk, and Madagascar Vanilla.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACABT7-mVI0DGQmnzR-Pqs_SNAjY1eLMsgmkqnSEg71PcaYSPUY4Auhcm8lzpD2Mg4gXlswLhCuENObVHl5l3DQWZbx1Rg3qoKSJNIZojYC4zY20sOVCUW_5TZoUEAUkh9PahjZKdDoaGh9vbqPCpZhQXVbdWx4HKC3p_ByGir8MvveZNMNgdwiy8wBE83Tm_A2u84Xpwrx_zzFB95PD4F2OVa2Xj6yoEf931cujdSnz9TqKrRBPP3jA'
  },
  {
    id: 5,
    number: 'NO. 05',
    name: 'Amber Mystique',
    type: 'EXTRAIT',
    category: 'AMBER · ORIENTAL',
    price: '$340',
    description:
      'Golden Amber, Madagascan Vanilla, Labdanum, Cinnamon, and Precious Resins.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900&q=85'
  },
  {
    id: 6,
    number: 'NO. 06',
    name: 'Citrus Éclat',
    type: 'EAU DE PARFUM',
    category: 'CITRUS · FRESH',
    price: '$245',
    description:
      'Sicilian Bergamot, Bitter Orange, Neroli, Green Mandarin, and White Cedar.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&q=85'
  },
  {
    id: 7,
    number: 'NO. 07',
    name: 'Midnight Oud',
    type: 'EXTRAIT',
    category: 'SMOKY · WOODY',
    price: '$375',
    description:
      'Agarwood, Smoked Leather, Black Cardamom, Incense, and Patchouli.',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=900&q=85'
  },
  {
    id: 8,
    number: 'NO. 08',
    name: 'Blanc de Musc',
    type: 'EAU DE PARFUM',
    category: 'MUSKY · POWDERY',
    price: '$265',
    description:
      'White Musk, Iris Butter, Soft Cashmere Woods, and Delicate Powdery Notes.',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=900&q=85'
  }
];

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {  product = input.required<Product>();}
