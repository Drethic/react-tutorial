import React from 'react';

const withClassFunc = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
}

export default withClassFunc;
