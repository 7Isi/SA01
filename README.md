# SA01
Grupo : Daniel, Isabela Lopes, Gabriel Espadoni

# Projeto Interativo Web - Cronômetro, Lâmpada e Jogo de Pedra, Papel e Tesoura

## Descrição

Este projeto é uma aplicação web composta por três módulos distintos: um cronômetro com registro de voltas, um simulador de controle de lâmpada e um jogo de pedra, papel e tesoura. O objetivo principal foi praticar conceitos de JavaScript puro (vanilla JS), manipulação do DOM, controle de eventos e lógica de programação interativa em interface web.

---

## Módulo 1: Cronômetro com Voltas

### Funcionalidades

- Iniciar e pausar o cronômetro.
- Reiniciar o tempo.
- Registrar voltas (laps) com cálculo do tempo decorrido entre elas.
- Exibição do tempo no formato mm:ss:cc (minutos, segundos e centésimos).
- Atalho de teclado (barra de espaço) para iniciar/pausar rapidamente.

### Desafios Enfrentados

- Sincronização precisa utilizando `setInterval` com intervalo de 10 milissegundos.
- Cálculo correto de tempo decorrido entre voltas sem interferir no total acumulado.
- Manipulação dinâmica do DOM para exibição das voltas.
- Controle de estados de execução (ativo, pausado, resetado) com consistência.

---

## Módulo 2: Controle de Lâmpada

### Funcionalidades

- Botões para acender, apagar e quebrar a lâmpada.
- Estado visual da lâmpada baseado em sua condição (ligada, desligada, quebrada).
- A lâmpada quebra automaticamente após 7 ações de ligar/desligar.
- Botão para substituir a lâmpada quando ela estiver quebrada.

### Desafios Enfrentados

- Gerenciamento de múltiplos estados da lâmpada (ligada, desligada, quebrada).
- Prevenção de ações inválidas como tentar acender uma lâmpada quebrada.
- Atualização visual em tempo real da imagem e aparência da lâmpada.
- Implementação de lógica de contagem para simular desgaste da lâmpada.

---

## Módulo 3: Jogo de Pedra, Papel e Tesoura

### Funcionalidades

- Jogador escolhe entre pedra, papel ou tesoura.
- O computador gera uma escolha aleatória com distribuição personalizada.

- Sistema de pontuação até 15 pontos para definir o vencedor.
- Exibição da escolha do computador com imagem correspondente.

- Sistema de pontuação até 15 pontos para definir o vencedor.
- Exibição da escolha do computador com imagem correspondente.
- Sons diferentes para vitória, derrota e empate.


### Desafios Enfrentados

- Implementação de lógica de jogo justa com variação probabilística para o computador.
- Atualização do placar e reinício automático após alcançar o limite de pontos.

- Gerenciamento de feedback visual com base nos resultados.

- Gerenciamento de feedback visual com base nos resultados.

- Evitar repetições visuais e lógicas nas escolhas do computador.

---

## Tecnologias Utilizadas

- HTML5 para estrutura da página.
- CSS3 para estilos visuais e responsividade.
- JavaScript (vanilla) para a lógica de controle e interações.
- Recursos visuais (imagens) externos para melhorar a experiência do usuário.

