import style from './Header.module.css'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
export default function Header(){
    return(
        <header className={style.containerHeader}>
            <div className={style.limitHeader}>
                <div className={style.imgLogo}>
                <Image className={style.imgLogoHeader}  src={Logo} alt='Logo Site'/>
                </div>
                <div className={style.links}>
                        <div><a href="#">PRODUTOS</a></div>
                        <div><a href="#">SOBRE</a></div>
                        <div><a href="#">CONTATO</a></div>
                </div>
            </div>
        </header>
    )
}