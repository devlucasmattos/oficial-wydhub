import { useNavigate } from "react-router-dom";

const TermosCondicoes = () => {
  const navigate = useNavigate();

  return (
    <div className="termos-container">
      <h1 className="termos-title">Termos e Condições</h1>
      <div className="termos-content">
        <p>
          Estes Termos e Condições regem o uso do nosso serviço. Ao acessar nosso site e/ou usar nossos serviços, você concorda com todos os termos aqui descritos.
        </p>

        <h2 className="sub-title">1. Uso do Serviço</h2>
        <p>O usuário concorda em usar os serviços fornecidos de maneira responsável e conforme as leis vigentes.</p>

        <h2 className="sub-title">2. Propriedade Intelectual</h2>
        <p>Todo o conteúdo fornecido no site, incluindo textos, imagens, vídeos e outros materiais, é protegido por direitos autorais e não pode ser reproduzido sem autorização prévia.</p>

        <h2 className="sub-title">3. Limitação de Responsabilidade</h2>
        <p>Não nos responsabilizamos por danos diretos, indiretos ou consequenciais decorrentes do uso ou impossibilidade de uso dos nossos serviços.</p>

        <h2 className="sub-title">4. Alterações nos Termos</h2>
        <p>Podemos modificar estes Termos e Condições a qualquer momento, e recomendamos que o usuário os consulte periodicamente para se manter informado sobre possíveis alterações.</p>

        <h2 className="sub-title">5. Lei Aplicável</h2>
        <p>Estes Termos e Condições são regidos pelas leis do Brasil. Qualquer disputa será resolvida no foro da cidade de [Sua Cidade].</p>

        <h2 className="sub-title">6. Contato</h2>
        <p>Se tiver dúvidas sobre os Termos e Condições, entre em contato conosco pelo e-mail: contato@exemplo.com.</p>

        <div className="termos-button-container">
          <button className="termos-button" onClick={() => navigate(-1)}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermosCondicoes;
