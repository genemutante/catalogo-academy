// Base de cursos — copie daqui e vá ampliando com os dados da planilha
const cursos = [

  // 01 - Onboarding
{
  trilha: "01 - Onboarding",
  subtrilha: "",
  nome: "01 - IMAGEM & ESTILO",
  descricao: "Orienta sobre postura, vestimenta e comportamento profissional, reforçando a importância da imagem pessoal e corporativa em clientes e ambientes de trabalho.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5U3P7ee02ou-CgdgatCDCtv",
  duracaoMinutos: 38
},
{
  trilha: "01 - Onboarding",
  subtrilha: "",
  nome: "02 - PROGRAMAS EDESOFT",
  descricao: "Apresenta projetos e iniciativas internas da Edesoft voltados ao desenvolvimento, reconhecimento e engajamento dos colaboradores.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5UMSJ5d6HJRUFLmnm86tEPk",
  duracaoMinutos: 13
},
{
  trilha: "01 - Onboarding",
  subtrilha: "",
  nome: "03 - ROTINAS INTERNAS EDESOFT",
  descricao: "Explica as regras e boas práticas do dia a dia na empresa, como horários, pausas, comunicação interna e conduta organizacional.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WvbAKDLlzCal_G3MRejii_",
  duracaoMinutos: 5
},

  // 02 - Desenvolvimento Pessoal
{
  trilha: "02 - Desenvolvimento Pessoal",
  subtrilha: "",
  nome: "01 - LEADERSHIP",
  descricao: "Desenvolve habilidades de liderança, ajudando o colaborador a se tornar um líder eficaz, capaz de influenciar e motivar equipes com confiança e clareza.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5Ut5O15XaP7cF1LCtW2ZmBt",
  duracaoMinutos: 48
},
{
  trilha: "02 - Desenvolvimento Pessoal",
  subtrilha: "",
  nome: "02 - MICROBOOKS",
  descricao: "Usa o formato “microbook” para absorver rapidamente conteúdo curto e direto sobre assuntos essenciais rapidamente.",
  quantidadeAulas: 50,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5W6wcx1fylTB2yBBvnCIz_K",
  duracaoMinutos: 703
},
{
  trilha: "02 - Desenvolvimento Pessoal",
  subtrilha: "",
  nome: "03 - METODOLOGIA DISC",
  descricao: "Apresenta a ferramenta de perfis comportamentais para comunicação, liderança e trabalho em equipe.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5Ut5O15XaP7cF1LCtW2ZmBt",
  duracaoMinutos: 48
},

//03 - Outsourcing
{
  trilha: "03 - Outsourcing",
  subtrilha: "",
  nome: "01 - LOGÍSTICA RODOVIÁRIA",
  descricao: "Apresenta fundamentos do transporte de cargas, etapas, documentos e desafios de operação logística.",
  quantidadeAulas: 3,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5V6HBPw_r817YUb_-T4NXcC",
  duracaoMinutos: 125
},

  

//04 - QA

{
  trilha: "04 - Garantia da Qualidade",
  subtrilha: "",
  nome: "01 - CUSTOS DA NÃO QUALIDADE",
  descricao: "Mostra como medir perdas causadas por falhas e retrabalho para justificar investimentos em qualidade.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5VWD5Guz6kMi_8bR0YiNmeU",
  duracaoMinutos: 50
},
{
  trilha: "04 - Garantia da Qualidade",
  subtrilha: "",
  nome: "02 - QUALIDADE DO INÍCIO AO FIM",
  descricao: "Mostra como construir qualidade desde o início até a entrega, integrando boas práticas em todo o ciclo.",
  quantidadeAulas: 6,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5USfy1EX94D4iz0fQLujAXY",
  duracaoMinutos: 284
},
 


{
  trilha: "04 - Garantia da Qualidade",
  subtrilha: "",
  nome: "03 - ANALISTA DE TESTES x ANALISTA QA",
  descricao: "Compara responsabilidades do testador e do analista de qualidade, mostrando como atuam juntos para garantir software confiável.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5V4PMDg7I9hRUMh2UtT5-an",
  duracaoMinutos: 19
},
  
{
  trilha: "04 - Garantia da Qualidade",
  subtrilha: "",
  nome: "04 - INTRODUÇÃO À CARREIRA DE QA",
  descricao: "Mostra caminhos e competências da carreira de Qualidade, do operacional ao estratégico, com trilhas de evolução.",
  quantidadeAulas: 2,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5XbNrKTiW_mVfnenHILB6H2",
  duracaoMinutos: 60
},  

{
  trilha: "04 - Garantia da Qualidade",
  subtrilha: "",
  nome: "05 - INTRODUÇÃO AO TESTE DE SOFTWARE",
  descricao: "Ensina fundamentos, tipos de testes e como planejar e executar testes que previnem defeitos.",
  quantidadeAulas: 5,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WCjyUuHq51jJFw2FsF_v8A",
  duracaoMinutos: 179
},
  
{
  trilha: "04 - Garantia da Qualidade",
  subtrilha: "",
  nome: "06 - ROBOT FRAMEWORK BÁSICO",
  descricao: "Ensina o básico do Robot Framework para automatizar testes sem complicar a manutenção.",
  quantidadeAulas: 5,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5Xw2W-5Mk0RbUOykjnixsOk",
  duracaoMinutos: 277
},

{
  trilha: "04 - Garantia da Qualidade",
  subtrilha: "",
  nome: "07 - ROBOT FRAMEWORK AVANÇADO",
  descricao: "Aprofunda boas práticas, arquitetura de testes e integração contínua com Robot Framework.",
  quantidadeAulas: 5,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5U5lpgTn7Dw37WntVBPohiJ",
  duracaoMinutos: 255
},
{
  trilha: "04 - Garantia da Qualidade",
  subtrilha: "",
  nome: "08 - ROBOT FRAMEWORK - TESTES COM API",
  descricao: "Foca em testes de APIs com Robot Framework, cobrindo autenticação, cenários e validação de respostas.",
  quantidadeAulas: 2,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WgYvfopx_T7vUkshKcpeG6",
  duracaoMinutos: 83
},


{
  trilha: "04 - Garantia da Qualidade",
  subtrilha: "",
  nome: "09 - FERRAMENTAS DA QUALIDADE",
  descricao: "Explora ferramentas clássicas da qualidade para identificar causas, padronizar processos e prevenir falhas.",
  quantidadeAulas: 24,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5Xjaj-ZlXnxNIeIoBqSp3t9",
  duracaoMinutos: 399
},

{
  trilha: "04 - Garantia da Qualidade",
  subtrilha: "",
  nome: "10 - ENGENHARIA DE REQUISITOS",
  descricao: "Explica como levantar, documentar e validar requisitos para construir software alinhado às necessidades.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5VReCTBakKdhi7-PWpeyXCZ",
  duracaoMinutos: 0
},



  // 05 - Ferramentas  
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "01 - AZURE DEVOPS",
  descricao: "Ensina a gerenciar o ciclo de vida de aplicações, do planejamento ágil à implantação automatizada (CI/CD) utilizando a plataforma Azure.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
},
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "02 - BANCO DE DADOS",
  descricao: "Ensina a projetar e gerenciar bancos de dados, da modelagem relacional à execução de consultas otimizadas (SQL) para suporte a aplicações.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
},
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "03 - BIZAGI",
  descricao: "Introduz a modelagem de processos no Bizagi para mapear fluxos, descobrir gargalos e padronizar rotinas.",
  quantidadeAulas: 4,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5VwZAFmQ4Nf33qZr-nCgVav",
  duracaoMinutos: 228
},
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "04 - CLICKUP",
  descricao: "Apresenta o ClickUp para organizar tarefas, sprints e projetos, dando visibilidade de prazos e responsáveis.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5X9xCRF11qJ_vhCXWNn2aOJ",
  duracaoMinutos: 0
},
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "05 - FIGMA",
  descricao: "Ensina a prototipar telas e fluxos no Figma para validar ideias com usuários antes do desenvolvimento.",
  quantidadeAulas: 4,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5VgVU56741SAxwfS-30t1Uy",
  duracaoMinutos: 233
},
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "06 - GIT",
  descricao: "Ensina a controlar o versionamento de código, do registro de alterações à gestão de branches e colaboração em equipe utilizando Git.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
}, 
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "07 - MINITAB",
  descricao: "Ensina o software estatístico para análises, gráficos e controle de processos na indústria e serviços.",
  quantidadeAulas: 5,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WKlxdbxVYjD-OAyzQx7Uod",
  duracaoMinutos: 232
},
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "08 - PACOTE OFFICE",
  descricao: "Ensina a dominar as ferramentas de produtividade, da edição de documentos e gestão de planilhas à criação de apresentações profissionais.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
}, 
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "09 - PHOTOSHOP",
  descricao: "Ensina a editar e manipular imagens digitais, do retoque fotográfico e correção de cores à criação de composições visuais profissionais.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
}, 
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "10 - POWER BI BÁSICO",
  descricao: "Ensina a criar relatórios e dashboards no Power BI, do zero até a publicação segura.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5X_mSDY240MhPbBp3vyfUZc",
  duracaoMinutos: 72
},
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "11 - POWER BI AVANÇADO",
  descricao: "Aprofunda análises, DAX e modelos de dados avançados para dashboards corporativos eficientes.",
  quantidadeAulas: 32,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5XpCm-PJHaTuIGZNZ4l_aog",
  duracaoMinutos: 1605
}, 
{
  trilha: "05 - Ferramentas",
  subtrilha: "",
  nome: "12 - TRELLO",
  descricao: "Ensina a organizar tarefas e projetos no Trello usando quadros, listas, cartões e checklists.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5W4ML5zhWD9llNzmZCyyGxp",
  duracaoMinutos: 0
},


  
// 06 - GOVERNANÇA
{
  trilha: "06 - Governança",
  subtrilha: "",
  nome: "01 - CENTRAL DE SERVIÇOS DE TI - SERVICE DESK",
  descricao: "Explica a função do Service Desk e como registrar, priorizar e resolver chamados com foco no usuário.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5XRDInGzi0f7j1W5CSj2Qpa",
  duracaoMinutos: 47
},
{
  trilha: "06 - Governança",
  subtrilha: "",
  nome: "02 - GOVERNANÇA DE TECNOLOGIA DA INFORMAÇÃO",
  descricao: "Explica princípios de governança de TI para decisões seguras, controles claros e conformidade regulatória.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WrSTe6j2WJ2HvY7DADwzg_",
  duracaoMinutos: 55
},
{
  trilha: "06 - Governança",
  subtrilha: "",
  nome: "03 - ITIL - OVERVIEW",
  descricao: "Apresenta a visão geral do ITIL e como ele ajuda a organizar serviços de TI orientados ao cliente.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5X1pD1WSfSw6sEZlr4FUAir",
  duracaoMinutos: 37
},
{
  trilha: "06 - Governança",
  subtrilha: "",
  nome: "04 - ITIL - CARREIRAS",
  descricao: "Descreve trilhas profissionais dentro das práticas ITIL e onde cada perfil pode atuar em serviços de TI.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5U8Dk2_RxAiOJcrx4D4LA5-",
  duracaoMinutos: 112
},
{
  trilha: "06 - Governança",
  subtrilha: "",
  nome: "05 - ITIL 4 FOUNDATION",
  descricao: "Prepara para a certificação oficial, cobrindo conceitos, práticas e termos essenciais do ITIL 4.",
  quantidadeAulas: 4,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5W8Hk75co38n1Gddg0C8oUh",
  duracaoMinutos: 188
},
{
  trilha: "06 - Governança",
  nome: "06 - COBIT 2019",
  descricao: "Apresenta o framework de governança que alinha TI aos objetivos do negócio e mede desempenho de processos.",
  quantidadeAulas: 8,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WfXIu3gvC9nRwR8s16jtVY",
  duracaoMinutos: 276
},

