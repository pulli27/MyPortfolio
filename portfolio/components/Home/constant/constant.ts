export const NavLinks=[
    {
        id:1,
        url:'#home',
        Label:'Home'
    },

      {
        id:2,
        url:'#about',
        Label:'About'
    },
  
    {
        id:3,
        url:'#skills',
        Label:'Skills'
    },

    {
        id:4,
        url:'#projects',
        Label:'Projects'
    },

    {
        id:5,
        url:'#education',
        Label:'Education'
    },


    {
        id:6,
        url:'#contact',
        Label:'Contact'
    },
]

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveLink: string | null; // Allow null for projects without a live link
  frontendLink: string;
  backendLink: string;
  githubLink?: string; // Optional main github link
  isFeatured: boolean;
};


