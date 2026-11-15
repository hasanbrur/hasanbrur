/* =====================================================================
   data.js  —  YOUR SITE CONTENT (single source of truth)
   ---------------------------------------------------------------------
   This is the ONLY file you normally need to edit to update your site.
   Change text here and every page + the CV update automatically.

   NOTE: The publications, projects, awards, stats, news, gallery and blog
   below are TEMPORARY SAMPLE (fake) data so you can see a full site.
   Replace them with your real information when ready.
   ===================================================================== */

const PROFILE = {
  name:        "Md. Hasan Tarek",
  shortName:   "Hasan Tarek",
  role:        "Lecturer, Department of Computer Science & Engineering",
  affiliation: "Begum Rokeya University, Rangpur, Bangladesh",
  tagline:     "Lecturer · Researcher · Traveller",
  email:       "hasan.tarek@brur.ac.bd",
  email2:      "mdhasantarek1996@gmail.com",
  phone:       "+880 1785 222914",
  office:      "Academic Building - 02, Dept. of CSE, Begum Rokeya University, Rangpur, Bangladesh",
  photo:       "assets/hasan.jpg",
  bio: "I am a Lecturer in the Department of Computer Science & Engineering at Begum Rokeya University, Rangpur. " +
       "I teach and conduct research in Artificial Intelligence, Machine Learning, Deep Learning, Software Enginering and " +
       "Computer Vision, with a strong emphasis on reproducible experiments and rigorous analysis. " +
       "I hold B.Sc.(Honours) and M.Sc. degrees in Software Engineering from the University of Dhaka.",
  bioLong: "I am a Lecturer in the Department of Computer Science & Engineering at Begum Rokeya University, Rangpur. " +
       "My academic journey began with a B.Sc. (2019) and an M.Sc. (2021) in Software Engineering from the Institute of " +
       "Information Technology, University of Dhaka. My research sits at the intersection of machine learning, deep " +
       "learning, computer vision and software engineering — I am particularly interested in machine learning, computer vision, and " +
       "software engineering. Alongside teaching and research, I am a keen traveller, and I " +
       "believe exploring new places and cultures sharpens the curiosity that good research depends on.",
  summary: "A computer-science educator and researcher specializing in Artificial Intelligence, Machine " +
       "Learning, Computer Vision and Software Engineering. I hold B.Sc. and M.Sc. degrees in Software Engineering from the University of " +
       "Dhaka and teach at Begum Rokeya University, Rangpur. My work emphasizes reproducible research, rigorous " +
       "analysis, and mentoring students toward strong research practice.",

  // Social / academic profile links  (replace "#" / sample links with your real URLs)
  links: {
    scholar:   "https://scholar.google.com/citations?user=YOLcb38AAAAJ&hl=en",
    linkedin:  "https://www.linkedin.com/in/md-hasan-tarek-2b081215a/",
    orcid:     "https://orcid.org/0009-0007-9531-2777",
    facebook:  "https://www.facebook.com/mdhasan.tarek.56",
    github:    "",                             // not provided — set a URL here to show a GitHub icon
    researchgate: "https://www.researchgate.net/profile/Md-Hasan-Tarek"
  }
};

/* Homepage headline statistics  (SAMPLE numbers — edit) */
const STATS = [
  { value: "3+",   label: "Years Teaching" },
  { value: "8",   label: "Publications"  },
  { value: "1",    label: "Research Projects" },
  { value: "40+", label: "Citations" }
];

/* Research interest keywords (shown as tags) */
const INTERESTS = [
  "Artificial Intelligence", "Machine Learning", "Deep Learning",
  "Data Science", "Computer Vision", "Statistical Analysis",
  "Software Engineering", "Applied Research"
];

