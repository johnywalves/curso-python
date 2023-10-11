---
layout: post
category: modules
modulo: 4. Análise de Dados com Python
title: Análise Estatística Básica
description: Análise estatística básica em Python envolve a aplicação de técnicas estatísticas fundamentais para descrever, resumir e compreender conjuntos de dados. Python oferece uma ampla variedade de bibliotecas e ferramentas para realizar análises estatísticas básicas
order: 4.4
---

## Carregando nossa base de dados

Vamos usar a fonte de dados **Video Game Sales with Ratings** com [somente pontuações]({{ site.baseurl }}/assets/content/video_games_scores.csv) encontrada na área de [Downloads](/downloads)

Vamos carregar com o uso da biblioteca **pandas** e apresentar as colunas disponíveis

```python
import pandas as pd

dados = pd.read_csv('video_games_scores.csv')

print(dados.columns)
```

Coletar as informações de pontuações por avaliações

```python
import pandas as pd

dados = pd.read_csv('video_games_scores.csv')
score = dados['Critic_Score']

print('contagem:', len(score))
print('tipo:', type(score))
```

## Medidas de Síntese

Informações simples sobre conjunto de dados, exemplo de algumas:

- Tamanho;
- Soma;
- Máximo;
- Mínimo;
- Percentis/Quartis.

```python
import pandas as pd

dados = pd.read_csv('video_games_scores.csv')
score = dados['Critic_Score']

print("Contagem:", score.count())
print("Soma:", score.sum())
print("Mínimo:", score.min())
print("Máximo:", score.max())

print("\Percentis/Quartis\n")
print("Quartil Zero:", score.quantile(0))
print("Percentil de 15%:", score.quantile(0.15))
print("Primeiro Quartil:", score.quantile(0.25))
print("Segundo Quartil:", score.quantile(0.50))
print("Terceiro Quartil:", score.quantile(0.75))
print("Quarto Quartil:", score.quantile(1))
```

## Medidas de Tendência ao Centro

Medidas de tendência central são estatísticas usadas para resumir ou representar o valor central de um conjunto de dados, exemplo de algumas:

- Média;
- Mediana;
- Moda.

```python
import pandas as pd

dados = pd.read_csv('video_games_scores.csv')
score = dados['Critic_Score']

print("Média:", score.mean())
print("Mediana:", score.median())
print("Moda:", score.mode())
```

## Medidas de dispersão

As medidas de dispersão ou variabilidade têm o propósito de avaliar o grau de espalhamento dos valores em uma distribuição de frequência, exemplo de algumas:

- **Covariância**: Medida dispersão da média a amostra;
- **Desvio padrão**: Raiz da medida dispersão da média a amostra.

```python
import pandas as pd

dados = pd.read_csv('video_games_scores.csv')
score = dados['Critic_Score']

print("Covariância:", score.var())
print("Desvio padrão:", score.std())
```
