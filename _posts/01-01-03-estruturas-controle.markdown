---
layout: post
modulo: 1. Introdução ao Python
title: Estruturas de Controle (condicionais e loops)
description: Aliquyam sit clita rebum liber tempor justo kasd magna amet rebum dolore dolore dolore luptatum. Et illum duo sea duo facer invidunt diam. No erat duo feugait et lorem justo in
order: 1.3
---

## Condicionais

vsfavsfvv

```python
if
elif
else
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
