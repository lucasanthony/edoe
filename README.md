# eDoe

<p align="center">
  <img src="https://lh6.googleusercontent.com/lT7mQse0ChZB0iMO0MMXZp_k-nTqtyfY9_FuNl7eELiVQcjRztnz5d1Iu_m39pKhGeXP8-37MfmRQlkszMDEDyjlgxSfa7_5nsbJEJjkmztA0St3wy4art8UIGekWKjQOINpxtgo" height="200" width="600"> 
</p>

* [Pacotes principais](https://github.com/lucasanthony/edoe/tree/master/src/main/java/com)

>#### Motivação:
>Muitas pessoas tem interesse em fazer doações, mas as vezes não tem o tempo necessário para encontrar onde doar ou como doar. Como sabemos, vivemos em um país em que a desigualdade social ainda existe e por isso há várias pessoas necessitadas, às vezes grupos de pessoas com um problema em comum. Precisamos de um sistema para apoiar essa rede de doações: o eDoe.com.

#### [Especificação original](https://docs.google.com/document/d/e/2PACX-1vST2TI5lDbtMlv8rhFYJkYnrfgqzyWDv6DDvvAajz3_KK4tAs_UnAbYdI6oeMQA6jEHo5HwUAatHmd8/pub)

#### Time:
* [Lucas Anthony](https://github.com/lucasanthony)
* [Pedro Wanderley](https://github.com/pedrofwanderley)

### Instalação
>Fazer download do zip do [projeto do github](https://github.com/lucasanthony/edoe), após o download descompactar a pasta e abrir o projeto em alguma IDE(preferencialmente ECLIPSE).

### Execução
>Após feito o download do projeto, e a sua abertura na IDE escolhida, percorrer até a classe "EdoeApplication.java", localizada no seguinte path: "/edoe/src/main/java/com/edoe/EdoeApplication.java", após encontrar a classe, clicar com o botão direito em cima da mesma (localizada no "Project Explorer" do Eclipse), e aperta no seguinte caminho: "Run As -> Java Application".

### Testes
>Os teste do sistema são feitos via postman, e após a execução do sistema o mesmo vai estar apto para ser testado. Os testes seguem uma base de endpoints que serão descritos posteriormente, neste mesmo documento.

### Arquitetura

>O Servidor foi desenvolvido utilizando a linguagem de programação Java, uma linguagem bem consolidada e conhecida além de possuir uma boa documentação. Para desenvolver a API provedora dos serviços com uma certa agilidade, usamos o framework da Spring, o Spring Boot, que é uma ferramenta que facilita bastante a criação de uma API REST voltada para aplicações e sistemas web. O padrão que aderimos é semelhante ao que é usado na parte do cliente, que é o padrão MVC, possuindo divisões do formato de Models, Repositories, Services e Controllers. Usamos uma comunicação com o banco de dados não-relacional MongoDB, devido a escalabilidade horizontal que obtemos com ele, além também de facilitar o formato dos dados enviados ao Cliente, pelo fato de serem inseridos em JSON, conseguindo uma boa performance.

### Diagrama
>[O diagrama do projeto pode ser acessado nesse link](https://github.com/lucasanthony/edoe/blob/master/edoeClassDiagram.png)

### ENDPOINTS
>Todos os endpoint tem sua URL iniciada por "https://edoe.herokuapp.com/"
>Endpoints de Usuários

Universidade Federal de Campina Grande, 2019.
