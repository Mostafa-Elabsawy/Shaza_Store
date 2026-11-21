import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  testimonials = [
    {
      id: 1,
      name: 'Sara Ahmed',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCL_u7N1IsEhxYvaoYQghGXOCytAXk2YUW31fFv7w4Ox_px-JV2sA2jS2-K-weUuLEqBJ9MWPy78toTJk1PAfiE-rBkKMdgxksv1y1ybuj8ZvIu8B1mJJhbOzGF4w53iEo0cferxROucyb6TreXZ3YE-kRqbmrVJy_Ayt0u1WfW-HRR9nBi0yJWGJvzExqgU3mBn1Kya3lsJ1TrSmisfOzW6UAwqZctg5SMSnNUnlAz',
      review:
        'The sillage of Oud Impérial is breathtaking. It evolves into a smoky, resinous whisper that lasts well past eighteen hours. The heavy crystal bottle alone is an architectural masterpiece on my vanity.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Marcus Vance',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBDU79Uf4pgWB7hU28pVgBzLJ0TVJtG9eJcsHVMk2KSEflrBJxlzqSai89EOfkEX4rVmeyV5KvS76-DY_PCRwsokEmzBVrjkjQTdrypbKNehMhFma_0YWlAUOLC5ry8fSBOUkDm5rwO4Jogt79RgvfAHqUrYotPjqXD-rn98QKcf5m9Q6J31bURB-OhteJ2Ry0Y1eXz4LMiubFkAJeZ4Kv-6Bnui5_vAmv8QZb3uQQC',
      review:
        'Rose Solaire redefines what a floral can achieve. Radiant, unhurried Damask rose enveloped in warm ambergris. The presentation—from the wax seal to the heavy brass cap—is peerless.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Soraya Al-Mansoor',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBwPAkFK9uGCJjBZojtfkPTEV5ao_wEpOyauGXEYoWl40P2BqvWC_oLEGrzMrc8_083NvZhgvrpBwB5iC5ihZsnSs7vyJQF1Wb4Go-EQsTz5Vz0EHDLrnOi7RqlZ5bf9JD4GCUz9OVNuk-4E0Tyre7JQpkjnS5jOgZd0HEIIYK8KGAwqblVP58no7ZT08XCnkNo-sI-HKbXAd5PYO3_wu8Eyb56Acgv_rMMLb6NnD0E',
      review:
        'Santal Blanc is sheer serenity. Creamy Australian sandalwood married with chilled cardamom. The concierge delivery arrived in bespoke temperature packaging within two days.',
      rating: 5,
    },
  ];
}
