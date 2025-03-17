document.addEventListener("DOMContentLoaded", function () {
    const quizButton = document.querySelector('.quiz-btn');
    const nextButton = document.querySelector('.next-btn');
    const contentItems = document.querySelectorAll('.content-list li');
    const progressList = document.querySelector('.progress-list');

    let currentIndex = 0;

    // Quiz Button
    quizButton.addEventListener('click', function () {
        alert("Starting the Quiz... Good Luck!");
        window.location.href = 'quiz.html';
    });

    // Next Button for Content Progress
    nextButton.addEventListener('click', function () {
        if (currentIndex < contentItems.length) {
            contentItems[currentIndex].innerHTML = `✅ ${contentItems[currentIndex].innerText}`;
            const progressItem = document.createElement('li');
            progressItem.textContent = `✅ ${contentItems[currentIndex].getAttribute('data-content')}`;
            progressList.appendChild(progressItem);
            currentIndex++;
        }

        if (currentIndex === contentItems.length) {
            nextButton.textContent = "All Content Completed";
            nextButton.disabled = true;
        }
    });
});
