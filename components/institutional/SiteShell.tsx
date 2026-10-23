import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { Action, Constellation, Label, Mari, Section, SiteLink as Link } from "./Elements";
import s from "./Institutional.module.css";

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="page"><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></div>;
}

function SiteFooter() {
  return <footer className={`${s.brand} ${s.footer}`}>
    <div className={s.wrap}>
      <div className={s.footerTop}>
        <div><Link href="/" className={s.wordmark} aria-label="MarIA — início">Mar<span>IA</span></Link><p>Automação de processos<br/>e soluções inteligentes.</p></div>
        <nav aria-label="Navegação do rodapé"><Link href="/servicos">Serviços</Link><Link href="/projetos">Projetos</Link><Link href="/sobre">Sobre a MarIA</Link><Link href="/metodo">Método MARIA</Link><Link href="/contato">Contato</Link></nav>
        <Constellation className={s.footerConstellation}/>
      </div>
      <div className={s.footerBottom}><span>© {new Date().getFullYear()} MarIA Consultoria</span><span>CONHECIMENTO EM CONEXÃO</span></div>
    </div>
  </footer>;
}

export function ContactInvite({ id = "contato" }: { id?: string }) {
  return <Section id={id} className={s.inviteSection}>
    <div className={`${s.wrap} ${s.invite}`}>
      <div className={s.inviteCopy}><Label>O próximo passo pode ser simples</Label><h2>Qual processo merece<br/>um novo jeito de funcionar?</h2><p>Conte o que toma tempo na sua operação. Vamos entender juntos por onde começar.</p><Action href="/contato">Conversar sobre meu processo</Action></div>
      <Mari pose="alegre" className={s.inviteMari}/>
      <span className={s.inviteSignature}>PROCESSO + TECNOLOGIA + DIREÇÃO HUMANA</span>
    </div>
  </Section>;
}
