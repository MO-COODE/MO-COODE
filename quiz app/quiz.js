
const quizData = [
    {
        question: 'On which day did Nigeria become an independent Nation',

        a: 'October 1st, 1960',
        b: 'November 1st, 1960',
        c: 'October 1st, 1970',
        d: 'January 1st, 1960', 
        correct: 'a',
    },

    {
        question: 'The name of the Minister of Communication, Innovation and Digital Economy is:',

        a: 'Omotosho Monsur',
        b: 'Boluwatife Tijani',
        c: 'Bosun Tijani',
        d: 'Babangida Tijani',
        correct: 'c',
    },

    {
        question: 'CSS stands for:',

        a: 'Camera Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Cascading Style System',
        d: 'Clownish Style Sheets',
        correct: 'b',
    },    

    {
        question: 'Which of the following is false:',

        a: 'HTML stands for Hyper Text Mark-up Language',
        b: 'Javascript adds interactivity to webpage',
        c: 'HTML is a programming Language',
        d: 'CSS is used to style HTML',
        correct: 'c',
    },

    {
        question: 'Which of these is true?',

        a: 'Javascript can be used to write backend code with the aid of NODE.JS',
        b: 'Javascript cannot be used to write backend code',
        c: 'Javascript is only used to write frontend code',
        d: 'Node js is a stand alone programming language',
        correct: 'a',

    }
];

const quiz = document.getElementById('quiz');
const answerE1s = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers()
{
    answerE1s.forEach(answerE1 => answerE1.checked = false)
};

function getSelected() {
    let answerE1

    answerE1s.forEach(answerE1 => {
        if(answerE1.checked){
            answer = answerE1.id
        }
    })
    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score ++
        }

        currentQuiz ++
          
            if (currentQuiz < quizData.length)
            {
                loadQuiz()
            } else {
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
                `
            }  
    }
  
})