---
layout: post
modulo: 4. Análise de Dados com Python
title: Limpeza e Transformação de Dados
description: A limpeza e transformação de dados são processos essenciais na análise de dados, que envolvem a preparação e organização dos dados brutos para que possam ser usados efetivamente em análises e modelagem estatística
order: 4.3
---

## Remoção de valores

Vamos usar a fonte de dados **Video Game Sales with Ratings** com ({{ site.baseurl }}/assets/content/video_games_sales.zip) encontrada na área de [Downloads](/downloads)

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression = 'zip')
notas = dados[['Name', 'Critic_Score', 'User_Score']][:10]

print(notas)
```

Podemos observar vários valores como `NaN` ou seja **Not a Number**, podemos visualizar somente as informações nulas

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression = 'zip')
notas = dados[['Name', 'Critic_Score', 'User_Score']][:10]

print(notas.isnull())
```

Remover as informações de somente uma coluna

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression = 'zip')
notas = dados[['Name', 'Critic_Score', 'User_Score']][:10]

print('Notas:', notas['Critic_Score'])
print('NaN removidos:', notas['Critic_Score'].dropna())
```

Ou podemos remover linhas ou colunas

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression = 'zip')

notas = dados[['Name', 'Critic_Score', 'User_Score']][:10]
print('Notas:\n', notas, '\n\n')

linhas = notas.dropna(axis="rows")
print('Linhas limpas:\n', notas)

colunas = notas.dropna(axis="columns")
print('Colunas limpas:\n', colunas)
```

Uma alternativa é informar os valores valores nulos com outro conteúdo

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression = 'zip')
notas = dados[['Name', 'Critic_Score', 'User_Score']][:10]

preenchidas = notas.fillna(0)
print('Linhas limpas:\n', preenchidas)
```

Podemos limpar valores duplicados, primeiro vamos identificá-los

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression='zip')
notas = dados[['Name', 'Critic_Score', 'User_Score']][:10]

notas = notas.append(
    {"Name": "Wii Sports", "Critic_Score": 76, "User_Score": 8}, ignore_index=True)
notas = notas.append(
    {"Name": "Wii Sports", "Critic_Score": 38, "User_Score": 20}, ignore_index=True)

print('Notas\n', notas, '\n\n')
print('Duplicados\n', notas.duplicated(), '\n\n')
print('Nome\n', notas.duplicated(subset=['Name']), '\n\n')
```

Depois podemos remover os duplicados

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression='zip')
notas = dados[['Name', 'Critic_Score', 'User_Score']][:10]

notas = notas.append(
    {"Name": "Wii Sports", "Critic_Score": 76, "User_Score": 8}, ignore_index=True)
notas = notas.append(
    {"Name": "Wii Sports", "Critic_Score": 38, "User_Score": 20}, ignore_index=True)

print('Notas\n', notas, '\n\n')

notas_semduplicados = notas.drop_duplicates(subset=['Name'])
print('Únicos\n', notas_semduplicados)
```

## Transformação de dados

Atualizar os valores com conta matemática

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression='zip')
notas = dados[['Name', 'Critic_Score', 'User_Score']][:10]
print('Notas\n', notas, '\n\n')

notas['Critic_Score'] = notas['Critic_Score'] / 10
print('Notas\n', notas, '\n\n')
```

Alteração do tipo de valores

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression='zip')
notas = dados[['Name', 'Critic_Score', 'User_Score']][:10]
print('Notas\n', notas.info(), '\n\n')

notas['User_Score'] = notas['User_Score'].astype(float)
print('Notas\n', notas.info())
```

Completar os valores nulos com as médias

```python
import pandas as pd

dados = pd.read_csv('video_games_sales.zip', compression='zip')

notas = dados[['Name', 'Critic_Score', 'User_Score']][:10]
notas['Critic_Score'] = notas['Critic_Score'] / 10
notas['User_Score'] = notas['User_Score'].astype(float)

criticos = notas['Critic_Score'].mean()
usuarios = notas['User_Score'].mean()

notas.fillna(value={'Critic_Score': criticos, 'User_Score':usuarios}, inplace=True)

print('Notas\n', notas, '\n\n')
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
