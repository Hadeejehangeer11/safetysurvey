// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
        type: "radiogroup",
        name: "question1",
        title: "Which SPF blocks out the most UV rays?",
        choices: [
            "Spf 60", "Spf 30", "Spf 50", "SPF 15"
        ],
        correctAnswer: "Spf 60"
    },

    {
        type: "radiogroup",
        name: "question2",
        title: "How often should you re-apply sunscreen when outdoors?",
        choices: [
            "Every 2 hours", "Every 5 hours", "Every 3 hours", "Every 8 hours"
        ],
        correctAnswer: "Every 2 hours"
    },

    {
        type: "radiogroup",
        name: "question3",
        title: "How long can it take for UV damage to harm skin?",
        choices: [
            "11 Minutes", "60 minutes", "25 minutes", "30 minutes"
        ],
        correctAnswer: "11 Minutes"

    },
    {
        type: "radiogroup",
        name: "question4",
        title: "What is the most common way that skin cancer forms? ",
        choices: [
            "Overexposure to UV rays", "Lack of vitamins", "Lack of sunlight", "Poor fluid intake"
        ],
        correctAnswer: "Overexposure to UV rays"
    },
    {
        type: "radiogroup",
        name: "question5",
        title: "When does the sun produce the most UV rays?",
        choices: [
            "Between 10 am to 4 pm", "Between 4 pm to 8 pm", "Between 6 am to 12 pm", "Between 1 pm to 6 pm"
        ],
        correctAnswer: "Between 10 am to 4 pm"

    },
    {
        type: "radiogroup",
        name: "question6",
        title: "Which of the following are serious signs of heatstroke?",
        choices: [
            "Dry Lips", "Slurred speech", "Rashes, itchy eyes"
        ],
        correctAnswer: "Slurred speech"

    },

    {
        type: "radiogroup",
        name: "question7",
        title: "Which of the following makes people more susceptible to skin damage due to being outside?",
        choices: [
            "Older age", "Not drinking enough fluids", "Lack of vitamin D", "Lack of movement"
        ],
        correctAnswer: "Older age"

    },
    {
        type: "radiogroup",
        name: "question8",
        title: "What is the best way to protect yourself from UV rays causing harm to you?",
        choices: [
            "Applying sunscreen", "Wearing a hat", "Wearing long sleeves", "Being active "
        ],
        correctAnswer: "Applying sunscreen"
    },

    {
        type: "radiogroup",
        name: "question9",
        title: "Should you apply sunscreen if you are swimming?",
        choices: [
            "Yes", "no"
        ],
        correctAnswer: "Yes"

    },
    {
        type: "radiogroup",
        name: "question10",
        title: "How long does sunscreen remain effective before expiring?",
        choices: [
            "3 years", "1 year", "5 years", "2 years"
        ],
        correctAnswer: "3 years"


    }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Summer Sun Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Lifeguard Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
       
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
            
        }
    });

    return <Survey model={survey} />;
}
