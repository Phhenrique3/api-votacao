# API de Votação

## Descrição
Esta é uma API para gerenciar um sistema de votação. Permite criar, listar, atualizar e deletar votações e votos.

## Instalação
1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/api-votacao.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd api-votacao
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso
1. Inicie o servidor:
    ```sh
    npm start
    ```
2. Acesse a API em `http://localhost:3000`.

## Endpoints
- `GET /votacoes` - Lista todas as votações
- `POST /votacoes` - Cria uma nova votação
- `GET /votacoes/:id` - Obtém uma votação específica
- `PUT /votacoes/:id` - Atualiza uma votação específica
- `DELETE /votacoes/:id` - Deleta uma votação específica

## Contribuição
1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
