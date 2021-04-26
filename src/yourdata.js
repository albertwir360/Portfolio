// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import LinkedinIcon from "./images/linkedin.svg"
import document from './images/document.svg'


// Images 
import ProfileImage from "./images/ProfileImage.jpg"
import webscraping from './images/webscraping.png'
import covid from './images/covid.jpeg'

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Albert Wiryawan",
  headerTagline: [
    //Line 1 For Header
    "I'm passionate about",
    //Line 2 For Header
    "leveraging data",
    //Line 3 For Header
    "to solve today's problems",
  ],
  //   Header Paragraph
  headerParagraph:
    "As an engineer, I thrive to solve relevant issues in society through the use of data, experimentation, and the outlets of business.",

  //Contact Email
  contactEmail: "albertvw99@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Bellwether Analytics Webscraping", //Project Title - Add Your Project Title Here
      para:
        "Project managed a team to create webscraping scripts to acquire information from big-10 transfer technology sites", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        webscraping,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/albertwir360/Bellwether_Analytics_Project",
    },
    {
      title: "Covid Monte Carlo simulation", //Project Title - Add Your Project Title Here
      para:
        "For the final project of MSE485: Atomic Scale Simulation, my team and I created a monte carlo SEIR model to simulate COVID-19 spread", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        covid,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },



    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hi my name is Albert Wiryawan and I am a University of Illinois Urbana-Champaign alumni. Starting out as a Material science and engineer major, I worked as a research assistant at a laboratory during my first year in the program. Having worked so hard to manually extract data points through experimentation, I soon realized the importance of leveraging the most insight from data which brought me to my passion for data science. As such, I believe that with effective data management as well as analysis the rate of innovation will improve overall in our society.",
  aboutParaTwo:
    "Currently, I recently accepted a full-time position at Maven Wave in Chicago as an Ignite Analyst. In this position, the program will provide me with a combination of business, data analysis, and cloud service training. Through the work that I am exposed to, I hope to acquire the tools to become an effective cloud consultant.",
  aboutParaThree:
    "Building my repertoire in the fields of business and technology, I am constantly hungry to learn new ways to approach different problems. ",
  aboutImage:
    ProfileImage,
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },

  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/albertwir360" },
    {
      img: LinkedinIcon,
      url: "www.linkedin.com/in/albert-wiryawan",
    },
    {
      img: document,
      url: "#",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
