const startButton = document.getElementById("start-btn");
const startPage = document.getElementById("teste");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  startPage.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Reiniciar Quiz";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question:
      "Sobre as empresas que ter??o que se adequar as normas da Lei Geral de Prote????o de Dados Pessoais, assinale a alternativa correta.",
    answers: [
      {
        text:
          "A LGPD se aplica para apenas para empresas de tecnologia que possuam um setor especializado na coleta de dados pessoais.",
        correct: false
      },
      {
        text:
          "A LGPD n??o se aplica apenas para empresas de tecnologia, e sim para toda empresa que colete ou armazene dados pessoais.",
        correct: true
      },
      {
        text:
          "A LGPD se aplica apenas para as empresas da ??rea de tecnologia que possuem mais de 100 clientes.",
        correct: false
      },
      { text: "A LGPD se aplica para todas as empresas.", correct: false }
    ]
  },
  {
    question:
      "Sobre a coleta de dados pessoais, escolha a alternativa correta:",
    answers: [
      {
        text:
          "A empresa que coletar informa????es pessoais precisar?? ter apenas uma base de dados para armazen??-los.",
        correct: false
      },
      {
        text:
          "A empresa poder?? coletar os dados pessoais de adolescente de 16 a 18 anos mesmo sem a autoriza????o dos pais.",
        correct: false
      },
      {
        text:
          "A empresa dever?? garantir o direito ao titular de apagar todos os dados pessoais caso o mesmo solicite.",
        correct: true
      },
      {
        text:
          "A empresa s?? poder?? coletar dados pessoais caso o titular autorize, e n??o precisar?? informar a principio para qual finalidade os dados ser??o coletados.",
        correct: false
      }
    ]
  },
  {
    question:
      "Todo dado pessoal precisar?? ter o consentimento das pessoas para ser armazenado?",
    answers: [
      {
        text:
          "Sim, sem exce????o. Pois ?? previsto por lei que a pessoa dever?? saber que seus dados est??o sendo armazenados pela empresa.",
        correct: false
      },
      {
        text:
          "Sim, por??m, se a pessoa n??o tiver consentimento, e aconte??a um vazamento de dados, a empresa se ausentar?? da multa, mas poder?? sofrer uma a????o judicial.",
        correct: false
      },
      {
        text:
          "N??o, a lei prev?? outras bases legais, como o leg??timo Interesse. Ex: Caso a pessoa resida em um edif??cio pode ser de leg??timo interesse do condom??nio registrar as imagens das c??meras de seguran??a.",
        correct: true
      },
      {
        text:
          "N??o, a empresa poder?? armazenar os dados sem o consentimento das pessoas.",
        correct: false
      }
    ]
  },
  {
    question: "Quem fiscaliza o cumprimento da lei LGPD?",
    answers: [
      {
        text: "Autoridade Nacional de Padroniza????o dos Dados (ANPD).",
        correct: false
      },
      {
        text: "Autoridade Nacional de Prote????o de Dados (ANPD).",
        correct: true
      },
      { text: "Controladoria-Geral da Uni??o (CGU).", correct: false },
      {
        text:
          "Conselho de Controle das Atividades de Prote????o de Dados (CCAPD).",
        correct: false
      }
    ]
  },
  {
    question: "Quais os fundamentos da LGPD?",
    answers: [
      {
        text:
          "Respeito ?? privacidade, a autodetermina????o informativa, inviolabilidade da intimidade, e honra da imagem.",
        correct: true
      },
      {
        text:
          "Toda pessoa tem o direito de acesso ??s a????es e servi??os , independente de sexo, ra??a, ocupa????o, ou outras caracteristicas sociais ou pessoais.",
        correct: false
      },
      {
        text:
          "Toda pessoa que tem seus dados coletados, tem o direito de saber para que esses dados ser??o utilizados, respeitando sempre as normas do Conselho de Controle das Atividades de Prote????o de Dados.",
        correct: false
      },
      {
        text:
          "Dignidade, essa ?? a qualidade que define a ess??ncia humana para a LGPD. Um homem digno para a coleta de dados, ?? um homem que cujo exist??ncia dos dados tem valor absoluto.",
        correct: false
      }
    ]
  },
  {
    question:
      "Complete a frase: ?? do titular o direito de ___________, assim como a _________ de informa????es, tendo o _______, e informando-o sobre a informa????o da ___________.",
    answers: [
      {
        text:
          "Acesso aos dados coletados, finalidade da coleta, consentimento do titular, solicita????o da coleta.",
        correct: false
      },
      {
        text: "Seguran??a, empresa dispor, dado pessoal, empresa.",
        correct: false
      },
      {
        text:
          "Manter seus dados protegidos, empresa na coleta, consentimento do titular, solicita????o da coleta.",
        correct: false
      },
      {
        text:
          "Acesso aos dados coletados, solicita????o de corre????o, consentimento do titular, finalidade da coleta.",
        correct: true
      }
    ]
  },
  {
    question: "Segundo o Artigo 5?? da LGPD, considera-se ???titular???:",
    answers: [
      {
        text:
          "Conjunto estruturado de dados pessoais, estabelecido em um ou em v??rios locais, em suporte eletr??nico ou f??sico.",
        correct: false
      },
      {
        text:
          "Pessoa natural a quem se referem os dados pessoais que s??o objeto de tratamento.",
        correct: true
      },
      {
        text: "Agente de tratamento: o controlador e o operador.",
        correct: false
      },
      {
        text:
          "Car??ter particular ou original que distingue algu??m, individualidade.",
        correct: false
      }
    ]
  },
  {
    question: "Quais os dados que poder??o ser coletados pelas empresas?",
    answers: [
      {
        text:
          "As empresas dever??o coletar somente: Nome, Idade, Sexo, CPF, RG, Renda mensal, email e uma foto recente.",
        correct: false
      },
      {
        text:
          "As empresas poder??o coletar qualquer dado pessoal, caso a pessoa permita. ",
        correct: false
      },
      {
        text:
          "As empresas poder??o coletar somente: Nome, idade e sexo de adolescentes menores de 18 anos, mesmo com a autoriza????o dos pais.",
        correct: false
      },
      {
        text:
          "As empresas dever??o coletar somente os dados necess??rios aos servi??os prestados.",
        correct: true
      }
    ]
  },
  {
    question:
      "Para que serve a Lei Geral de Prote????o de Dados Pessoais (LGPD)?",
    answers: [
      {
        text:
          "Definir as principais diretrizes relacionadas com a obten????o, tratamento, prote????o e an??lise dos dados pessoais, principalmente pelos meios digitais.",
        correct: true
      },
      {
        text:
          "Manter todos os dados pessoais em sigilo, por??m poder?? serem sedidos para uma pessoa que comprove ser parente pr??ximo do titular.",
        correct: false
      },
      {
        text:
          "Essa lei foi criada com o intuito de estabelecer normas direcionadas para a responsabilidade dos gestores com rela????o ??s fina??as p??blicas.",
        correct: false
      },
      {
        text:
          "Essa lei ?? elaborada anualmente e tem como objetivo apontar as prioridades do governo sobre a an??lise anual dos dados pessoais.",
        correct: false
      }
    ]
  },
  {
    question:
      "Sem o consentimento do titular, os dados j?? fornecidos ser??o exclu??dos?",
    answers: [
      {
        text:
          "Sim, a pessoa ?? quem decide se a empresa ter?? seus dados ou n??o.",
        correct: false
      },
      {
        text:
          "Sim, a empresa n??o tem o direito de manter os dados das pessoas em hip??tese alguma.",
        correct: false
      },
      { text: "N??o, a empresa poder?? manter todos os dados.", correct: false },
      {
        text:
          "N??o necess??riamente, pois, a empresa pode necessitar de certos dados para que seja enviado boletos ou cobran??as.",
        correct: true
      }
    ]
  }
];
