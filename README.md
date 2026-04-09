# Calculadora Web Científica

Este projeto consiste em uma calculadora web funcional, que oferece tanto operações aritméticas básicas quanto funções científicas avançadas. A aplicação foi desenvolvida com foco em simplicidade, funcionalidade e uma interface de usuário intuitiva.

## 🚀 O que foi feito

O projeto evoluiu de uma calculadora simples para uma ferramenta mais robusta, incluindo:
- **Operações Básicas**: Adição, subtração, multiplicação e divisão.
- **Modo Científico**: Inclusão de funções trigonométricas (`sin`, `cos`, `tan`), logaritmos (`log`), raiz quadrada (`√`), potência (`x²`) e constantes matemáticas (`π` e `e`).
- **Interface Dinâmica**: Implementação de um sistema de "Maximizar/Minimizar" para a seção científica, permitindo que o usuário alterne entre uma visão compacta e completa conforme a necessidade.
- **Design Responsivo**: Utilização do framework Bootstrap para garantir que a interface seja organizada e visualmente agradável.

## 🛠️ Como foi feito

A construção do projeto seguiu os seguintes princípios técnicos:
1.  **Estruturação com HTML5 e Bootstrap**: A interface foi organizada em `rows` e `columns` para manter o alinhamento dos botões.
2.  **Estilização Customizada**: CSS foi utilizado para definir a identidade visual da calculadora (cores escuras, bordas arredondadas e sombras), criando um efeito de profundidade.
3.  **Lógica com JavaScript**:
    -   A função central `calcular()` gerencia todas as entradas, diferenciando entre valores numéricos e ações de comando.
    -   O uso estratégico do objeto `Math` do JavaScript permitiu a implementação precisa das funções científicas.
    -   Manipulação do DOM (Document Object Model) para atualizar o visor da calculadora em tempo real e alternar a visibilidade da seção científica.

## 🧠 O que foi aprendido

Durante o desenvolvimento deste projeto, foram consolidados conhecimentos fundamentais em:
-   **Manipulação de Eventos**: Captura de cliques e interação do usuário com elementos da página.
-   **Lógica de Programação**: Tratamento de diferentes tipos de entrada e encadeamento de operações matemáticas.
-   **Experiência do Usuário (UX)**: A importância de oferecer funcionalidades avançadas sem sobrecarregar a interface inicial (implementação do botão toggle).
-   **Tratamento de Dados**: Uso de funções como `eval()` para processamento de expressões dinâmicas e o objeto `Math` para cálculos complexos.

---
*Desenvolvido como um exercício de aprimoramento em desenvolvimento front-end.*