{
  trilha: "06 - Governança",
  subtrilha: "",
  nome: "07 - NORMA ISO 20000",
  descricao: "Explica requisitos e boas práticas para gerenciar serviços de TI conforme a ISO/IEC 20000.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5Xp5ItlwNc5KJ_daXtOLPjz",
  duracaoMinutos: 0
},
{
  trilha: "06 - Governança",
  subtrilha: "",
  nome: "08 - NORMA ISO 27001",
  descricao: "Apresenta controles e gestão de riscos de segurança da informação segundo a ISO/IEC 27001.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5V_guB_XAHqITdm5wRRECLe",
  duracaoMinutos: 0
},
{
  trilha: "06 - Governança",
  subtrilha: "",
  nome: "09 - NORMA ISO 42001",
  descricao: "Introduz diretrizes de gestão de ativos e sustentabilidade conforme a ISO 42001 no contexto empresarial.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5URGr1vWbKnguOAr11XX41s",
  duracaoMinutos: 0
},
  

  
{
  trilha: "07 - CMMI",
  subtrilha: "",
  nome: "01 - CMMI BÁSICO",
  descricao: "Mostra como a maturidade de processos melhora previsibilidade, qualidade e gestão em empresas de software.",
  quantidadeAulas: 5,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5XjrU3yn-4CQYMUqY4O07qb",
  duracaoMinutos: 94
},
{
  trilha: "07 - CMMI",
  subtrilha: "",
  nome: "02 - CMMI AVANÇADO",
  descricao: "Versão aprofundada do CMMI.",
  quantidadeAulas: 23,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5Xh2JM2bPJp3uPJUelrldJo",
  duracaoMinutos: 158
},

