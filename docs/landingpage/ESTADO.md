# Estado da landing page

Cliente: Vitor Carpentry. Modo: página completa /lp2.
Objetivo: prévia para reunião, foco em ligação para orçamento.
Projeto: E:/Dev/vitor-carpentry — Next estático, React, TypeScript e CSS próprio.
Estado: preview-validada. Conteúdo: proposta, ainda não aprovado pelo cliente.
Hospedagem: não definida. Publicação e push não autorizados.

## Fontes e decisões
BRIEFING.md, DIRECAO-VISUAL.md e IMAGENS-CONCEITUAIS.md, 02/10/2026, preservados.
Contato transcrito do cartão; sujeito a confirmação. Marca tipográfica e símbolo simples provisório.
Imagens conceituais identificadas em cada foto; sem portfólio, biografia ou provas inventadas.
Fonte de conteúdo: content/site.ts. Sem domínio/canonical fictício; preview com noindex.
Inicialização manual porque destino já contém documentos e assets; nenhum existente sobrescrito.

## Pendências
Confirmar textos e contatos, obter logo e fotos reais autorizadas antes de publicação.
Publicação depende de aprovação, fotos reais autorizadas, contatos confirmados e destino definido.

## Verificações — 02/10/2026
- npm run typecheck: passou.
- npm run build: passou; export estático em out/.
- Next 16.3.5 da base atualizado para 16.3.8 após alerta no npm audit; instalação final reportou zero vulnerabilidades.
- Browser integrado, artefato exportado servido em http://127.0.0.1:4173: QA em 375, 768 e 1440 px passou. Relatório: qa/evidence/report.json.
- Texto e metadados conferidos contra qa/contract.json, H1 único, links de contato corretos, sem overflow ou imagens quebradas, logs de console sem erros/avisos.
- Screenshots inspecionadas nos três tamanhos. Ajustes: legenda do hero no topo em celular; carregamento imediato das três imagens.
- Cliques Services, The Details, Contact e Back to top: âncoras corretas. Tab: foco em link; CSS de foco visível e skip link presentes.
- Movimento reduzido: regra CSS inspecionada (rolagem sem animação); preferência do SO não emulada. Não é auditoria completa de acessibilidade.
- Contatos verificados apenas pelo destino, sem chamadas ou mensagens. Formulário/modal/menu colapsável: não aplicável.
- PNGs originais preservados; WebP derivados somam aproximadamente 858 KB.

## Publicação e próximo passo
Servidor local ativo em http://127.0.0.1:4173. npm start permite reiniciar.
Sem push, deploy, domínio ou contato com cliente. Prévia com noindex.
Apresentar proposta na reunião; confirmar pendências e substituir imagens antes da publicação.

## Atualização visual — 05/10/2026
Prévia atual: http://127.0.0.1:4174 (4173 está ocupada por outro projeto). Reiniciar com `$env:PORT='4174'; npm start`.
Aplicadas entradas suaves, montagem SVG por peças, filetes e molduras traçados, fundos discretos de desenho técnico, feedback nos botões e links. Sem dependências novas. Efeitos uma vez por elemento via IntersectionObserver; página legível sem JS.
Build/tipos passaram. QA do export em Edge headless passou em 375/768/1440 px: contrato, imagens, console, overflow e foco. Evidências: qa/evidence/motion/report.json.
Teste específico de movimento passou: traços intermediários observados, montagem completa em até 2,4 s, preferência reduce sem animação e mudança de preferência em tempo real. Conteúdo visível sem JavaScript. Evidência: qa/evidence/motion/animation-report.json.
Screenshots desktop, tablet e celular revisadas. Sem chamadas, mensagens, push ou publicação. Conteúdo continua proposta e imagens conceituais.

## Publicação autorizada — 05/10/2026
Usuário autorizou commit/push para https://github.com/PedroSodrr10/vitor-carpentary e deploy no Vercel nesta conversa.
Estado: publicacao-pendente. Escopo: versão de apresentação atual, com imagens conceituais identificadas e noindex; não é aprovação do conteúdo pelo cliente.
