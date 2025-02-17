export interface Member {
  id: string;
  name: string;
  npm: string;
  role: string;
  year: string;
  image: string;
  skills: string[];
  github: string;
  bio?: string;
  projects?: Array<{
    id: number;
    name: string;
    description: string;
  }>;
  quote?: string;
  website?: string;
  collaborators?: string[];
}

export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Remove consecutive hyphens
};

export const members: Member[] = [
  {
    id: "1499",
    name: "Egi Saputra",
    npm: "202143501499",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "egi-saputra",
    quote: "Programming is not about typing, it's about thinking.",
    website: "https://egi-saputra.dev",
    collaborators: ["1503", "1504"],
  },
  {
    id: "1503",
    name: "Rijki Syaepul Aziz",
    npm: "202143501503",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "rijki-syaepul",
  },
  {
    id: "1504",
    name: "Ika Wahyuningsih",
    npm: "202143501504",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "ika-wahyuningsih",
  },
  {
    id: "1505",
    name: "Siti Mawaddah",
    npm: "202143501505",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "siti-mawaddah",
  },
  {
    id: "1507",
    name: "Albirru Ramadhan Faskho",
    npm: "202143501507",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "albirru-ramadhan",
  },
  {
    id: "1508",
    name: "Arya Pandya Fauzan",
    npm: "202143501508",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "arya-pandya",
  },
  {
    id: "1512",
    name: "Farden Ramzy Muharram",
    npm: "202143501512",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "farden-ramzy",
  },
  {
    id: "1514",
    name: "Al-Fariqy Raihan Azhwar",
    npm: "202143501514",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "al-fariqy-raihan",
  },
  {
    id: "1516",
    name: "Muhammad Ridho",
    npm: "202143501516",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "muhammad-ridho",
  },
  {
    id: "1517",
    name: "Aditya Virgi Adam Rasyid",
    npm: "202143501517",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "aditya-virgi",
  },
  {
    id: "1519",
    name: "Rozza Khaerul Fatta",
    npm: "202143501519",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "rozza-khaerul",
  },
  {
    id: "1524",
    name: "Harasta Devina Putri",
    npm: "202143501524",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "harasta-devina",
  },
  {
    id: "1526",
    name: "Ananda Rizky Dafa Salim Sitompul",
    npm: "202143501526",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "ananda-rizky",
  },
  {
    id: "1528",
    name: "Muhammad Rizky Kusuma",
    npm: "202143501528",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "muhammad-rizky-kusuma",
  },
  {
    id: "1529",
    name: "Dyana Eka Putri",
    npm: "202143501529",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "dyana-eka",
  },
  {
    id: "1530",
    name: "Fawwaz Ramadhan",
    npm: "202143501530",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "fawwaz-ramadhan",
  },
  {
    id: "1531",
    name: "Elza Kayla Muthiah",
    npm: "202143501531",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "elza-kayla",
  },
  {
    id: "1532",
    name: "Bintang Firmansyah",
    npm: "202143501532",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "bintang-firmansyah",
  },
  {
    id: "1534",
    name: "Ramadhan Jihaddun Akbar",
    npm: "202143501534",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "ramadhan-jihaddun",
  },
  {
    id: "1537",
    name: "Nirwan Rosiddin",
    npm: "202143501537",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "nirwan-rosiddin",
  },
  {
    id: "1538",
    name: "Amelia Azra Pakaya",
    npm: "202143501538",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "amelia-azra",
  },
  {
    id: "1540",
    name: "Rionggo Rahardi",
    npm: "202143501540",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "rionggo-rahardi",
  },
  {
    id: "1541",
    name: "Muhamad Zulfadli",
    npm: "202143501541",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "muhamad-zulfadli",
  },
  {
    id: "1543",
    name: "Dio Sheva Afriza",
    npm: "202143501543",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "dio-sheva",
  },
  {
    id: "1546",
    name: "Daffa Rezha Alfarizi",
    npm: "202143501546",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "daffa-rezha",
  },
  {
    id: "1550",
    name: "Achmad Lutfi Maulana",
    npm: "202143501550",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "achmad-lutfi",
  },
  {
    id: "1552",
    name: "Rizky Ananda",
    npm: "202143501552",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "rizky-ananda",
  },
  {
    id: "1553",
    name: "Mohammad Rizkhy Hafizh",
    npm: "202143501553",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "mohammad-rizkhy",
  },
  {
    id: "1554",
    name: "Ashila Azki",
    npm: "202143501554",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "ashila-azki",
  },
  {
    id: "2674",
    name: "Fathurahman Habibie",
    npm: "202143502674",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "fathurahman-habibie",
  },
  {
    id: "2675",
    name: "Rizki Dwi Kurniawan",
    npm: "202143502675",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "rizki-dwi",
  },
  {
    id: "2676",
    name: "Ferry Salim",
    npm: "202143502676",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "ferry-salim",
  },
  {
    id: "2813",
    name: "Andra Lazuardi",
    npm: "202143502813",
    role: "Software Engineer",
    year: "2021",
    image: "/members/default-avatar.png",
    skills: ["Web Development"],
    github: "andra-lazuardi",
  },
].sort((a, b) => a.npm.localeCompare(b.npm));