{
  trilha: "07 - CMMI",
  subtrilha: "",
  nome: "03 - POLÍTICAS E DIRETRIZES",
  descricao: "Orienta como navegar, consultar e manter o Portal de Processos da Edesoft: normas, papéis, fluxos, modelos e como propor melhorias.",
  quantidadeAulas: 64,
  status: "EM DESENVOLVIMENTO",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5XowRPIV749TpVnOnFWiajx",
  duracaoMinutos: 0
},


// 08 - Infraestrutura
  {
  trilha: "08 - Infraestrutura",
  subtrilha: "",
  nome: "01 - HARDWARE/REDES",
  descricao: "Capacita o colaborador a entender a configuração e manutenção de hardware e redes, garantindo a estabilidade e o bom funcionamento da infraestrutura de TI.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
}, 


  // 09 - Marketing
  {
  trilha: "09 - Marketing",
  subtrilha: "",
  nome: "01 - MÍDIAS SOCIAIS",
  descricao: "Ensina estratégias e ferramentas para gerenciar redes sociais, ajudando o colaborador a melhorar a presença online e aumentar o engajamento digital da empresa.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
}, 


  // 10 - Comercial
  {
  trilha: "10 - Comercial",
  subtrilha: "",
  nome: "01 - CURSO DE VENDAS",
  descricao: "Foca em técnicas de vendas, preparando o colaborador para interagir com clientes de forma assertiva, contribuindo para o aumento de receitas e expansão da base de clientes.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
},


