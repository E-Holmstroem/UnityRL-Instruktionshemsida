document.addEventListener('DOMContentLoaded', function () {
    const codeTitles = document.querySelectorAll('.code-title');
    codeTitles.forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
