# Informações do Projeto
`TÍTULO DO PROJETO`  

iWork

`CURSO` 

Ciencia da computação

## Participantes

>
> Os membros do grupo são: 
> - Antonio Soares Couto Neto
> - Henrique Oliveira da Cunha Franco
> - Gabriel Jota Lizardo
> - Andre Palis Santana Lobão
> - Arthur Serra Lobão Lira

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

O problema que a aplicação deve resolver é a dificuldade de conexão entre prestadores de serviços e clientes em busca de serviços específicos. Muitas vezes, os clientes têm dificuldade em encontrar profissionais qualificados e confiáveis para atender às suas necessidades, enquanto os prestadores de serviços enfrentam desafios para encontrar clientes interessados em seus serviços. Desse modo, o projeto visa acabar com esse ciclo. O contexto em que essa aplicação será usada é o ambiente online, por meio de uma plataforma web.

> Nesse momento você deve apresentar o problema que a sua aplicação deve
> resolver. No entanto, não é a hora de comentar sobre a aplicação.
> Descreva também o contexto em que essa aplicação será usada, se
> houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de
> fato existir, pois ainda não é a hora de apresentar requisitos
> detalhados ou projetos.
>
> Nesse momento, o grupo pode optar por fazer uso
> de ferramentas como Design Thinking, que permite um olhar de ponta a
> ponta para o problema.
>
> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

O objetivo principal do projeto é facilitar a conexão entre prestadores de serviços e clientes, proporcionando uma plataforma online que permita a busca, filtragem e contato direto entre as partes interessadas. A aplicação busca melhorar a eficiência do processo de contratação de serviços, tornando-o mais conveniente e direcionado, ao mesmo tempo em que ajuda os prestadores de serviços a expandir sua clientela e os clientes a encontrar os serviços desejados com facilidade. Se você precisa de alguém para arrumar seu chuveiro, por exemplo, basta pegar o aplicativo, entrar em contato com um prestador e pronto. É o lugar perfeito para prestadores divulgarem seu trabalho. Alguns dos objetivos específicos do projeto são: 

- Criar um mecanismo de comunicação direta entre prestadores de serviços e clientes, por meio do qual os clientes possam entrar em contato com os prestadores para obter mais informações sobre os serviços oferecidos e realizar acordos de contratação.

- Garantir a segurança e privacidade dos dados dos usuários, implementando medidas de proteção e seguindo as melhores práticas de segurança da informação.

- Criar uma interface de usuário intuitiva e amigável, proporcionando uma experiência agradável para os usuários da plataforma, tanto para prestadores de serviços quanto para clientes.

> Aqui você deve descrever os objetivos do trabalho indicando que o
> objetivo geral é desenvolver um software para solucionar o problema
> apresentado acima. Apresente também alguns (pelo menos 2) objetivos
> específicos dependendo de onde você vai querer concentrar a sua
> prática investigativa, ou como você vai aprofundar no seu trabalho.
> 
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

A frustração de pessoas com a falta de conexão entre cliente e prestadores de serviços caseiros como eletricistas, pedreiros ou motoristas particulares tem sido uma questão sem resolução há muito tempo. Um analgésico para esse problema comumente feito pelos próprios prestadores é a utilização de cartazes e anúncios em torno da cidade onde moram, como em postes ou paredes. Entretanto, é claro o quão inefetivo esse método é, seja pela falta de clientes que chegam a entrar em contato com esse prestador, seja pela falta de confiança ou por simplesmente não encontrar o serviço necessitado.

> Descreva a importância ou a motivação para trabalhar com esta aplicação
> que você escolheu. Indique as razões pelas quais você escolheu seus
> objetivos específicos ou as razões para aprofundar em certos aspectos
> do software.
> 
> O grupo de trabalho pode fazer uso de questionários, entrevistas e
> dados estatísticos, que podem ser apresentados, com o objetivo de
> esclarecer detalhes do problema que será abordado pelo grupo.
>
> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

