// creating a array of questions
const questionSet = [
    {
        id: 1,
        question: 'What does URL stand for?',
        option1: 'Uniform Resource Locator',
        option2: 'Uniform Resource Location',
        option3: 'Universal Response Locator',
        option4: 'Universal Response Location',
        answer: [1, 3, 2]
    },
    {
        id: 2,
        question: 'Which one of the following is not a web browser?',
        option1: 'Safari',
        option2: 'Facebook',
        option3: 'Firefox',
        option4: 'Chrome',
        answer: [2]
    }
]

// adding new question to array as a object 
function addQuestion() {
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;

    const answer1 = document.getElementById("answer1");
    const answer2 = document.getElementById("answer2");
    const answer3 = document.getElementById("answer3");
    const answer4 = document.getElementById("answer4");

    let answer = [];
    if (answer1.checked == true) {
        answer.push(parseInt(document.getElementById("answer1").value))
    }
    if (answer2.checked == true) {
        answer.push(parseInt(document.getElementById("answer2").value))
    }
    if (answer3.checked == true) {
        answer.push(parseInt(document.getElementById("answer3").value))
    }
    if (answer4.checked == true) {
        answer.push(parseInt(document.getElementById("answer4").value))
    }

    const id = questionSet.length + 1;

    const obj =
    {
        id,
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        answer,
    };
    console.log(obj)
    questionSet.push(obj);

    // showing all question from array after adding a new question 
    showQuestion();

    document.getElementById('question').value = '';
    document.getElementById('option1').value = '';
    document.getElementById('option2').value = '';
    document.getElementById('option3').value = '';
    document.getElementById('option4').value = '';
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
            <div><input type="checkbox" ${question.answer.indexOf(1) != -1 ? 'class = ' + '"correct' + question.id + '"' : 'class = ' + '"wrong' + question.id + '"'}>${question.option1}</div><br>
            <div><input type="checkbox" ${question.answer.indexOf(2) != -1 ? 'class = ' + '"correct' + question.id + '"' : 'class = ' + '"wrong' + question.id + '"'}>${question.option2}</div><br>
            <div><input type="checkbox" ${question.answer.indexOf(3) != -1 ? 'class = ' + '"correct' + question.id + '"' : 'class = ' + '"wrong' + question.id + '"'}>${question.option3}</div><br>
            <div><input type="checkbox" ${question.answer.indexOf(4) != -1 ? 'class = ' + '"correct' + question.id + '"' : 'class = ' + '"wrong' + question.id + '"'}>${question.option4}</div><br>
        </div>
        `
        console.log(div.innerHTML)
        quizList.appendChild(div);
    }
}

// showing result
function result() {
    let score = 0;
    for (question of questionSet) {
        let flag = 1;

        const answerId = 'correct' + question.id;
        const rightElements = document.getElementsByClassName(answerId);
        for (element of rightElements) {
            element.parentElement.setAttribute("class", "right-class");
            if (element.checked == false) {
                flag = 0;
            }
        }

        const wrongId = 'wrong' + question.id;
        const wrongElements = document.getElementsByClassName(wrongId);
        for (element of wrongElements) {
            if (element.checked == true) {
                flag = 0;
                element.parentElement.setAttribute("class", "wrong-class");
            }
        }

        // for (element of rightElements) {
        //     element.checked = false;
        //     element.parentElement.removeAttribute("class", "right-class");
        // }

        if (flag == 1) {
            score++;
        }

    }

    document.getElementById('result').innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `<h3>Score : ${score}`
    document.getElementById('result').appendChild(div);
}
