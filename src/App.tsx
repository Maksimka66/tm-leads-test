import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Numbers from './components/Numbers/Numbers';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import './App.scss';
import Modal from './shared/Modal/Modal';
import BurgerMenu from './shared/BurgerMenu/BurgerMenu';

function App() {
    const [width, setWidth] = useState<null | number>(null);
    const [modalWindow, setModalWindow] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const switchModal = () => {
        setModalWindow(!modalWindow);
    };

    return (
        <>
            <Header width={width} handler={switchModal} />
            <Hero />
            <Numbers />
            <About />
            <Footer />
            {modalWindow && (
                <Modal>
                    <BurgerMenu handler={switchModal} />
                </Modal>
            )}
        </>
    );
}

export default App;