// 11 - Gestão 
  {
  trilha: "11 - Gestão",
  subtrilha: "",
  nome: "01 - DEPARTAMENTO PESSOAL",
  descricao: "Fornece as habilidades necessárias para lidar com processos de administração de pessoal, assegurando a conformidade com as políticas e o bom funcionamento da área de RH.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
},
  {
  trilha: "11 - Gestão",
  subtrilha: "",
  nome: "02 - FINANCEIRA",
  descricao: "Ensina conceitos e práticas de gestão financeira, capacitando o colaborador a tomar decisões estratégicas e otimizar os recursos financeiros da organização.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
},  
  {
  trilha: "11 - Gestão",
  subtrilha: "",
  nome: "03 - PESSOAS",
  descricao: "Desenvolve habilidades de liderança e gestão de pessoas, ajudando o colaborador a gerenciar equipes com eficiência e promover um ambiente de trabalho colaborativo.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
},  
  {
  trilha: "11 - Gestão",
  subtrilha: "",
  nome: "04 - PROCESSOS",
  descricao: "Capacita o colaborador a mapear, documentar e otimizar processos internos, melhorando a eficiência e alinhando as operações aos objetivos estratégicos.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
},  
  {
  trilha: "11 - Gestão",
  subtrilha: "",
  nome: "05 - PROJETOS",
  descricao: "Ensina metodologias e práticas de gestão de projetos, capacitando o colaborador a planejar, executar e monitorar projetos de forma eficaz.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
}, 



// 12 - RH
  {
  trilha: "12 - RH",
  subtrilha: "",
  nome: "01 - ADMINISTRAÇÃO DE CARGOS E SALÁRIOS",
  descricao: "Capacita o colaborador a administrar planos de cargos e salários, garantindo uma estrutura salarial justa e alinhada às práticas de mercado.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
}, 
  {
  trilha: "12 - RH",
  subtrilha: "",
  nome: "02 - RECRUTAMENTO E SELEÇÃO",
  descricao: "Ensina técnicas de recrutamento e seleção, ajudando o colaborador a identificar e contratar talentos que se alinhem às necessidades da empresa.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
}, 

  
// 13 - Legislação
{
  trilha: "13 - Legislação",
  subtrilha: "",
  nome: "01 - LEIS TRABALHISTAS",
  descricao: "Capacita o colaborador a entender e aplicar as leis trabalhistas, assegurando a conformidade com a legislação e a proteção dos direitos dos trabalhadores.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
}, 
{
  trilha: "13 - Legislação",
  subtrilha: "",
  nome: "02 - LGPD",
  descricao: "Ensina os princípios da LGPD, preparando o colaborador para lidar com dados pessoais de forma segura e conforme a legislação vigente.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
}, 

