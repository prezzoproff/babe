export const flowers = [
  {
    name: "Red Roses",
    meaning: "Devotion, courage, and love that chooses you again and again.",
    message:
      "Because your presence turns simple moments into poetry, Fiona.",
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Pink Tulips",
    meaning: "Tender affection, grace, and a love that feels calm.",
    message: "Because softness can still be powerful, and yours is unforgettable.",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "White Lilies",
    meaning: "Peace, sincerity, and the kind of beauty that quiets the heart.",
    message: "Because even from Kenya to Dubai, I want peace to find you first.",
    image:
      "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Sunflowers",
    meaning: "Light, loyalty, and joy that keeps facing the sun.",
    message: "Because your light changes the room, even before you say a word.",
    image:
      "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Cherry Blossoms",
    meaning: "Gentle beginnings, hope, and beauty in the present moment.",
    message: "Because every season with you feels worth noticing slowly.",
    image:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Orchids",
    meaning: "Rare elegance, depth, and love with quiet confidence.",
    message: "Because you are rare in a way that never needs to announce itself.",
    image:
      "https://images.unsplash.com/photo-1566908829550-e6551b00979b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Lavender",
    meaning: "Calm, healing, and affection that makes the world breathe easier.",
    message: "Because I want my love to feel like rest, not pressure.",
    image:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Peonies",
    meaning: "Romance, blessing, and a future opening beautifully.",
    message: "Because you deserve a life that keeps unfolding into joy.",
    image:
      "https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&w=1200&q=85",
  },
];

export const loveNotes = [
  "You are deeply appreciated.",
  "You deserve flowers on random days.",
  "Your smile has its own kind of sunshine.",
  "You are gentle, rare, and unforgettable.",
  "May your dreams bloom bigger than your fears.",
  "The world is softer where your heart has passed.",
  "You are not just beautiful; you are felt.",
  "You are a whole garden in human form.",
  "From Kenya to Dubai, my heart still finds you.",
  "Every second can carry a little tenderness.",
];

export const sparkleSeeds = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 19) % 100}%`,
  top: `${(index * 31) % 100}%`,
  delay: (index % 9) * 0.45,
  size: 2 + (index % 4),
}));

export const petalSeeds = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: `${(index * 23) % 100}%`,
  delay: (index % 10) * 0.8,
  duration: 13 + (index % 7),
  rotate: index % 2 === 0 ? 58 : -42,
}));