Qualquer pessoa acima da faixa dos 18 anos de idade. Seja o cliente um homem em busca de ajuda com um serviço elétrico de sua casa ou uma senhora de idade em busca de um conserto ou obra mais complexa, os prestadores de serviço do iWork podem cobrir uma gama de serviços ampla e diversa.

> Descreva quem serão as pessoas que usarão a sua aplicação indicando os
> diferentes perfis. O objetivo aqui não é definir quem serão os
> clientes ou quais serão os papéis dos usuários na aplicação. A ideia
> é, dentro do possível, conhecer um pouco mais sobre o perfil dos
> usuários: conhecimentos prévios, relação com a tecnologia, relações
> hierárquicas, etc.
>
> Adicione informações sobre o público-alvo por meio de uma descrição
> textual, ou diagramas de personas, mapa de stakeholders, ou como o
> grupo achar mais conveniente.
> 
> **Links Úteis**:
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
 
# Especificações do Projeto

Nesta parte do documento, serão abordadas as técnicas e ferramentas utilizadas para especificar o projeto do iWork. A primeira etapa foi a criação de personas, que representam os diferentes tipos de usuários da plataforma e suas necessidades e expectativas. Em seguida, foi realizada a técnica de empatia para entender melhor as personas e seus comportamentos. A proposta de valor também foi definida, destacando os principais benefícios do iWork para os usuários.

A técnica de histórias de usuários foi utilizada para descrever as diferentes interações que os usuários terão com o sistema e as funcionalidades necessárias para atender às suas necessidades. Essas histórias de usuários foram usadas como base para definir os requisitos funcionais do sistema, que descrevem as principais funcionalidades que o iWork deve ter para atender às necessidades dos usuários.

Além disso, foram definidos os requisitos não funcionais, que descrevem as características e atributos do sistema que não estão diretamente relacionados às funcionalidades, mas que são importantes para garantir a qualidade do serviço prestado. Também foram identificadas as restrições do projeto, como prazos, orçamento e tecnologias disponíveis.

No geral, as técnicas e ferramentas utilizadas para especificar o projeto do iWork incluem a criação de personas, a técnica de empatia, a definição da proposta de valor, a elaboração de histórias de usuários, a definição de requisitos funcionais e não funcionais e a identificação das restrições do projeto.

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas, Empatia e Proposta de Valor

![Personas](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/persona1.png)
![Personas](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/persona2.png)
![Personas](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/persona3.png)


