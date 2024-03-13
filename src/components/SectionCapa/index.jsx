import style from './SectionCapa.module.css'

export default function SectionCapa(){
    return(
        <section className={style.containerCapa}>
            <div className={style.textoCapa}>
                <p>Preços baixos em</p>
                <h1>ÓCULOS DE GRAU E DE SOL</h1>
                <p>Você só encontra aqui</p>
            </div>
        </section>
    )
}
