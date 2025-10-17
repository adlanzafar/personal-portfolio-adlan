const dataText = [
    "Hi, I'm Adlan.",
    "Saya adalah seorang mahasiswa Manajemen Informatika yang sangat antusias dengan dunia teknologi dan pemrograman. Saya senang belajar dan telah mendalami berbagai bahasa seperti PHP, Java, Kotlin, C++, dan Python untuk menciptakan solusi digital yang fungsional.",
    "Di luar coding, saya memiliki ketertarikan yang mendalam pada dunia finansial. Saya senang menganalisis data dan tren pasar untuk memahami bagaimana teknologi dapat memberikan dampak di sektor ekonomi.",
    "Selain itu, saya juga sedang mengeksplorasi sisi kreatif saya sebagai seorang konten kreator. Saya percaya bahwa kemampuan untuk mengomunikasikan ide-ide kompleks secara sederhana adalah kunci, baik dalam coding maupun dalam membuat konten yang menarik."
];
const elementIds = ["typing-line-0", "typing-line-1", "typing-line-2", "typing-line-3"];
const typingSpeed = 20;

function typeWriter(text, i, elementId, callback) {
    const element = document.getElementById(elementId);

    if (i < text.length) {
        let char = text.charAt(i);
        let nextChar = text.charAt(i + 1);

        if (elementId !== 'typing-line-0') {
            if (
                text.substring(i, i + 20) === 'mahasiswa Manajemen I' || text.substring(i, i + 3) === 'PHP' || text.substring(i, i + 5) === 'Java' ||
                text.substring(i, i + 6) === 'Kotlin' || text.substring(i, i + 3) === 'C++' || text.substring(i, i + 6) === 'Python' ||
                text.substring(i, i + 10) === 'finansial' || text.substring(i, i + 14) === 'konten kreator'
            ) {
                element.innerHTML += '<strong>';
            }
            if (
                (char === 'a' && text.substring(i - 19, i) === 'mahasiswa Manajemen In') ||
                (char === 'P' && text.substring(i - 2, i) === 'PH') || (char === 'a' && text.substring(i - 4, i) === 'Jav') ||
                (char === 'n' && text.substring(i - 5, i) === 'Kotli') || (char === '+' && text.substring(i - 2, i) === 'C') ||
                (char === 'n' && text.substring(i - 5, i) === 'Pytho') || (char === 'l' && text.substring(i - 9, i) === 'finansia') ||
                (char === 'r' && text.substring(i - 13, i) === 'konten kreato')
            ) {
                if (nextChar === ' ' || nextChar === '.' || i === text.length - 1) {
                    element.innerHTML += '</strong>';
                }
            }
        }

        element.innerHTML += char;
        setTimeout(function () {
            typeWriter(text, i + 1, elementId, callback);
        }, typingSpeed);

    } else {
        if (elementId === 'typing-line-0') {
            element.classList.add('typing-done');
        } else {
            element.classList.remove('typing-text-container');
        }

        if (callback) {
            callback();
        }
    }
}

function startTyping(lineIndex) {
    if (lineIndex >= dataText.length) {
        return;
    }

    const text = dataText[lineIndex];
    const elementId = elementIds[lineIndex];
    const element = document.getElementById(elementId);

    if (lineIndex > 0) {
        element.classList.add('typing-text-container');
    }

    typeWriter(text, 0, elementId, function () {
        let delay = (lineIndex === 0) ? 800 : 500;

        setTimeout(function () {
            startTyping(lineIndex + 1);
        }, delay);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const aboutImage = document.querySelector('.about-image');
    const isAboutPage = document.getElementById("typing-line-0");

    if (aboutImage && isAboutPage) {
        aboutImage.classList.add('is-visible');
        startTyping(0);
    }
});