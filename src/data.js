import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { FaEnvelope } from "react-icons/fa";
// export const subjectsData = [
//   {
//     subjectName: {
//       en : "Math",
//       fr : "Mathématiques",
//       ar : 'الرياضيات'
//     },
//     models: [
//       {
//         name: {
//           en : "arabic",
//           fr : "l'arabe ",
//           ar : "العربية"
//         },
//         credit: 3,
//       },
//       {
//         name: {
//           en : "english",
//           fr : "Anglais",
//           ar : "الانجليزية"
//         },

//         credit: 2,
//       },
//       {
//         name : {
//           en : "french",
//           fr: 'Français',
//           ar : "الفرنسية",
//         },
//         credit: 2,
//       },
//       {
//          name : {
//           en : "Math",
//           fr : "Mathématiques",
//           ar : "الرياضيات"
//         },
//         credit: 7,
//       },

//       {
//         name : {
//           en : "Biology",
//           fr : "Biologie",
//           ar : "العلوم الطبيعية"
//         },
//         credit: 2,
//       },
//       {
//         name : {
//           en : 'physics',
//           fr : "physique",
//           ar : "الفيزياء"
//         },
//         credit: 6,
//       },
//       {
//         name: {
//           en : "History And Geography",
//           fr : "Histoire et géographie ",
//           ar : "التاريخ و الجغرافيا"

//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en : "Islamic Education",
//           fr : "Éducation islamique",
//           ar : "التربية الاسلامية"
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en : "Philosphy",
//           fr : "Philosphy",
//           ar : "الفلسفة"
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en : "Physical Education And Sports",
//           fr : "Éducation physique et sports",
//           ar : "التربية البدنية "
//         } ,
//         credit: 1,
//       },
//     ],
//   },
//   {
//     subjectName: "Math Technique",
//     models: [
//         {
//           name: "arabic",
//           credit: 3,
//         },
//         {
//           name: "english",
//           credit: 2,
//         },
//         {
//           name: "french",
//           credit: 2,
//         },
//         {
//           name: "Mathematics",
//           credit: 6,
//         },

//         {
//           name: "Technolgy",
//           credit: 7,
//         },
//         {
//           name: "Physics",
//           credit: 6,
//         },
//         {
//           name: "History And Geography",
//           credit: 2,
//         },
//         {
//           name: "Islamic Education",
//           credit: 2,
//         },
//         {
//           name: "Philosphy",
//           credit: 2,
//         },
//         {
//           name: "Physical Education And Sports",
//           credit: 1,
//         },
//       ],
//   },
//   {
//     subjectName: "Management",
//     models: [
//       {
//         name: "arabic",
//         credit: 3,
//       },
//       {
//         name: "english",
//         credit: 2,
//       },
//       {
//         name: "french",
//         credit: 2,
//       },
//       {
//         name: "Mathematics",
//         credit: 5,
//       },

//       {
//         name: "Economics And Management",
//         credit: 5,
//       },
//       {
//         name: "Accounting And Financial Management",
//         credit: 6,
//       },
//       {
//         name: "The Law",
//         credit: 2,
//       },
//       {
//         name: "History And Geography",
//         credit: 4,
//       },
//       {
//         name: "Islamic Education",
//         credit: 2,
//       },
//       {
//         name: "Physical Education And Sports",
//         credit: 1,
//       },
//     ],
//   },
//   {
//     subjectName: "Science",
//     models: [
//         {
//           name: "arabic",
//           credit: 3,
//         },
//         {
//           name: "english",
//           credit: 2,
//         },
//         {
//           name: "french",
//           credit: 2,
//         },
//         {
//           name: "Mathematics",
//           credit: 5,
//         },

//         {
//           name: "Biology",
//           credit: 6,
//         },
//         {
//           name: "Physics",
//           credit: 5,
//         },
//         {
//           name: "History And Geography",
//           credit: 2,
//         },
//         {
//           name: "Islamic Education",
//           credit: 2,
//         },
//         {
//           name: "Philosphy",
//           credit: 2,
//         },
//         {
//           name: "Physical Education And Sports",
//           credit: 1,
//         },
//       ],
//   },
//   {
//     subjectName: "Philosophy",
//     models: [
//       {
//         name: "arabic",
//         credit: 6,
//       },
//       {
//         name: "english",
//         credit: 3,
//       },
//       {
//         name: "french",
//         credit: 3,
//       },
//       {
//         name: "Mathematics",
//         credit: 2,
//       },