> Relacione as personas identificadas no seu projeto, os respectivos mapas de empatia e 
> mapas da proposta de valor. Lembre-se que você deve ser enumerar e descrever precisamente 
> e de forma personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> - [Canvas da Proposta de Valor](https://analistamodelosdenegocios.com.br/canvas-da-proposta-de-valor/)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)


## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| PERSONA                | FUNCIONALIDADE                                      | MOTIVO/VALOR                                                            |
|-----------------------|-----------------------------------------------------|-------------------------------------------------------------------------|
| Cliente com pouco tempo | Pesquisar serviços de forma rápida e eficiente     | Economizar tempo e encontrar rapidamente o serviço desejado             |
| Cliente detalhista     | Filtros de busca avançados                          | Encontrar serviços específicos que atendam às suas necessidades          |
| Prestador de serviço   | Gerenciar informações de perfil e serviços oferecidos | Manter informações atualizadas para atrair mais clientes                |
| Administrador          | Gerenciar usuários e serviços                        | Manter a plataforma organizada e funcionando corretamente                |
| Cliente                | Avaliar os serviços prestados                       | Influenciar outros usuários na escolha de serviços e incentivar melhorias |
| Cliente                | Comunicar-se facilmente com o prestador de serviço   | Tirar dúvidas, obter informações adicionais e contratar serviços          |
| Prestador de serviço   | Receber notificações sobre solicitações de serviço   | Não perder oportunidades de negócios e gerenciar sua agenda               |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|Cadastro de usuários| O site deve permitir que os usuários se cadastrem e criem perfis para que possam encontrar e oferecer serviços | ALTA | 
|Busca de serviços| O site deve ter uma ferramenta de busca que permita aos usuários encontrar serviços específicos com base em palavras-chave ou localização | ALTA |
|Avaliação de prestadores de serviços| O site deve permitir que os usuários avaliem e classifiquem os prestadores de serviço com base em sua experiência | MÉDIA |
|Agendamento de serviços| O site deve ter um sistema de agendamento que permita aos usuários agendar serviços com os prestadores de serviço | MÉDIA |
|Pagamento Online| O site deve ter um sistema de pagamento seguro e confiável para que os usuários possam pagar pelos serviços contratados | ALTA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|Desempenho| O site deve ser capaz de lidar com um grande número de usuários simultâneos sem diminuir sua velocidade ou experiência do usuário | ALTA | 
|Usabilidade| O site deve ser fácil de usar e acessível a todos os usuários, independentemente de sua experiência em tecnologia |  MÉDIA | 
|Escalabilidade| O site deve ser capaz de se adaptar a um grande número de usuários e fornecer recursos suficientes para atender à demanda |  BAIXA | 
|Confiabilidade| O site deve ser confiável e estar disponível para os usuários sempre que precisarem |  ALTA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrições de tempo para o desenvolvimento e lançamento do site                           |
|--|-------------------------------------------------------|
|01| Concorrência com outras plataformas de prestação de serviços semelhantes que possam surgir |
|02| Possíveis restrições regulatórias ou legais que possam afetar a operação do site |
|03| Limitações técnicas que possam afetar a escalabilidade e desempenho do site |
|04| Limitações na disponibilidade de prestadores de serviço em determinadas regiões |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

A solução do iWork apresenta diversas interfaces projetadas de forma a atender os requisitos funcionais, não funcionais e histórias de usuário do projeto. A página inicial do site é um ponto de partida para os usuários, e inclui um campo de busca, categorias de serviços, links para páginas de registro e login.

As páginas de busca de serviços foram elaboradas para permitir que os usuários filtrem os resultados por categoria de serviço, preço, avaliação, entre outros critérios. Isso atende ao requisito funcional de busca de serviços, além de ser uma forma de melhorar a experiência do usuário.

As páginas de perfil do prestador de serviço são outro ponto importante do site, pois exibem informações como descrição do serviço, fotos, avaliações e opções de contato. Essa interface foi projetada de forma a atender ao requisito funcional de cadastro de prestadores e clientes, além de ser uma forma de fornecer informações detalhadas aos clientes.

As páginas de avaliação de serviços permitem que os usuários avaliem e comentem sobre os serviços prestados pelos prestadores cadastrados no site. Isso atende ao requisito não funcional de confiabilidade, já que os usuários podem ver o quão confiável um serviço é antes de requisitá-lo, evitando fraudes de ambos os lados.

Além disso, a segurança e confiança são alcançados por meio de um sistema de login confiável, que também é importante para que fraudes sejam evitadas.
As páginas de registro e login são necessárias para que os usuários possam se cadastrar e acessar suas contas para gerenciar informações de perfil, serviços oferecidos e solicitações de serviço. Essa interface foi projetada de forma a atender ao requisito funcional de cadastro de usuários e gerenciamento de informações pessoais.

Adicionalmente, visto que as personas incluem pessoas de qualquer idade acima de 18 anos, incluindo desde jovens adultos até idosos, é oferecida uma interface simples, minimalista e universal, fazendo com que qualquer um desses públicos possam usar o serviço com facilidade.

Por fim, as interfaces foram elaboradas com base em personas que representam as necessidades e expectativas dos diferentes tipos de usuários da plataforma (prestadores e clientes). Dessa forma, a interface do prestador de serviço foi projetada para incluir informações detalhadas sobre o serviço oferecido, enquanto a interface do cliente foi projetada para facilitar a busca e contratação de serviços. Além disso, as interfaces foram pensadas de forma a serem escaláveis, permitindo que, mesmo com uma grande quantidade de serviços cadastrados, seja possível os buscar e visualizar normalmente.

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

![UserFlow](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/user.png)

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)


