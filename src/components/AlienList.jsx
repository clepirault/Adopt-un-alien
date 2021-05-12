import { useState } from 'react';
import AlienItem from './AlienItem';
import './AlienList.css';

const profiles = [
  {
    id: 1,
    species: 'Alien',
    name: 'Sulli',
    age: 58,
    image:
      'https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/sulli/sulli.JPG',
    bonnitude: "Canon de l'espace",
    phrase:
      'Je sais comme personne pétrifier et tétaniser les gens avec mon gros duvet. Une esthéticienne fera mon affaire.',
    planete: 'Monstropolis',
    hobbies: "TERREUR d'élite"
  },
  {
    id: 2,
    species: 'Humain',
    name: 'Henri Waternousse',
    age: 142,
    image:
      'https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/waternousse/henri.JPG',
    bonnitude: 'Débris de la galaxie',
    phrase: "Epouvanter, c'est mon métier!",
    planete: "Neiges de l'Himalaya",
    hobbies:
      'Regler les crises d’énergie, la baisse des bénéfices et retrouver une petite fille humaine en cavale'
  },
  {
    id: 3,
    species: 'Alien',
    name: 'Robert Razowsky',
    age: 5000,
    image:
      'https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/bob/bob.JPG',
    bonnitude: 'Débris de la galaxie',
    phrase: 'Parle très vite mais agit peu',
    planete: 'Décapotable',
    hobbies:
      'Dirige tous les matins ma séance d’entraînement : pompes, abdominaux, poses effrayantes et rugissements sont au programme. '
  },
  {
    id: 4,
    species: 'Alien',
    name: 'Germaine',
    age: 40,
    image:
      'https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/germaine/germaine.JPG',
    bonnitude: 'Débris de la galaxie',
    phrase:
      "A cheval sur les détails et les principes, j'ai une vivacité d'esprit surprenante pour une limace",
    planete: 'Epouvanteuse',
    hobbies: 'lire des journaux à scandale pendant mon heure de déjeuner'
  },
  {
    id: 5,
    species: 'Humain',
    name: 'Nabila Benatia',
    image: 'https://mediamass.net/jdd/public/documents/celebrities/5493.jpg',
    bonnitude: "Canon de l'espace",
    phrase: 'Être acceptée comme je suis',
    planete: 'Terre',
    hobbies: 'Les produits capillaires'
  },
  {
    id: 20,
    species: 'Humain',
    name: 'Jacky Propre',
    image:
      'https://pm1.narvii.com/7150/9a2fdbafc54576754348c2de91f08d11d05db8ear5-681-382_00.jpg',
    bonnitude: "Canon de l'espace",
    phrase: "Là où la propreté fait défaut, l'amour ne reste pas en vie",
    planete: 'Terre',
    hobbies: "Collection d'éponge"
  },
  {
    id: 17,
    species: 'Humain',
    name: 'James Franco',
    image:
      'https://i1.wp.com/www.starmag.com/wp-content/uploads/2018/06/james-franco-750x400.jpg?resize=1200%2C675&ssl=1',
    bonnitude: "Canon de l'espace",
    phrase: 'Chuis chaud comme la braise',
    planete: 'Terre',
    hobbies: 'Attraper des poux'
  },
  {
    id: 18,
    species: 'Humain',
    name: 'Marie Gibbs',
    age: 4,
    image:
      'https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/bouh/bouh.JPG',
    bonnitude: 'Débris de la galaxie',
    phrase: "J'ai peur de rien et je suis insconciente",
    planete: 'Minou',
    hobbies:
      'de voir à quel point l’énergie que je produit par mon rire peut être puissante.'
  },
  {
    id: 6,
    species: 'Alien',
    name: 'Célia Boa',
    age: 21,
    image:
      'https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/celia/celia.JPG',
    bonnitude: "Canon de l'espace",
    phrase: 'Douce et ensorcelante.',
    planete: 'Minou',
    hobbies: 'Le luxe et les poils'
  },
  {
    id: 7,
    species: 'Alien',
    name: 'Léon Bogue',
    age: 888,
    image:
      'https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/celia/celia.JPG',
    bonnitude: 'Débris de la galaxie',
    phrase:
      "J'aime préparer en cachette un plan diabolique pour arriver à mes fins.",
    planete: 'Machine infernale',
    hobbies: 'Inventer un système pour arracher des hurlements aux enfants.'
  },
  {
    id: 8,
    species: 'Alien',
    name: 'Center Detection',
    age: 2319,
    image:
      'https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/cda/cda.JPG',
    bonnitude: 'Débris de la galaxie',
    phrase:
      "J'aime sortir ma tenue d'urgence pour me protéger des contaminations",
    planete: 'Chauve souris',
    hobbies: 'Arracher des cheveux dans une fourrure de monstre'
  },
  {
    id: 9,
    species: 'Alien',
    name: 'Georges Epouvanteur',
    age: 2319,
    image:
      'https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/epouvanteur/epouvanteur.JPG',
    bonnitude: "Canon de l'espace",
    phrase: 'Si je me coupe les ongles des pieds je fais du 42 sinon du 56',
    planete: 'Epouvanteuse',
    hobbies: 'Aiguiser les griffes,brosser les crocs et limer les cornes.'
  },
  {
    id: 10,
    species: 'Alien',
    name: 'Fouinasse',
    age: 900,
    image:
      'https://djoul3.pagesperso-orange.fr/monstres&cie/personnages/assistant/assistant.JPG',
    bonnitude: "Canon de l'espace",
    phrase:
      'Si tu es petit rond et marron et que tu sens pas bon, tu es fais pour moi',
    planete: '',
    hobbies:
      'Les grandes balades sur la plage et construire en secret des machines à aspirer des crottes.'
  },
  {
    id: 11,
    species: 'Alien',
    name: 'Bud Budiovitch',
    image:
      'https://media.discordapp.net/attachments/833684991724093471/841596747535876146/bud.jpg?width=420&height=559',
    bonnitude: 'Débris de la galaxie',
    phrase: 'Moche et sans ami – sauras-tu me complimenter ? ',
    planete: 'ZigmaB',
    hobbies: 'Regarder la Tv et manger des sandwichs'
  },
  {
    id: 12,
    species: 'Alien',
    name: 'Stereo Monovici',
    image:
      'https://64.media.tumblr.com/701ced851fdf2ecd3ece094baddbfd81/tumblr_pecna1Ii8y1uqo848o1_500.png',
    bonnitude: "Canon de l'espace",
    phrase:
      'Si un jour ton cœur ne bat plus, je te donnerai le mien, car sans toi, il me sert à rien.',
    planete: 'ZigmaB',
    hobbies: 'Raconter des mythos'
  },
  {
    id: 13,
    species: 'Alien',
    name: 'Ethno Polino',
    image:
      'https://64.media.tumblr.com/251a47a14c319a620fda2a3434d7c303/tumblr_pn7h9hYFMZ1t5fmi8_1280.jpg',
    bonnitude: "Canon de l'espace",
    phrase:
      'Si à chaque fois que je pensais à toi, il poussait une fleur, alors la Terre serait un immense jardin de roses.',
    planete: 'ZigmaB',
    hobbies: "lire un livre, boire de l'eau"
  },
  {
    id: 14,
    species: 'Alien',
    name: 'Gorgeous Klatoo',
    image:
      'https://s2.qwant.com/thumbr/0x0/7/c/3324f84d21ff572619d283396cdb3fb35bc1ce24daa73269ca4e124838bc3d/Gorgious.jpg?u=http%3A%2F%2Fimg2.wikia.nocookie.net%2F__cb20101227225019%2Fspacegoofs%2Fimages%2F3%2F3a%2FGorgious.jpg&q=0&b=1&p=0&a=0',
    bonnitude: 'Débris de la galaxie',
    phrase:
      'Je suis nouveau en ville, pourrais-tu m’indiquer le chemin pour aller à ton appartement ?',
    planete: 'ZigmaB',
    hobbies: 'Manger, dormir et inversement'
  },
  {
    id: 15,
    species: 'Humain',
    name: 'Lenda Oakland',
    image:
      'https://image.freepik.com/photos-gratuite/plan-horizontal-jolie-femme-peau-foncee-coiffure-afro-large-sourire-dents-blanches-montre-quelque-chose-gentil-ami-pointe-dans-coin-superieur-droit-se-tient-contre-mur_273609-16442.jpg',
    bonnitude: "Canon de l'espace",
    phrase: "Besoin de quelqu'un pour monter un meuble Ikea",
    planete: 'Terre',
    hobbies: 'Boire un verre en terasse avec vu sur Neptune'
  },
  {
    id: 16,
    species: 'Humain',
    name: 'Gilbert Booba',
    image:
      'https://www.zbrushcentral.com/uploads/default/original/4X/f/9/b/f9bcddd925b43b98c3f09aac2591d0dff20c6a15.jpeg',
    bonnitude: 'Débris de la galaxie',
    phrase: 'Besoin de tendresse dans ce monde de brutes',
    planete: 'Terre',
    hobbies: 'Tuer'
  },
  {
    id: 19,
    species: 'Humain',
    name: 'Eve angeli',
    image:
      'https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2Fb4d37919-b2cc-405c-b4be-34720f4e09cc.2Ejpeg/920x518/quality/80/eve-angeli.jpg',
    bonnitude: "Canon de l'espace",
    phrase:
      "On dit que l'amour se trouve à chaque coin de rue. Je dois vivre sur un rond point",
    planete: 'Terre',
    hobbies: 'Physique Quantique'
  },
  {
    id: 21,
    species: 'Humain',
    name: 'Evelyne Dheliat',
    image:
      'https://photos.tf1.fr/700/933/evelyne-dheliat-portrait2-f71409-0@1x.jpg',
    bonnitude: "Canon de l'espace",
    phrase:
      " L'amour, c'est le soleil après la pluie, et la luxure, c'est l'orage après le soleil.",
    planete: 'Terre',
    hobbies: 'Danser sous la pluie'
  },
];

let allMatches = [];
function AlienList() {
  const [position, setPosition] = useState(0);

  const profileSelection = profiles.filter(
    (element) =>
      element.species === localStorage.getItem('species') &&
      element.bonnitude === localStorage.getItem('bonnitude')
  );

  function handleClick(e) {
    e.preventDefault();
    setPosition(position + 1);
  }

  function handleMatch(e) {
    e.preventDefault();
    console.log(JSON.stringify(profileSelection[position]));
    allMatches.push(profileSelection[position]);
    localStorage.setItem('match', JSON.stringify(allMatches));
    setPosition(position + 1);
  }

  console.log(localStorage.getItem('match'));

  return (
    <div>
      <AlienItem {...profileSelection[position]} />
      <div className='buttons'>
        <button className='next' type='button' onClick={handleClick}>
          Euh, non.
        </button>
        <button className='kiffe' type='button' onClick={handleMatch}>
          Toi j'te kiffe
        </button>
      </div>
    </div>
  );
}

export default AlienList;
