// Modals 
var modal = document.getElementById("myModal");
var modalEnd = document.getElementById("myModalEnd");

let closeModal = document.getElementById("play-button");
let closeEndModal = document.getElementById("play-again-button");

closeModal.onclick = function() {
    modal.style.display = "none";
  }
closeEndModal.onclick = function() {
    modalEnd.style.display = "none";
}

// Circle
document.querySelectorAll( '.full-circle' ).forEach( ( fullCircle )=>{
    let circles = fullCircle.querySelectorAll( '.letter' )
    let angle = 360-90-(360/25), dangle = 360 / circles.length
    for( let i = 0; i < circles.length; ++i ){
      let circle = circles[i]
      angle += dangle
      circle.style.transform = `rotate(${angle}deg) translate(${fullCircle.clientWidth / 2 - 30}px) rotate(-${angle}deg)`
    }
})


//Video cam
const video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
}


const questions1 = [
  {letter: "a", answer: "astillero", status: 0, question: "CON LA A. Establecimiento donde se construyen y reparan buques",},
  {letter: "b", answer: "bodega",status: 0,question:"CON LA B. Almacén de vinos",},
  {letter: "c", answer: "colonia", status: 0, question: "CON LA C. Perfume compuesto de agua, alcohol y esencias aromáticas",},
  {letter: "d", answer: "derbi", status: 0, question:"CON LA D. Encuentro de fútbol ente dos equipos, tradicionalmente rivales, y generalmente de la misma ciudad o región",},
  {letter: "e", answer: "eden", status: 0, question: "CON LA E. Paraíso terrenal que, según la biblia, vivieron Adán y Eva antes de ser expulsados por su desobediencia",},
  {letter: "f", answer: "flamear", status: 0, question: "CON LA F. Rociar un alimento con un licor y prenderle fuego",},
  {letter: "g", answer: "gris", status: 0, question:"CON LA G. Se dice del color semejante al de la ceniza y que resulta de mezclar el blanco y el negro",},
  {letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento",},
  {letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano",},
  {letter: "j", answer: "jardineria", status: 0, question: "CON LA J. Arte o actividad de cultivar plantas de adorno",},
  {letter: "l", answer: "loro", status: 0, question: "CON LA L. Ave tropical de brillante colorido con pico fuerte y curvado que es capaz de imitar la voz humana",},
  {letter: "m", answer: "macarron", status: 0, question: "CON LA M. Pasta alimenticia de harina que tiene forma de canuto más o menos alargado",},
  {letter: "n", answer: "nuez", status: 0, question: "CON LA N. Prominencia que forma el cartílago tiroides en la parte anterior del cuello del varón adulto",},
  {letter: "ñ", answer: "greña", status: 0, question: "CONTIENE LA Ñ. Mechón de pelo enredado o desarreglado",},
  {letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",},
  {letter: "p", answer: "piscina", status: 0, question: "CON LA P. Construcción que contiene gran cantidad de agua que se destina al baño, a la natación o a otros deportes acuáticos",},
  {letter: "q", answer: "adoquin", status: 0, question: "CONTINEN LA Q. Piedra tallada en forma de prisma rectangular que se emplea para pavimentar calles o carreteras",},
  {letter: "r", answer: "riel", status: 0, question: "CON LA R. Carril de las vías férreas" },
  {letter: "s", answer: "semaforo", status: 0, question: "CON LA S. Aparato eléctrico de señales luminosas para regular la circulación",},
  {letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",},
  {letter: "u", answer: "urgido", status: 0, question: "CON LA U. Participio del verbo urgir",},
  {letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",},
  {letter: "x", answer: "ex", status: 0, question: "CONTIENE LA X. Coloquialmente, persona que ha dejado de ser cónyuge o pareja sentimental de otra",},
  {letter: "y", answer: "cowboy", status: 0, question: "CONTIENE LA Y. Vaquero de las grandes praderas del Oeste de Estados Unidos",},
  {letter: "z", answer: "zapeo", status: 0, question: "CON LA Z. Cambio continuo de un canal de televisión a otro por medio del mando a distancia",},
];

const questions2 = [
  {letter: "a", answer: "anticuario", status: 0, question: "CON LA A. Persona que colecciona o negocia con antigüedades",},
  {letter: "b", answer: "biberon", status: 0, question: "CON LA B. Utensilio para la lactancia artificial que consiste en una botella pequeña con una tetina de goma",},
  {letter: "c", answer: "capo", status: 0, question: "CON LA C. Jefe de la mafia, especialmente de narcotraficantes",},
  {letter: "d", answer: "desodorante", status: 0, question: "CON LA D. Producto que se utiliza para suprimir el olor corporal o de algún recinto",},
  {letter: "e", answer: "efimero", status: 0, question: "CON LA E. Pasajero, de corta duración",},
  {letter: "f", answer: "faja", status: 0, question: "CON LA F. Prenda interior elástica que ciñe la cintura, o la cintura y las caderas",},
  {letter: "g", answer: "gominola", status: 0, question:"CON LA G. Golosina blanca masticable, generalmente recubierta de azúcar",},
  {letter: "h", answer: "historia", status: 0, question: "CON LA H. Conjunto de todos los hechos ocurridos en tiempos pasados",},
  {letter: "i", answer: "ilves", status: 0, question: "CON LA I. Apellido del político que fue presidente de Estonia entre los años 2006 y 2016",},
  {letter: "j", answer: "judion", status: 0, question: "CON LA J. Variedad de judía de vainas anchas y semilla grande",},
  {letter: "l", answer: "linaje", status: 0, question: "CON LA L. Ascendencia o descendencia de una familia, especialmente noble",},
  {letter: "m", answer: "madriguera", status: 0, question: "CON LA M. Cueva en la que habitan ciertos animales, especialmente los conejos",},
  {letter: "n", answer: "navato", status: 0, question: "CON LA N. Espinazo de los vertebrados",},
  {letter: "ñ", answer: "acuñar", status: 0, question: "CONTIENE LA Ñ. Hacer o fabricar moneda",},
  {letter: "o", answer: "oririco", status: 0, question: "CON LA O. Perteneciente o relativo a los sueños",},
  {letter: "p", answer: "piolet", status: 0, question: "CON LA P. Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo",},
  {letter: "q", answer: "equilatero", status: 0, question: "CON LA Q. Triángulo que tiene todos sus lados iguales",},
  {letter: "r", answer: "risaralda", status: 0, question: "CON LA R. Departamento de Colombia con capital en la ciudad de Pereira" },
  {letter: "s", answer: "sentar", status: 0, question: "CON LA S. Poner o colocar a alguien en una silla o banco, de manera que quede apoyado y descansando sobre las nalgas",},
  {letter: "t", answer: "tipi", status: 0, question: "CON LA T. Tienda de piel de forma cónica que utilizaban como vivienda los indios de las praderas de América del Norte",},
  {letter: "u", answer: "unilateral", status: 0, question: "CON LA U. Que se refiere o se circunscribe solamente a una parte o a un aspecto de algo",},
  {letter: "v", answer: "vilano", status: 0, question: "CON LA V. Flor del cardo",},
  {letter: "x", answer: "dux", status: 0, question: "CONTIENE LA X. En las repúblicas de Venecia o Génova, príncipe o magistrado supremo",},
  {letter: "y", answer: "ensayar", status: 0, question: "CONTIENE LA Y. Preparar el montaje y ejecución de un espectáculo antes de ofrecerlo al público",},
  {letter: "z", answer: "zumbado", status: 0, question: "CON LA Z. Participio del verbo zumbar",},
];

const questions3 = [
  {letter: "a", answer: "agenda", status: 0, question: "CON LA A. Libro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer",},
  {letter: "b", answer: "bonanza", status: 0, question: "CON LA B. Prosperidad",},
  {letter: "c", answer: "caracol", status: 0, question: "CON LA C. Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse",},
  {letter: "d", answer: "dormir", status: 0, question: "CON LA D. Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios",},
  {letter: "e", answer: "entrecot", status: 0, question: "CON LA E. Trozo de carne sacado de entre costilla y costilla de la res",},
  {letter: "f", answer: "farhadi", status: 0, question: "CON LA F. Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017",},
  {letter: "g", answer: "gorgorito", status: 0, question:"CON LA G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar",},
  {letter: "h", answer: "hidroavion", status: 0, question: "CON LA H. Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua",},
  {letter: "i", answer: "inapetencia", status: 0, question: "CON LA I. Falta de gana de comer",},
  {letter: "j", answer: "jardineria", status: 0, question: "CON LA J. Arte y oficio del jardinero",},
  {letter: "l", answer: "lobera", status: 0, question: "CON LA L. Guarida de lobos",},
  {letter: "m", answer: "mentira", status: 0, question: "CON LA M. Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída",},
  {letter: "n", answer: "nativo", status: 0, question: "CON LA N. Se aplica al que ha nacido en el lugar de que se trata",},
  {letter: "ñ", answer: "hogaño", status: 0, question: "CONTIENE LA Ñ. De tiempo que indica en esta época diferencia de antaño en época inferior",},
  {letter: "o", answer: "organo", status: 0, question: "CON LA O. De las partes del pulpo, animal o vegetal que ejercen una función",},
  {letter: "p", answer: "plotino", status: 0, question: "CON LA P. Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría",},
  {letter: "q", answer: "chisquero", status: 0, question: "CON LA Q. Encendedor antiguo de bolsillo",},
  {letter: "r", answer: "rafaga", status: 0, question: "CON LA R. Viento fuerte, resentido y de corta duración",},
  {letter: "s", answer: "simple", status: 0, question: "CON LA S. Se aplica a lo que no tiene complicación",},
  {letter: "t", answer: "trece", status: 0, question: "CON LA T. Número cardinal equivalente a 10 + 3",},
  {letter: "u", answer: "uderzo", status: 0, question: "CON LA U. Apellido del dibujante y guionista francés autor de la serie Asterix",},
  {letter: "v", answer: "verde", status: 0, question: "CON LA V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda",},
  {letter: "x", answer: "exegesis", status: 0, question: "CONTIENE LA X. Explicación o interpretación particularmente de los libros de la Biblia",},
  {letter: "y", answer: "moncayo", status: 0, question: "CONTIENE LA Y. Nombre de la montaña más alta del sistema ibérico",},
  {letter: "z", answer: "zoodiacal", status: 0, question: "CON LA Z. Perteneciente o relativo al zoodíaco",},
];


//INPUTS FROM BROWSER

document.getElementById("play-button").addEventListener("click", () => {
  playOneGame();
})

const getUserAnswer = () => {
  const answer = document.getElementById("userAnswer").value;
  document.getElementById("userAnswer").value = "";
  if (answer !== " "){
    checkOneWord(answer.toLowerCase());
    printOneWord();
  } 
}

document.onkeydown = (evt) => {
  if(evt.key === "Enter"){
    getUserAnswer();
  }
}

document.getElementById("userSkip").addEventListener("click", () => {
  skipOneWord();
})

document.getElementById("userQuit").addEventListener("click", () => {
  endGame();
})


const getUserTime = () => {
  let seconds;
  userSeconds = document.getElementById("time-seconds").value;
  if (userSeconds === ""){
    seconds = 130;
  } else {
    seconds = userSeconds;
  }
  return seconds;
}

const printQuestion = document.querySelector(".question-box");

//////////////////////


let unanweredQuestions = [];
let wordCount = 0;
let correctAnswers = 0;
let wrongAnswers = 0;



const playOneGame = () => {
  seconds = getUserTime();
  setInterval (() => {
    if (seconds <= 0){
      endGame("timeout");
    } else {
      document.getElementById("countdown").innerHTML = seconds;
    }
    seconds -= 1;
  }, 1000)

  let userQuestions = getRandomUserQuestions(questions1, questions2, questions3);
  playOneRound(userQuestions);

}

const playOneRound = (questions) => {
  unanweredQuestions = [];
  for (let i=0; i<questions.length; i++){
    let word = questions[i];
    if (word.status === 0) {
      unanweredQuestions.push(word);
    }
  }
  printOneWord();
};


const printOneWord = () => {
  let totalGuessed = correctAnswers + wrongAnswers;
  if (correctAnswers === 25){
    endGame("winner");
  } else if (totalGuessed === 25){
    endGame();
  } else {
    let word = unanweredQuestions[wordCount];
    printQuestion.innerHTML = word.question;
  }
}


const checkOneWord = (answer) => {
  let word = unanweredQuestions[wordCount];
  if (answer === ""){
    wordCount = 0;
  } else if (answer === word.answer){
    word.status = true;
    document.getElementById(word.letter).classList.add ("correct");
    correctAnswers +=1;
    document.getElementById("correctAnswers").innerHTML = correctAnswers;
    document.getElementById("wrongAnswer").style.display = "none";
    wordCount += 1;
  } else if (answer !== word.answer){
    console.log("wrong");
    word.status = false;
    document.getElementById(word.letter).classList.add("incorrect");
    wrongAnswers += 1;
    document.getElementById("wrongAnswerWord").innerHTML = word.answer;
    document.getElementById("wrongAnswer").style.display = "block";
    wordCount += 1;
  }

  if (wordCount >= 25) {
    wordCount = 0;
    console.log(unanweredQuestions);
    playOneRound(unanweredQuestions);
  };
}

const skipOneWord = () => {
  wordCount += 1;
  document.getElementById("wrongAnswer").style.display = "none";

  if (wordCount >= 25) {
    wordCount = 0;
    console.log(unanweredQuestions);
    playOneRound(unanweredQuestions);
  } else {
    printOneWord(unanweredQuestions);
  }
}



const endGame = (input) => {
  if (input === "timeout"){
    document.getElementById("timeOutMessage").style.display = "block";
  } else if (input === "winner"){
    document.getElementById("winnerMessage").style.display = "block"
  }
  document.getElementById("correct-answers").innerHTML = correctAnswers;
  document.getElementById("wrong-answers").innerHTML = wrongAnswers;
  modalEnd.style.display = "flex";
  document.getElementById("play-again-button").addEventListener("click", () => {
    location.reload();
  })
}


const getRandomUserQuestions = (questions1, questions2, questions3) => {
  let clonedQuestions1 = structuredClone(questions1);
  let clonedQuestions2 = structuredClone(questions2);
  let clonedQuestions3 = structuredClone(questions3);
  let userQuestions = [];
  for (let i=0; i<questions1.length; i++){
      let randomNumber = Math.floor(Math.random() * 3);
      if (randomNumber === 0){
          userQuestions.push(clonedQuestions1[i]);
      } else if (randomNumber === 1){
          userQuestions.push(clonedQuestions2[i]);
      } else {
          userQuestions.push(clonedQuestions3[i]);
      }
  }
  return userQuestions;
}