/* Research theme cards (homepage + research page) */
const INTEREST_CARDS = [
  { icon: "🧠", title: "Deep Learning & Computer Vision",
    text: "Designing and evaluating neural architectures (PyTorch / TensorFlow) for image understanding, classification and detection." },
  { icon: "📊", title: "Machine Learning & Data Science",
    text: "Predictive modelling, feature reduction and ML pipelines with scikit-learn, pandas and NumPy." },
  { icon: "📐", title: "Software Engineering",
    text: "Software evolution" }
];

/* Education — most recent first (REAL) */
const EDUCATION = [
  { degree: "M.Sc. in Software Engineering", school: "University of Dhaka",
    meta: "CGPA 3.88 / 4.00", year: "2021" },
  { degree: "B.Sc. (Honours) in Software Engineering", school: "University of Dhaka",
    meta: "CGPA 3.85 / 4.00", year: "2019" },
  { degree: "Higher Secondary Certificate (HSC), Science", school: "Carmichael College, Rangpur, Dinajpur Board",
    meta: "GPA 5.00 / 5.00", year: "2015" },
  { degree: "Dakhil (Secondary), Science", school: "Emadpur Fazil Madrasah, Madrasah Board",
    meta: "GPA 5.00 / 5.00", year: "2013" }
];

/* Experience — most recent first (SAMPLE second entry — edit/remove) */
const EXPERIENCE = [
  { role: "Lecturer — Computer Science and Engineering", org: "Begum Rokeya University, Rangpur",
    period: "Sep 2023 – present", text: "Teaching undergraduate courses, supervising student projects, and conducting research in AI/ML/Software Engineering." },
  { role: "Course Instructor", org: "IIT, University of Dhaka",
    period: "Feb 2021 – May 2022", text: "I taught a brief course on Office Applications for Smart Office offered by the Institute of Information Technology (IIT)." },
	{ role: "Intern", org: "Samsung R&D Institute Bangladesh.",
    period: "Jan 2019 – Jun 2019", text: "Involved in developing projects pertaining to machine learning." }
];

/* Technical skills (used on About page and CV) */
const SKILLS = [
  "Python", "NumPy", "pandas", "scikit-learn", "C",
  "C++", "Java"
];

/* CV "Others" section — languages, memberships, references, etc. (SAMPLE) */
const CV_OTHERS = [
  { label: "Languages", value: "Bangla (native), English" },
  { label: "Professional Membership", value: "IEEE, Internet Society Bangladesh Dhaka Chapter, Dhaka University IT Society (DUITS)" },
  //{ label: "References", value: "Available on request" }
];

/* Research projects / grants  (SAMPLE — replace with real ones) */
const PROJECTS = [
  { title: "Digital Skills to Succeed (DS2S) Program, GIZ BD", period: "2023 – 2026",
    text: "Working on the development of a Micro-credential course titled, Digital Branding & Marketing for Start-up business",
    tags: ["Digital Skill", "Microcredential"], link: "https://www.ds2snetwork.com/micro-credentials/details/9" },
  /*
  { title: "Interpretable ML for Education Analytics", period: "2023 – 2024",
    text: "Predicting student performance with interpretable models and explaining the drivers behind each prediction.",
    tags: ["Machine Learning", "Data Science"], link: "" },
  { title: "Bengali NLP Toolkit", period: "2022 – 2023",
    text: "An open toolkit for Bengali text preprocessing, sentiment analysis and named-entity recognition.",
    tags: ["NLP", "Deep Learning"], link: "" },
  { title: "Statistical Study of Digital Learning Adoption", period: "2023",
    text: "A structural-equation-modelling study of factors influencing online-learning adoption among university students.",
    tags: ["Statistics", "SEM"], link: "" }
	*/
];

