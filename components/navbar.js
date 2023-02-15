import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/LC_ID_Header.png';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <>
            <div className={styles.container}>
                <Link href="/">
                    <Image 
                        className={styles.logoHeader}
                        src={logo} 
                        alt="Logo Little Cocotte" />
                </Link>
                <Link className={styles.link} href={`/about`}> A Propos</Link>
                <Link className={styles.link} href={`/menu`}> Menu</Link>
                <Link className={styles.link} href={`/contact`}> Contact</Link>
            </div>
        </>
    )
}