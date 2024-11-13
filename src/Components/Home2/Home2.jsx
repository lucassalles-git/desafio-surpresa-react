import { Main } from "./style"
import Card from "../Card/Card"

export default function Home2() {
    return (

        <Main>
            <section className="section-one">
                <section className="info">
                    <h2>Mais que Café</h2>
                    <div className="paragrafo">
                        <p>Isso  é</p>
                        <h1>Starbucks</h1>
                    </div>
                    <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                    <button>SAIBA MAIS</button>
                </section>

                <Card/>

            </section>
                <section className="section-four">
                    <img src="/src/assets/image/vermelho2x 1.png" alt="" />
                </section>
        </Main>
    )
}