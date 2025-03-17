document.getElementById('submit-btn').addEventListener('click', function() {
    const rating = document.querySelector('input[name="rating"]:checked');
    const comments = document.getElementById('comments').value.trim();

    if (!rating) {
        alert("⚠️ Please select a rating before submitting.");
        return;
    }

    document.getElementById('success-message').classList.remove('hidden');
    document.getElementById('comments').value = "";
    document.querySelector('input[name="rating"]:checked').checked = false;

    // Scroll to the success message for better visibility
    document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });
});
