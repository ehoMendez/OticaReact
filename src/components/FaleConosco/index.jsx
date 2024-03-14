import style from './FaleConosco.module.css';
import Image from 'next/image';
import ping from '../../../public/local.png';
import telefone from '../../../public/telefone.png';
import email from '../../../public/email.png';
import face from '../../../public/fb.png';
import insta from '../../../public/ig.png';
import tt from '../../../public/tt.png';




export default function FaleConosco(){
    return(
        <section id='contato' className={style.FaleConoscoContainer}>
            <div className={style.titleFaleConosco}>
                <h3>FALE CONOSCO</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>
            <div className={style.redesSociais}>

                <div className={style.contato}>
                    <h4>Contato</h4>

                    <div className={style.text_icon}>
                        <Image className={style.imgIcon} src={ping}/>
                        <p>Nova Iguaçu, RJ</p>
                    </div>
                    <div className={style.text_icon}>
                        <Image className={style.imgIcon} src={telefone}/>
                        <p>(21) 9999-9999</p>
                    </div>
                    <div className={style.text_icon}>
                        <Image className={style.imgIcon} src={email}/>
                        <p>contato@oticavida.com</p>
                    </div>
                </div>

                <div className={style.contato}>
                    <h4>Nossas Redes Sociais</h4>

                    <div className={style.text_icon}>
                        <Image className={style.imgIcon} src={face}/>
                        <p>/OticaVida</p>
                    </div>
                    <div className={style.text_icon}>
                        <Image className={style.imgIcon} src={insta}/>
                        <p>@oticavidarj</p>
                    </div>
                    <div className={style.text_icon}>
                        <Image className={style.imgIcon} src={tt}/>
                        <p>@oticavidarj</p>
                    </div>
                </div>
            </div>
        </section>
    )
}