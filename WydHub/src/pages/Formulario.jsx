import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Formulario.css";



const InputField = ({ label, type = "text", value, onChange, placeholder, name, maxLength, onBlur, errorMessage }) => (
  <div className="form-input mb-4">
    <label className="form-label block font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-input-field w-full p-2 border rounded-md ${errorMessage ? 'border-red-500' : ''}`}
      maxLength={maxLength}
      onBlur={onBlur}
    />
    {errorMessage && <div className="error-message text-red-500 text-sm">{errorMessage}</div>}
  </div>
);

const SelectField = ({ label, options, value, onChange, name, onBlur, errorMessage }) => (
  <div className="form-select mb-4">
    <label className="form-label block font-medium">{label}</label>
    <select name={name} value={value} onChange={onChange} className={`form-select-field w-full p-2 border rounded-md ${errorMessage ? 'border-red-500' : ''}`} onBlur={onBlur}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {errorMessage && <div className="error-message text-red-500 text-sm">{errorMessage}</div>}
  </div>
);

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    rateExp: "Easy",
    rateDrop: "Easy",
    description: "",
    video: "",
    eventoDescription: "",
    whatsapp: "",
    site: "",
    discord: "",
    youtube: "",
    instagram: "",
    cupom: "",
    plano: "Básico",
    status: "Em desenvolvimento",
    dataLancamento: "",
  });

  const navigate = useNavigate();

  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessages({ ...errorMessages, [name]: "" }); // Limpar erro ao mudar valor
  };
  
  const handleBlur = (e) => {
    const { name, value } = e.target;
  
    // Validação para quando o usuário clicar fora
    if (name === "video" && value && !value.includes("youtube.com")) {
      setErrorMessages((prev) => ({
        ...prev,
        video: "Insira uma URL válida do YouTube.",
      }));
    }
  
    if (name === "dataLancamento" && value && !/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
      setErrorMessages((prev) => ({
        ...prev,
        dataLancamento: "A data de lançamento deve estar no formato DIA/MÊS/ANO. Caso ainda não tenha, deixe vazio",
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validações básicas (sem duplicação com o handleBlur)
    let hasError = false;
    const newErrorMessages = {};
  
    // Verificando se o nome está vazio
    if (!formData.name.trim()) {
      newErrorMessages.name = "O campo nome é obrigatório.";
      hasError = true;
    }
  
    if (hasError) {
      setErrorMessages(newErrorMessages);
      return; // Impede o envio se houver erro
    }

    // Construindo a mensagem para o WhatsApp
    const mensagem = `
      *Cadastro de Conteúdo*:

      *Nome:* ${formData.name}
      *Dificuldade EXP:* ${formData.rateExp}
      *Dificuldade Drop:* ${formData.rateDrop}
      *Descrição:* ${formData.description}
      *Vídeo (YouTube URL):* ${formData.video}
      *Descrição do Evento:* ${formData.eventoDescription}
      *WhatsApp:* ${formData.whatsapp}
      *Site:* ${formData.site}
      *Discord:* ${formData.discord}
      *YouTube:* ${formData.youtube}
      *Instagram:* ${formData.instagram}
      *Cupom:* ${formData.cupom}
      *Plano:* ${formData.plano}
      *Data de Lançamento:* ${formData.dataLancamento}
    `;

    // Codificando a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // URL do WhatsApp
    const urlWhatsApp = `https://wa.me/5553991244320?text=${mensagemCodificada}`;

    // Abrindo o WhatsApp com a mensagem
    window.open(urlWhatsApp, "_blank");
  };

  

  return (
    <div className="main-container">
      <div className="form-container">
        <h2 className="form-title">Cadastro de Conteúdo</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite o nome do servidor"
            maxLength={20}
            onBlur={handleBlur}
            errorMessage={errorMessages.name}
          />

          <div className="form-flex">
            <SelectField
              label="Dificuldade EXP"
              name="rateExp"
              options={["Easy", "Medium", "Hard"]}
              value={formData.rateExp}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errorMessages.rateExp}
            />
            <SelectField
              label="Dificuldade Drop"
              name="rateDrop"
              options={["Easy", "Medium", "Hard"]}
              value={formData.rateDrop}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errorMessages.rateDrop}
            />
          </div>

          <InputField
            label="Descrição"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Digite a descrição"
            maxLength={2000}
            onBlur={handleBlur}
            errorMessage={errorMessages.description}
          />

          <InputField
            label="Está em período de evento? Coloque as informações"
            name="eventoDescription"
            value={formData.eventoDescription}
            onChange={handleChange}
            placeholder="Descrição do evento"
            maxLength={600}
            onBlur={handleBlur}
            errorMessage={errorMessages.eventoDescription}
          />

          <InputField
            label="WhatsApp / Link de Convite"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Link de convite ou número"
            maxLength={300}
            onBlur={handleBlur}
            errorMessage={errorMessages.whatsapp}
          />

          <InputField
            label="Vídeo (YouTube URL)"
            name="video"
            value={formData.video}
            onChange={handleChange}
            placeholder="Cole o link do vídeo"
            maxLength={300}
            onBlur={handleBlur}
            errorMessage={errorMessages.video}
          />

          <InputField
            label="Site"
            name="site"
            value={formData.site}
            onChange={handleChange}
            placeholder="URL do site"
            maxLength={150}
            onBlur={handleBlur}
            errorMessage={errorMessages.site}
          />

          <InputField
            label="Discord"
            name="discord"
            value={formData.discord}
            onChange={handleChange}
            placeholder="Link do Discord"
            maxLength={300}
            onBlur={handleBlur}
            errorMessage={errorMessages.discord}
          />

          <InputField
            label="YouTube"
            name="youtube"
            value={formData.youtube}
            onChange={handleChange}
            placeholder="Canal do YouTube"
            maxLength={300}
            onBlur={handleBlur}
            errorMessage={errorMessages.youtube}
          />

          <InputField
            label="Instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="Perfil do Instagram"
            maxLength={300}
            onBlur={handleBlur}
            errorMessage={errorMessages.instagram}
          />

          <InputField
            label="Cupom"
            name="cupom"
            value={formData.cupom}
            onChange={handleChange}
            placeholder="Digite um cupom promocional"
            maxLength={10}
            onBlur={handleBlur}
            errorMessage={errorMessages.cupom}
          />

          <SelectField
            label="Plano"
            name="plano"
            options={["Básico", "Padrão", "Elite"]}
            value={formData.plano}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errorMessages.plano}
          />

          <SelectField
            label="Status"
            name="status"
            options={["Em desenvolvimento", "Fase de lançamento da versão Beta", "Beta Online", "Fase de lançamento", "Já lançado/Online"]}
            value={formData.status}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errorMessages.status}
          />

          <InputField
            label="Data de Lançamento (DD/MM/AAAA)"
            name="dataLancamento"
            value={formData.dataLancamento}
            onChange={handleChange}
            placeholder="Digite a data de lançamento"
            maxLength={10}
            onBlur={handleBlur}
            errorMessage={errorMessages.dataLancamento}
          />

          <button type="submit" className="form-submit-btn w-full mt-4 p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition">
            Enviar
          </button>
        </form>
        
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        ← Voltar para Home
      </button>
    </div>
  );
};

export default Formulario;