// 14 - ENGENHARIA DE DADOS
{
  trilha: "14 - Engenharia de Dados",
  subtrilha: "",
  nome: "01 - FUNDAMENTOS",
  descricao: "Introduz os fundamentos da ciência de dados, capacitando o colaborador a trabalhar com análise e interpretação de grandes volumes de dados.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
}, 

{
  trilha: "14 - Engenharia de Dados",
  subtrilha: "",
  nome: "ESTATÍSTICA BÁSICA",
  descricao: "Apresenta noções de probabilidade e análise de dados para interpretar resultados e apoiar decisões.",
  quantidadeAulas: 4,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5UGx6AwDlXwemCYG4QcjVc7",
  duracaoMinutos: 155
},
  

// 15 - PROCESSOS
  {
  trilha: "15 - Processos",
  subtrilha: "",
  nome: "01 - MAPEAMENTO DE PROCESSOS",
  descricao: "Ensina a representar, analisar e melhorar processos com mapas claros, indicadores e responsabilidades.",
  quantidadeAulas: 5,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WndJ2NZFe_4xqB4_zGHFQR",
  duracaoMinutos: 265
},
{
  trilha: "15 - Processos",
  subtrilha: "",
  nome: "02 - MASP & PDCA",
  descricao: "Apresenta métodos de resolução de problemas na prática: identificar causa raiz, agir e padronizar.",
  quantidadeAulas: 3,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5Wmf5DTGBMs8g3XD3xHxz0F",
  duracaoMinutos: 195
},

{
  trilha: "15 - Processos",
  subtrilha: "",
  nome: "03 - SIX SIGMA WHITE BELT",
  descricao: "Apresenta fundamentos do Six Sigma e quando aplicar para ganhos rápidos em processos.",
  quantidadeAulas: 3,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5XUT9_O-X5Fv5KPbiVXhjCP",
  duracaoMinutos: 165
},
{
  trilha: "15 - Processos",
  subtrilha: "",
  nome: "04 - SIX SIGMA YELLOW BELT",
  descricao: "Capacita iniciantes a participar de projetos de melhoria com conceitos e ferramentas essenciais.",
  quantidadeAulas: 5,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WyMCq33m7Q0xRd6va1bBO1",
  duracaoMinutos: 294
},
{
  trilha: "15 - Processos",
  subtrilha: "",
  nome: "05 - SIX SIGMA GREEN BELT",
  descricao: "Forma especialistas em melhoria contínua com ferramentas estatísticas para redução de variação e defeitos.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WPbwnC22tKCyG6LdrmIZl_",
  duracaoMinutos: 0
},

{
  trilha: "15 - Processos",
  subtrilha: "",
  nome: "06 - INTRODUÇÃO AO LEAN",
  descricao: "Apresenta o pensamento enxuto para eliminar desperdícios e melhorar fluxo em áreas técnicas e administrativas.",
  quantidadeAulas: 3,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5V_Q0uqHBpLYzTT6vSBKDxF",
  duracaoMinutos: 147
},


