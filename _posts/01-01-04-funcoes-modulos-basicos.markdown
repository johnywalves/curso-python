---
layout: post
modulo: 1. Introdução ao Python
title: Funções e Módulos Básicos
description: Funções e módulos essenciais em Python para realizar uma variedade de tarefas. Vamos destacar algumas das funções e módulos mais simples e úteis nesta linguagem
order: 1.4
---

Apresentação de informações

```python
print("Olá, mundo!")
```

Coletar informações por digitação do usuário

```python
nome = input("Digite seu nome: ")
print(nome)
```

Conhecer o tamanho de uma string

```python
texto = "Python"
comprimento = len(texto)
print(comprimento)
```

Ops! O tamanho de uma coleção de dados também

```python
num = [1, 3, 5, 7, 9, 11]
comprimento = len(num)
print(comprimento)
```

## Módulos básicos

Bibliotecas mantidas pelo interpretador Python. Estão sempre disponíveis e não precisam de instalação

### `math`: matemática

Alguns exemplos da biblioteca matemática

```python
import math

print("arredondar para cima", math.ceil(2.7))
print("arredondar para baixo", math.floor(2.7))
print("potência", math.pow(2, 5))
print("raiz quadrada", math.sqrt(25))
```

### `random`: lidar com aleatoriedade

Geração de valores aleatórios

```python
import random

print('aleatório entre 1 e 100:', random.randint(1, 100))
print('selecionar opção:', random.choice(['pedra', 'papel', 'tesoura']))
```

### `datetime`: data/hora

Manipulação de data e horário

```python
from datetime import datetime

print('data hora atual: ', datetime.now())
```

### `sys`: interagir com o interpretador Python

Acessar as variáveis utilizadas ou mantidas pelo interpretador e funções que interagem fortemente com o interpretador. Por exemplo saber o sistema operacional que está rodando o Python

```python
import sys

print(sys.platform)
```

Ao executar podemos informar o parâmetros para a execução, por exemplo o arquivo a abaixo salvo como `params.py` para apresentar os parâmetros

```python
import sys

argumentos = sys.argv
print(argumentos)
```

Executar o código acima com o seguinte comando no terminal para apresentar os parâmetros informados:

```python
python params.py testando valores passando valores
# or 
python3 params.py testando valores passando valores
```

### `urllib`: trabalhar com URLs

Permite fazer requisições HTTP para acessar recursos na web

```python
import urllib.request

resposta = urllib.request.urlopen('https://usepython.com.br/')
html = resposta.read()

print(html)
```

## Quero mais

Lembrando que esses são um pequeno exemplo a listagem completa pode ser encontrada na biblioteca Python em [funções](https://docs.python.org/3/library/functions.html) e [módulos](https://docs.python.org/3/library/index.html)
