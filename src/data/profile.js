// Personal details and outbound links. Empty strings render as "link coming soon"
// where a link is optional; fill them in as repos and profiles go live.
const profile = {
  name: "Jeremiah Anku Coblah",
  title: "Backend, Data & Software Engineer",
  tagline:
    "I build APIs and data pipelines that teams can trust with real money and real records.",
  email: "jeremiah.anku.coblah@gmail.com",
  phone: "+233243997081",
  phoneDisplay: "+233 24 399 7081",
  availability: "Open to backend and data engineering roles, in Ghana or remote.",
};

const socials = {
  github: "https://github.com/Jerry-Khobby",
  linkedin: "https://www.linkedin.com/in/jeremiah-coblah-anku-2b3732229/",
};

const cvs = [
  {
    label: "Software Engineer CV",
    href: "/cv/Jeremiah_Anku_Coblah_Software_Engineer_CV.pdf",
    primary: true,
  },
  {
    label: "Data Engineer CV",
    href: "/cv/Jeremiah_Anku_Coblah_Data_Engineer_CV.pdf",
    primary: false,
  },
];

export { profile, socials, cvs };
