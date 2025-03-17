import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/project1.png",
    title: "Full Stack BölisAI Application",
    desc: "Бұл AI-генерацияланған ұсыныстарды бөлісу және зерттеу үшін жасалған фуллстек веб-қосымшасы. Ол пайдаланушыларға AIға арналған промпттарды құруға, сақтауға және зерттеуге мүмкіндік береді. Заманауи веб-технологиялармен жасалған бұл қосымша қолданушыға ыңғайлы интерфейсті қамтамасыз етіп, тиімді іздеу, санаттау және өзара әрекеттесу мүмкіндіктерін ұсынады. ",
    link: "https://share-ai-prompt-alpha.vercel.app/",
  },
  {
    id: 2,
    img: "/project2.png",
    title: "Justube (Youtube баламасы)",
    desc: "Justube – бұл YouTube-тің баламасы ретінде жасалған видеоплатформа. Ол пайдаланушыларға видеоларды жүктеуге, көруге және бөлісуге мүмкіндік береді. Қолданушылар сапалы контент жасап, өз аудиториясын қалыптастыра алады. Платформа ыңғайлы интерфейс, заманауи дизайн және жылдам жұмыс істеу мүмкіндіктерін ұсынады. 🚀",
    link: "https://just-tube.netlify.app/",
  },
  {
    id: 3,
    img: "/project3.png",
    title: "Simple CRUD Full-Stack Application",
    desc: "Бұл жоба Supabase, Express, Prisma, Node.js, React, және TypeScript қолдана отырып, жазбаларды қосу, өңдеу, жою және қарау мүмкіндігін беретін толыққанды CRUD веб-қосымшасы. Frontend (React, TypeScript) пайдаланушы интерфейсін қамтамасыз етсе, Backend (Express, Node.js, Prisma) мәліметтерді өңдеп, Supabase арқылы PostgreSQL дерекқорына тікелей қосылады",
    link: "https://github.com/Rasreal/fullstack-notes",
  },
  {
    id: 4,
    img: "/project4.png",
    title: "WebRTC қолданылған, қарапайым GoogleMeet баламасы QazirMeet",
    desc: "QazirMeet – WebRTC, React, TypeScript, Node.js, және Express технологияларын қолдана отырып жасалған қарапайым бейнеқоңырау қосымшасы. Бұл жүйе Google Meet баламасы ретінде жұмыс істеп, пайдаланушыларға браузер арқылы бейне және аудио қоңыраулар жүргізуге мүмкіндік береді. WebRTC арқасында қосымша тікелей P2P (peer-to-peer) байланысын орнатып, жылдам әрі қауіпсіз байланыс ұсынады.",
    link: "https://github.com/Rasreal/QazirMeet",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Дәл осы сіз көріп жатқан вебсайт. Framer Motion библиотекасы арқылы жасалынған, әдемі анимацияланған портфолио. ",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>Жобаны Қарау</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
