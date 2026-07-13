import React, { useState } from "react";
import "./style.css";
import empreendimentos from "../Helper/empreendimentos.json";

function Form() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empreendimento: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Atualiza os campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Envio direto para o WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { nome, email, telefone, empreendimento } = formData;
    const numero = "5521972973535";
    const mensagem = `Olá!

      Acabei de preencher o formulário da Landing Page da Riva e gostaria de receber mais informações.

      Dados do contato:

      Nome: ${nome}
      E-mail: ${email}
      Telefone: ${telefone}

      Empreendimento de interesse:
      ${empreendimento}

      Aguardo seu contato.

      Obrigado!`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");

    // Limpa o formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      empreendimento: "",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="form-container">

      <h2>Fale com um Especialista</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />

        <select
          name="empreendimento"
          value={formData.empreendimento}
          onChange={handleChange}
          required
        >
          <option value="">Escolha um empreendimento</option>

          {empreendimentos.map((item) => (
            <option
              key={item.id}
              value={item.title}
            >
              {item.title}
            </option>
          ))}

          <option value="Outro Empreendimento">
            Outro empreendimento
          </option>

        </select>

        <div className="form-buttons">

          <button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Abrindo WhatsApp..."
              : "Solicitar Informações pelo WhatsApp"}
          </button>

        </div>

      </form>

    </div>
  );
}

export default Form;