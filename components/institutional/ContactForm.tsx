"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { getScheduleHref } from "@/content/contact";
import { offerings } from "@/content/institutional";
import { projectProposals } from "@/content/projects";
import { Arrow } from "./Elements";
import s from "./Institutional.module.css";

const interests = [...offerings.map(item => ({ id: item.id as string, name: item.name as string })), { id: "capacitacao", name: "Capacitação e mentoria" }, { id: "acompanhamento", name: "Acompanhamento e evolução" }];

export function ContactForm() {
  const [interest, setInterest] = useState("");
  const [projectSlug, setProjectSlug] = useState("");
  const project = projectProposals.find(item => item.slug === projectSlug);
  const [messageHref, setMessageHref] = useState("");
  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState<"process" | "tools" | null>(null);
  const processInput = useRef<HTMLTextAreaElement>(null);
  const toolsInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("servico");
    if (interests.some(item => item.id === requested)) setInterest(requested!);
    const proposal = projectProposals.find(item => item.slug === params.get("projeto"));
    if (proposal) { setProjectSlug(proposal.slug); if (!interests.some(item => item.id === requested)) setInterest(proposal.service); }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const read = (name: string) => String(data.get(name) ?? "").trim();
    if (read("process").length < 10) { setError("Descreva um pouco mais sobre o processo, com pelo menos 10 caracteres."); setErrorField("process"); processInput.current?.focus(); return; }
    if (!read("tools")) { setError("Informe as ferramentas envolvidas. Se não souber, escreva ‘a definir’."); setErrorField("tools"); toolsInput.current?.focus(); return; }
    setError("");
    setErrorField(null);
    const message = [
      "Olá! Vim pelo site da MarIA e gostaria de conversar sobre um processo.",
      project ? `Proposta de referência: ${project.title} (demonstração planejada)` : "",
      read("company") ? `Empresa: ${read("company")}` : "",
      `Processo ou desafio: ${read("process")}`,
      `Ferramentas e sistemas: ${read("tools")}`,
      read("frequency") ? `Frequência ou volume: ${read("frequency")}` : "",
      `Momento: ${read("urgency")}`,
      `Interesse: ${interests.find(item => item.id === interest)?.name ?? "Preciso de ajuda para definir"}`,
    ].filter(Boolean).join("\n\n");
    const href = getScheduleHref(message);
    setMessageHref(href);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return <form className={s.form} onSubmit={handleSubmit} onChange={() => { setMessageHref(""); setError(""); setErrorField(null); }}>
    {project && <div className={s.formStatus}><p>Proposta de referência: <strong>{project.title}</strong>. Conte como esse problema aparece na sua rotina.</p><button type="button" className={s.textLink} onClick={() => { setProjectSlug(""); setMessageHref(""); }}>Remover referência</button></div>}
    <div className={s.field}><label htmlFor="company">Sua empresa <span>(opcional)</span></label><input id="company" name="company" autoComplete="organization" maxLength={100} placeholder="Nome da empresa"/></div>
    <div className={s.field}><label htmlFor="process">O que precisa melhorar?</label><textarea ref={processInput} id="process" name="process" required minLength={10} maxLength={1400} placeholder="Conte qual tarefa toma tempo, gera retrabalho ou dificulta o acompanhamento." aria-describedby={errorField === "process" ? "process-help contact-error" : "process-help"} aria-invalid={errorField === "process" ? true : undefined}/><small id="process-help">Não inclua senhas, dados pessoais de terceiros ou informações confidenciais.</small></div>
    <div className={s.field}><label htmlFor="tools">Quais ferramentas ou sistemas estão envolvidos?</label><input ref={toolsInput} id="tools" name="tools" required maxLength={300} placeholder="Ex.: Excel, e-mail, sistema de gestão…" aria-describedby={errorField === "tools" ? "contact-error" : undefined} aria-invalid={errorField === "tools" ? true : undefined}/></div>
    <div className={s.formRow}>
      <div className={s.field}><label htmlFor="frequency">Frequência ou volume <span>(opcional)</span></label><input id="frequency" name="frequency" maxLength={150} placeholder="Ex.: todo dia, 3 arquivos por semana"/></div>
      <div className={s.field}><label htmlFor="urgency">Em que momento você está?</label><select id="urgency" name="urgency" defaultValue="Estou explorando possibilidades"><option>Estou explorando possibilidades</option><option>Quero planejar os próximos passos</option><option>Tenho uma necessidade prioritária</option></select></div>
    </div>
    <div className={s.field}><label htmlFor="interest">Alguma frente chamou sua atenção?</label><select id="interest" name="interest" value={interest} onChange={event => { setInterest(event.target.value); setMessageHref(""); }}><option value="">Preciso de ajuda para definir</option>{interests.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></div>
    <button className={s.button} type="submit">Continuar no WhatsApp<Arrow diagonal/></button>
    <p className={s.formNote}>O botão abre o WhatsApp com uma mensagem preparada. Você revisa antes de enviar. Este formulário não armazena suas respostas.</p>
    {error && <p id="contact-error" className={s.formStatus} role="alert">{error}</p>}
    {messageHref && <div className={s.formStatus} role="status">Sua mensagem está preparada. Se uma nova aba não abriu, use o link abaixo.<a href={messageHref} target="_blank" rel="noopener noreferrer">Abrir mensagem no WhatsApp ↗</a></div>}
  </form>;
}
