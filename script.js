// creating a array of questions
const questionSet = [
    {
        id: 1,
        question: 'What does URL stand for?',
        option1: 'Uniform Resource Locator',
        option2: 'Uniform Resource Location',
        option3: 'Universal Response Locator',
        option4: 'Universal Response Location',
        answer: 1
    },
    {
        id: 2,
        question: 'Which one of the following is not a web browser?',
        option1: 'Safari',
        option2: 'Facebook',
        option3: 'Firefox',
        option4: 'Chrome',
        answer: 2
    }
]

// adding new question to array as a object 
function addQuestion() {
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const answer = document.getElementById('answer').value;

    const id = questionSet.length + 1;

    const obj =
    {
        id,
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        answer: parseInt(answer),
    };

    questionSet.push(obj);

    // showing all question from array after adding a new question 
    showQuestion();

    document.getElementById('question').value = '';
    document.getElementById('option1').value = '';
    document.getElementById('option2').value = '';
    document.getElementById('option3').value = '';
    document.getElementById('option4').value = '';
    document.getElementById('answer').value = '';
}

// showing the initial questions
if (questionSet.length == 2) showQuestion();

// showing all questions from array
function showQuestion() {
    const quizList = document.getElementById('quizList');
    quizList.innerHTML = '';
    for (question of questionSet) {
        const div = document.createElement('div');
        div.innerHTML =
            `
        <div class="container">
            ${question.question}
            <hr>
            <input type="radio" ${'name = ' + '"question' + question.id + '"'} ${question.answer == 1 ? 'id = ' + '"correct' + question.id + '"' : ''}>${question.option1}<br>
            <input type="radio" ${'name = ' + '"question' + question.id + '"'} ${question.answer == 2 ? 'id = ' + '"correct' + question.id + '"' : ''}>${question.option2}<br>
            <input type="radio" ${'name = ' + '"question' + question.id + '"'} ${question.answer == 3 ? 'id = ' + '"correct' + question.id + '"' : ''}>${question.option3}<br>
            <input type="radio" ${'name = ' + '"question' + question.id + '"'} ${question.answer == 4 ? 'id = ' + '"correct' + question.id + '"' : ''}>${question.option4}<br>
        </div>
        `
        quizList.appendChild(div);
    }
}

// showing result
function result() {
    let score = 0;
    for (question of questionSet) {
        const answerId = 'correct' + question.id;
        if (document.getElementById(answerId).checked) {
            score++;
        }
    }
    document.getElementById('result').innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `<h3>Score : ${score}`
    document.getElementById('result').appendChild(div);
}
