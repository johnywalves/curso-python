---
layout: post
modulo: 3. Manipulação de Dados com Python
title: Leitura e Escrita de Dados em Formatos Comuns (CSV, JSON, etc.)
description: A leitura e escrita de dados em formatos comuns, como CSV e JSON, em Python é uma habilidade fundamental quando se trabalha com manipulação e análise de dados
order: 3.2
---

## JavaScript Object Notation (JSON)

JSON (JavaScript Object Notation) é um formato de dados leve e de fácil leitura usado para armazenar e trocar informações estruturadas entre sistemas de computador. Ele é baseado em um subconjunto da linguagem de programação JavaScript e utiliza uma sintaxe simples de pares de chave-valor

### Escrita de JSON

Gerar um arquivo JSON para armazenar os dados gerados

```python
import json

dados = {
    "nome": "Alice",
    "idade": 25,
    "cidade": "São Paulo"
}

with open('dados.json', 'w') as arquivo:
    json.dump(dados, arquivo, ensure_ascii=False)
```

Atenção para `ensure_ascii` possibilitando a escrita com acento

### Leitura de JSON

Ler os dados presentes em um arquivo JSON

```python
import json

dados = '{"nome": "João", "idade": 30}'
objeto = json.loads(dados)

print(objeto)
```

Ou vindos de um arquivo

```python
import json

with open('dados.json', 'r') as arquivo:
    objeto = json.load(arquivo)
    print(objeto)
```

## Comma-separated values (CSV)

CSV (Comma-Separated Values) é um formato de arquivo amplamente utilizado para armazenar dados tabulares, como planilhas ou tabelas, de maneira simples e legível. Nesse formato, os dados são organizados em colunas e linhas, onde cada linha representa um registro e as colunas representam diferentes atributos ou campos. Cada valor é separado por uma vírgula ou outro delimitador, como ponto e vírgula ou tabulação

### Escrita de CSV

Gerar um arquivo CSV para armazenar os dados gerados

```python
import csv

dados = [
    ['Nome', 'Idade'],
    ['Alice', 25],
    ['Bob', 30],
    ['Carol', 28]
]

with open('dados.csv', 'w', newline='') as arquivo:
    writer = csv.writer(arquivo)
    for linha in dados:
        writer.writerow(linha)
```

### Leitura de CSV

Ler os dados presentes em um arquivo CSV

```python
import csv

with open('dados.csv', 'r') as arquivo:
    reader = csv.reader(arquivo)
    for linha in reader:
        print(linha)
```

## Microsoft Excel (XLSX)

XLSX é um formato de arquivo usado para armazenar planilhas eletrônicas, como as criadas no Microsoft Excel e em outros programas de planilha

### Escrita de XLSX

Gerar um arquivo XLSX para armazenar os dados gerados

```python
import pandas as pd

dados = {
    'Nome': ['Alice', 'Bob', 'Carol'],
    'Idade': [25, 30, 28]
}

df = pd.DataFrame(dados)
df.to_excel('dados.xlsx', index=False)
```

### Leitura de XLSX

Ler os dados presentes em um arquivo XLSX

```python
import pandas as pd

dados = pd.read_excel('dados.xlsx')
print(dados)
```