/* Awards & honours  (SAMPLE — replace with real ones) */
const AWARDS = [
  { title: "Best Paper Award", org: "2020 Joint 9th International Conference on Informatics, Electronics & Vision (ICIEV) and 2020 4th International Conference on Imaging, Vision & Pattern Recognition (icIVPR)", year: "2020",
    text: "For the paper on feature reduction." },
  { title: "ICT Fellowship", org: "Information and Communication Technology Division under the Ministry of Posts, Telecommunications and Information Technology, Bangladesh.", year: "2020",
    text: "For Masters (Thesis) program" },
  { title: "Third position", org: "HASCA Nurse Care Activity Recognition Challenge", year: "2019",
    text: "Awarded for outstanding performance. Website URL : https://hasc-nurse-challenge.github.io/" },
  { title: "Scholarship (HSC)", org: "Dutch Bangla Bank", year: "2015",
    text: "Merit scholarship for top results in the Higher Secondary examination." }
];

/* Collaboration areas (Collaboration page) */
const COLLABORATION = [
  { icon: "🤝", title: "Research Collaboration",
    text: "To do" }
  /*
  { icon: "🤝", title: "Research Collaboration",
    text: "Joint research in AI, machine learning, deep learning, computer vision and applied statistics — locally and internationally." },
  { icon: "🎓", title: "Student Supervision",
    text: "Co-supervision of undergraduate and graduate theses and projects in my areas of interest." },
  { icon: "📝", title: "Peer Review & Editorial",
    text: "Reviewing for journals and conferences, and serving on technical program committees." },
  { icon: "🎤", title: "Invited Talks & Workshops",
    text: "Seminars, guest lectures and hands-on workshops on ML, data science and reproducible research." },
  { icon: "🌐", title: "Joint Grants & Projects",
    text: "Co-developing funded research proposals and collaborative inter-university projects." },
  { icon: "💡", title: "Industry & Applied Work",
    text: "Applied data-science and computer-vision projects that turn research into practical solutions." }
	*/
];

/* -----------------------------------------------------------------
   PUBLICATIONS  (SAMPLE / FAKE entries for demonstration only)
   type: "journal" | "conference" | "preprint" | "chapter"
   featured: true  -> also shown in "Selected Publications" on Home
   Replace these with your real publications (links set to "#" are dummy).
   ----------------------------------------------------------------- */
const PUBLICATIONS = [
	{ title: "paper Title",
    authors: "Author list",
    venue: "IEEE Access, 13, pp. 11023–11035",
    year: 2025, type: "journal", featured: true, doi: "#", pdf: "#", code: "#" },
  /*
  { title: "Attention-Guided Convolutional Networks for Retinal Image Classification",
    authors: "M. H. Tarek, A. B. Rahman, S. Akter",
    venue: "IEEE Access, 13, pp. 11023–11035",
    year: 2025, type: "journal", featured: true, doi: "#", pdf: "#", code: "#" },

  { title: "A Lightweight CNN for Real-Time Crop Disease Detection on Edge Devices",
    authors: "M. H. Tarek, R. Hossain",
    venue: "Proc. Int. Conf. on Computer and Information Technology (ICCIT)",
    year: 2025, type: "conference", featured: true, doi: "#", pdf: "#", code: "" },

  { title: "Interpretable Machine Learning for Student Performance Prediction",
    authors: "M. H. Tarek, N. Sultana",
    venue: "Journal of Educational Data Science, 6(2)",
    year: 2024, type: "journal", featured: true, doi: "#", pdf: "#", code: "" },

  { title: "Structural Equation Modeling of Technology Adoption among University Students",
    authors: "N. Sultana, M. H. Tarek",
    venue: "Int. Journal of Information Management Studies, 9(1)",
    year: 2024, type: "journal", featured: false, doi: "#", pdf: "", code: "" },

  { title: "Transfer Learning for Bengali Handwritten Character Recognition",
    authors: "M. H. Tarek, R. Hossain, S. Akter",
    venue: "Proc. Int. Conf. on Electrical and Computer Engineering (ICECE)",
    year: 2023, type: "conference", featured: false, doi: "#", pdf: "#", code: "#" },

  { title: "A Comparative Study of Ensemble Methods for Imbalanced Medical Data",
    authors: "A. B. Rahman, M. H. Tarek",
    venue: "Bangladesh Journal of Computing, 4(3)",
    year: 2023, type: "journal", featured: false, doi: "#", pdf: "", code: "" },

  { title: "Sentiment Analysis of Bengali Social Media Text using Deep Learning",
    authors: "M. H. Tarek, N. Sultana",
    venue: "Proc. National Conf. on Machine Intelligence (NCMI)",
    year: 2022, type: "conference", featured: false, doi: "#", pdf: "#", code: "" },

  { title: "A Survey of Deep Learning Techniques in Computer Vision",
    authors: "M. H. Tarek",
    venue: "arXiv preprint arXiv:2101.00000",
    year: 2021, type: "preprint", featured: false, doi: "#", pdf: "#", code: "" }
	*/
];

