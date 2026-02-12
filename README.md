# restaurant-dashboard-challenge

Projeto de dashboard para gerenciamento de mesas e pedidos de restaurante.

## Desenvolvimento e Ferramentas

Para gerenciar as ferramentas foi usado o [proto](https://moonrepo.dev/proto) para baixar as versões do node e yarn automaticamente de acordo com o arquivo [.prototools](https://github.com/ItzTas/restaurant-dashboard-challenge/blob/main/.prototools)

Ferramentas:

- Node.js: 20.x
- Yarn: 1.x
- Gerenciador de Pacotes: Yarn (npm também deverá funcionar)

## Como rodar

O projeto roda na porta **3000** por padrão.

Para acessar, abra o navegador e vá para:

```bash

http://localhost:3000

```

Comandos:

<details>
<summary>Yarn</summary>

```bash

yarn run dev # Para rodar o next
yarn run mock-api # Para rodar o json server

```

ou

```bash

yarn run dev:all # Para rodar os dois

```

</details>

<details>
<summary>NPM</summary>

```bash

npm run dev # Para rodar o next
npm run mock-api # Para rodar o json server

```

ou

```bash

npm run dev:all # Para rodar os dois

```

</details>

<details>
<summary>Docker</summary>

```bash

docker compose up

```

No docker é usado o webpack ao invés do turbopack por motivos de compatibilidade.

</details>

## Tests

O projeto utiliza Jest junto com React Testing Library para testes.

### Rodando os testes

Para executar todos os testes:

```bash

yarn test
# ou
npm run test

```

## Decisões arquiteturais

### Bibliotecas usadas

#### Redux Toolkit

Para gerenciamento de estados globais foi utilizado o redux toolkit.
Foi escolhido por ter uma estrutura mais organizada em relação ao context,
além de permitir atualizações granulares dos estados.

#### redux-persist

Para persistencia de estados globais foi utilizado o redux-persist.
Foi escolhido pela facilidade de salvar o estado entre reloads.

#### styled-components

Para estilização foi usado o styled-components.
Foi escolhido pela customização e facilidade de integrar estilos aos componentes.

#### react-virtuoso

Para virtualização de listas foi usado o react-virtuoso.
Foi escolhido por oferecer uma alternativa mais flexível para layouts responsivos que usam grid e derivados
em comparação ao react-window.

#### json-server

Para mock de api foi usado o json-server.

### Estrutura de pastas

#### /src/app

A pasta principal, onde fica os layouts e paginas do app router.

#### /src/app/dashboard

Rota interna dashboard, onde ficam os dashboards com os cards de ordersheet e mesa.

#### /src/components

Pasta com componentes para serem utilizados em toda aplicação.
Organizada em categorias de acordo com o tipo de componente, como:
bars, buttons, cardLists, cards, dropdowns, feedback, icons, inputs e time.

#### /src/components/\*\*/**tests**

Pasta com testes unitários de componentes.

#### /src/hooks

Pasta para hooks customizados não dependentes de algum modulo ou biblioteca.

#### /src/features

Pasta para a lógica de cada funcionalidade usada no store do redux toolkit.
Contém slices, hooks e tipos relacionados a cada feature.

#### /src/store

Pasta com a configuração do redux, provider e hooks relacionados.

#### /src/lib/api

Pasta com funções simples que se comunicam com a api.

#### /src/lib/cards

Pasta com funções mais complexas que normalmente se relacionam com a api e processam dados utilizados pelos cards.

#### /src/types

Pasta com tipos globais, independentes de componentes
ou utilizados em múltiplas partes do projeto.

#### /src/utils

Pasta com funções utilitárias simples que não interagem diretamente com a API.

#### /src/constants

Pasta com constantes utilizadas pelo projeto,
como configurações, presets e valores fixos compartilhados.

## Fluxo de dados

Os componentes foram organizados de forma atômica,
de modo que apenas os necessários sejam componentes do lado do cliente,
enquanto o restante permanece como componentes de servidor.
Isso também facilita a utilização de possíveis componentes suspend.

Ao entrar em uma página do dashboard, é retornado um componente assíncrono de server que chama uma função helper de API correspondente à página.
Essa função realiza requisições para os endpoints `/ordersheets` ou `/checkpadResponse`.

A página renderiza um componente de lista de cards no lado do cliente, responsável pela virtualização com o Virtuoso.

Esse componente gerencia o estado da lista, lê os estados globais de filtro para aplicá-los nos cards e retorna a lista já filtrada com os componentes correspondentes.

O dashboard possui um layout composto por diferentes componentes.
Um deles é a topbar, que contém:

- Um dropdown com os status dos cards, que ao ser selecionado altera o estado global `statusFilter`.
- Uma lista de botões que muda a URL da página conforme o botão selecionado.
- Um input de busca que altera o estado global `filterQuery` e filtra os dados dos cards.

O layout também retorna uma bottombar, que possui:

- Um dropdown de atendentes que altera o estado global `waiterFilter` e filtra os cards de acordo com o atendente selecionado.
