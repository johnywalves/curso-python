---
layout: post
category: modules
modulo: 1. Introdução ao Python
title: Configuração do Ambiente Python
description: Configurar um ambiente Python, verificar a instalação e familiarizar-se com o funcionamento do terminal Python são os primeiros passos para que possamos explorar e experimentar livremente
order: 1.1
---

## Instalação do Python

Baixe a versão mais recente do Python para o seu sistema operacional a partir do site oficial [https://www.python.org/downloads/](https://www.python.org/downloads/). Siga as instruções de instalação específicas para o seu sistema

## Verificar a instalação

Abra o terminal ou o prompt de comando e execute o seguinte comando para verificar se o Python foi instalado corretamente e exibir a versão

```bash
python --version
# or
python3 --version
```

## Gerenciador de Pacotes

Vamos instalar o gerenciador de pacotes, pip (gerenciador de pacotes padrão do Python), para facilitar a instalação de bibliotecas e pacotes adicionais

Podemos conferir a instalação com o seguinte comando no terminal

```bash
pip --version
```

Vamos usar o gerenciador de pacotes para instalar as bibliotecas necessárias para automação de processos e análise de dados, como pandas, matplotlib, numpy, seaborn, entre outras. Por exemplo:

```bash
pip install selenium webdriver-manager pandas matplotlib numpy seaborn openpyxl
```

## Executar módulos em Python

Podemos executar um módulos somente uma linha com seguinte comando `python3 -m` e acompanhando do módulo no terminal como no seguinte exemplo:

```bash
python -m this
# or
python3 -m this
```

Podemos ver o poema tema do Python retornado pelo comando no terminal

```bash
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren´t special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you´re Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it´s a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

Ou como no exemplo abaixo para subir um servidor HTTP provendo o conteúdo da pasta

```bash
python -m http.server
# or
python3 -m http.server
```

Para interromper podemos usar a sequência `Ctrl + C`

## Executar comando simples em Python

Podemos informar o comando pelo

```bash
python -c "print('Olá Mundo')"
# or
python3 -c "print('Olá Mundo')"
```

Com o resultado a seguir:

```bash
Olá Mundo
```

## Executar o terminal Python

Quando executamos o comando a seguir, terá acesso ao terminal Python:

```bash
python
# or
python3
```

Vamos executar o comando e verificar o resultado da experiência

```python
import antigravity
```

Para encerrar o terminal, você pode utilizar o comando:

```python
exit()
```

## Executar um arquivo Python

Para executar o arquivo podemos simplesmente informar o caminho para o arquivo ou somente o nome do arquivos caso seja o caminho local no terminal

```bash
python {caminho/do/arquivo}
# or
python3 {caminho/do/arquivo}
```

Crie um arquivo com o nome `poem.py` e conteúdo abaixo ou baixe na página de [Downloads]({{ site.baseurl }}/downloads)

```python
import this
```

Execute no terminal utilizando o comando:

```bash
python poem.py
# or
python3 poem.py
```

## IDE (Ambiente de Desenvolvimento Integrado)

Existem várias IDEs para desenvolvimento em Python como [Jupyter Notebook](https://jupyter.org/), [PyCharm](https://www.jetbrains.com/pycharm/) ou [Spyder](https://www.spyder-ide.org/), alguns ambientes online como o [Google Colab](https://colab.google/)

Recomendo o [Visual Studio Code](https://code.visualstudio.com/) (VSCode) para executar o ambiente desenvolvimento localmente facilitado pelo plugin [ms-python.python](https://marketplace.visualstudio.com/items?itemName=ms-python.python), desta maneira ao abrir um arquivo Python no VSCode temos o botão de executar e o resultado já apresentado no terminal

![VSCode com botão de executar](/assets/img/vscode.jpg)

## Ambiente Virtual (Opcional, mas Recomendado)

Um ambiente virtual Python isola o ambiente de trabalho de outros projetos. Isso ajuda a evitar conflitos de dependências

```bash
python -m venv {nome-do-ambiente}
# or
python3 -m venv {nome-do-ambiente}
```

Para tornar a portabilidade e replicação de ambientes mais simples, é possível exportar a lista de pacotes instalados juntamente com suas versões correspondentes.

```bash
pip freeze > requirements.txt
```

E posteriormente instalar a lista completa somente com um comando

```bash
pip install -r requirements.txt
```
