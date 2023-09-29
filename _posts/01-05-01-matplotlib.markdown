---
layout: post
modulo: 5. Visualização de Dados com Python
title: Introdução à Biblioteca de Visualização (matplotlib e seaborn)
description: ----------------------------- Matplotlib é uma das bibliotecas mais populares em Python para criação de gráficos e visualizações de dados. Ela fornece uma ampla variedade de recursos para criar gráficos estáticos, interativos e personalizáveis, o que a torna uma ferramenta essencial para qualquer pessoa que trabalhe com análise de dados, cientistas de dados, pesquisadores, engenheiros e profissionais de visualização de dados
order: 5.1
---

## Importação de biblioteca

Importação de uma biblioteca com apelidos

```python
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
```

## Gráficos de colunas

Colunas vertical

```python
import pandas as pd
import matplotlib.pyplot as plt

frutas = pd.DataFrame([
    { "Nome": "Banana", "Cor": "Yellow", "Nota": 9 },
    { "Nome": "Maçã", "Cor": "Red", "Nota": 7 },
    { "Nome": "Goiaba", "Cor": "Green", "Nota": 6 },
    { "Nome": "Maracujá", "Cor": "Yellow", "Nota": 9 },
    { "Nome": "Pera", "Cor": "Green", "Nota": 4 }
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

plt.bar(nome, nota)
plt.title('Notas de Frutas')
plt.xlabel('Frutas', fontsize=12)
plt.ylabel('Notas', fontsize=12)
plt.xticks(nome, nome, fontsize=12, rotation=30)
plt.savefig('./notas_por_frutas_ticks.jpg')
```

![Lorem](/assets/figs/notas_por_frutas_colors.jpg)

Colunas horizontais

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

![Lorem](/assets/figs/notas_por_frutas_horizontal.jpg)

## Gráfico de setores

Lorem

```python
import matplotlib.pyplot as plt

frutas = 'Banana', 'Maçã', 'Goiaba', 'Maracujá', 'Pera'
qtds = [2, 3, 7, 10, 4]

plt.pie(qtds, labels=frutas, autopct='%.0f%%')
plt.savefig('./quantidade_frutas_pie.jpg')
```

![Lorem](/assets/figs/quantidade_frutas_pie.jpg)

## Seaborn

A biblioteca Seaborn é uma extensão da biblioteca Matplotlib, com algumas adaptações

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

frutas = pd.DataFrame([
    { "Nome": "Banana", "Cor": "Yellow", "Nota": 9 },
    { "Nome": "Maçã", "Cor": "Red", "Nota": 7 },
    { "Nome": "Goiaba", "Cor": "Green", "Nota": 6 },
    { "Nome": "Maracujá", "Cor": "Yellow", "Nota": 9 },
    { "Nome": "Pera", "Cor": "Green", "Nota": 4 }
])

sns.set()
sns.barplot(x="Nome", y="Nota", data=frutas)
plt.savefig('./charts_bars.jpg')
```

Podemos melhor a estética do nosso gráfico

![Lorem](/assets/figs/charts_bars.jpg)

### Usar a paleta de cores

Podemos adicionar uma a [Paleta de Cores](https://seaborn.pydata.org/tutorial/color_palettes.html) do Seaborn para um gráfico que já temos

```python
import matplotlib.pyplot as plt
import seaborn as sns

frutas = 'Banana', 'Maçã', 'Goiaba', 'Maracujá', 'Pera'
qtds = [2, 3, 7, 10, 4]

colors = sns.color_palette('pastel')[0:5]

sns.set()
plt.pie(qtds, labels=frutas, colors=colors, autopct='%.0f%%')
plt.savefig('./charts_pie.jpg')
```

![Lorem](/assets/figs/charts_pie.jpg)

## Carregando base de dados

Vamos usar a fonte de dados **Video Game Sales with Ratings** com ({{ site.baseurl }}/assets/content/video_games_sales.zip) encontrada na área de [Downloads](/downloads)

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

dados = pd.read_csv('video_games_sales.zip', compression = 'zip')

sns.set()
sns.scatterplot(x='Year_of_Release', y='Critic_Score', data=dados)
plt.savefig('./charts_scatterplot.jpg')
```

![Lorem](/assets/figs/charts_scatterplot.jpg)

Lorem