//  16 - Desenvolvimento
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "CSS",
  descricao: "Ensina a estilizar páginas web para criar interfaces bonitas e responsivas que funcionam em diferentes telas.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5UzFQm03Fj7UkbvKC56GTFw",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "DJANGO",
  descricao: "Apresenta o framework web em Python para criar aplicações seguras, escaláveis e produtivas.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5W2IJc6E8guw3qGdBnPOlnH",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "FLASK",
  descricao: "Apresenta o microframework Python para APIs e aplicativos leves, com foco em simplicidade e velocidade.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5ULZDM9tmpbLvwNK7LvYHM0",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "HTML",
  descricao: "Apresenta a base da web para criar estruturas de páginas e conteúdo acessível e semântico.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WCvtwfs2DkMFH5a88expXQ",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "JAVASCRIPT",
  descricao: "Ensina a linguagem que traz interatividade às páginas web e aos sistemas front-end modernos.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5UjKX3yeMtJJ9CaHddQJeB3",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "LÓGICA E ALGORITIMOS",
  descricao: "Desenvolve raciocínio lógico para resolver problemas, formular algoritmos e pensar de forma estruturada.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WZGtecZA67GYbw93hxnxaW",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "MOBX",
  descricao: "Apresenta a biblioteca de gerenciamento de estado reativo para aplicações JavaScript modernas.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5VVFHA2_4bN5B1ppPdZHUfk",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "NODEJS",
  descricao: "Ensina a plataforma JavaScript do lado do servidor para criar APIs rápidas e escaláveis.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WjRHPmeMVfFntMKpwnorS4",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "ORM",
  descricao: "Explica mapeamento objeto-relacional para simplificar acesso a banco de dados em aplicações.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5V5lnY_BiSzlp9-WJot3xBM",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "POO",
  descricao: "Apresenta Programação Orientada a Objetos: classes, herança, encapsulamento e polimorfismo com exemplos práticos.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WIfuTh4SP4W0XGfILW4Etv",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "PYTHON",
  descricao: "Apresenta a linguagem Python para automatizar tarefas, criar APIs e analisar dados de forma prática.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5Ujl_kLltkkDDxJULAQJKLb",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "REACT",
  descricao: "Ensina o framework para criar interfaces reativas e componentes reutilizáveis em projetos web.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5VNHob8XgBlzDq_Kfnp2Z43",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "REDUX",
  descricao: "Apresenta o gerenciamento de estado previsível para aplicações React de médio e grande porte.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5VF4rd4NibUEBCJtRaXNYYS",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "API",
  descricao: "Explica conceitos e boas práticas para projetar e consumir APIs modernas e seguras.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5X_fRErMNPXUSMAlYdShSZz",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "RESTFULL",
  descricao: "Apresenta princípios RESTful e como aplicá-los para integração simples e escalável entre sistemas.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5UgBoLc1pWIahs9VIZQ-BTW",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "ROADMAPS",
  descricao: "Mostra como planejar a evolução de produtos e carreiras com mapas claros de etapas e competências.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5VtjmeEI9ZaJMcSgENkHR1K",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "SQL",
  descricao: "Ensina a consultar, modelar e otimizar bancos de dados relacionais usando SQL na prática.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5XIV7fJUvqUspP4LalUxz_Z",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "TYPESCRIPT",
  descricao: "Apresenta o TypeScript para trazer tipos ao JavaScript, aumentando segurança e produtividade no código.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5UxOytlB_EZCiYdqqU1K5vd",
  duracaoMinutos: 0
},

{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "AWS",
  descricao: "Mostra como usar a nuvem da Amazon para hospedar, escalar e proteger sistemas corporativos com boas práticas.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5W2BC5_CGFuL4uYr3W6BPom",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "AZURE DEVOPS",
  descricao: "Ensina a planejar e automatizar entregas de software usando a plataforma DevOps da Microsoft no Azure.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5U-JGtOP5xa_vfzbrVJh470",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "CLOUD",
  descricao: "Explica conceitos de computação em nuvem, tipos de serviço e quando escolher cada um para reduzir custos.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5UA-O3EoWLyz6WU2hyhUpsJ",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "DOCKER",
  descricao: "Ensina a empacotar e publicar aplicações em containers, facilitando implantação e padronização de ambientes.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5XG44YJ2tNI2Jrdj-Fq2Are",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "GIT",
  descricao: "Ensina versionamento de código, branches e colaboração segura usando Git em equipes de desenvolvimento.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5VN_E_x3tD_d8jUkXK7vUcL",
  duracaoMinutos: 0
},
{
  trilha: "16 - Desenvolvimento",
  subtrilha: "",
  nome: "MENSAGERIA",
  descricao: "Explica troca de mensagens entre sistemas (fila, tópico, ACK), garantindo integração confiável.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5X0jfVx9RQbKa2fGr_sP_yG",
  duracaoMinutos: 0
},



