import styles from './Modal.module.scss';

interface ModalProps {
    children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>{children}</div>
        </div>
    );
}

