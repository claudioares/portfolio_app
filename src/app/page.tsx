import Image from "next/image";
import vector01 from "../../public/vector01.svg"
import icon04 from "../../public/icon04.svg"
import { CardsPrimery } from "./components/Cards/primery/cards.primery";
import { CardStackInit } from "./components/Cards/staccks/cards.stacks.init";

export default function Home() {
  return (
    <div className="home_one">
      <Image src={vector01} alt="logo" className="img_home_vector01"/>
      <div className="primaries_infor_texts">
        <h3 className="h3_text_one">Transforme sua visão em realidade, com um toque de inovação!</h3>
        <h1 className="h1_text_one">Desenvolvimento Full Stack</h1>
        <p className="p_text_one">
          Desenvolvimento Full Stack envolve habilidades abrangentes 
          tanto no frontend quanto no backend, permitindo a criação 
          integrada de aplicações web. Esses profissionais dominam diversas 
          linguagens, frameworks e bancos de dados, 
          garantindo soluções completas e eficientes.
        </p>
      </div>
      <div className="buttons_home">
        <button className="one">Fale comigo</button>
        <button className="two">Saiba Mais...</button>
      </div>

      <div className="home_two">
        <span>
          Estou aqui para transformar suas ideias em realidade digital.
        </span>
        <CardsPrimery />
      </div>

      <div className="home_tree">
        <h2 className="h3_text_tree">
          Projetos para impulsionar sua produtividade 
          ao máximo Ferramentas de alta velocidade e eficiência
        </h2>
        <Image src={icon04} alt="Icons das features" className="img_home_icon04"/>

        <div className="cards_and_links">
            <CardStackInit />
        </div>
      </div>

    </div>
  );
}
