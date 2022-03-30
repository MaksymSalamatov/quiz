const quizData = [
    {
        questions: 'What is HTML?',
        a: 'HybridText Markup Language',
        b: 'HyperText Markup Language',
        c: 'HyperText Marker Language',
        d: 'HybridText Marker Language',
        correct: 'b'
    },
    {
        questions: 'What is CSS?',
        a: 'Cascading Style Sheets',
        b: 'Customize Style Sheets',
        c: 'Cascading Sheets Style',
        d: 'Cascading Stand Sheets',
        correct: 'a'
    },
    {
        questions: 'Most useful programming languages?',
        a: 'Python',
        b: 'Java',
        c: 'C++',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        questions: 'Who developed JavaScript?',
        a: 'Bill Gates',
        b: 'Ronald Reigan',
        c: 'Brandan Eich',
        d: 'Your mom',
        correct: 'c'
    },
    {
        questions: 'When was developed JavaScript?',
        a: 'In 1298 year',
        b: 'In 1995 year',
        c: 'Yesterday',
        d: 'In 2000 year',
        correct: 'b'
    }
]

const questionElement = document.querySelector('#questions');
const quiz = document.querySelector('#quiz');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submit');
const answersElement = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerHTML = currentQuizData.questions;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answersElement.forEach(answerElement => {
        if(answerElement.checked) {
            answer = answerElement.id;
        }
    })

    return answer;
}

function deselectAnswers() {
    answersElement.forEach(answerElement => {
        answerElement.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    //check to see answer
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>\n
            <button onclick="location.reload()">Reload</button>`
            quiz.classList.add('quiz-style');
        }
    }
})