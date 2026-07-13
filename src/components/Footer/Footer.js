import React, { useState } from "react";
import "./style.css";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpen = (modal) => setActiveModal(modal);
  const handleClose = () => setActiveModal(null);

  return (
    <footer className="footer">
      <p>
        <strong>© 2025 Construtora Riva - Todos os direitos reservados.</strong>
      </p>

      <nav>
        <ul className="footer-links">
          <li>
            <button onClick={() => handleOpen("termos")}>Termos de Uso</button>
          </li>
          <li>
            <button onClick={() => handleOpen("politica")}>
              Política de Privacidade
            </button>
          </li>
          <li>
            <button onClick={() => handleOpen("contato")}>Contato</button>
          </li>
        </ul>
      </nav>

      {/* Modal genérico */}
      {activeModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={handleClose}>
              ✕
            </button>

            {activeModal === "termos" && (
              <>
                <h2>Termos de Uso</h2>
                <p>
                  Ao acessar este site, você concorda com os presentes Termos de
                  Uso. Caso não concorde, recomendamos que não o utilize.
                </p>
                <p>
                  Este site é destinado à divulgação de empreendimentos da Construtora Novolar. É proibido utilizar o conteúdo para fins ilegais
                  ou não autorizados.
                </p>
                <p>
                  Todos os textos, imagens e logotipos são de propriedade da
                  Construtora Novolar e protegidos por leis de direitos autorais.
                </p>
              </>
            )}

            {activeModal === "politica" && (
              <>
                <h2>Política de Privacidade</h2>
                <p>
                  Coletamos dados pessoais (nome, telefone, e-mail) apenas quando
                  o usuário preenche formulários de interesse em empreendimentos.
                </p>
                <p>
                  As informações são utilizadas exclusivamente para contato
                  comercial e envio de novidades sobre os empreendimentos da
                  Cury Construtora.
                </p>
                <p>
                  O usuário pode solicitar a exclusão ou atualização de seus
                  dados pelo e-mail:{" "}
                  <strong>privacidade@novolarrio.com.br</strong>, em construção.
                </p>
              </>
            )}

            {activeModal === "contato" && (
              <>
                <h2>Contato</h2>
                <p>
                  <strong>Novolar Vendas – Corretor Gilberto Santos Novolar Rio</strong>
                  {/* <br />
                  📍 Rua Exemplo, 123 – Rio de Janeiro – RJ
                  <br /> */}
                  📧 contato@corretornovolarrio.com.br, em construção.
                  <br />
                  ☎️ (21) 97297-3535
                </p>
                <p>Horário de atendimento: segunda a sexta, das 9h às 18h.</p>
              </>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
