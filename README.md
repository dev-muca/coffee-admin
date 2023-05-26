# ☕ Macieul's Coffee - Painel Administrativo

Este projeto é fruto de uma atividade proposta pelo professor [@FelipeMaciel](https://www.linkedin.com/in/felipe-maciel-icmc/), onde o objeto era desenvolver uma aplicação web que fosse responsável pela parte Administrativa de uma cafeteria. A escolha das tecnologias estavam a nosso critério.

<br/>

## Tecnologias

<hr/>

Para o desenvolvimento do projeto, optei por utilizar [ReactJS](https://react.dev/)/[NextJS](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/), já que estava em processo de aprendizado destas tecnologias. Optei também estilizar com [Tailwind](https://tailwindcss.com/), um framework muito versátil em quesito produtividade.

Vale ressaltar que não tenho dominio do Typescript, tentei sempre que possível tipar todos os componentes que utilizei, porém ao decorrer do projeto alguns componentes, eventos e parametros foram tipados com `any` pois não encontrei a estrutura correta para resolver os erros apresentados, estou estudando cada dia mais a linguagem para um dia voltar neste repositório e corrigir estes problemas.

<br/>

<div style="display: flex; flex-flow: row; gap: 16px;">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&)

![Typescrypt](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

<br/>

## ⚙️ Features Propostas:

<hr/>
<br/>
<div>
  <div style="display: flex; flex-flow: row; gap: 32px;">
    <section>
      <h4>🍰 Produtos:</h4>
      <hr/>
      <div style="list-style: none;">
        <li>✅ Listar produtos</li>
        <li>✅ Criar um produto</li>
        <li>✅ Editar um produto</li>
        <li>✅ Excluir um produto</li>
      </div>
    </section>
    <section>
      <h4>📝 Pedidos:</h4>
      <hr/>
      <div style="list-style: none;">
        <li>❌ Listar todos os pedidos</li>
        <li>❌ Listar um pedido específico</li>
        <li>❌ Alterar o status de um item</li>
        <li>❌ Excluir itens de um pedido</li>
        <li>❌ Excluir um pedido</li>
      </div>
    </section>
  </div>

  <div style="font-size: 12px">
    <p>Legenda:</p>
    <div>
      <p>✅ - Implementado</p> 
      <p>❌ - Não Implementado</p>
    </div>
  </div>
  <br/>
</div>

<br/>

## Instalação

<hr/>

Clonando o repositório:

```bash
  mkdir project
  cd project
  git clone https://github.com/dev-muca/coffee-admin
  cd coffee-admin
```

<br/>

Instalando as dependências e rodando o projeto:

```bash
  npm install
  npm run dev

  or:

  yarn install
  yarn dev
```

<br/>

Após, acessar pelo link http://localhost:3000/
