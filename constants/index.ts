import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
  RxHome,
  RxPerson,
  RxDashboard,
} from "react-icons/rx";

export const Socials = [
  {
    name: "Discord",
    src: "/assets/discord.svg",
    href: "https://discordapp.com/users/793005781871099984"
  },
  {
    name: "Facebook",
    src: "/assets/facebook.svg",
    href: "https://www.facebook.com/profile.php?id=61577070903429"
  },
  {
    name: "Instagram",
    src: "/assets/instagram.svg",
    href: "https://www.instagram.com/raliazzzzzz/"
  },
];

export const NavLinks = [
  {
    name: "Home",
    icon: RxHome,
    link: "/",
  },
  {
    name: "About me",
    icon: RxPerson,
    link: "/about-me",
  },
  {
    name: "Projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
];

export const ProImages = [
  {
    src: "/assets/space/asylim1.jpeg",
  },
  {
    src: "/assets/space/asylim2.jpeg",
  },
  {
    src: "/assets/space/asylim3.jpeg",
  },
  {
    src: "/assets/space/asylim4.jpeg",
  },
];

export const ProImages2 = [
  {
    src: "/assets/space/beacon1.jpeg",
  },
  {
    src: "/assets/space/beacon2.jpeg",
  },
  {
    src: "/assets/space/beacon3.jpeg",
  },
  {
    src: "/assets/space/beacon4.jpeg",
  },
];

export const ServiceData = [
  {
    icon: RxReader,
    title: "Mastery",
    content: "Изучение игровых движков: Unreal Engine, Unity3D, PlayCanvas, Defold и т.п",
    backgroundImage: "/assets/space/game-engines1.png",
  },
  {
    icon: RxCrop,
    title: "Development",
    content: "Разработка кода: оптимизация, алгоритмы",
    backgroundImage: "/assets/space/prototype.png",
  },
  {
    icon: RxPencil2,
    title: "Narrative",
    content: "Написание качественной истории для привлечения заинтересованности",
    backgroundImage: "/assets/space/narrative.png",
  },
  {
    icon: RxDesktop,
    title: "Systems",
    content: "Проектирование логики, определение правил внутри игры ",
    backgroundImage: "/assets/space/design.png",
  },
  {
    icon: RxAccessibility,
    title: "Experience",
    content: "Формирование пользовательского опыта в зависимости от стиля UI/UX",
    backgroundImage: "/assets/space/game-ux.png",
  },
  {
    icon: RxRocket,
    title: "Vision",
    content: "Создание своего собственного стиля для большего охвата аудитории и вовлеченности",
    backgroundImage: "/assets/space/visual-styles1.jpg",
  },
]
export const Projects = {
asylim: [
	{ id: 1, title: "asylim1", description: "Описание Asylim 1", image: "/assets/space/asylim1.jpeg" },
   	{ id: 2, title: "asylim2", description: "Описание Asylim 2", image: "/assets/space/asylim2.jpeg" },
   	{ id: 3, title: "asylim3", description: "Описание Asylim 3", image: "/assets/space/asylim3.jpeg" },
   	{ id: 4, title: "asylim4", description: "Описание Asylim 4", image: "/assets/space/asylim4.jpeg" },
],
beacon: [
	{ id: 5, title: "Beacon 1", description: "Описание Beacon 1", image: "/assets/space/beacon1.jpeg" },
  	{ id: 6, title: "Beacon 2", description: "Описание Beacon 2", image: "/assets/space/beacon2.jpeg" },
  	{ id: 7, title: "Beacon 3", description: "Описание Beacon 3", image: "/assets/space/beacon3.jpeg" },
  	{ id: 8, title: "Beacon 4", description: "Описание Beacon 4", image: "/assets/space/beacon4.jpeg" },
]
}
