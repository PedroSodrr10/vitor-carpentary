# Entrega — prévia para reunião

Data: 02/10/2026. Estado: preview-validada. Não publicada, conteúdo não aprovado pelo cliente.

URL local: http://127.0.0.1:4173

## Implementação
Next.js estático 16.3.8, React 19.3.0, TypeScript, CSS próprio. Paleta escura/dourada com seção clara de serviços, hero fotográfico, cinco serviços e contatos. Chamada fixa de ligação no celular. Marca tipográfica e símbolo provisório, não reprodução do logo original.
Imagens conceituais com legenda em todas as fotos e aviso no rodapé. Sem portfólio real, avaliações ou provas inventadas. Originais preservados em public/images/concept; derivados em public/images/optimized.
Textos e contatos editáveis em content/site.ts; composição em app/page.tsx. Contrato gerado em qa/contract.json. Outros textos propostos estão nos componentes da página e devem ser revisados junto da fonte de conteúdo.

## Validação
Tipos e build passaram. Export em out/. QA no Browser integrado: 375, 768 e 1440 px, sem overflow, imagens carregadas com alt, um H1, metadados/idioma e contrato conferidos. Console sem erros ou avisos. Âncoras de serviços, detalhes, contato e topo clicadas; destinos tel/mailto inspecionados sem acioná-los. Foco de teclado conferido e estilos de foco visível presentes.
Evidências: qa/evidence/report.json, viewport-375.png, viewport-768.png, viewport-1440.png e hero-desktop.png. Screenshots revisadas visualmente.
O verificador DOM da skill depende de APIs não expostas pelo Browser integrado; a conferência foi adaptada à API de leitura do Browser mantendo o contrato original. Não foi usado headless externo.
Movimento reduzido conferido no CSS, sem emulação do sistema. Sem Lighthouse ou certificação de acessibilidade completa. Formulários e modais não aplicáveis.
Patch do Next aplicado por alerta de dependência; instalação final reportou zero vulnerabilidades.

## Executar novamente
Na pasta E:/Dev/vitor-carpentry:

```sh
npm ci
npm run typecheck
npm run build
npm start
```

## Pendências para publicação
Confirmar telefone, email, textos, escopo e área atendida. Obter logo original e fotos de obras com autorização. Aprovar conteúdo e escolher domínio/hospedagem. Revisar política de indexação na publicação: prévia usa noindex. Publicação e push não realizados nem autorizados.

## Revisão de movimento — 05/10/2026
URL atual: http://127.0.0.1:4174. Para reiniciar no PowerShell: `$env:PORT='4174'; npm start`.
Montagem sequencial dos símbolos de construção e marca provisória; entradas suaves; fotos com aproximação discreta e moldura traçada; fundo técnico sutil; feedback de hover/foco. Movimento reduzido desativa efeitos; sem JS o conteúdo permanece visível.
Build, tipos e QA responsivo passaram. Testes de montagem, conclusão, preferência reduzida e alteração em tempo real passaram. Evidências em qa/evidence/motion. Inspeção visual feita nos três tamanhos. Sem auditoria completa com leitor de tela.