## Wireframes

</br>
<p><b>OBS: Os wireframes ficaram diferentes do produto final, mas os componentes não divergiram do planejado</b></p></br>

<p>Landing page com informações e cards sobre prestadores de serviço, incluindo os filtros<p>

![Wireframe](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/desktop1.png)
![Wireframe](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/desktop2.png)

<p>Versao mobile responsiva</p>

![Wireframe](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/mobile.png)

<p>Tela intuitiva de login e registro</p>

![Wireframe](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/login.png)
![Wireframe](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/register.png)

<p>Uma outra versao do wireframe</p>

![Wireframe](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/wireframe.png)

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
>
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/wireframe-example.png)


# Metodologia

O processo de trabalho adotado pelo grupo foi baseado nas metodologias ágeis, que se concentram na entrega de valor contínuo ao cliente e no trabalho em equipe colaborativo. Nossa equipe é composta por desenvolvedores, designers e gerentes de projeto. Cada membro da equipe teve um papel importante no processo de desenvolvimento e contribuiu para a entrega do protótipo inicial da aplicação.

Nós adotamos o processo de Design Thinking para desenvolver uma compreensão fundamental dos requisitos do cliente e criar uma solução para o usuário. Durante essa fase, realizamos pesquisas com usuários e entrevistas para entender suas necessidades, preferências e dores principais que mais os afetam. A partir dessas informações, anotamos suas perspectivas e deixamos pontos principais que foram vistos mais de uma vez ao longo do processo de pesquisa e entedimento para serem implementados no projeto final.

Para implementar o Framework Scrum, dividimos o projeto em sprints com duração de cerca de duas semanas. No início de cada sprint, realizamos uma reunião de planejamento onde definimos as tarefas que seriam concluídas durante o sprint e atribuímos essas tarefas aos membros da equipe.

Para gestão de configuração do projeto, utilizamos o GitHub. Através do GitHub, conseguimos controlar e gerenciar as mudanças no código e nos arquivos do projeto, bem como a apresentação de abertura feita no dia 20/04/23. Também utilizamos outras ferramentas on-line para acompanhamento do andamento do projeto, como o Miro, onde compartilhamos e contribuímos para a ideação de ferramentas que seriam indispensáveis para o nosso site.

Em resumo, nossa metodologia de trabalho foi baseada nas metodologias ágeis, com a implementação do Framework Scrum e do processo de Design Thinking. Utilizamos o GitHub para gestão de configuração do projeto e outras ferramentas on-line para acompanhamento do andamento do projeto, execução das tarefas e status de desenvolvimento da aplicação.

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

| Membro  | Pessoa              | Tarefa |
|-----------|-------------------------|---------------|
| 1 | Henrique Oliveira | Tarefa 1 e 2 |
| 2 | Gabriel Jota | Tarefa 5 e 7 | 
| 3 | Antonio Neto | Tarefa 3 e 10 |
| 4 | Arthur Lira | Tarefa 4 e 9 |
| 5 | Andre | Tarefa 6 e 8 | 

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Editor de código  | Visual Studio Code |  https://code.visualstudio.com/ | 
|Processo de Design Thinking e de diagramação  | Miro |  https://miro.com/app/board/uXjVMYCYaRE=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos | 
|Hospedagem do site | vercel |  vercel.app | 
|Protótipo Interativo | MavelApp ou Figma | https://www.figma.com/file/96YK0f7qseCg6YKHpbrjjt/TI-wireframe?node-id=0-1&t=2ERmmI9iGHKDw38U-0 | 

> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o Git, sendo que o Github foi utilizado para
hospedagem do repositório upstream. O projeto seguirá a convenção seguinte para o nome das branches:
- master: versão estável já testada do software
- teste: versao para testes

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:
- bugfix: uma funcionalidade encontra-se com problemas
- enhancement: uma funcionalidade precisa ser melhorada
- feature: uma nova funcionalidade precisa ser introduzida

> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