//       {
//         name: "Philosophy",
//         credit: 6,
//       },

//       {
//         name: "History And Geography",
//         credit: 4,
//       },
//       {
//         name: "Islamic Education",
//         credit: 2,
//       },
//       {
//         name: "Physical Education And Sports",
//         credit: 1,
//       },
//     ],
//   },
//   {
//     subjectName: "Language",
//     models: [
//       {
//         name: "arabic",
//         credit: 5,
//       },
//       {
//         name: "english",
//         credit: 5,
//       },
//       {
//         name: "french",
//         credit: 5,
//       },
//       {
//         name: "Mathematics",
//         credit: 2,
//       },
//       {
//         name: "Spanish / Deutsch",
//         credit: 4,
//       },
//       {
//         name: "Philosophy",
//         credit: 2,
//       },

//       {
//         name: "History And Geography",
//         credit: 2,
//       },
//       {
//         name: "Islamic Education",
//         credit: 2,
//       },
//       {
//         name: "Physical Education And Sports",
//         credit: 1,
//       },
//     ],
//   },

// ];

// export const subjectsData = [
//   {
//     subjectName: [
//      { en: "Math",
//       fr: "Mathématiques",
//       ar: "الرياضيات",}
//     ],
//     models: [
//       {
//         name: {
//           en: "arabic",
//           fr: "l'arabe ",
//           ar: "العربية",
//         },
//         credit: 3,
//       },
//       {
//         name: {
//           en: "english",
//           fr: "Anglais",
//           ar: "الانجليزية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "french",
//           fr: "Français",
//           ar: "الفرنسية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Math",
//           fr: "Mathématiques",
//           ar: "الرياضيات",
//         },
//         credit: 7,
//       },
//       {
//         name: {
//           en: "Biology",
//           fr: "Biologie",
//           ar: "العلوم الطبيعية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "physics",
//           fr: "physique",
//           ar: "الفيزياء",
//         },
//         credit: 6,
//       },
//       {
//         name: {
//           en: "History And Geography",
//           fr: "Histoire et géographie",
//           ar: "التاريخ و الجغرافيا",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Islamic Education",
//           fr: "Éducation islamique",
//           ar: "التربية الاسلامية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Philosphy",
//           fr: "Philosophie",
//           ar: "الفلسفة",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Physical Education And Sports",
//           fr: "Éducation physique et sports",
//           ar: "التربية البدنية",
//         },
//         credit: 1,
//       },
//     ],
//   },
//   {
//     subjectName: {
//       en: "Math Technique",
//       fr: "Mathématiques Technique",
//       ar: "تقني رياضي",
//     },
//     models: [
//       {
//         name: {
//           en: "arabic",
//           fr: "l'arabe",
//           ar: "العربية",
//         },
//         credit: 3,
//       },
//       {
//         name: {
//           en: "english",
//           fr: "Anglais",
//           ar: "الانجليزية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "french",
//           fr: "Français",
//           ar: "الفرنسية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Mathematics",
//           fr: "Mathématiques",
//           ar: "الرياضيات",
//         },
//         credit: 6,
//       },
//       {
//         name: {
//           en: "Technolgy",
//           fr: "Technologie",
//           ar: "تكنولوجيا",
//         },
//         credit: 7,
//       },
//       {
//         name: {
//           en: "Physics",
//           fr: "Physique",
//           ar: "الفيزياء",
//         },
//         credit: 6,
//       },
//       {
//         name: {
//           en: "History And Geography",
//           fr: "Histoire et géographie",
//           ar: "التاريخ و الجغرافيا",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Islamic Education",
//           fr: "Éducation islamique",
//           ar: "التربية الاسلامية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Philosphy",
//           fr: "Philosophie",
//           ar: "الفلسفة",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Physical Education And Sports",
//           fr: "Éducation physique et sports",
//           ar: "التربية البدنية",
//         },
//         credit: 1,
//       },
//     ],
//   },
//   {
//     subjectName: {
//       en: "Management",
//       fr: "Gestion",
//       ar: "تسيير و اقتصاد",
//     },
//     models: [
//       {
//         name: {
//           en: "arabic",
//           fr: "l'arabe",
//           ar: "العربية",
//         },
//         credit: 3,
//       },
//       {
//         name: {
//           en: "english",
//           fr: "Anglais",
//           ar: "الانجليزية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "french",
//           fr: "Français",
//           ar: "الفرنسية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Mathematics",
//           fr: "Mathématiques",
//           ar: "الرياضيات",
//         },
//         credit: 5,
//       },
//       {
//         name: {
//           en: "Economics And Management",
//           fr: "Économie et Gestion",
//           ar: "الاقتصاد والإدارة",
//         },
//         credit: 5,
//       },
//       {
//         name: {
//           en: "Accounting And Financial Management",
//           fr: "Comptabilité et Gestion financière",
//           ar: "المحاسبة والإدارة المالية",
//         },
//         credit: 6,
//       },
//       {
//         name: {
//           en: "The Law",
//           fr: "Le Droit",
//           ar: "القانون",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "History And Geography",
//           fr: "Histoire et géographie",
//           ar: "التاريخ و الجغرافيا",
//         },
//         credit: 4,
//       },
//       {
//         name: {
//           en: "Islamic Education",
//           fr: "Éducation islamique",
//           ar: "التربية الاسلامية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Physical Education And Sports",
//           fr: "Éducation physique et sports",
//           ar: "التربية البدنية",
//         },
//         credit: 1,
//       },
//     ],
//   },
//   {
//     subjectName: {
//       en: "Science",
//       fr: "Science",
//       ar: "علوم تجريبية",
//     },
//     models: [
//       {
//         name: {
//           en: "arabic",
//           fr: "l'arabe",
//           ar: "العربية",
//         },
//         credit: 3,
//       },
//       {
//         name: {
//           en: "english",
//           fr: "Anglais",
//           ar: "الانجليزية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "french",
//           fr: "Français",
//           ar: "الفرنسية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Mathematics",
//           fr: "Mathématiques",
//           ar: "الرياضيات",
//         },
//         credit: 5,
//       },
//       {
//         name: {
//           en: "Biology",
//           fr: "Biologie",
//           ar: "العلوم الطبيعية",
//         },
//         credit: 6,
//       },
//       {
//         name: {
//           en: "Physics",
//           fr: "Physique",
//           ar: "الفيزياء",
//         },
//         credit: 5,
//       },
//       {
//         name: {
//           en: "History And Geography",
//           fr: "Histoire et géographie",
//           ar: "التاريخ و الجغرافيا",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Islamic Education",
//           fr: "Éducation islamique",
//           ar: "التربية الاسلامية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Philosphy",
//           fr: "Philosophie",
//           ar: "الفلسفة",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Physical Education And Sports",
//           fr: "Éducation physique et sports",
//           ar: "التربية البدنية",
//         },
//         credit: 1,
//       },
//     ],
//   },
//   {
//     subjectName: {
//       en: "Philosophy",
//       fr: "Philosophie",
//       ar: "اداب و فلسفة",
//     },
//     models: [
//       {
//         name: {
//           en: "arabic",
//           fr: "l'arabe",
//           ar: "العربية",
//         },
//         credit: 6,
//       },
//       {
//         name: {
//           en: "english",
//           fr: "Anglais",
//           ar: "الانجليزية",
//         },
//         credit: 3,
//       },
//       {
//         name: {
//           en: "french",
//           fr: "Français",
//           ar: "الفرنسية",
//         },
//         credit: 3,
//       },
//       {
//         name: {
//           en: "Mathematics",
//           fr: "Mathématiques",
//           ar: "الرياضيات",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Philosophy",
//           fr: "Philosophie",
//           ar: "الفلسفة",
//         },
//         credit: 6,
//       },
//       {
//         name: {
//           en: "History And Geography",
//           fr: "Histoire et géographie",
//           ar: "التاريخ و الجغرافيا",
//         },
//         credit: 4,
//       },
//       {
//         name: {
//           en: "Islamic Education",
//           fr: "Éducation islamique",
//           ar: "التربية الاسلامية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Physical Education And Sports",
//           fr: "Éducation physique et sports",
//           ar: "التربية البدنية",
//         },
//         credit: 1,
//       },
//     ],
//   },
//   {
//     subjectName: {
//       en: "Languages",
//       fr: "Langues",
//       ar: "لغات",
//     },
//     models: [
//       {
//         name: {
//           en: "arabic",
//           fr: "l'arabe",
//           ar: "العربية",
//         },
//         credit: 5,
//       },
//       {
//         name: {
//           en: "english",
//           fr: "Anglais",
//           ar: "الانجليزية",
//         },
//         credit: 5,
//       },
//       {
//         name: {
//           en: "french",
//           fr: "Français",
//           ar: "الفرنسية",
//         },
//         credit: 5,
//       },
//       {
//         name: {
//           en: "Mathematics",
//           fr: "Mathématiques",
//           ar: "الرياضيات",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Spanish / Deutsch",
//           fr: "Espagnol / Allemand",
//           ar: "الإسبانية / الألمانية",
//         },
//         credit: 4,
//       },
//       {
//         name: {
//           en: "Philosophy",
//           fr: "Philosophie",
//           ar: "الفلسفة",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "History And Geography",
//           fr: "Histoire et géographie",
//           ar: "التاريخ و الجغرافيا",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Islamic Education",
//           fr: "Éducation islamique",
//           ar: "التربية الاسلامية",
//         },
//         credit: 2,
//       },
//       {
//         name: {
//           en: "Physical Education And Sports",
//           fr: "Éducation physique et sports",
//           ar: "التربية البدنية",
//         },
//         credit: 1,
//       },
//     ],
//   },
// ];

