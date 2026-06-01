import React from 'react';

const EmptyState: React.FC = () => {
    return(
        <div className="empty-state">
        <span className="empty-icon">🛒</span>
        <h3>No Products available</h3>
        <p>THe catalog is empty at the moment. Please check back Later.</p>
        </div>
    );
};

export default EmptyState;