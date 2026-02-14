import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {

    const [reviews, setReviews] = useState([
        { id: 1, user: 'Ahmed Khalid', rating: 5, comment: 'Excellent service! Very professional and on time.', date: 'jan 20, 2026' },
        { id: 2, user: 'Layla Mohamed', rating: 4, comment: 'Good job, but missed a spot in the corner.', date: 'jan 18, 2026' },
        { id: 3, user: 'Omar Yusuf', rating: 5, comment: 'Highly recommended!', date: 'jan 15, 2026' },
        { id: 4, user: 'cali jama', rating: 5, comment: 'Highly recommended', date: 'jan 15, 2026' },
    ]);

    const [newComment, setNewComment] = useState('');
    const [newUser, setNewUser] = useState('');

    const handleAddReview = () => {
        if (!newComment.trim() || !newUser.trim()) return;

        const newReview = {
            id: reviews.length + 1,
            user: newUser,
            rating: 5,
            comment: newComment,
            date: new Date().toLocaleDateString()
        };

        setReviews([newReview, ...reviews]);
        setNewComment('');
        setNewUser('');
    };

    const averageRating =
        reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    return (
        <div>

            {/* HEADER */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Customer Reviews
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    What customers are saying about your service
                </p>
            </div>

            {/* ADD COMMENT SECTION */}
            <div className="card" style={{ marginBottom: '2rem' }}>

                {/* Customer Name Input */}
                <input
                    type="text"
                    placeholder="Your name"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #E5E7EB',
                        marginBottom: '0.75rem'
                    }}
                />

                {/* Comment Input */}
                <textarea
                    placeholder="Write your review here..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #E5E7EB',
                        marginBottom: '0.75rem',
                        resize: 'none'
                    }}
                />

                <button
                    onClick={handleAddReview}
                    style={{
                        padding: '0.6rem 1.2rem',
                        backgroundColor: '#2563EB',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.5rem',
                        cursor: 'pointer'
                    }}
                >
                    Add Review
                </button>
            </div>

            {/* SUMMARY */}
            <div className="card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        {averageRating.toFixed(1)}
                    </span>
                    <div>
                        <div style={{ display: 'flex', color: '#FACC15' }}>
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    fill={i < Math.round(averageRating) ? 'currentColor' : 'none'}
                                />
                            ))}
                        </div>
                        <span style={{ fontSize: '0.9rem', color: 'gray' }}>
                            Based on {reviews.length} reviews
                        </span>
                    </div>
                </div>
            </div>

            {/* REVIEWS LIST */}
            <div style={{ display: 'grid', gap: '1.25rem' }}>
                {reviews.map(review => (
                    <div key={review.id} className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div
                                    style={{
                                        width: 42,
                                        height: 42,
                                        borderRadius: '50%',
                                        backgroundColor: '#E5E7EB',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold',
                                        color: '#374151'
                                    }}
                                >
                                    {review.user[0]}
                                </div>

                                <div>
                                    <h3 style={{ fontWeight: '600' }}>{review.user}</h3>
                                    <div style={{ display: 'flex', color: '#FACC15' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                fill={i < review.rating ? 'currentColor' : 'none'}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>
                                {review.date}
                            </span>
                        </div>

                        <div
                            style={{
                                backgroundColor: '#F9FAFB',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                fontStyle: 'italic',
                                color: '#374151'
                            }}
                        >
                            “{review.comment}”
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
