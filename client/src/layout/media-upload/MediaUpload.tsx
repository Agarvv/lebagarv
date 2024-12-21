import React, { ChangeEventHandler, ReactNode } from 'react';
import styles from './MediaUpload.module.css';

interface Props {
    change: ChangeEventHandler<HTMLInputElement>;
    children: (props: { triggerInput: () => void }) => ReactNode;
}

const MediaUpload: React.FC<Props> = ({ change, children }) => {
    const triggerInput = () => {
        console.log('on change prop', change)
        const inputElement = document.querySelector('input[type="file"]');
        if (inputElement instanceof HTMLInputElement) {
            inputElement.click();
        }
    };

    return (
        <>
            {children({ triggerInput })}
            <input
                type="file"
                onChange={change}
                style={{ display: 'none' }}
            />
        </>
    );
};

export default MediaUpload;
