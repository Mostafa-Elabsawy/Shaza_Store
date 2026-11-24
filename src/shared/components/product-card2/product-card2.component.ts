import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Product2 {
  id: number;
  name: string;
  image: string;
  alt: string;
  price: number;
  concentration: string;
  size: number;
  badge?: 'Bestseller' | 'New Harvest' | null;
  note: string;
  footer: string;
}
export  const Products2: Product2[] =[
  {
    id: 1,
    name: 'Oud Impérial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-p_QTlf_bF1BEAoSK5_ocE8zGuFdIUF6cuDcvId4xGqDhbpvVs-DCTaCgAxdXFhBZrO4fQNSdqwAYNvcDDp7lKZnJaiOadlhUsjlsyIj0n1xTS5zSRUP3tXbXGjwje8bT7KyXa56tyERYO7oqM_t6ZzOk3NVouLhu1k-m2KLTcTkhkOBa475DFvMCdplLNfEOy1UDZv6Fqjez563kx38ccFmNU-WGba3GmqdN-Oy_TU5r2apnKWZLWQ',
    alt: 'Oud Impérial luxury extrait de parfum',
    price: 360,
    concentration: 'Extrait de Parfum',
    size: 100,
    badge: 'Bestseller',
    note: 'Wild Cambodian Agarwood, Smoked Benzoin, Atlas Cedarwood, and Black Cistus Labdanum.',
    footer: 'Woody • Smoky • Opulent',
  },
  {
    id: 2,
    name: 'Rose Solaire',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3CyZtQKonEtX8tHMcg_4PVvPsqZ5yEU0z_5uRZTt7KydsFxXMZBDEkW_6sly-ipOE3gxX5eqjSgNGql3NGz3oDlXVt430C7Qsztjjvbu_Quzhe1oLynJqQVWRfcYPDVnReJwuznP-LWBivOz1jeHMFgyPLwjW_pwyvVYOwIMm3nBZQY5vOu-ftertj5F0_-o1zr9Ra7MSZNwDU_H-wQxV2lw3xg21NzPyOVkRJ68B6n5Gwv9zchBLw',
    alt: 'Rose Solaire elegant floral eau de parfum',
    price: 320,
    concentration: 'Eau de Parfum',
    size: 100,
    badge: 'New Harvest',
    note: 'Centifolia Rose of May, Saffron Filament, Sunlit Ambergris, and Golden Beeswax.',
    footer: 'Solar Floral • Spicy Amber',
  },
  {
    id: 3,
    name: 'Santal Blanc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy1c-2mXugHfioNpv5Z2LEyLR-BKBYOOl5LXv7Njw_cp2L6oGsQ6eOBJsdM7W27KcDWlZr8_042RHIFmzW6mFYX0tr4BtaqUdBwcnvNxodXaoV_AyID2TUzcjflHYWVNMm5GSLo4reVeoAOS_uRwiTTt6Cn7LGMVrASB7d2EXC_8IZToVVZrODQo8LFl5e2EgsfeL7AFp78UX4lvdn9JEbLIReGj7TOxMKG8vwRyeAbvX2r9tqvTdpbQ',
    alt: 'Santal Blanc premium sandalwood perfume',
    price: 340,
    concentration: 'Extrait de Parfum',
    size: 100,
    badge: null,
    note: 'Aged Australian Sandalwood, Crushed Green Cardamom, Cashmere Wood, and White Violet.',
    footer: 'Creamy Wood • Silken Iris',
  },
  {
    id: 4,
    name: 'Cuir Noir Élixir',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACABT7-mVI0DGQmnzR-Pqs_SNAjY1eLMsgmkqnSEg71PcaYSPUY4Auhcm8lzpD2Mg4gXlswLhCuENObVHl5l3DQWZbx1Rg3qoKSJNIZojYC4zY20sOVCUW_5TZoUEAUkh9PahjZKdDoaGh9vbqPCpZhQXVbdWx4HKC3p_ByGir8MvveZNMNgdwiy8wBE83Tm_A2u84Xpwrx_zzFB95PD4F2OVa2Xj6yoEf931cujdSnz9TqKrRBPP3jA',
    alt: 'Cuir Noir Élixir dark leather-inspired extrait perfume',
    price: 380,
    concentration: 'Extrait de Parfum',
    size: 100,
    badge: 'Bestseller',
    note: 'Tuscan Leather, Smoked Birch Tar, Florentine Black Iris, and Bourbon Vanilla Pod.',
    footer: 'Smoky Leather • Powdery Iris',
  },
];
@Component({
  selector: 'app-product-card2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card2.component.html',
})
export class ProductCard2Component {
  product2 = input.required<Product2>();
  compact = input(false);

  quickAdd = output<string>();
}