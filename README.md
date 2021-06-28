# Analista IV - Desenvolvedor Front End

**TESTE PRÁTICO**

 ****

**SOBRE O DESAFIO**

Desenvolver uma página web do curso autoinstrucional *Aprendizagem* a partir do protótipo navegável fornecido. A página deverá rodar em desktop e em dispositivos móveis com base em boas práticas de desenvolvimento e interatividade.

Para a versão desktop, a página deverá se aproximar ao máximo do protótipo, mas você também poderá propor melhorias visuais e/ou de interação, sempre tendo em vista a melhor experiência do usuário e justificando as alterações.

Público-alvo do curso: professores de Ensino Fundamental e Médio.

**TEMPO PARA DESENVOLVIMENTO:** 72 horas

**PREMISSAS TÉCNICAS**

- O website deve ser funcional e espelhar o comportamento do protótipo.
- Deve ser responsivo (utilizando preferencialmente *Media Queries*)
- Deve ser desenvolvido em ***React.js**, **Next.js*** ou ***HTML*** simples (dica: utilize a linguagem que você mais domina! Não existem pesos diferentes entre elas na avaliação)

*Importante: Observe que há um bloqueio de conteúdo ao passar pelo carrossel que fala das teorias. O conteúdo a seguir só deve ser liberado/exibido após exibição de todos os itens do carrossel. Para resetar a navegação do protótipo, exclua o trecho da URL a partir de "/screen/...".*

**DIFERENCIAIS** - Princípios da Programação WEB e *Clean Code*

**O QUE DEVE SER ENTREGUE**

- [ ]  Link para repositório pessoal do Github com o material desenvolvido;
- [ ]  Justificativa das melhorias e correções propostas (abaixo):

```
JUSTIFICATIVAS E CORREÇÕES PROPOSTAS

Comentários e Propostas de Melhorias:  



Navbar 

Apontamentos: 

A localização em que os botões da navbar se encontravam ficava muito próximo ao topo da página, o que dificultava a visibilidade e, consequentemente, a usabilidade do usuário, já que por estar muito escondido não demonstrava a real importância dessas aulas, podendo até mesmo ser confundido com as formas de fundo, fazendo com que, provavelmente, a taxa de cliques diminuísse consideravelmente. Ainda mais levando em conta os usuários que iriam acessar a plataforma mobile. 

A escolha das cores dos botões não ficou clara para mim, pela paleta presente na landing page, em tons de rosa claro, rosa escuro, branco e preto, achei que os tons de azul e verde não seguiam a mesma linha das outras tonalidades presentes no site.  

 

Como eu melhoraria: 

Deixei os botões mais a mostra, apresentando já os textos de forma que, apesar de eles estarem visíveis, não interferiram no peso do título principal. Fazendo com que, os usuários encontrem facilmente esses botões, demonstrando a sequência que eles vão seguir após ler essa aula de Teorias do Aprendizado, e também mantive uma animação aumentando o botão para manter a dinamização da página. 

Se todas as aulas contidas nesses botões da navbar abordarem conteúdos parecidos ao da página "principal" eu manteria os botões na linha do rosa, alterando apenas a profundidade da cor. Mas se as aulas abordarem conteúdos totalmente diferentes da página Teorias do Aprendizado, seguir com cores distintas faz sentido. 

 

Títulos 

Apontamentos: 

Os títulos estavam hierarquicamente divididos por escalas e cores, mas pelo fato de existirem títulos rosas e pretos, mesmo alguns rosas sendo em escalas maiores, o preto acabava roubando a atenção pelo grande contraste com a cor de fundo. 

 

Como eu melhoraria: 

Decidi seguir uma padronização de cores, fazendo com que todos os títulos seguissem na cor rosa mais escuro, dando assim uma sensação de unanimidade e fazendo com que a hierarquia ficasse mais clara. 

 

Gráficos 

Apontamentos: 

O gráfico localizado nos 4 pilares fundamentais para a educação estava um pouco confuso pela ordem da numeração, que não seguia o sentido horário, nem anti-horário, e as cores escolhidas também não auxiliavam a leitura 

 

Como eu melhoraria: 

Segui a mesma sequência da navbar, utilizando a cor rosa base para o gráfico, alterando as profundidades das cores, e reorganizei a ordem da numeração para seguir tanto a ordem da cor mais clara até a mais escura, quanto o sentido horário para facilitar a leitura. 

```

**ITENS DE AVALIAÇÃO** 

1. Visual e navegabilidade da versão desktop de acordo com o protótipo;

2. Responsividade para dispositivos móveis de acordo com boas práticas;

3. Propostas de melhorias visuais e/ou de interatividade;

4. Sugestões de correções técnicas no protótipo, caso identificadas;

5. Legibilidade do código (sintaxe e organização / *clean code*);

6. Reusabilidade vs. Repetição de código.


**INSUMOS PARA REFERÊNCIA**

Repositório Github: https://github.com/CrisGiordani/frontend-unindustria

Faça o clone deste repositório:

```bash
$ git clone https://github.com/CrisGiordani/frontend-unindustria <PASTA>
```

- Link de acesso ao protótipo navegável em Adobe XD:
[https://xd.adobe.com/view/cc4016ff-034e-4b9c-99f6-7f6533d421d0-9913/?fullscreen;](https://xd.adobe.com/view/cc4016ff-034e-4b9c-99f6-7f6533d421d0-9913/?fullscreen;)

- Link do XD para desenvolvimento com CSS: 
[https://xd.adobe.com/view/113dd2b4-fa2d-47f1-aa34-22049fdaab4a-446e/variables/](https://xd.adobe.com/view/113dd2b4-fa2d-47f1-aa34-22049fdaab4a-446e/variables/)

- Arquivo fonte do Adobe XD (disponível na pasta ZERO do repositório);
- Arquivo word/pages com os TEXTOS (disponível na pasta ZERO do repositório);
- Material de apoio exportado (disponível na pasta *Assets*)

***Good hacking!***