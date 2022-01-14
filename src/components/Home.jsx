import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/2.png";
import image from "../assets/1.png";
import Button from "./Button";
import { RiGroupLine } from "react-icons/ri";
import Modal from "../components/Portal/Modal";

export default function Home() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <Section id="home">
      <div className="text">
        <h1>
          Chłopi pańszczyźniani -&nbsp;nowożytni
          <span className="highlight"> niewolnicy</span>
        </h1>
        <p>
          „Nie byłbym szlachcicem, gdyby chłop nie był chłopem; podłość kondycji
          chłopskiej naszę wynosi.” <br />
          <em> Stanisław Leszczyński - król</em>
        </p>
        <button onClick={() => Toggle()}>
          <Button text="Więcej" icon={<RiGroupLine />} />
        </button>
      </div>
      <Modal show={modal} close={Toggle} title="Pamiętnik chłopa-nauczyciela.">
        <p>
          Nie mogłem tego nigdy zapomnieć, jak często powracającego ze dworu od
          pana widziałem mego ojca mającego wyrwane długie włosy z głowy,
          podbite oczy, nie rachując kułaków w boki, pięścią lub nogą
          odebranych, a szczególnie raz jeden, w roku 1809, gdzie mój ojciec był
          na ten czas sołtysem wsi, przez włościan wybranym, nie był przeto
          obowiązanym odrabiać pańszczyzny, jaka na niego inwentarzem powinności
          przez rząd nałożona, a tym bardziej odrabiać daremszczyzn, tak
          nazwanych dlatego, gdyż te tylko przez arbitralność pana dzierżawcy
          wymagane były”.
        </p>
        <br />
        <p>
          <em>Kazimierz Deczyński</em>
        </p>
      </Modal>
      <div className="image">
        <img src={image} alt="..." />
      </div>
    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.01)),
    url(${background}) center/contain no-repeat;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;

  .image {
    img {
      width: 30%;
      bottom: -3rem;
      right: 10%;
      position: absolute;
    }
  }

  .text {
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;

    button {
      overflow: hidden;
      border: none;
      border-radius: 0.3rem;
    }

    .highlight {
      color: var(--secondary-color);
    }

    h1 {
      font-size: 4.8vw;
    }
    p {
      font-size: 1.5vw;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
    text-align: center;
    margin: 0 1rem;
    .image {
      img {
        display: none;
      }
    }
    .text {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 8vw;
      }
      p {
        font-size: 5vw;
      }
    }
  }
`;
