# eDoe

<p align="center">
  <img src="https://lh6.googleusercontent.com/lT7mQse0ChZB0iMO0MMXZp_k-nTqtyfY9_FuNl7eELiVQcjRztnz5d1Iu_m39pKhGeXP8-37MfmRQlkszMDEDyjlgxSfa7_5nsbJEJjkmztA0St3wy4art8UIGekWKjQOINpxtgo" height="200" width="600"> 
</p>

#### Motivação:
>Muitas pessoas tem interesse em fazer doações, mas as vezes não tem o tempo necessário para encontrar onde doar ou como doar. Como sabemos, vivemos em um país em que a desigualdade social ainda existe e por isso há várias pessoas necessitadas, às vezes grupos de pessoas com um problema em comum. Precisamos de um sistema para apoiar essa rede de doações: o eDoe.com.

#### [Especificação completa](https://docs.google.com/document/d/e/2PACX-1vST2TI5lDbtMlv8rhFYJkYnrfgqzyWDv6DDvvAajz3_KK4tAs_UnAbYdI6oeMQA6jEHo5HwUAatHmd8/pub)

### Instalação/Execução
- [x] Faça o clone do projeto na sua máquina usando `git clone https://github.com/lucasanthony/edoe.git`
- [x] Utilize o comando `mvn spring-boot:run` para iniciar o servidor
- [x] Teste/Utilize as rotas em um cliente REST de sua preferência, sugerimos o [postman](https://www.getpostman.com/)

### ENDPOINTS

Método | Url | Body | Params
-------|-----|------|-------
GET | /usuario/{nome}  |      |
GET | /item/{id} |  |  
POST| /usuario/doador | {} |
DELETE | /usuario/{id} | | 
PUT | /usuario/{idUsuario} | | 

>[Para ver todos disponíveis, clique aqui](https://docs.google.com/spreadsheets/d/11ZNy71fNnEeWHB3Gva6G8B_aHAHH5ED0lbBkIsuLSYM/edit#gid=0)


### Arquitetura
>O Servidor foi desenvolvido utilizando a linguagem de programação Java, uma linguagem bem consolidada e conhecida além de possuir uma boa documentação. Para desenvolver a API provedora dos serviços com uma certa agilidade, usamos o framework da Spring, o Spring Boot, que é uma ferramenta que facilita bastante a criação de uma API REST voltada para aplicações e sistemas web. O padrão que aderimos é semelhante ao que é usado na parte do cliente, que é o padrão MVC, possuindo divisões do formato de Models, Repositories, Services e Controllers. Usamos uma comunicação com o banco de dados não-relacional MongoDB, devido a escalabilidade horizontal que obtemos com ele, além também de facilitar o formato dos dados enviados ao Cliente, pelo fato de serem inseridos em JSON, conseguindo uma boa performance.

<p align="center">
  <img src="https://raw.githubusercontent.com/lucasanthony/edoe/master/artefatos/DACA_edoe_Diagram.png" height="400" width="390"> 
</p>


### Autenticação
>O modelo de segurança escolhido foi o JSON Web Token (jwt) e para implementação do mesmo se faz necessário um mecanismo de geração e validação de tokens, por meio de bibliotecas existentes.

- [x] Faça o cadastro de um usuário `POST https://www.edoe.herokuapp.com/usuario/doador`
- [x] Realize login `POST https://www.edoe.herokuapp.com/edoe/auth/login` para receber um token válido
- [x] Utilize as rotas em um cliente REST de sua preferência, agora passando o token recebido no header de authorization `Bearer TOKEN`


<p align="center">
  <img src="https://raw.githubusercontent.com/lucasanthony/edoe/master/artefatos/jwt.png"> 
</p>

#### Time:
* [Lucas Anthony](https://github.com/lucasanthony)
* [Pedro Wanderley](https://github.com/pedrofwanderley)

<p align="center">
  <img src="https://raw.githubusercontent.com/lucasanthony/edoe/master/artefatos/compufcg.png"> 
</p>