export const subjectsData = [
  {
    subjectName: {
      en: "Math",
      fr: "Mathématiques",
      ar: "الرياضيات",
    },
    models: [
      {
        name: {
          en: "arabic",
          fr: "l'arabe",
          ar: "العربية",
        },
        credit: 3,
      },
      {
        name: {
          en: "english",
          fr: "Anglais",
          ar: "الانجليزية",
        },
        credit: 2,
      },
      {
        name: {
          en: "french",
          fr: "Français",
          ar: "الفرنسية",
        },
        credit: 2,
      },
      {
        name: {
          en: "Math",
          fr: "Mathématiques",
          ar: "الرياضيات",
        },
        credit: 7,
      },
      {
        name: {
          en: "Biology",
          fr: "Biologie",
          ar: "العلوم الطبيعية",
        },
        credit: 2,
      },
      {
        name: {
          en: "physics",
          fr: "physique",
          ar: "الفيزياء",
        },
        credit: 6,
      },
      {
        name: {
          en: "History And Geography",
          fr: "Histoire et géographie",
          ar: "التاريخ و الجغرافيا",
        },
        credit: 2,
      },
      {
        name: {
          en: "Islamic Education",
          fr: "Éducation islamique",
          ar: "التربية الاسلامية",
        },
        credit: 2,
      },
      {
        name: {
          en: "Philosphy",
          fr: "Philosophie",
          ar: "الفلسفة",
        },
        credit: 2,
      },
      {
        name: {
          en: "Physical Education And Sports",
          fr: "Éducation physique et sports",
          ar: "التربية البدنية",
        },
        credit: 1,
      },
    ],
  },
  {
    subjectName: {
      en: "Math Technique",
      fr: "Mathématiques Technique",
      ar: "تقني رياضي",
    },
    models: [
      {
        name: {
          en: "arabic",
          fr: "l'arabe",
          ar: "العربية",
        },
        credit: 3,
      },
      {
        name: {
          en: "english",
          fr: "Anglais",
          ar: "الانجليزية",
        },
        credit: 2,
      },
      {
        name: {
          en: "french",
          fr: "Français",
          ar: "الفرنسية",
        },
        credit: 2,
      },
      {
        name: {
          en: "Mathematics",
          fr: "Mathématiques",
          ar: "الرياضيات",
        },
        credit: 6,
      },
      {
        name: {
          en: "Technolgy",
          fr: "Technologie",
          ar: "تكنولوجيا",
        },
        credit: 7,
      },
      {
        name: {
          en: "Physics",
          fr: "Physique",
          ar: "الفيزياء",
        },
        credit: 6,
      },
      {
        name: {
          en: "History And Geography",
          fr: "Histoire et géographie",
          ar: "التاريخ و الجغرافيا",
        },
        credit: 2,
      },
      {
        name: {
          en: "Islamic Education",
          fr: "Éducation islamique",
          ar: "التربية الاسلامية",
        },
        credit: 2,
      },
      {
        name: {
          en: "Philosphy",
          fr: "Philosophie",
          ar: "الفلسفة",
        },
        credit: 2,
      },
      {
        name: {
          en: "Physical Education And Sports",
          fr: "Éducation physique et sports",
          ar: "التربية البدنية",
        },
        credit: 1,
      },
    ],
  },
  {
    subjectName: {
      en: "Management",
      fr: "Gestion",
      ar: "تسيير و اقتصاد",
    },
    models: [
      {
        name: {
          en: "arabic",
          fr: "l'arabe",
          ar: "العربية",
        },
        credit: 3,
      },
      {
        name: {
          en: "english",
          fr: "Anglais",
          ar: "الانجليزية",
        },
        credit: 2,
      },
      {
        name: {
          en: "french",
          fr: "Français",
          ar: "الفرنسية",
        },
        credit: 2,
      },
      {
        name: {
          en: "Mathematics",
          fr: "Mathématiques",
          ar: "الرياضيات",
        },
        credit: 5,
      },
      {
        name: {
          en: "Economics And Management",
          fr: "Économie et Gestion",
          ar: "الاقتصاد والإدارة",
        },
        credit: 5,
      },
      {
        name: {
          en: "Accounting And Financial Management",
          fr: "Comptabilité et Gestion financière",
          ar: "المحاسبة والإدارة المالية",
        },
        credit: 6,
      },
      {
        name: {
          en: "The Law",
          fr: "Le Droit",
          ar: "القانون",
        },
        credit: 2,
      },
      {
        name: {
          en: "History And Geography",
          fr: "Histoire et géographie",
          ar: "التاريخ و الجغرافيا",
        },
        credit: 4,
      },
      {
        name: {
          en: "Islamic Education",
          fr: "Éducation islamique",
          ar: "التربية الاسلامية",
        },
        credit: 2,
      },
      {
        name: {
          en: "Physical Education And Sports",
          fr: "Éducation physique et sports",
          ar: "التربية البدنية",
        },
        credit: 1,
      },
    ],
  },
  {
    subjectName: {
      en: "Science",
      fr: "Science",
      ar: "علوم تجريبية",
    },
    models: [
      {
        name: {
          en: "arabic",
          fr: "l'arabe",
          ar: "العربية",
        },
        credit: 3,
      },
      {
        name: {
          en: "english",
          fr: "Anglais",
          ar: "الانجليزية",
        },
        credit: 2,
      },
      {
        name: {
          en: "french",
          fr: "Français",
          ar: "الفرنسية",
        },
        credit: 2,
      },
      {
        name: {
          en: "Mathematics",
          fr: "Mathématiques",
          ar: "الرياضيات",
        },
        credit: 5,
      },
      {
        name: {
          en: "Biology",
          fr: "Biologie",
          ar: "العلوم الطبيعية",
        },
        credit: 6,
      },
      {
        name: {
          en: "Physics",
          fr: "Physique",
          ar: "الفيزياء",
        },
        credit: 5,
      },
      {
        name: {
          en: "History And Geography",
          fr: "Histoire et géographie",
          ar: "التاريخ و الجغرافيا",
        },
        credit: 2,
      },
      {
        name: {
          en: "Islamic Education",
          fr: "Éducation islamique",
          ar: "التربية الاسلامية",
        },
        credit: 2,
      },
      {
        name: {
          en: "Philosphy",
          fr: "Philosophie",
          ar: "الفلسفة",
        },
        credit: 2,
      },
      {
        name: {
          en: "Physical Education And Sports",
          fr: "Éducation physique et sports",
          ar: "التربية البدنية",
        },
        credit: 1,
      },
    ],
  },
  {
    subjectName: {
      en: "Philosophy",
      fr: "Philosophie",
      ar: "اداب و فلسفة",
    },
    models: [
      {
        name: {
          en: "arabic",
          fr: "l'arabe",
          ar: "العربية",
        },
        credit: 6,
      },
      {
        name: {
          en: "english",
          fr: "Anglais",
          ar: "الانجليزية",
        },
        credit: 3,
      },
      {
        name: {
          en: "french",
          fr: "Français",
          ar: "الفرنسية",
        },
        credit: 3,
      },
      {
        name: {
          en: "Mathematics",
          fr: "Mathématiques",
          ar: "الرياضيات",
        },
        credit: 2,
      },
      {
        name: {
          en: "Philosophy",
          fr: "Philosophie",
          ar: "الفلسفة",
        },
        credit: 6,
      },
      {
        name: {
          en: "History And Geography",
          fr: "Histoire et géographie",
          ar: "التاريخ و الجغرافيا",
        },
        credit: 4,
      },
      {
        name: {
          en: "Islamic Education",
          fr: "Éducation islamique",
          ar: "التربية الاسلامية",
        },
        credit: 2,
      },
      {
        name: {
          en: "Physical Education And Sports",
          fr: "Éducation physique et sports",
          ar: "التربية البدنية",
        },
        credit: 1,
      },
    ],
  },
  {
    subjectName: {
      en: "Languages",
      fr: "Langues",
      ar: "لغات",
    },
    models: [
      {
        name: {
          en: "arabic",
          fr: "l'arabe",
          ar: "العربية",
        },
        credit: 5,
      },
      {
        name: {
          en: "english",
          fr: "Anglais",
          ar: "الانجليزية",
        },
        credit: 5,
      },
      {
        name: {
          en: "french",
          fr: "Français",
          ar: "الفرنسية",
        },
        credit: 5,
      },
      {
        name: {
          en: "Mathematics",
          fr: "Mathématiques",
          ar: "الرياضيات",
        },
        credit: 2,
      },
      {
        name: {
          en: "Spanish / Deutsch",
          fr: "Espagnol / Allemand",
          ar: "الإسبانية / الألمانية",
        },
        credit: 4,
      },
      {
        name: {
          en: "Philosophy",
          fr: "Philosophie",
          ar: "الفلسفة",
        },
        credit: 2,
      },
      {
        name: {
          en: "History And Geography",
          fr: "Histoire et géographie",
          ar: "التاريخ و الجغرافيا",
        },
        credit: 2,
      },
      {
        name: {
          en: "Islamic Education",
          fr: "Éducation islamique",
          ar: "التربية الاسلامية",
        },
        credit: 2,
      },
      {
        name: {
          en: "Physical Education And Sports",
          fr: "Éducation physique et sports",
          ar: "التربية البدنية",
        },
        credit: 1,
      },
    ],
  },
];

