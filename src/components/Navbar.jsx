import React, { useState } from "react";
import logo from "../assets/1.svg";
// import flag from "../assets/flag.png";
import { AiOutlineEye } from "react-icons/ai";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import styled from "styled-components";
import Modal from "../components/Portal/Modal";
import Modal1 from "../components/Portal/Modal";

export default function Navbar() {
  const [navState, setNavState] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <Nav>
      <div className="brand">
        <div className="logo">
          <img src={logo} alt="..." />
        </div>
        <div className="toggle">
          {navState ? (
            <BsToggleOn onClick={() => setNavState(false)} />
          ) : (
            <BsToggleOff onClick={() => setNavState(true)} />
          )}
        </div>
      </div>
      <div className={`links ${navState ? "show" : "hide"}`}>
        <ul className={`links ${navState ? "show" : "hide"}`}>
          <li>
            <a href="#home">Start</a>
          </li>
          <li>
            <a href="#niedola">Niedola</a>
          </li>
          <li>
            <a href="#imperium">Imperium</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
        <div className="login-btn">
          <div className="flag">
            {/* <img src={flag} alt="..." /> */}
            <span onClick={() => Toggle()}> Czytaj</span>
          </div>
          <Modal
            show={modal}
            close={Toggle}
            title="Krótka rozprawę między trzema osobami: Panem, Wójtem a Plebanem."
          >
            <p>
              Ksiądz pana wini, pan księdza,
              <br /> A nam prostym zewsząd nędza.
              <br /> Urzędnik, wójt, szołtys, pleban,
              <br /> Z&nbsp;tych każdy chce być nad nim pan.
              <br /> Temu daj geś, temu kokosz,
              <br /> Zać więc z&nbsp;nimi mała rozkosz?”
              <br /> A przedsię na tłokę robić?!
              <br /> Czasem proszą, czasem chcą bić.
              <br /> Sprawnie ją nazwali tłoką, <br />
              Bo tam czasem i&nbsp;grzbiet stłuką.
            </p>
            <br />
            <p>
              <em>Mikołaj Rej</em>
            </p>
          </Modal>
          <button onClick={() => Toggle1()}>
            <AiOutlineEye /> Zobacz
          </button>
          <Modal1
            show={modal1}
            close={Toggle1}
            title="Gospodarstwo - poradnik gospodarki ziemiańskiej"
          >
            <p>
              Kmieć naprzód posłuszeństwo panu powinien, a&nbsp;iżby mu dobry
              przykład urzędnik z&nbsp;włodarzem z&nbsp;siebie dał, a&nbsp;ci,
              co mu rozkażą, ma z&nbsp;pilnością dojźrzeć tego, aby tak było: bo
              nie na rozkazaniu, ale na dojźrzeniu każda rzecz należy, aby
              uczyniono. Gdzie nie posłucha, dom zamknąć: gdzie nie wynidzie,
              chłostę, cztery plagi przez gołe ciało, i&nbsp;znowu odrobić
              kazać.
            </p>
            <br />
            <p>
              <em>Anzelm Gostomski</em>
            </p>
          </Modal1>
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 3rem 6rem;

  .brand {
    display: flex;
    align-items: center;

    .logo {
      img {
        height: 7vh;
      }
    }
    .toggle {
      display: none;
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;

    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem;

      li {
        padding: 0.5rem 1rem;
        transition: all 0.4s ease-in-out;
        border-radius: 0.3rem;

        &:first-of-type,
        &:hover {
          background: var(--primary-color);

          a {
            color: #000;
          }
        }

        a {
          text-decoration: none;
          color: #fff;
          font-weight: bold;
          transition: all 0.4s ease-in-out;
        }
      }
    }
    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      .flag {
        display: flex;
        justify-content: center;
        gap: 0.3rem;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 0.3rem;

        &:hover {
          color: #000;
          background: var(--primary-color);
        }
      }

      button {
        border: 1px solid var(--primary-color);
        background: transparent;
        color: #fff;
        border-radius: 0.3rem;
        padding: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;
        font-weight: bold;
        cursor: pointer;

        svg {
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    margin: 0;
    .brand {
      padding: 2rem 1rem;
      justify-content: space-between;
      width: 100%;
      z-index: 2;
      background: var(--background-color);
      .toggle {
        display: block;
        svg {
          font-size: 2rem;
        }
      }
    }
    .links {
      position: absolute;
      background: black;
      flex-direction: column;
      margin-top: 5rem;
      width: 100vw;
      padding: 5rem 0;
      transition: 0.4s ease-in-out;
      gap: 2rem;
      /* z-index: 3; */
      ul {
        flex-direction: column;
        gap: 1rem;

        li {
          margin-bottom: 1.5rem;
        }
      }
      .login-btn {
        flex-direction: column;
      }
    }
    .show {
      top: 0;
    }
    .hide {
      top: -600px;
    }
  }
`;
