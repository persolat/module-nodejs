var questionHandler = require('./questionHandler');

var questions = [
    "Comment t'appelles-tu ?",
    "Que fais-tu dans la vie ?",
    "Quel est ton langage de programmation prefere ?"
];

var attributes = ['name', 'hobby', 'lg'];

questionHandler
    .setQuestions(questions)
    .setAttributes(attributes)
    ask();
