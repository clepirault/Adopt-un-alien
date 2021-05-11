import { useState } from 'react';
import AlienItem from './AlienItem';
import './AlienList.css';

const profiles = [
  {
    id:1,
    species: "Alien",
    name: "Sulli",
    age:58,
    image:"https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/sulli/sulli.JPG",
    bonnitude:"Canon de l'espace",
    phrase:"Je sais comme personne pétrifier et tétaniser les gens avec mon gros duvet. Une esthéticienne fera mon affaire.",
    planete:"Monstropolis",
    hobbies:"TERREUR d'élite"
  },
  {
    id:2,
    species: "Humain",
    name:"Henri Waternousse" ,
    age:142,
    image:"https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/waternousse/henri.JPG",
    bonnitude:"Débris de la galaxie",
    phrase:"Epouvanter, c'est mon métier!",
    planete:"Neiges de l'Himalaya",
    hobbies:"Regler les crises d’énergie, la baisse des bénéfices et retrouver une petite fille humaine en cavale"
  },
  {
    id:3,
    species: "Alien",
    name:"Robert Razowsky" ,
    age:5000,
    image:"https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/bob/bob.JPG",
    bonnitude:"Débris de la galaxie",
    phrase:"Parle très vite mais agit peu",
    planete:"Décapotable",
    hobbies:"Dirige tous les matins ma séance d’entraînement : pompes, abdominaux, poses effrayantes et rugissements sont au programme. "
  },
  {
    id:4,
    species: "Alien",
    name:"Germaine" ,
    age:40,
    image:"https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/germaine/germaine.JPG",
    bonnitude:"Débris de la galaxie",
    phrase:"A cheval sur les détails et les principes, j'ai une vivacité d'esprit surprenante pour une limace",
    planete:"Epouvanteuse",
    hobbies:"lire mes journaux à scandale pendant mon heure de déjeuner"
  },
  {
    id:5,
    species: "Humain",
    name:"Marie Gibbs" ,
    age:4,
    image:"https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/bouh/bouh.JPG",
    bonnitude:"Débris de la galaxie",
    phrase:"J'ai peur de rien et je suis insconciente",
    planete:"Minou",
    hobbies:"de voir à quel point l’énergie que je produit par mon rire peut être puissante."
  },
  {
    id:6,
    species: "Alien",
    name:"Célia Boa" ,
    age:21,
    image:"https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/celia/celia.JPG",
    bonnitude:"Canon de l'espace",
    phrase:"Douce et ensorcelante.",
    planete:"Minou",
    hobbies:"Le luxe et les poils"
  },
  {
    id:7,
    species: "Alien",
    name:"Léon Bogue",
    age:888,
    image:"https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/celia/celia.JPG",
    bonnitude:"Débris de la galaxie",
    phrase:"J'aime préparer en cachette un plan diabolique pour arriver à mes fins.",
    planete:"Machine infernale",
    hobbies:"Inventer un système pour arracher des hurlements aux enfants."
  },
  {
    id:8,
    species: "Alien",
    name:"Center Detection" ,
    age:2319,
    image:"https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/cda/cda.JPG",
    bonnitude:"Débris de la galaxie",
    phrase:"J'aime sortir ma tenue d'urgence pour me protéger des contaminations",
    planete:"Chauve souris",
    hobbies:"Arracher des cheveux dans une fourrure de monstre"
  },
  {
    id:9,
    species: "Alien",
    name:"Georges Epouvanteur" ,
    age:2319,
    image:"https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/epouvanteur/epouvanteur.JPG",
    bonnitude:"Canon de l'espace",
    phrase:"Si je me coupe les ongles des pieds je fais du 42 sinon du 56",
    planete:"Epouvanteuse",
    hobbies:"Aiguiser les griffes,brosser les crocs et limer les cornes."
  },
  {
    id:10,
    species: "Alien",
    name:"Fouinasse" ,
    age:900,
    image:"https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/assistant/assistant.JPG",
    bonnitude:"Canon de l'espace",
    phrase:"Si tu es petit rond et marron et que tu sens pas bon, tu es fais pour moi",
    planete:"",
    hobbies:"Les grandes balades sur la plage et construire en secret des machines à aspirer des crottes."
  },
  {
    id:11,
    species: "Alien",
    name: "Bud Budiovitch",
    image: "https://media.discordapp.net/attachments/833684991724093471/841596747535876146/bud.jpg?width=420&height=559",
    bonnitude:"Débris de la galaxie",
    phrase:"Moche et sans ami – sauras-tu me complimenter ? ",
    planete: "ZigmaB",
    hobbies: "Regarder la Tv et manger des sandwichs"
  },
  {
    id:12,
    species: "Alien",
    name: "Stereo Monovici",
    image: "https://64.media.tumblr.com/701ced851fdf2ecd3ece094baddbfd81/tumblr_pecna1Ii8y1uqo848o1_500.png",
    bonnitude:"Canon de l'espace",
    phrase: "Si un jour ton cœur ne bat plus, je te donnerai le mien, car sans toi, il me sert à rien.",
    planete:"ZigmaB",
    hobbies:"Raconter des mythos",
  },
  {
    id:13,
    species: "Alien",
    name: "Ethno Polino",
    image: "https://64.media.tumblr.com/251a47a14c319a620fda2a3434d7c303/tumblr_pn7h9hYFMZ1t5fmi8_1280.jpg",
    bonnitude: "Canon de l'espace",
    phrase:"Si à chaque fois que je pensais à toi, il poussait une fleur, alors la Terre serait un immense jardin de roses.",
    planete: "ZigmaB",
    hobbies: "lire un livre, boire de l'eau",
  },
  {
    id:14,
    species: "Alien",
    name: "Gorgeous Klatoo" ,
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.skyrock.net%2F1094%2F94401094%2Fpics%2F3254949950_1_7_QCXQM2ti.jpg&imgrefurl=https%3A%2F%2Fdessin-anime-enfance.skyrock.com%2F3254949950-34-Les-zinzins-de-l-espace.html&tbnid=6zx1VSNQXLTgjM&vet=12ahUKEwj4qYuipMHwAhUOShoKHbvbCecQMygKegUIARCDAQ..i&docid=ew2DjS1FRDiQ_M&w=225&h=225&q=les%20zinzins%20de%20l%27espace%20bleu&hl=fr&client=firefox-b-d&ved=2ahUKEwj4qYuipMHwAhUOShoKHbvbCecQMygKegUIARCDAQ#imgrc=6zx1VSNQXLTgjM&imgdii=iso5z5MbTE9tUM",
    bonnitude: "Débris de la galaxie",
    phrase: "Je suis nouveau en ville, pourrais-tu m’indiquer le chemin pour aller à ton appartement ?",
    planete:"ZigmaB",
    hobbies:"Manger, dormir et inversement",
  },
  {
    id:15,
    species: "Humain",
    name: "Lenda Oakland" ,
    image: "https://image.freepik.com/photos-gratuite/plan-horizontal-jolie-femme-peau-foncee-coiffure-afro-large-sourire-dents-blanches-montre-quelque-chose-gentil-ami-pointe-dans-coin-superieur-droit-se-tient-contre-mur_273609-16442.jpg",
    bonnitude: "Canon de l'espace",
    phrase: "Besoin de quelqu'un pour monter un meuble Ikea",
    planete:"Terre",
    hobbies:"Boire un verre en terasse avec vu sur Neptune",
  },
  {
    id:16,
    species:"Humain",
    name:"Gilbert Booba" ,
    image:"https://www.zbrushcentral.com/uploads/default/original/4X/f/9/b/f9bcddd925b43b98c3f09aac2591d0dff20c6a15.jpeg",
    bonnitude: "Débris de la galaxie",
    phrase: "Besoin de tendresse dans ce monde de brutes",
    planete:"Terre",
    hobbies:"Tuer"
  }
];


function AlienList() {
  const [position, setPosition] = useState(0);
  const profileSelection = profiles
  .filter((element)=> element.species === localStorage.getItem('species') && element.bonnitude === localStorage.getItem('bonnitude'))
  function handleClick(e){
    e.preventDefault()
    setPosition(position +1);
  }
  return (
    <div>
      <AlienItem {...profileSelection[position]}/>
      <div className="buttons">
      <button className="next" type="button" onClick={handleClick}>Next</button>
      <button className="kiffe" type="button">Toi j'te kiffe</button>
      </div>
    </div>
  )
}

export default AlienList;