import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Numbers from './components/Numbers/Numbers';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Modal from './shared/Modal/Modal';
import BurgerMenu from './shared/BurgerMenu/BurgerMenu';
import FAQ from './components/Questions/Questions';
import Tariffs from './components/Tariffs/Tariffs';
import Deals from './components/Deals/Deals';

import './App.scss';

function App() {
    const [width, setWidth] = useState<number>(0);
    const [modalWindow, setModalWindow] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

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
        if (modalWindow) {
            setIsClosing(true);
            setTimeout(() => {
                setModalWindow(false);
                setIsClosing(false);
            }, 300);
        } else {
            setModalWindow(true);
        }
    };

    return (
        <>
            <Header width={width} handler={switchModal} />
            <main className='pageContent'>
                <Hero />
                <Numbers />
                <Deals />
                <About />
                <Tariffs />
                <FAQ />
                <Footer />
            </main>
            {modalWindow && (
                <Modal isClosing={isClosing}>
                    <BurgerMenu handler={switchModal} />
                </Modal>
            )}
        </>
    );
}

export default App;

