document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete');

    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const confirmation = confirm("Are you sure you want to delete this course?");
            if (confirmation) {
                button.parentElement.parentElement.remove();
            }
        });
    });
});
