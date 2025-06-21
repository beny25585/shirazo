export type Project = {
    id: number;
    title: string;
    fullDescription: string;
    location: string;
    area: string;
    images: string[];
  };
  
  export const projects: Project[] = [
    {
        id: 1,
        title: "TLV Music Studies Center",
        fullDescription:
          "A contemporary learning hub with clean lines, transparent geometry, and natural materials — designed to harmonize sound, space, and community",
        location: "Tel Aviv, Israel",
        area: "950 sqm",
        images: [
          "/images/TLV Music studies center/2.jpg",
          "/images/TLV Music studies center/3.jpg",
          "/images/TLV Music studies center/7.jpg",
          "/images/TLV Music studies center/פנים 1.jpg",
        ],
      },
      {
        id: 2,
        title: "synagouge  Racevet street Jerusalem",
        fullDescription:
          "A refined geometric design featuring natural light and timeless antique marble",
        location: "Jerusalem, Israel",
        area: "45 sqm",
        images: [
          "/images/synagouge  Racevet street Jerusalem/חוץ 3.jpg",
          "/images/synagouge  Racevet street Jerusalem/חוץ 4.jpg",
          "/images/synagouge  Racevet street Jerusalem/פנים 2.jpg",
        ],
      },
      {
        id: 3,
        title: "Sygnature rest ramat gan",
        fullDescription:
          "28th Floor Restaurant A modern dining space featuring bold textures, mirrored surfaces, and panoramic views of skyscrapers.",
        location: "ramat gan, Israel",
        area: "120 sqm",
        images: [
          "/images/Sygnature rest ramat gan/1.jpg",
          "/images/Sygnature rest ramat gan/2.jpg",
          "/images/Sygnature rest ramat gan/3.jpg",
          "/images/Sygnature rest ramat gan/4.jpg",
        ],
      },
      {
        id: 4,
        title: "ficusim dorms",
        fullDescription:
          "The ficusim dorms is a Shenkar College Student Residences that  combine comfort and functional student apartments, shared work and study spaces, and an on-site art gallery showcasing student creations—offering a seamless and inspiring living experience",
        location: "ramat gan, Israel",
        area: "1100 sqm",
        images: [
          "/images/ficusim dorms/1.jpg",
          "/images/ficusim dorms/p1.jpg",
          "/images/ficusim dorms/p3.jpg",
        ],
      },
      {
        id: 5,
        title: "Beit -el winery",
        fullDescription:
          "A handcrafted stone winery with arched openings and timeless charm — where tradition, material, and atmosphere come together.",
        location: "ramat gan, Israel",
        area: "950 sqm",
        images: [
          "/images/Beit -el winery/1.jpg",
          "/images/Beit -el winery/עיצוב פנים 3.jpg",
        ],
      },
      {
        id: 6,
        title: "academic center- Hemdat - ODEM BIULDING",
        fullDescription:
          "A modern, stylish building for Hemdat HaDarom College, featuring state-of-the-art classrooms and offices designed to foster innovation, collaboration, and a professional academic environment",
        location: "netivot, Israel",
        area: "900 sqm",
        images: [
          "/images/academic center- Hemdat - ODEM BIULDING/WhatsApp Image 2024-11-15 at 10.02.22.jpeg",
          "/images/academic center- Hemdat - ODEM BIULDING/WhatsApp Image 2024-11-15 at 10.02.23 (1).jpeg",
          "/images/academic center- Hemdat - ODEM BIULDING/WhatsApp Image 2024-11-15 at 10.02.23 (2).jpeg",
          "/images/academic center- Hemdat - ODEM BIULDING/WhatsApp Image 2024-11-15 at 10.02.23.jpeg",
        ],
      },
  ];
  