/* News / Recent updates — most recent first (SAMPLE) */
const NEWS = [
  { date: "Nov 2026", text: "Launched my new academic website. 🎉" },
  { date: "Oct 2026", text: "Paper on retinal image classification accepted in IEEE Access." }
  /*
  { date: "Aug 2026", text: "Served on the technical program committee for ICCIT 2026." },
  { date: "May 2026", text: "Received the Best Paper Award at ICCIT 2025." },
  { date: "Feb 2026", text: "Started supervising three new undergraduate thesis groups." }
  */
];

/* Gallery — category: "travel" | "event"
   img: path to an image in assets/ (leave "" to show a labelled placeholder) */
const GALLERY = [
  { category: "event",  caption: "Classroom, BRUR",           img: "assets/event4.jpg" },
  { category: "travel", caption: "Cox's Bazar",               img: "assets/travel1.jpg" },
  { category: "travel", caption: "Sylhet",                    img: "assets/travel2.jpg" },
  { category: "travel", caption: "Sajek Valley",              img: "assets/travel3.jpg" }
/*
  { category: "event",  caption: "ICCIT 2025, Dhaka",        img: "assets/event1.jpg" },
  { category: "event",  caption: "Departmental Seminar 2024", img: "assets/event2.jpg" },
  { category: "event",  caption: "ML Workshop 2024",          img: "assets/event3.jpg" },
  { category: "event",  caption: "Classroom, BRUR",           img: "assets/event4.jpg" },
  { category: "travel", caption: "Cox's Bazar",               img: "assets/travel1.jpg" },
  { category: "travel", caption: "Sylhet",                    img: "assets/travel2.jpg" },
  { category: "travel", caption: "Sajek Valley",              img: "assets/travel3.jpg" },
  { category: "travel", caption: "Sundarbans",                img: "assets/travel4.jpg" }
  */
];

/* Blog posts. Use "link" for an external post (Medium, etc.), or leave
   "link" empty and write the full text in "body". (SAMPLE posts) */
const BLOG = [
{ title: "A Gentle Introduction to Convolutional Neural Networks", date: "Oct 2026", category: "Tutorial",
    excerpt: "What convolutions actually do, why they work for images, and a minimal PyTorch example.",
    link: "", body: "" }

	/*
  { title: "A Gentle Introduction to Convolutional Neural Networks", date: "Oct 2026", category: "Tutorial",
    excerpt: "What convolutions actually do, why they work for images, and a minimal PyTorch example.",
    link: "", body: "" },

  { title: "Reproducibility in Machine-Learning Experiments", date: "Sep 2026", category: "Research notes",
    excerpt: "Seeds, environments, data versioning — practical habits that make your results trustworthy.",
    link: "", body: "" },
  { title: "Tips for Teaching a First Data Science Course", date: "Jul 2026", category: "Teaching",
    excerpt: "Lessons learned from introducing undergraduates to pandas, statistics and their first models.",
    link: "", body: "" }
	*/
];