export const branches = [
  {
    title: {
      en: "Choose your high school specialization",
      fr: "      Choisissez votre spécialisation au secondaire ",
      ar: "اختر التخصص الثانوي الخاص بك",
    },

    sousTitle: {
      en: "All high school specializations are available for calculation, good luck!",
      fr: "   Toutes les spécialisations du secondaire sont disponibles pour le calcul, bonne chance !",
      ar: "جميع التخصصات متاحة للحساب حظ موفق",
    },
  },
  [
    {
      name: {
        en: "Math",
        fr: "Mathematics",
        ar: "الرياضيات",
      },
    },
    {
      name: {
        en: "Math Technique",
        fr: "Technique de Mathématiques",
        ar: "تقني رياضي",
      },
    },
    {
      name: {
        en: "Management",
        fr: "Gestion",
        ar: "تسسير و اقتصاد",
      },
    },
    {
      name: {
        en: "Science",
        fr: "Science",
        ar: "علوم الطبيعة و الحياة",
      },
    },
    {
      name: {
        en: "Philosophy",
        fr: "Philosophie",
        ar: "فلسفة",
      },
    },
    {
      name: {
        en: "Languages",
        fr: "Langues",
        ar: "لغات",
      },
    },
  ],
];

export const socialMediaIcons = [
  {
    name: "facebook",
    icon: <FaFacebook />,
    color: "#337ab7",
    link : "https://www.facebook.com/Hb9Li/"

  },
  {
    name: "instagram",
    icon: <IoLogoInstagram />,
    color: "rgb(146, 97, 5)",
    link : "https://www.instagram.com/fer_ziad/"

  },
  {
    name: "whatsapp",
    icon: <FaWhatsapp />,
    color: "green",
    link : "https://wa.me/213792926151"

  },
  {
    name: "telegram",
    icon: <FaTelegram />,
    color: "#337ab7",
    link : "https://t.me/ferZiad8"

  },
];