// 17 - Automação
{
  trilha: "17 - Automação",
  subtrilha: "",
  nome: "Básico de Make (Integromat)",
  descricao: "Ensina a criar automações visuais (no-code) conectando apps por gatilhos, webhooks e cenários; agendar rotinas, tratar erros e monitorar execuções.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
},
{
  trilha: "17 - Automação",
  subtrilha: "",
  nome: "Básico de n8n",
  descricao: "Apresenta o n8n para orquestrar fluxos de automação com nós e credenciais; integra APIs, webhooks e filas, com logs, retries e opção de self-host.",
  quantidadeAulas: 24,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/watch?v=uALS7KsZas8&list=PLAb52Z2VRX5UQ9GvmDRgEHPLX2fsVUJP7",
  duracaoMinutos: 370
},
{
  trilha: "17 - Automação",
  subtrilha: "",
  nome: "Básico de Manychat",
  descricao: "Mostra como construir chatbots e automações em WhatsApp/Instagram/Facebook para atendimento e marketing, com fluxos, tags, segmentação e integrações.",
  quantidadeAulas: 0,
  status: "BACKLOG",
  link: "",
  duracaoMinutos: 0
},

// 18 - IA
{
  trilha: "18 - IA",
  subtrilha: "",
  nome: "01 - INTELIGÊNCIA ARTIFICIAL - OVERVIEW",
  descricao:
    "Introduz conceitos, casos de uso e limites de IA, incluindo modelos, dados e aplicações no negócio.",
  quantidadeAulas: 5,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5V7sCA6o87EJqPNbVUJirzP",
  duracaoMinutos: 73
},
{
  trilha: "18 - IA",
  subtrilha: "",
  nome: "02 - LLMS",
  descricao:
    "Apresenta os fundamentos dos Large Language Models, como funcionam, para que servem e como são treinados. Explica capacidades, limitações, riscos e aplicações práticas em empresas.",
  quantidadeAulas: 7,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5XEewPq5mOOQqwVUiCsXRx0",
  duracaoMinutos: 98
},
{
  trilha: "18 - IA",
  subtrilha: "",
  nome: "03 - ENG. DE PROMPT - FUNDAMENTOS",
  descricao:
    "Ensina os princípios essenciais da criação de prompts eficazes, explorando estrutura, padrões, boas práticas e formas de obter respostas mais precisas, coerentes e úteis de modelos de IA.",
  quantidadeAulas: 23,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WFCmjbrY_nAlkLiNDa5Uni",
  duracaoMinutos: 90
},
{
  trilha: "18 - IA",
  subtrilha: "",
  nome: "04 - ENG. DE PROMPT - CASOS DE USO",
  descricao:
    "Mostra como aplicar técnicas de prompting em situações reais, incluindo análise de dados, automações, criação de conteúdo, suporte, programação e otimização de fluxos com IA.",
  quantidadeAulas: 19,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5U5HAlV0tt43jEwrDgSQYQr",
  duracaoMinutos: 160
},
{
  trilha: "18 - IA",
  subtrilha: "",
  nome: "05 - ENG. DE CONTEXTO - OVERVIEW",
  descricao:
    "Introduz o conceito de engenharia de contexto e como organizar instruções, dados e referências para melhorar a qualidade das respostas da IA. Explica exemplos práticos com documentos, históricos e personas.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5XhvKIcEgCTU--lpaqkpjVJ",
  duracaoMinutos: 20
},
{
  trilha: "18 - IA",
  subtrilha: "",
  nome: "06 - ASSISTENTES DE IA",
  descricao:
    "Explora como funcionam assistentes inteligentes baseados em IA, sua arquitetura, casos de uso, integrações e como podem apoiar equipes em tarefas operacionais, produtivas e estratégicas.",
  quantidadeAulas: 2,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5VHmXIkkQ1EntDX6OMSHdik",
  duracaoMinutos: 27
},
{
  trilha: "18 - IA",
  subtrilha: "",
  nome: "07 - AGENTES DE IA",
  descricao:
    "Apresenta o conceito de agentes autônomos, capazes de planejar, decidir e agir com base em objetivos. Mostra aplicações, limites, riscos e oportunidades para automações avançadas em processos e negócios.",
  quantidadeAulas: 9,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5UU_AqX7FE6A8KpwQ9dwdkj",
  duracaoMinutos: 180
},




{
  trilha: "99 - DIVERSOS",
  subtrilha: "",
  nome: "MINI CURSO CHECKLIST DO GESTOR",
  descricao: "Apresenta um checklist prático para líderes acompanharem rotinas, qualidade e resultados da equipe.",
  quantidadeAulas: 1,
  status: "DISPONÍVEL",
  link: "https://www.youtube.com/playlist?list=PLAb52Z2VRX5WELu0yJUvPFMW-rg44hy-0",
  duracaoMinutos: 5
},



];











