A solução proposta pela iWork busca resolver o problema da conexão entre prestadores de serviços e clientes que estão em busca de serviços específicos. A iWork é uma página na internet que serve como uma plataforma intermediária, permitindo que os prestadores de serviços se cadastrem e os clientes encontrem profissionais qualificados para atender às suas necessidades.

A solução aborda o problema oferecendo um sistema de cadastro tanto para os prestadores de serviço quanto para os clientes. Por meio de um formulário de cadastro, os prestadores podem fornecer informações como nome, e-mail, telefone, serviços oferecidos e uma breve descrição sobre suas habilidades e experiências. Da mesma forma, os clientes podem se cadastrar informando seus dados pessoais e os serviços específicos que estão buscando.

Com o cadastro dos prestadores de serviços e dos clientes, a plataforma iWork atua como uma intermediária, facilitando a conexão entre as partes interessadas. Os clientes podem utilizar recursos de pesquisa e filtragem para encontrar prestadores de serviços com base em critérios específicos, como localização geográfica, tipo de serviço desejado, avaliações de outros usuários, entre outros.

A solução também permite que os clientes entrem em contato diretamente com os prestadores de serviço por meio de informações de contato fornecidas no cadastro, como e-mail ou telefone. Dessa forma, a iWork proporciona uma maneira conveniente e eficiente para os clientes encontrarem profissionais qualificados e para os prestadores de serviços divulgarem seus trabalhos e expandirem sua base de clientes.

Ao facilitar a conexão entre prestadores de serviços e clientes, a solução oferecida pela iWork ajuda a economizar tempo e esforço para ambas as partes. Os clientes podem encontrar os serviços necessários de forma mais rápida e direcionada, enquanto os prestadores de serviços têm a oportunidade de expandir sua clientela e alcançar um público maior por meio da plataforma online. Além disso, há a possibilidade, por parte dos prestadores, de disponibilizar quais horários e quais dias ele estará apto para atender os pedidos de trabalho, o que garante uma abordagem flexível.

Em resumo, a solução do projeto iWork resolve o problema da conexão entre prestadores de serviços e clientes, fornecendo uma plataforma online que permite o cadastro de ambos os lados, facilitando a busca e o contato direto entre as partes interessadas. Isso ajuda a agilizar o processo de contratação de serviços, tornando-o mais eficiente e conveniente para todos os envolvidos.

## Tecnologias Utilizadas

