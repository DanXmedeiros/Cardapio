function toggleForm() {
    const form = document.getElementById('reviewForm');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

function addReview() {
    const title = document.getElementById('reviewTitle').value;
    const stars = document.getElementById('reviewStars').value;
    const text = document.getElementById('reviewText').value;

    if (!title || !stars || !text) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const reviewContainer = document.createElement('div');
    reviewContainer.className = 'review';

    reviewContainer.innerHTML = `
        <div class="review-header">
            <h2>${title}</h2>
            <div class="stars">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</div>
        </div>
        <p>${text}</p>
    `;

    const main = document.querySelector('main');
    main.insertBefore(reviewContainer, document.querySelector('.add-review'));

    document.getElementById('reviewForm').reset();
    toggleForm();
}