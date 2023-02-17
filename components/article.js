import Image from 'next/image';
import styles from './article.module.css';
import image from '../public/terrasse.webp';
import { useParallax } from 'react-scroll-parallax';

export default function Article() {
    const { ref: textRef } = useParallax({ 
        speed: 10,
        translateX: [60, -60],
        opacity: [0.1, 2]
    });
    const { ref: imageRef } = useParallax({ 
        speed: 10,
        translateX: [-60, 60],
        scale: [0.1, 1.5],
        opacity: [0.1, 2]
    });
    return (
        <>
            <div className={styles.container}>
                <Image ref={imageRef}
                    className={styles.image}
                    src={image}
                    alt='Terrasse du Little Cocotte'
                />
                <div ref={textRef} className={styles.text}>
                    <h2>Titre de larticle</h2>
                    <p>
                    Quand un jardinier et un cuisinier se rencontrent, de quoi parlent-ils ? De leur amour commun pour les légumes, bien sûr. Alain Baraton, jardinier en chef de Trianon et du Grand parc de Versailles, et Alain Ducasse ont noué une relation exceptionnelle qui permet aux clients du restaurant de savourer des légumes et des fruits cultivés exclusivement pour eux. Récoltés le matin, ils seront dans la cuisine quelques heures plus tard.
                    </p>
                </div>
            </div>
        </>
    )
}