import Image from 'next/image';
import Link from 'next/link';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTripadvisor } from '@tabler/icons-react';
import logo from '../public/LC_ID_Header.png';
import styles from './navbar.module.css';
import { pacifico } from '@/pages/_app';

export default function Navbar() {
    return (
        <>
            <div className={pacifico.className}>
                <div className={styles.container}>
                    <Link className={styles.logoHeader} href="/">
                        <Image 
                            className={styles.logoFormat}
                            src={logo} 
                            alt="Logo Little Cocotte" />
                    </Link>
                    <div className={styles.links}>
                        <Link className={styles.link} href={`/about`}> A Propos</Link>
                        <Link className={styles.link} href={`/menu`}> Menu</Link>
                        <Link className={styles.link} href={`/contact`}> Contact</Link>
                    </div>
                    <div className={styles.brands}>
                        <a className={styles.card} href="https://www.facebook.com/littlecocotte/">
                            <IconBrandFacebook
                                size={36}
                            />
                        </a>
                        <a className={styles.card} href="https://www.instagram.com/littlecocotte/?hl=fr">
                            <IconBrandInstagram 
                                size={36}
                            />
                        </a>
                        <a className={styles.card} href="https://fr.tripadvisor.ch/Restaurant_Review-g187088-d10357181-Reviews-Little_Cocotte-Perigueux_Dordogne_Nouvelle_Aquitaine.html">
                            <IconBrandTripadvisor
                                size={36}
                            />   
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}