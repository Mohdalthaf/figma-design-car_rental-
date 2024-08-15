
// Get all question-answer containers
const questions = document.querySelectorAll('.question-answer-parent');

// Loop through each question-answer container
questions.forEach(question => {
    // Find the icon and the answer div
    const icon = question.querySelector('.i-math-plus');
    const answer = question.querySelector('.inquiry-details');
    
    // Initially hide the answer
    if (answer) {
        answer.style.display = 'none';
    }
    
    // Add click event listener to the icon
    icon.addEventListener('click', () => {
        // Toggle the display of the answer
        if (answer.style.display === 'none') {
            answer.style.display = 'block';
            // Change icon to x-mark (collapsed state)
            icon.src = './images/xmark1.svg';
        } else {
            answer.style.display = 'none';
            // Change icon back to +mark (expanded state)
            icon.src = './images/+mark.svg';
        }
    });
});
