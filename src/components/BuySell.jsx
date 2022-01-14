import React from "react";
import styled from "styled-components";
import BuySell1 from "../assets/9.png";
import BuySell2 from "../assets/10.png";
import BuySell3 from "../assets/7.png";

export default function BuySell() {
  return (
    <Section id="niedola">
      <div className="row">
        <div className="col" id="buySell1">
          <img src={BuySell1} alt="..." />
          <div className="text">
            <h2>
              Chłopska <span>niedola</span>
            </h2>
            <p>
              "Nuncjusz papieski, przebywający w&nbsp;Rzeczypospolitej
              w&nbsp;latach 1669–1671, a&nbsp;zatem w&nbsp;okresie panowania
              Michała Korybuta Wiśniowieckiego, ze&nbsp;współczuciem
              relacjonował położenie włościan. Z&nbsp;kolei Gaspar
              de&nbsp;Tande, który przybył do&nbsp;Polski wraz z&nbsp;królową
              Ludwiką Marią, stwierdził, że&nbsp;szlachta traktuje chłopów jak
              niewolników, mieszczan zaś jedynie jako rzemieślników,
              de&nbsp;facto im również odmawiając miana odrębnego stanu. Uważał
              on przy tym, że&nbsp;zaobserwowane przez niego podziały nie są
              zgodne z&nbsp;duchem Ewangelii.
              <p>
                Jeszcze dalej poszedł w&nbsp;swych rozważaniach nadworny lekarz
                Jana III Sobieskiego Bernard O’Connor. Porównał on
                z&nbsp;przesadą niedolę chłopską do sytuacji czarnych
                niewolników przewożonych na&nbsp;statkach do kolonii
                angielskich. Przy czym O’Connor był Irlandczykiem, więc siłą
                rzeczy nie darzył swoich sąsiadów sympatią i&nbsp;nie zdawał
                sobie sprawy z&nbsp;faktu, że pańszczyzna w&nbsp;Polsce była
                liczona nie od głowy, lecz od gospodarstwa. W&nbsp;związku
                z&nbsp;tym chłop mógł oddelegować na pańskie pole synów lub
                parobków, a&nbsp;samemu zajęć się własną ziemią."
              </p>
            </p>
            <br />
            <p>
              <em>
                historia.plportal.pl/artykuly/historia-polski/tytusedupl-zyli-jak-niewolnicy-w-koloniach-cudzoziemcy-o-losie-polskiego
              </em>
            </p>
          </div>
        </div>
        <div className="col" id="buySell2">
          <div className="mid">
            <h2>
              <span>Dychotomia</span> ustrojowa i&nbsp;społeczna państwa
              polsko-litewskiego
            </h2>
            <p>
              <p>
                "Odwiedzający Rzeczpospolitą obcokrajowcy dziwili się dychotomii
                ustrojowej i&nbsp;społecznej państwa polsko-litewskiego.
                Z&nbsp;jednej strony zwracali oni uwagę na szerokie przywileje
                szlachty, które odbierali jako uprawnienia republikańskie,
                z&nbsp;drugiej zaś podkreślali niewolę polskiego chłopa.
                W&nbsp;Rzeczypospolitej kontrast między tymi stanami był
                wyjątkowo duży, gdyż w&nbsp;innych krajach szlachta nie miała aż
                takiego wpływu na władzę królewską.
              </p>
              Dzieci wychowywane na głuchej wsi, gdzie wszystko podporządkowane
              jest władzy Pana, z&nbsp;dala od tego, co budzić może idee życia
              społecznego, gdzie szlachta nie ma pojęcia o&nbsp;
              republikanizmie. Jeżeli przypadek sprowadzi kogoś pod ich dach,
              będzie to człowiek bądź niższej kondycji, schlebiający ich
              poczuciu władzy, bądź też wyżej stojący w&nbsp;drabinie
              społecznej, a&nbsp;wówczas nauczyć się mogą jedynie czołgania
              u&nbsp;jego nóg. Młody Polak nie zna powinności. Nie uważa się
              za&nbsp;cząstkę wszystkiego, lecz jedynie za&nbsp;ośrodek tego, co
              go otacza."
            </p>
            <br />
            <p>
              <em>
                historia.plportal.pl/artykuly/historia-polski/tytusedupl-zyli-jak-niewolnicy-w-koloniach-cudzoziemcy-o-losie-polskiego
              </em>
            </p>
          </div>
          <img src={BuySell2} alt="..." />
        </div>
        <div className="col" id="buySell3">
          <img src={BuySell3} alt="..." />
          <div className="mid">
            <h2>
              Wewnętrzny <span>bunt</span> wobec pana
            </h2>
            <p>
              "Obserwując wieś, niektórzy z&nbsp;nich [obcokrajowcy] pokusili
              się o&nbsp;rys psychologiczny polskiego chłopa. Prawne
              uregulowania to jedno, ale życie na wsi i&nbsp;codzienne
              zachowanie w&nbsp;obliczu niekorzystnego położenia to zupełnie
              inna kwestia. Zdaniem zagranicznych obserwatorów polskich włościan
              charakteryzowała w&nbsp;XVIII wieku obojętność oraz apatia. Ich
              osobiste przywiązanie do pana pozbawiało ich impulsów do tego, aby
              pracować efektywnie. Nie mając widoków na zysk, chłopi wykonywali
              wszystkie czynności niechętnie.
            </p>
            <p>
              „Ręka jego leniwie naciska pług, a&nbsp;słońce dokona sporej
              części swej codziennej wędrówki, zanim dojdzie do końca bruzdy.
              Jeżeli narzędzie jakim wykonuje pracę, zepsuje się, nie dokona on
              żadnej naprawy” – notował Vautrin. Chłop nie był zdolny do
              wykazywania inicjatywy, ponieważ nie został tego nauczony.
              Dokładne wykonywanie zadań nie leżało ani w&nbsp;jego naturze, ani
              w&nbsp;jego interesie, gdyż mogłoby się skończyć na podwyższeniu
              norm wszystkim poddanym, co ściągnęłoby na niego nienawiść
              otoczenia."
            </p>
            <br />
            <p>
              <em>
                historia.plportal.pl/artykuly/historia-polski/tytusedupl-zyli-jak-niewolnicy-w-koloniach-cudzoziemcy-o-losie-polskiego
              </em>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 6rem 10rem;

  .row {
    display: flex;
    gap: 8rem;
    flex-direction: column;

    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      img {
        height: 60vh;
      }

      h2 {
        font-size: 3rem;

        span {
          color: var(--secondary-color);
        }
      }
    }
    .mid {
      flex-direction: column;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .row {
      gap: 2rem;
      .col {
        flex-direction: column;
        text-align: center;
        z-index: -1;
        img {
          height: 15rem;
        }
        h2 {
          font-size: 1.5rem;
          margin: 1rem 0;
        }
        p {
          text-align: left;
        }
        &:nth-of-type(2) {
          flex-direction: column-reverse;
        }
      }
    }
  }
`;