export const featurs = [
  {
    icon: <FaClock />,
    title: {
      en: "Automatic calculation",
      fr: "Calcul automatique",
      ar: "الحساب التلقائي",
    },
    text: {
      en: "Get your Baccalaureate average, and SNV university average quickly and accurately using our automatic calculator.",
      fr: "Obtenez votre moyenne du baccalauréat et la moyenne de l'université SNV rapidement et précisément en utilisant notre calculateur automatique.",
      ar: "احصل على متوسط ​​شهادة البكالوريا ومتوسط ​​الجامعة SNV بسرعة وبدقة باستخدام حاسبتنا التلقائية.",
    },
  },
  {
    icon: <GiProgression />,
    title: {
      en: "Progress tracking",
      fr: "Suivi des progrès",
      ar: "تتبع التقدم",
    },
    text: {
      en: "Track your progress and discover the subjects where you can improve to increase your average.",
      fr: "Suivez vos progrès et découvrez les matières où vous pouvez vous améliorer pour augmenter votre moyenne.",
      ar: "تتبع تقدمك واكتشف المواد التي يمكنك تحسينها لزيادة معدلك.",
    },
  },
  {
    icon: <FaEnvelope />,
    title: {
      en: "Share with friends",
      fr: "Partager avec des amis",
      ar: "شارك مع الأصدقاء",
    },
    text: {
      en: "Share the website with your friends so that they can calculate their Baccalaureate average and their university specialization average.",
      fr: "Partagez le site avec vos amis pour qu'ils puissent calculer leur moyenne de baccalauréat et leur moyenne de spécialisation universitaire.",
      ar: "شارك الموقع مع أصدقائك حتى يتمكنوا من حساب متوسط ​​البكالوريا ومتوسط ​​تخصصهم الجامعي.",
    },
  },
];

export const homeData = {
  welcome: {
    en: "Welcome",
    fr: "Bienvenue",
    ar: "مرحبا",
  },
  head: {
    en: "Calculate your Baccalaureate average in Algeria",
    fr: "Calculez votre moyenne du Baccalauréat en Algérie",
    ar: "أحسب معدل الباكالوريا  الخاص بك ",
  },
  button: {
    en: "Calculate your Baccalauréat average",
    fr: "Calculez votre moyenne du Baccalauréat",
    ar: "حساب معدل الباكالوريا",
  },
};

export const resultData = {
  congats: {
    en: "Congratulations",
    fr: "Felicitation",
    ar: "ألف مبروك",
  },
  failed: {
    en: "Hard Luck",
    fr: "Bon Chance",
    ar: "حظ أوفر",
  },
  note: {
    en: "your average is",
    fr: "votre moyenne est",
    ar: "لقد تحصلت على",
  },
};


export const formData = {
  title : {
    en : "Calculate your average for the Baccalaureate in",
    fr : "Calculez votre moyenne pour le Baccalauréat en",
    ar : "أحسب معدلك للباكالوريا في شعبة" 
  }
}

