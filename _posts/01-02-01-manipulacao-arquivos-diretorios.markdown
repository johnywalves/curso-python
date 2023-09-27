---
layout: post
modulo: 2. Automação de Tarefas com Python
title: Manipulação de Arquivos e Diretórios
description: Interagir com o sistema operacional objetivando manipulação de arquivos e diretórios para eventos como ler, criar, mover e excluir
order: 2.1
---

## Problemas de padrão de endereços

Sistemas operacionais diferente para endereçamento por exemplo para o **Windows**: `\caminho\para\arquivo` e no temos o padrão **Linux** e **Mac**: `/caminho/para/arquivo` para ilustrar

![Lorem](/assets/img/sep_path.jpg)

Para funcionar em vários cenários podemos trabalhar com o `path.join` adaptando para todos os sistemas

```python
import os

caminho = os.path.join('caminho', 'para', 'arquivo')
print(caminho)
```

Podemos pegar a informação do separador para usos futuros

```python
import os

print('separador do sistema', os.path.sep)
```

## Conhecendo e mudando o local de trabalho

Todo programa executa em uma pasta de trabalho, conhecer essa pasta facilita o acesso a outros recursos

```python
import os

print('você está aqui', os.getcwd())

destino = os.path.join('.', 'assets', 'content')
os.chdir(destino)

print('agora está aqui', os.getcwd())
```

## Listagem de arquivos em pasta

Ler a listagem dos arquivos disponíveis de uma determinado local, indicado `.` capturamos os arquivos disponíveis no local da execução

```python
import os

lista_arquivos = os.listdir(".")

for arquivo in lista_arquivos:
    print(arquivo)
```

## Ler arquivo completo

Para esse vamos ler a Canção do Exílio encontrado na área de [Downloads](/downloads). Uma boa prática executar a função `close` para liberar o arquivo, informando o caminho do arquivo e a função no caso "r" (_read_) para leitura

```python
arquivo = open("./cancao_do_exilio.txt", "r")

print(arquivo.read())

arquivo.close()
```

## Ler arquivo linha por linha

Novamente lendo a Canção do Exílio, agora imprimindo linha por linha

```python
arquivo = open("./cancao_do_exilio.txt", "r")

linhas = arquivo.readlines()
for linha in linhas:
    print(linha)

arquivo.close()
```

## Escrever arquivo completo

Podemos criar um arquivo completo, abrindo um arquivo não existente para criá-lo ou sobrescrever um arquivo existente, informando o modo de escrita com "w" (_write_), destaque para o `\n` para pular de linha

```python
arquivo = open("facilitada.txt", "w")

arquivo.write("lá?\nah!\nsabiá…\npapá…\nmaná…\nsofá…\nsinhá…\ncá?\nbah!")

arquivo.close()
```

O modo "x" (_exclusive creation_) para garantir que a criação de um arquivo, se o arquivo existir vai retornar um erro

## Escrever arquivo linha por linha

Podemos criar um arquivo adicionado para linha ao iterar o conjunto

```python
arquivo = open("facilitada.txt", "w")

linhas = ["lá?\n", "ah!\n", "sabiá…\n", "papá…\n", "maná…\n", "sofá…\n", "sinhá…\n", "cá?\n", "bah!\n"]

arquivo.writelines(linhas)

arquivo.close()
```

## Adicionar conteúdo para um arquivo existente

Incluir conteúdo no final de um arquivo já existente ou criar caso não exista

```python
arquivo = open("facilitada.txt", "a")

arquivo.write('\nJosé Paulo Paes')

arquivo.close()
```

## Renomear arquivos

Usar a biblioteca de `os` para renomear um arquivo, também pode ser usando para mover um arquivo

```python
import os

os.rename("./facilitada.txt", "./simplificada.txt")
```

## Mover arquivo

Realocar um arquivo ou renomear ele se movido para o mesmo lugar com outro nome

```python
import os

os.replace("./simplificada.txt", "./facilitada.txt")
```

## Remover arquivo

Remover arquivos com a função `remove` basta informar o caminho para o arquivo

```python
import os

os.remove("facilitada.txt")
```

## Criar diretórios

Basta informar o caminho desejado para

```python
import os

os.mkdir("./teste")
```

## Executar comandos no terminal

Lorem

```python
import os

os.system("echo test")
```

## Quero mais

Para quem quer se aprofundar no assunto recomendo o livro [Automatize tarefas maçantes com Python: Programação prática para verdadeiros iniciantes](https://amzn.to/48jPESW)
