import styles from './NaoEncontrada.module.css';
import { TiWarningOutline } from 'react-icons/ti';

import React from 'react'

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <div className={styles.warning}>
                <TiWarningOutline size={500} color="#c3c3c3c3" />
                <div className={styles.warning_text}>
                    <h3>404</h3>
                    <p>O conteúdo que você procura nao foi encontrado!</p>
                </div>
            </div>
        </section>
    )
}

export default NaoEncontrada;