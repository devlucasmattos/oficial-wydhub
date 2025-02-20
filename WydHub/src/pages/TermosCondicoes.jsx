import { useNavigate } from "react-router-dom";
import "./TermosCondicoes.css";

const TermosCondicoes = () => {
  const navigate = useNavigate();

  return (
    <div className="termos-container">
      <h1 className="termos-title">Termos e Condições</h1>
      <div className="termos-content">
        <div className="termos-section">
          <h2 className="sub-title">1. Uso do Serviço</h2>
          <p>
            Ao acessar e utilizar nossos serviços, você concorda em fazê-lo de maneira responsável, ética e em conformidade com as leis aplicáveis.
          </p>
          <p>
            Qualquer tentativa de uso indevido, como fraudes, invasões ou atividades ilegais, resultará no bloqueio imediato do acesso aos nossos serviços.
          </p>
        </div>

        <div className="termos-section">
          <h2 className="sub-title">2. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo disponível em nosso site, incluindo textos, imagens, logotipos, vídeos e outros materiais, é desenvolvido pelos usuários que cadastram os servidores em WydHub.
          </p>
        </div>

        <div className="termos-section">
          <h2 className="sub-title">3. Limitação de Responsabilidade</h2>
          <p>
            Não garantimos que nossos serviços estarão sempre disponíveis, livres de falhas ou erros técnicos. 
          </p>
          <p>
            Não nos responsabilizamos por danos diretos, indiretos ou consequenciais causados pelo uso ou impossibilidade de uso dos nossos serviços.
          </p>
        </div>

        <div className="termos-section">
          <h2 className="sub-title">4. Política de Reembolso</h2>
          <p>
            Oferecemos planos mensais, trimestrais, semestrais e anuais. Caso não esteja satisfeito com nossos serviços, você pode solicitar um reembolso dentro de 7 dias após a compra, desde que o serviço não tenha sido utilizado.
          </p>
          <p>
            Para solicitar um reembolso, entre em contato conosco através do nosso WhatsApp. O reembolso será processado em até 10 dias úteis após a aprovação da solicitação.
          </p>
        </div>

        <div className="termos-section">
          <h2 className="sub-title">5. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento, sem aviso prévio. 
          </p>
          <p>
            Recomendamos que revise esta página periodicamente para se manter informado sobre possíveis mudanças.
          </p>
        </div>

        <div className="termos-section">
          <h2 className="sub-title">6. Lei Aplicável</h2>
          <p>
            Estes Termos e Condições são regidos e interpretados de acordo com as leis do Brasil. 
          </p>
          <p>
            Qualquer disputa será resolvida no foro da cidade de [Sua Cidade], salvo disposição em contrário na legislação vigente.
          </p>
        </div>

        <div className="termos-section">
          <h2 className="sub-title">7. Contato</h2>
          <p>
            Caso tenha dúvidas ou precise de mais informações, entre em contato conosco pelo 
            <a href="https://wa.me/5553991244320" target="_blank" rel="noopener noreferrer">
              <strong> WhatsApp</strong>
            </a>.
          </p>
        </div>

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