import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    phicos,
    qwords,
    ruangguru,
    porto_project1,
    porto_project2,
    porto_project3,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Bootstrap (HTML) Developer",
      icon: web,
    },
    {
      title: "FrontEnd Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "UI/UX",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "FrontEnd Developer",
      company_name: "phicos",
      icon: phicos,
      iconBg: "#383E56",
      date: "March 2022 - Present",
      points: [
        "Design basic ideas for website/application appearance together with UX designers.",
        "Implementing designs into coding Bootstrap, HTML, CSS, JavaScript. that has been created by the web designer or design team.",
        "Make sure the view is complete before sending it to the back end team."
      ],
    },
    {
      title: "Billing Assistant",
      company_name: "Qwords Cloud Web Hosting Indonesia",
      icon: qwords,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Sep 2021",
      points: [
        "Helping customers with billing via chat, email and telephone.",
        "Process customer payments starting from receiving payments, activation, renewal, issuing invoices, and other processes related to payments.",
        "Create, check and archive tax invoices. Assist customers in billing via tickets, email, telephone.",
      ],
    },
    {
      title: "Outbound Education Consultant (Telesales)",
      company_name: "PT. Ruang Raya Indonesia (Ruangguru)",
      icon: ruangguru,
      iconBg: "#383E56",
      date: "Jun 2019 - Sep 2019",
      points: [
        "Maintain good relationships with customers and potential customers.",
        "Offering solutions to educational problems faced by consumers and combining them with Ruangguru products.",
        "Follow up with Ruangguru application users to subscribe to paid applications.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Landing Page SDM GTK",
      description:
        "Landing Page Creation using Bootstrap 5, HTML, CSS, JavaScript, and PHP with CodeIgniter Framework.",
      cooperation: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      tags: [
        {
          name: "Bootstrap 5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "CodeIgniter",
          color: "pink-text-gradient",
        },
      ],
      image: porto_project1,
      source_code_link: "https://github.com/IAstanto7",
    },
    {
      name: "Page Login SIMONITA",
      description:
        "Page Login Creation using Bootstrap 4, HTML, CSS, JavaScript, and PHP with Laravel Framework.",
      cooperation: "Peruri",
      tags: [
        {
          name: "Bootstrap 5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
      ],
      image: porto_project2,
      source_code_link: "https://github.com/https://github.com/IAstanto7",
    },
    {
      name: "Landing Page SIMPUTER",
      description:
        "Landing Page Creation using Bootstrap 5, HTML, CSS, JavaScript, and PHP with CodeIgniter Framework.",
      tags: [
        {
          name: "Bootstrap 5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "CodeIgniter",
          color: "pink-text-gradient",
        },
      ],
      image: porto_project3,
      source_code_link: "https://github.com/https://github.com/IAstanto7",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };