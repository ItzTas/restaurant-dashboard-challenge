# restaurant-dashboard-challenge

## Desenvolvimento e Ferramentas

Para gerenciar as ferramentas foi usado o [proto](https://moonrepo.dev/proto) para baixar as versões do node e yarn automaticamente de acordo com o arquivo [.prototools](https://github.com/ItzTas/restaurant-dashboard-challenge/blob/main/.prototools)

Ferramentas:

- Node.js: 20.x
- Yarn: 1.x
- Gerenciador de Pacotes: Yarn (npm tambem deverá funcionar)

## Como rodar

<details>
<summary>yarn</summary>

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
<summary>npm</summary>

```bash

npm run dev # Para rodar o next
npm run mock-api # Para rodar o json server

```

ou

```bash

npm run dev:all # Para rodar os dois

```

</details>

## Decisões arquiteturais

### Bibliotecas usadas

#### Redux Toolkit

Para gerenciamento de estados globais foi utilizado o redux toolkit.
Foi escolhido por ter uma estrutura mais organizada em relação ao context,
além de permitir atualizações granulares dos estados.

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
