import styles from './Modal.module.scss';

interface ModalProps {
    children: React.ReactNode;
    isClosing?: boolean;
}

export default function Modal({ children, isClosing = false }: ModalProps) {
    return (
        <div className={`${styles.modalOverlay} ${isClosing ? styles.closing : ''}`}>
            <div className={`${styles.modalWindow} ${isClosing ? styles.slideOut : ''}`}>
                {children}
            </div>
        </div>
    );
}

