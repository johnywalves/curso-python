# Use Python

Curso introdutório para Python para configuração de ambiente de desenvolvimento local, automação de processos, manipulação, análise e visualização de dados

## Configuração de ambiente

Baixe a versão mais recente do Ruby para o seu sistema operacional a partir do site oficial [https://www.ruby-lang.org/pt/documentation/installation/](Instalando o Ruby)

```bash
gem install jekyll bundler
```

Insltar os pacotes definidos pelo `Gemfile` do projeto

```bash
bundle install
```

Disponibilizar o serviço para acesso no endereço [http://127.0.0.1:4000/](http://127.0.0.1:4000/) com opção de reload automático ativada

```bash
bundle exec jekyll serve --livereload
```
