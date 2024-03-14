import style from './SectionProdutos.module.css';
import Image from 'next/image';
import Google1 from '../../../public/oculos01.png';
import Google2 from '../../../public/oculos02.png';
import Google3 from '../../../public/oculos03.png';
import Google4 from '../../../public/oculos04.png';

export default function SectionProdutos(){
    return(
    <section id='produtos' className={style.containerProdutos}>

        <div className={style.limitContainerProdutos}>

            <div className={style.textosContainerProdutos}>
                <h3>NOSSOS PRODUTOS</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>

            <div className={style.produtosContainerProdutos}>
            <div className={style.card}>
                <h3>Óculos de grau</h3>
                <Image src={Google1} alt='Óculos de grau' className={style.google}/>
                <p>R$500,00</p>                
            </div>
            <div className={style.card}>
                <h3>Óculos transition</h3>
                <Image src={Google2} alt='Óculos transition' className={style.google}/>
                <p>R$750,00</p>                
            </div>
            <div className={style.card}>
                <h3>Óculos de sol</h3>
                <Image src={Google3} alt='Óculos de sol' className={style.google}/>
                <p>R$700,00</p>                
            </div>
            <div className={style.card}>
                <h3>Óculos infantil</h3>
                <Image src={Google4} alt='Óculos infantil' className={style.google}/>
                <p>R$500,00</p>                
            </div>
            </div>

           

        </div>
        <div className={style.garantiasContainerProdutos}>
                <h3>Todos os nossos produtos incluem:</h3>
                <ul >
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>

    </section>
    )
}