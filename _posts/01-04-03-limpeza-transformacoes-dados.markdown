---
layout: post
modulo: 4. Análise de Dados com Python
title: Limpeza e Transformação de Dados
description: ----------------------------- A limpeza e transformação de dados são processos essenciais na análise de dados, que envolvem a preparação e organização dos dados brutos para que possam ser usados efetivamente em análises e modelagem estatística
order: 4.3
---

## Limpeza de dados

Lorem

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression = 'zip')
```

## Gerar fonte de dados

Vamos usar a fonte de dados **Video Game Sales with Ratings** com ({{ site.baseurl }}/assets/content/video_games_sales.zip) encontrada na área de [Downloads](/downloads)

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression = 'zip')
```

Fazer uso somente dos campos de nome e pontuações

```python
notas = dados[['Name', 'Critic_Score', 'User_Score']]
```

Remover as linhas com valores não numéricos

```python
notas = notas.dropna(axis=0)
```

Remover os valores de "To be announced" (tbd)

```python
notas = notas.query('User_Score != "tbd"')
```

Normalizar as notas de críticos para uma escala de 0 a 10

```python
notas['Critic_Score'] = notas['Critic_Score'] / 10
```

Salvar os valores organizados

```python
notas.to_csv('./video_games_scores.csv')
```
