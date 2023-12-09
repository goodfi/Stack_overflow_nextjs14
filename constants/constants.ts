import { SidebarLink } from '@/types';

export const themes = [
  { value: 'light', label: 'Light', icon: '/assets/icons/sun.svg' },
  { value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg' },
  { value: 'system', label: 'System', icon: '/assets/icons/computer.svg' },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: '/assets/icons/home.svg',
    route: '/',
    label: 'Home',
  },
  {
    imgURL: '/assets/icons/users.svg',
    route: '/community',
    label: 'Community',
  },
  {
    imgURL: '/assets/icons/star.svg',
    route: '/collection',
    label: 'Collections',
  },
  {
    imgURL: '/assets/icons/suitcase.svg',
    route: '/jobs',
    label: 'Find Jobs',
  },
  {
    imgURL: '/assets/icons/tag.svg',
    route: '/tags',
    label: 'Tags',
  },
  {
    imgURL: '/assets/icons/user.svg',
    route: '/profile',
    label: 'Profile',
  },
  {
    imgURL: '/assets/icons/question.svg',
    route: '/ask-question',
    label: 'Ask a question',
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const hotnetwork = [
  {
    label:
      'Would it be appropriate to point out an error in another paper during a referee report?',
  },
  {
    label: 'How can an airconditioning machine exist?',
  },

  {
    label: 'Interrogated every time crossing UK Border as citizen',
  },

  {
    label: 'Low digit addition generator',
  },

  {
    label: 'What is an example of 3 numbers that do not make up a vector?',
  },
];
export const popularTags = [
  {
    language: 'Javascript',
    counter: '20152+',
  },
  {
    language: 'Next.js',
    counter: '18493+',
  },
  {
    language: 'React.js',
    counter: '16269++',
  },
  {
    language: 'Node.js',
    counter: '15121+',
  },
  {
    language: 'Python',
    counter: '14431+',
  },
  {
    language: 'Microsoft Azure',
    counter: '9429+',
  },
  {
    language: 'PostgreSql',
    counter: '9429+',
  },
  {
    language: 'Machine Learning',
    counter: '9429+',
  },
];
