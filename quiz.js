const quizData = [
    {
        question: "What is the full form of HTML ?",
        options: ["Hypertext markup language", "Hypertextual marcus language", "Human text magnus language", "Hyperbola text marcus langauge"],
        answer: "Hypertext markup language"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C++", "HTML", "Java"],
        answer: "HTML"
    },
    {
        question: "What does HTTP stand for?",
        options: [
            "HyperText Transfer Protocol",
            "HighText Transfer Protocol",
            "Hyper Transfer Text Protocol",
            "None of the above"
        ],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["Django", "Flask", "React", "Laravel"],
        answer: "React"
    },
    {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Google", "Microsoft", "IBM"],
        answer: "Microsoft"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which language is primarily used for machine learning?",
        options: ["C#", "JavaScript", "Python", "PHP"],
        answer: "Python"
    },
    {
        question: "Which tool is used for version control?",
        options: ["Git", "Docker", "AWS", "Figma"],
        answer: "Git"
    },
    {
        question: "Which of the following is not a database?",
        options: ["MongoDB", "MySQL", "Firebase", "React"],
        answer: "React"
    },
    {
        question: "Which method is used to print in JavaScript?",
        options: ["echo()", "console.log()", "System.out.print()", "print()"],
        answer: "console.log()"
    }
];

let score = 0;
let currentIndex = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option; // ✅ Fixed: btn.innerTEXT → btn.innerText
        btn.onclick = () => selectAnswer(option);
        optionsDiv.appendChild(btn); // ✅ Fixed: option.appendChild → optionsDiv.appendChild
    });
}

function selectAnswer(selected) {
    const correct = quizData[currentIndex].answer;
    if (selected === correct) {
        score++;
    }
    currentIndex++;
    if (currentIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector(".Quiz-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerText = `${score}/${quizData.length}`;
}

// Start the quiz when page loads
window.onload = loadQuestion;


function restartQuiz(){
    window.location="quiz.html";
}