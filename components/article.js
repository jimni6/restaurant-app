import Image from 'next/image';
import styles from './article.module.css';
import image from '../public/terrasse.webp';

export default function Article() {
    return (
        <>
            <div className={styles.container}>
                    <Image
                        className={styles.image}
                        src={image}
                        alt='Terrasse du Little Cocotte'
                    />
                    <div className={styles.text}>
                        <h2>Titre de larticle</h2>
                        <p>
                        Quand un jardinier et un cuisinier se rencontrent, de quoi parlent-ils ? De leur amour commun pour les légumes, bien sûr. Alain Baraton, jardinier en chef de Trianon et du Grand parc de Versailles, et Alain Ducasse ont noué une relation exceptionnelle qui permet aux clients du restaurant de savourer des légumes et des fruits cultivés exclusivement pour eux. Récoltés le matin, ils seront dans la cuisine quelques heures plus tard.
                        </p>
                    </div>
            </div>
        </>
    )
}