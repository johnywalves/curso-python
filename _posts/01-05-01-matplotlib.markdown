---
layout: post
modulo: 5. Visualização de Dados com Python
title: Introdução à Biblioteca de Visualização (matplotlib e seaborn)
description: biblioteca Matplotlib é uma das bibliotecas mais populares em Python para criação de gráficos e visualizações de dados. Ela fornece uma ampla variedade de recursos para criar gráficos estáticos, interativos e personalizáveis, o que a torna uma ferramenta essencial para qualquer pessoa que trabalhe com análise de dados, cientistas de dados, pesquisadores, engenheiros e profissionais de visualização de dados
order: 5.1
---

## Importação de biblioteca

Importação de uma biblioteca com apelidos

```python
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
```

Colunas

```python
import pandas as pd

import matplotlib.pyplot as plt
from matplotlib.pyplot import figure

frutas = pd.DataFrame([
    {
        "Nome": "Banana",
        "Cor": "Yellow",
        "CascaComestivel": False,
        "Nota": 9,
        "Origem": "Indonésia"
    },
    {
        "Nome": "Maçã",
        "Cor": "Red",
        "CascaComestivel": True,
        "Nota": 7,
        "Origem": "Ásia Central"
    },
    {
        "Nome": "Goiaba",
        "Cor": "Green",
        "CascaComestivel": True,
        "Nota": 6,
        "Origem": "Brasil"
    },
    {
        "Nome": "Maracujá",
        "Cor": "Yellow",
        "CascaComestivel": True,
        "Nota": 9,
        "Origem": "Brasil"
    },
    {
        "Nome": "Pera",
        "Cor": "Green",
        "CascaComestivel": True,
        "Nota": 4,
        "Origem": "Norte da África"
    }
])

nome = frutas['Nome']
nota = frutas['Nota']

plt.bar(nome, nota)
plt.savefig('./notas_por_frutas.jpg')
```

Gera o seguinte gráfico:

![Lorem](/assets/figs/notas_por_frutas.jpg)

Adicionar o

```python
#...

nome = frutas['Nome']
nota = frutas['Nota']

plt.bar(nome, nota)
plt.title('Notas de Frutas')
plt.savefig('./notas_por_frutas_caption.jpg')
```

![Lorem](/assets/figs/notas_por_frutas_caption.jpg)

```python
#...

nome = frutas['Nome']
nota = frutas['Nota']

plt.bar(nome, nota)
plt.title('Notas de Frutas')
plt.xlabel('Frutas', fontsize=12)
plt.ylabel('Notas', fontsize=12)
plt.savefig('./notas_por_frutas_labels.jpg')
```

![Lorem](/assets/figs/notas_por_frutas_labels.jpg)

```python
#...

nome = frutas['Nome']
nota = frutas['Nota']

plt.bar(nome, nota)
plt.title('Notas de Frutas')
plt.xlabel('Frutas', fontsize=12)
plt.ylabel('Notas', fontsize=12)
plt.xticks(nome, nome, fontsize=12, rotation=30)
plt.savefig('./notas_por_frutas_ticks.jpg')
```

![Lorem](/assets/figs/notas_por_frutas_ticks.jpg)

Adicionar cores por valores

```python
#...

nome = frutas['Nome']
nota = frutas['Nota']
cores = frutas['Cor']

plt.bar(nome, nota, color=cores)
plt.title('Notas de Frutas')
plt.xlabel('Frutas', fontsize=12)
plt.ylabel('Notas', fontsize=12)
plt.xticks(nome, nome, fontsize=12, rotation=30)
plt.savefig('./notas_por_frutas_colors.jpg')
```

![Lorem](/assets/figs/notas_por_frutas_colors.jpg)

Colunas horizontais

```python
#...

nome = frutas['Nome']
nota = frutas['Nota']
cores = frutas['Cor']

plt.barh(nome, nota, color=cores)
plt.title('Notas de Frutas')
plt.xlabel('Notas', fontsize=12)
plt.ylabel('Frutas', fontsize=12)
plt.savefig('./notas_por_frutas_horizontal.jpg')
```

![Lorem](/assets/figs/notas_por_frutas_horizontal.jpg)
