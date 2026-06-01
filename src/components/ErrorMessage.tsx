import React from 'react';

interface ErrorMessageProps{
    message: string;
    onRetry: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({message, onRetry}) => {
    return(
        <div className="error">
            <span className="error-icon">⚠️</span>
            <p className= "error-text">{message}</p>

            {onRetry && (
                <button className="retry-btn" onClick={onRetry}>
                    🔄 Try Retry
                </button>
            )}
        </div>
    );
};

export default ErrorMessage;