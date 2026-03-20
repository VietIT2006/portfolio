document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('review-form');
    const reviewsList = document.getElementById('reviews-list');

    // Add some initial mock data for demonstration
    const initialReviews = [
        { name: "Người dùng A", rating: 5, comment: "Portfolio rất đẹp và chuyên nghiệp!" },
        { name: "Người dùng B", rating: 4, comment: "" } // Example without comment
    ];

    initialReviews.forEach(rev => createReviewElement(rev.name, rev.rating, rev.comment));

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('reviewer-name').value.trim();
        const commentInput = document.getElementById('reviewer-comment').value.trim();
        const ratingInput = document.querySelector('input[name="rating"]:checked');

        if (!nameInput) {
            alert('Vui lòng nhập tên của bạn.');
            return;
        }

        if (!ratingInput) {
            alert('Vui lòng chọn số sao đánh giá.');
            return;
        }

        const rating = parseInt(ratingInput.value, 10);
        
        // Add the review
        createReviewElement(nameInput, rating, commentInput, true);
        
        // Reset form to default state
        form.reset();
        
        // Uncheck stars manually for safety
        document.querySelectorAll('input[name="rating"]').forEach(el => el.checked = false);
    });

    function createReviewElement(name, rating, comment, prepend = false) {
        const reviewEl = document.createElement('div');
        reviewEl.className = 'review-item';

        // Create solid stars for the rating, empty stats for the rest
        const starsHtml = '★'.repeat(rating) + '☆'.repeat(5 - rating);

        // Choose a random avatar (images are img1.jpg to img5.jpg)
        const randomAvatarIndex = Math.floor(Math.random() * 5) + 1;
        const avatarSrc = `../../imgForuser/img${randomAvatarIndex}.jpg`;

        let html = `
            <div class="review-header">
                <img src="${avatarSrc}" alt="Avatar" class="reviewer-avatar">
                <div class="reviewer-info">
                    <span class="reviewer-name">${escapeHtml(name)}</span>
                    <span class="review-stars">${starsHtml}</span>
                </div>
            </div>
        `;

        // If comment is provided, display it. Otherwise only name and stars are shown.
        if (comment) {
            html += `<div class="review-comment">${escapeHtml(comment)}</div>`;
        }

        reviewEl.innerHTML = html;
        
        if (prepend) {
            reviewsList.prepend(reviewEl);
        } else {
            reviewsList.appendChild(reviewEl);
        }
    }

    function escapeHtml(unsafe) {
        return (unsafe || '')
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
    }
});
