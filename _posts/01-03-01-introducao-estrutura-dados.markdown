---
layout: post
category: modules
modulo: 3. Manipulação de Dados com Python
title: Introdução às Estruturas de Dados em Python (listas, dicionários, etc.)
description: Coleção de dados associada a uma variável como eles podem ser criados e manipulados
order: 3.1
---

## Listas

Listas são coleções ordenadas, diferentes tipos e mutáveis

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

Uma lista é uma coleção mutável, podemos adicionar elementos

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

Tupla são semelhantes a listas, mas imutáveis

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

## Dicionários

Dicionários são coleções organizadas de pares chave-valor, com uso de chaves únicas

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

## Conjuntos (Set)

Conjuntos são coleções não ordenadas de elementos únicos

A criação de conjuntos é indicada pelo conteúdo de duas chaves `{}` com os elementos separados por vírgulas

```python
frutas = { "banana", "maça", "pera" }

print(frutas)
```

Podemos observar que ele ignora os valores repetidos

```python
frutas = { "banana", "banana", "maça", "banana", "pera" }

print(frutas)
```
