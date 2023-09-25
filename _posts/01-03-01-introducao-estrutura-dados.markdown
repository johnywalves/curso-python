---
layout: post
modulo: 3. Manipulação de Dados com Python
title: Introdução às Estruturas de Dados em Python (listas, dicionários, etc.)
description: Coleção de dados associada a uma variável como eles podem ser criados e manipulados
order: 3.1
---

## Lista

A criação de uma lista é indicada pelo conteúdo de dois colchetes `[]` com os elementos separados por vírgulas

```python
a = [1, 3, 5, 7]
print(type(a))
print(a)
```

Para acessar os dados dentro da lista, é necessário indicar o número do índice, começando a contagem a partir do 0 (zero)

```python
print(a[0])
print(a[2])
print(a[-1])
```

Uma lista é um conjunto mutável podemos adicionar elementos

```python
a = [1, 3, 5, 7]
a.append(10)
print(a)
```

Mudar um elemento pelo índice

```python
a = [1, 3, 5, 7]
a[1] = 15
print(a)
```

Remover um elemento pelo índice

```python
a = [1, 3, 5, 7]
a.remove(1)
print(a)
```

## Tuplas

Criação de tuplas e pegar informação por uma determinada posição

```python
a = (1, 3, 5, 7)

print(type(a))
print(a)
print(a[0])
print(a[2])
print(a[-1])
```

Tuplas são imutáveis, dá erro mesmo

```python
a = (1, 3, 5, 7)
a[1] = 9
```

## Dicionário

Podemos criar um objeto com os atributos nomeados

```python
user = { 'nome': 'João da Silva', 'email': 'joao@silva.com'  }

print(type(user))
print(user)
```

Para acessar os valores do dicionário de forma individual

```python
user = { 'nome': 'João da Silva', 'email': 'joao@silva.com'  }

print('nome', user['nome'])
print('email', user['email'])
```

Para adicionar um novo atributo para o dicionário

```python
user = { 'nome': 'João da Silva', 'email': 'joao@silva.com'  }

user['idade'] = 37

print('nome', user['nome'])
print('email', user['email'])
print('idade', user['idade'])
```
