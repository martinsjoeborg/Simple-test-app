export default function testPage() {
    content.innerHTML = "";

    var questionDiv = document.createElement('h3');
    content.appendChild(questionDiv);

    var inputAnswer = document.createElement('input');
    content.appendChild(inputAnswer);

    var nextBtn = document.createElement('button');
    content.appendChild(nextBtn);
    nextBtn.innerHTML = "Next";

    var questionList = ["What is the sum of 5 + 1?", "What is the name of the capital of Brazil?", "What is the name of the famous painting of a women who might smile and might not at the same time?"];

    var answerList = ["6", "Brasilia", "Mona Lisa"];

    var answers = [];

    if(!localStorage.getItem('answers')){
        localStorage.setItem('answers', JSON.stringify(answers));
    }

    // questionDiv.innerHTML = questionList[0];

    nextBtn.addEventListener('click', () => {
        for(let i = 0; i < questionList.length; i++){
            questionList[i]++;
            questionDiv.innerHTML = questionList[i];
        }
        

        // answers.push(inputAnswer.value);
        // localStorage.setItem('answers', JSON.stringify(answers));
    })


}