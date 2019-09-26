# eDoe

<p align="center">
  <img src="https://lh6.googleusercontent.com/lT7mQse0ChZB0iMO0MMXZp_k-nTqtyfY9_FuNl7eELiVQcjRztnz5d1Iu_m39pKhGeXP8-37MfmRQlkszMDEDyjlgxSfa7_5nsbJEJjkmztA0St3wy4art8UIGekWKjQOINpxtgo" height="200" width="600"> 
</p>

#### Motivação:
>Muitas pessoas tem interesse em fazer doações, mas as vezes não tem o tempo necessário para encontrar onde doar ou como doar. Como sabemos, vivemos em um país em que a desigualdade social ainda existe e por isso há várias pessoas necessitadas, às vezes grupos de pessoas com um problema em comum. Precisamos de um sistema para apoiar essa rede de doações: o eDoe.com.

#### [Especificação original](https://docs.google.com/document/d/e/2PACX-1vST2TI5lDbtMlv8rhFYJkYnrfgqzyWDv6DDvvAajz3_KK4tAs_UnAbYdI6oeMQA6jEHo5HwUAatHmd8/pub)

### Instalação/Execução
- [x] Faça o clone do projeto na sua máquina usando `git clone https://github.com/lucasanthony/edoe.git`
- [x] Utilize o comando `mvn spring-boot:run` para iniciar o servidor
- [x] Teste/Utilize as rotas em um cliente REST de sua preferência, sugerimos o [postman](https://www.getpostman.com/)

### ENDPOINTS
<p align="center">
  <img src="https://raw.githubusercontent.com/lucasanthony/edoe/master/artefatos/endpoints.png" height="618" width="970"> 
</p>

### Arquitetura
>O Servidor foi desenvolvido utilizando a linguagem de programação Java, uma linguagem bem consolidada e conhecida além de possuir uma boa documentação. Para desenvolver a API provedora dos serviços com uma certa agilidade, usamos o framework da Spring, o Spring Boot, que é uma ferramenta que facilita bastante a criação de uma API REST voltada para aplicações e sistemas web. O padrão que aderimos é semelhante ao que é usado na parte do cliente, que é o padrão MVC, possuindo divisões do formato de Models, Repositories, Services e Controllers. Usamos uma comunicação com o banco de dados não-relacional MongoDB, devido a escalabilidade horizontal que obtemos com ele, além também de facilitar o formato dos dados enviados ao Cliente, pelo fato de serem inseridos em JSON, conseguindo uma boa performance.

<p align="center">
  <img src="https://raw.githubusercontent.com/lucasanthony/edoe/master/artefatos/DACA_edoe_Diagram.png" height="500" width="390"> 
</p>


### Autenticação
>Para autenticação definimos a entidade “Usuario” como sendo a responsável por conter os dados para autenticação do sistema, em função disso, nessa entidade existem atributos referentes a essa autenticação, são eles:
email: email do usuário, que é único e serve como username de um determinado usuário
password: que é a senha do usuário, definida no momento do cadastro do mesmo.
Role: Um set de roles, que seriam o “tipo” do usuário no sistema, esse tipo se faz necessário pois podem existir endpoint que só podem ser acessados por determinados tipos de usuários.

>Para cada uma das entidades foi criado uma interface, responsável por integrar o sistema com o BD e realizar ações como por exemplo salvar os usuários no banco. Essas interfaces estendem a interface MongoRepository, responsável por recuperar e armazenar dados

>O modelo de segurança escolhido foi o JSON Web Token (jwt) e para implementação do mesmo se faz necessário um mecanismo de geração e validação de tokens, por meio de bibliotecas existentes.

>A geração do token acontece no momento do login do usuário, caso um usuário não cadastrado tente entrar no sistema e acessar alguns dos endpoint  ele receberá um erro, pois não terá a permissão necessária para ter esse acesso. Após o cadastro o usuário está apto a loggar no sistema, após o login ele receberá um token, este que deve estar no headers das requisições feitas pelo usuário, dessa forma, qualquer requisição, de busca por itens, usuários, ou qualquer outro tipo de ação exigem que o usuário esteja loggado, e ainda que este seja um usuário do tipo “ADMIN”, por default todos os usuários cadastrados no sistema são do tipo “ADMIN”, seja esse usuário um receptor ou um doador.



#### Time:
* [Lucas Anthony](https://github.com/lucasanthony)
* [Pedro Wanderley](https://github.com/pedrofwanderley)

<p align="center">
  <img src="https://raw.githubusercontent.com/lucasanthony/edoe/master/artefatos/compufcg.png"> 
</p>
