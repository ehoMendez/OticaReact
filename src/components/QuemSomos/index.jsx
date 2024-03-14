import style from './QuemSomos.module.css';
import Image from 'next/image';
import Foto1 from '../../../public/loja.png';
import Foto2 from '../../../public/atendimento.png';


export default function QuemSomos(){
    return(

        <section className={style.containerQuemSomos}>

        <div className={style.limitContainerQuemSomos}>

            <div className={style.textosContainerQuemSomos}>
                <h3>QUEM SOMOS NÓS?</h3>
                <p>Fundada em 2001, Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa sempre com o objetivo de proporcionar ao cliente 
                    bom atendimento, qualidade e preço baixo. 
                </p>
            </div>

            <div className={style.containerImgTxt}>
           
                <div className={style.QuemSomosImg1}></div>

                <div className={style.txtLegendaFoto}>
                    <h3>NOSSAS FILIAIS</h3>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América.</p>
                    </div>             
            </div>

            <div className={style.containerImgTxt}>
           
                <div className={style.txtLegendaFoto}>
                    <h3>ATENDIMENTO FLEXÍVEL</h3>
                    <p>Nossa equipe é treinada para melhor lhe atender.</p>
                    </div>     

                     <div className={style.QuemSomosImg2}></div>        
            </div>
            
       

           

        </div>

    </section>



    )
}