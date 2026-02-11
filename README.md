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
Foi escolhido pela facilidade de integrar estilos aos componentes

#### react-virtuoso

Para virtualização de listas foi usado o react-virtuoso.
Foi escolhido por oferecer uma alternativa mais flexível para layouts responsivos que usam grid e derivados
em comparação com o react-window.

#### json-server

Para mock de api foi usado o json-server.
