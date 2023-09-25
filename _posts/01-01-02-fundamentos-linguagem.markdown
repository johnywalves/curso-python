---
layout: post
modulo: 1. Introdução ao Python
title: Fundamentos da Linguagem Python
description: Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991
order: 1.2
---

Comentar uma linha basta adicionar `#` na frente da linha

```python
# Comentário de uma linha
```

## Declaração e apresentação variável

A atribuição envolve a alocação de um valor na memória do sistema e a sua nomeação para uso posterior. Esse processo é realizado em Python de forma simples, utilizando o operador `=` entre o nome e o valor

```python
x = 2
y = 3
print(x + y)

z = x + y
print(z)
```

## Operações básicas

Operações aritméticas

```python
print('soma', 5 + 2)
print('subtração', 5 - 2)
print('multiplicação', 5 * 2)
print('divisão', 5 / 2)
print('divisão inteira', 5 // 2)
print('resto', 5 % 2)
```

Operações de comparação

```python
print('igual', 5 == 2)
print('diferente', 5 != 2)
print('menor', 5 < 2)
print('menor igual', 5 <= 2)
print('maior', 5 > 2)
print('maior igual', 5 >= 2)
```

Operadores lógicos

```python
print('E', True and False)
print('OR', True and False)
print('Não', not True)
```

## Declarar e usar uma função

A indentação desempenha um papel fundamental como uma marca de encapsulamento em Python. Para definir uma função, começamos com a palavra reservada `def`, seguida pela assinatura da função e terminamos a linha com um `:`. Todo o conteúdo subsequente, indentado adequadamente, faz parte do corpo da função.

```python
def escrever_texto(a):
    print(a)

escrever_texto('resultado_primeiro')
escrever_texto('resultado_segundo')
```

Essa função pode retornar um valor usando `return`, conforme ilustrado no exemplo abaixo:

```python
def soma(a, b):
    return a + b

resultado_primeiro = soma(2, 3)
print('resultado_primeiro', resultado_primeiro)

resultado_segundo = soma(5, 3)
print('resultado_segundo', resultado_segundo)
```

Uso de valor padrão para uma função

```python
def soma(a, b, c = 0):
    return a + b + c

print(soma(2, 3))
print(soma(2, 3, 5))
```

## Tipos de dados

Entender os tipos de básicos de dados para o Python

```python
def soma(a, b):
    return a + b

print(type(5))
print(type("texto"))
print(type(1.0))
print(type(True))
print(type(soma))
```

Converter os valores, quando fizer sentido simplesmente apontando o tipo desejado

```python
print(type(int(1.0)))
print(type(bool("True")))
```

## Strings e Manipulação de Texto

Criação de strings a apresentação de algumas funções para manipulação dos textos

```python
a = 'Texto'
b = " de Teste"
c = a + b

print(type(c))

print('concatenado', c)
print('split', c.split(' '))
print('split', "__".join(c.split(' ')))
print('replace', c.replace(' de ', '@'))
print('upper', c.upper())
print('lower', c.lower())
print('count "espaços"', c.count(' '))
print('capitalize', c.capitalize())
```

Pegar partes do texto

```python
nome = "Leonardo da Vinci"
print(nome[0])
print(nome[1])
print(nome[2])
print(nome[-1])
print(nome[:3])
print(nome[3:])
```