Utilizamos HTML e CSS como linguagens de texto e estilo, além do javascript como linguagem de programação. O aplicativo foi hosteado no Vercel. Grande parte do grupo usou o vscode, além do repl.it como aplicativo de programação "multiplayer"/compartilhada. JQuery, Bootstrap e outras tecnologias foram utilizadas por alguns dos membros do grupo.

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (storyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

![Exemplo de Wireframe](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/diagrama.jpeg)

<p>Na nossa pasta de código, temos os arquivos HTML e uma pasta "src". Na pasta src temos os arquivos css de estilo e as fontes utilizadas, a pasta "img" que contém as imagens do código e a pasta "script" que contém os arquivos Javascript. Salvamos os dados utilizando Json e o local storage, e o website é hosteado no vercel.</p>

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.

# Avaliação da Aplicação

## Cenário de Teste 1: Cadastro do usuário

Funcionalidade Avaliada: Cadastro de novos usuários na aplicação.
Grupo de Usuários: Usuários potenciais da aplicação.
Ferramentas Utilizadas: Navegador web.
Descrição: Neste cenário de teste, verificamos se o sistema permite o cadastro de novos usuários. Os passos incluem preencher o formulário de cadastro com informações válidas, enviar o formulário e verificar se o usuário é criado com sucesso no sistema.

## Cenário de Teste 2: Login do Usuário

Funcionalidade Avaliada: Processo de login de usuários cadastrados.
Grupo de Usuários: Usuários cadastrados na aplicação.
Ferramentas Utilizadas: Navegador web.
Descrição: Neste cenário, verificamos se os usuários conseguem fazer login na aplicação com sucesso.

## Cenário de Teste 3: Pesquisa

Funcionalidade Avaliada: Capacidade de filtrar por profissionais
Grupo de Usuários: Pessoas buscando serviços.
Ferramentas Utilizadas: Navegador web.
Descrição: Neste cenário, verificamos se os usuários conseguem pesquisar por prestadores de serviço de modo intuitivo. Também validamos os filtros da aplicação.

## Cenário de Teste 4: Detalhes

Funcionalidade Avaliada: Pagina de detalhes do profissional
Grupo de Usuários:  Prestadores de serviço
Ferramentas Utilizadas: Navegador web.
Descrição: Neste cenário, verificamos se os usuários conseguem acessar a página de detalhes de cada um dos profissionais cadastrados no iwork, na qual podem ver outras características, se comunicar com os prestadores e agendar um serviço.

## Cenário de Teste 5: Agendamento

Funcionalidade Avaliada: Agendamento de uma data com os profissionais
Grupo de Usuários:  Pessoas buscando serviços.
Ferramentas Utilizadas: Navegador web.
Descrição: Neste cenário, verificamos se os usuários conseguem agendar um horário na página de pesquisas.

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

Utilizamos o lighthouse para obter dados de teste do website, como acessibilidade, desempenho e outros fatores.

![Lighthouse](https://raw.githubusercontent.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-prestador-de-servicos/master/docs/relatorio/images/lighthouse.jpeg)

O grupo de usuário de testes foram os familiares, que usaram o aplicativo como prestadores de serviço, e uma empregada, Nilma (cujo perfil foi implementado no site, mas com fotos diferentes da real), que cadastrou como uma prestadora de serviço.

Testamos na versão mobile e na versão desktop.

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

Selenium: Utilizamos um script .py para verificar a compatibilidade do aplicativo nos 3 browsers mais famosos (edge, chrome e firefox).

Lighthouse: Uma ferramenta que pode ser usada para verificar desempenho, acessibilidade e outras características do website. Os resultados foram satisfatórios.

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

Os familiares conseguiram navegar sem problemas, inclusive os de maior idade, que normalmente tem mais dificuldade. O site se adequa bem aos diferentes tamanhos de tela, o conjunto de cores é satisfatório e o desempenho apontado foi bom. Um dos objetivos do website foi manter um alto nível de acessibilidade, já que o app tem a democratização como foco. O site é responsivo, tem um design com fontes e imagens grandes, e é intuitivo.

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

Documentação oficial do HTML: A documentação oficial do HTML fornece uma referência completa sobre as tags, atributos e elementos HTML. Ela pode ser encontrada em: https://developer.mozilla.org/pt-BR/docs/Web/HTML
CSS (Cascading Style Sheets):

Documentação oficial do CSS: A documentação oficial do CSS oferece uma referência detalhada sobre as propriedades, seletores e estilos CSS. Você pode consultá-la em: https://developer.mozilla.org/pt-BR/docs/Web/CSS

Documentação oficial do JavaScript: A documentação oficial do JavaScript é uma referência essencial para aprender sobre a linguagem, recursos, métodos e APIs disponíveis. Visite: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

W3Schools é um recurso online muito utilizado para aprender e consultar informações sobre HTML, CSS, JavaScript e outras tecnologias da web. O site oferece tutoriais, exemplos e uma referência abrangente. Acesse: https://www.w3schools.com/

Documentação do Selenium: O Selenium é uma ferramenta popular para automação de testes em navegadores web. A documentação oficial do Selenium oferece guias, exemplos e informações detalhadas sobre como usar a ferramenta. Confira em: https://www.selenium.dev/documentation/

Há muitos blogs e tutoriais disponíveis online que forneceram informações úteis e práticas sobre desenvolvimento web. Alguns sites populares incluem o Smashing Magazine (https://www.smashingmagazine.com/) e o CSS-Tricks (https://css-tricks.com/).

Stack Overflow para obter respostas para perguntas específicas e correções de bugs.

Github como versionador de código.

Vercel para host.

Miro e figma para prototipagem.

OBS studio para a gravação do vídeo.

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)