import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import React, { useEffect, useState } from 'react';

import styles from './Inicio.module.css';

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Feehh32/cinetag-api/videos")
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, []);

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar os seus vídeos e filmes</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map(video => <Card id={video.id} capa={video.capa} titulo={video.titulo} key={video.id} />)}
            </section>
        </>
    )
}

export default Inicio;