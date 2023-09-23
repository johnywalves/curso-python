---
layout: post
modulo: 1. Introdução ao Python
title: Estruturas de Controle (condicionais e loops)
description: As estruturas condicionais permitem que um programa execute comandos distintos com base em condições específicas, enquanto os loops garantem a repetição de um determinado comportamento um número de vezes estabelecido por uma condição
order: 1.3
---

## Condicionais

Controlar a execução de alguns trechos de código baseado por condições específicas. No exemplo a seguir, o valor não é exibido

```python
a = 5
if a == 7:
    print(a)
```

O evento é executado quando a condição é cumprida

```python
a = 5
if a == 7:
    print(a)
```

Podemos fazer uma sequência de validações

```python
a = 5
if a == 7:
    print('primeiro')
elif a == 5:
    print('segundo')
else:
    print('terceiro')
```

## Iterações

vbadbgadbgadbg

### For

vbadbgadbgadbg

```python
for x in range(6):
  print(x)
```

vbadbgadbgadbg

```python
a = [1, 3, 5, 7]

for item in a:
    print(item)
```

### While

vsafvasfvav

```python
i = 0

while (i != 8):
    print("Item: " + str(i))
    i = i + 1
```

### Break and Continue

Quebrar o ciclo (_loop_) com o comando `break`, no exemplo após o bolo o ciclo é finalizado

```python
doces = ['tortas', 'panquecas', 'bolo', 'sorvete']

for doce in doces:
    print(doce)

    if doce == 'bolo':
        break
```

Pular o ciclo (_loop_) com o comando `continue`, evitamos as linhas sequências

```python
doces = ['tortas', 'panquecas', 'bolo', 'sorvete']

for doce in doces:
    if doce == 'panquecas':
        continue

    print(doce)
```
