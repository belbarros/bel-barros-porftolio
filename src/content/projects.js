import titactoe from '../img/screenshot2.png';
import trybewallet from '../img/s2.png';

const projects = [
  {
    name: "jogo da velha (tic-tac-toe)",
    link: "https://tic-tac-toe-khaki-mu.vercel.app/",
    repository: "https://github.com/belbarros/tic-tac-toe",
    description:
      "Clássico jogo da velha, criado com base no tutorial do React.",
    img: titactoe,
    tags: ["front-end", "react", "context-api", "projeto pessoal"],
  },
  {
    name: "trybewallet",
    link: "https://trybewallet-mauve.vercel.app/",
    repository: "https://github.com/belbarros/trybewallet",
    description:
      "Aplicação que computa gastos em diferentes moedas, convertendo tudo para uma única moeda escolhida pelo usuário. Desenvolvida como projeto do módulo de Front-End da Trybe!",
    img: trybewallet,
    tags: ["front-end", "react", "redux", "trybe"],
  },
  {
    name: "to-do list",
    link: "https://to-do-list-sigma-lemon.vercel.app/",
    repository: "https://github.com/belbarros/to-do-list",
    description: "Simples aplicação de lista de afazeres, utilizando contextAPI para gerenciar seu estado.",
    img: "",
    tags: ["front-end", "react", "context-api", "projeto pessoal"]

  },
  {
    name: "solar system",
    link: "",
    repository: "https://github.com/belbarros/solar-system",
    description: "Modelo do sistema solar, onde é possível visualizar os planetas e cards com informações sobre eles. Desenvolvido como projeto do módulo de Front-End da Trybe!",
    img: "",
    tags: ["front-end", "react", "trybe"]

  },
  {
    name: "tryunfo",
    link: "",
    repository: "https://github.com/belbarros/tryunfo",
    description: "Aplicação de um jogo no estilo Super Trunfo! Você pode criar um baralho, adicionar uma carta do baralho, visualizar todas as cartas já adicionadas ao baralho e jogar com o baralho criado. Desenvolvido como projeto do módulo de Front-End da Trybe!",
    img: "",
    tags: ["front-end", "react", "trybe"]

  },
  {
    name: "trybetunes",
    link: "",
    repository: "https://github.com/belbarros/trybetunes",
    description: "Aplicação onde você pode buscar e reproduzir músicas de diversos artistas, criar uma lista de musicas favoritas e editar o perfil do usuário logado. Desenvolvido como projeto do módulo de Front-End da Trybe!",
    img: "",
    tags: ["front-end", "react", "trybe"]

  },
  {
    name: "starwars planet search",
    link: "",
    repository: "https://github.com/belbarros/starwars-planet-search",
    description: "Lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais. Desenvolvido como projeto do módulo de Front-End da Trybe!",
    img: "",
    tags: ["front-end", "react", "context-api", "trybe"]
  },
  {
    name: "talker manager",
    repository: "https://github.com/belbarros/talker-manager",
    description: "API de cadastro de palestrantes. Desenvolvido como projeto do módulo de Back-End da Trybe!",
    img: "",
    tags: ["back-end", "node.js", "express", "API", "trybe"]
  },
  {
    name: "all for one",
    repository: "https://github.com/belbarros/all-for-one",
    description: "Projeto para fixação do conteúdo de MySQL, praticando a criação de queries. Desenvolvido como projeto do módulo de Back-End da Trybe!",
    img: "",
    tags: ["back-end", "mySQL", "banco de dados", "trybe"]
  },
  {
    name: "one for all",
    repository: "https://github.com/belbarros/one-for-all",
    description: "Projeto para fixação do conteúdo de MySQL, agora para praticar a criação de queries mais complexas e a normalização de um banco não normalizado. Desenvolvido como projeto do módulo de Back-End da Trybe!",
    img: "",
    tags: ["back-end", "mySQL", "banco de dados", "trybe"]
  },
  {
    name: "docker to-do list",
    repository: "https://github.com/belbarros/docker-todo-list",
    description: "Projeto de fixação dos conhecimentos da ferramenta Docker, onde foram criados containers para aplicação front-end, back-end e a sua conexão para funcionarem juntos. Desenvolvido como projeto do módulo de Back-End da Trybe!",
    img: "",
    tags: ["back-end", "fullstack", "docker", "trybe"]
  }
];

export default projects;

// Pegar os projetos que faltam na Trybe.
// https://github.com/tryber/sd-022-a-project-shopping-cart
// https://github.com/tryber/sd-022-a-project-frontend-online-store
// ** Checar os de back-end também.
