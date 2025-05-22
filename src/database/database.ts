export interface DestinationHome {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

export interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface PackageHome {
  id: number;
  title: string;
  description: string;
}

export interface Package {
  id: number;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const destinationsHome: DestinationHome[] = [
  {
    id: 1,
    title: 'Tropical Beaches',
    description: 'Enjoy a tropical paradise with crystal clear waters and white sands. Perfect to relax and reconnect with nature.',
    imageUrl: 'https://mangojourneys.com/en/wp-content/uploads/2015/05/950x475-bigstock-Two-beach-lounge-chairs-under-68994418-400x300.jpg',
    altText: 'Beach'
  },
  {
    id: 2,
    title: 'Mountains',
    description: 'Explore incredible trails and live adventures in the mountains. Ideal for ecotourism and adrenaline lovers.',
    imageUrl: 'https://alaska-highway.org/wp-content/uploads/2016/12/mthayes.jpg',
    altText: 'Mountains'
  },
  {
    id: 3,
    title: 'Iconic Cities',
    description: 'Immerse yourself in the culture and gastronomy of a modern city. Leisure, art, and fun await you!',
    imageUrl: 'https://caminhodafe.com.br/ptbr/wp-content/uploads/2021/03/8-400x300.jpg',
    altText: 'Cities'
  }
];

export const destinations: Destination[] = [
  {
    id: 1,
    title: "Paradise Beach",
    description: "Enjoy a tropical paradise with crystal clear waters and white sands. Perfect to relax and reconnect with nature.",
    image: "https://mangojourneys.com/en/wp-content/uploads/2015/05/950x475-bigstock-Two-beach-lounge-chairs-under-68994418-400x300.jpg"
  },
  {
    id: 2,
    title: "Magical Mountains",
    description: "Explore incredible trails and live adventures in the mountains. Ideal for ecotourism and adrenaline lovers.",
    image: "https://alaska-highway.org/wp-content/uploads/2016/12/mthayes.jpg"
  },
  {
    id: 3,
    title: "Vibrant City",
    description: "Immerse yourself in the culture and gastronomy of a modern city. Leisure, art, and fun await you!",
    image: "https://caminhodafe.com.br/ptbr/wp-content/uploads/2021/03/8-400x300.jpg"
  },
  {
    id: 4,
    title: "Desert Oasis",
    description: "Adventure amidst golden dunes and a stunning starry sky. The perfect spot for a unique experience.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXiUaQGqiIQ1CS0fjJ7T-yCyYL3q-FOKba2F00xx_eD6vDzxjqeq71Y9uq8ikrKQrUIhktrLjkYpJ38FXHr_VN68tCCV5246cwJxEzNS86EO8mVbZ7g1IjZyiU2JkCEobQuam7WxdJ68Kg/s400/0+o%25C3%25A1sis5a.jpg"
  },
  {
    id: 5,
    title: "Enchanted Forest",
    description: "Experience the magic of a lush tropical forest. Bring your camera and capture unforgettable moments.",
    image: "https://s1.wklcdn.com/image_84/2530355/85551326/56012311.400x300.jpg"
  },
  {
    id: 6,
    title: "Lake Serena",
    description: "A peaceful place, perfect for those seeking relaxation and connection with nature in a serene environment.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4b/b0/59/serena-giornata-di-giugno.jpg?w=400&h=300&s=1"
  }
];

export const packagesHome: PackageHome[] = [
  {
    id: 1,
    title: 'Romantic Package',
    description: 'Perfect experiences for couples in stunning places.'
  },
  {
    id: 2,
    title: 'Family Package',
    description: 'Guaranteed fun for the whole family in unique destinations.'
  }
];


export const packages: Package[] = [
  {
    id: 1,
    title: "Romantic Package",
    description: "Perfect experiences for couples in stunning places."
  },
  {
    id: 2,
    title: "Family Package",
    description: "Guaranteed fun for the whole family in unique destinations."
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Silva",
    role: "CEO & Founder",
    description: "With years of experience in the tourism market, John founded Dream Travel with the goal of transforming the way people travel.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/10.jpg"
  },
  {
    id: 2,
    name: "Mary Costa",
    role: "Marketing Director",
    description: "Mary is responsible for creating innovative marketing strategies that attract customers to amazing destinations.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg"
  },
  {
    id: 3,
    name: "Charles Souza",
    role: "Operations Manager",
    description: "With a keen eye for detail, Charles ensures that every trip is organized impeccably, taking care of all processes.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/23.jpg"
  }
];
