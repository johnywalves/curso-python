---
layout: post
category: modules
modulo: 2. Automação de Tarefas com Python
title: Introdução à Automação Web (usando Selenium)
description: Realizar tarefas repetitivas é uma perda de tempo, mas felizmente, temos robôs à disposição para simplificar essas tarefas. Para automatizar interações na web, podemos contar com o Selenium, em conjunto com Python
order: 2.2
---

## Instalação de pacotes

Instalar os pacotes `selenium` e `webdriver-manager` no pelo pip

```bash
pip install selenium webdriver-manager
```

## Realizar o passo a passo

Geração do código para nosso pequeno robô

### Abrir o navegador

Importação do WebDrive da biblioteca do Selenium

```python
from selenium import webdriver
```

Podemos criar o drive como Google Chrome `driver = webdriver.Chrome()` ou Mozilla Firefox `driver = webdriver.Firefox()` juntamente com a opção de não apresentar a interface gráfica

Adicionando a chamada para o `webdriver_manager` instalar o webdrive automaticamente

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

options = Options()
options.add_argument("--headless")
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options = options)
```

ou com Firefox

```python
from selenium import webdriver

from selenium.webdriver.firefox.service import Service as FirefoxService
from webdriver_manager.firefox import GeckoDriverManager

fireFoxOptions = webdriver.FirefoxOptions()
fireFoxOptions.add_argument('-headless')
driver = webdriver.Firefox(service=FirefoxService(GeckoDriverManager().install()), options=fireFoxOptions)
```

### Navegar e esperar construção da página

```python
url = "https://www.google.com/"
driver.get(url)
```

Usando as opções disponíveis em [Query By](https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.by.html) com o Query Selector para encontrar o campo de busca na página do Google

```python
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

searchField = WebDriverWait(driver, 10).until(
  EC.presence_of_element_located((By.CSS_SELECTOR, "[name=q]"))
)
```

### Tirando uma foto

```python
driver.save_screenshot("open.png")
```

### Redimensionar janela do navegador

```python
driver.set_window_size(1800, 1200)
```

Tirar um screenshot da tela ampliada

```python
driver.save_screenshot("max.png")
```

### Digitando texto na caixa

Digitar a palavra "orange" na caixa de busca e digitar `<Enter>`

```python
searchField.send_keys("orange")
searchField.send_keys(Keys.ENTER)
```

Esperar por 10 segundos

```python
time.sleep(10)
```

Tirar um screenshot do resultado da busca

```python
driver.save_screenshot("search.png")
```

### Clicando no elemento

Localizando o link para as imagens pelo seletor de CSS

```python
imageTab = driver.find_element(By.CSS_SELECTOR, "#top_nav a")
imageTab.click()
```

Tirar um screenshot das imagens

```python
driver.save_screenshot("imagens.png")
```

## Compilado

Compilado para executar de forma invisível (headless) no Chrome

```python
import time

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Main
def main():
  # Iniciar Webdriver
  options = Options()
  options.add_argument("--headless")
  driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

  # Acessar endereço
  driver.get("https://www.google.com/")

  # Esperar até a caixa de busca aparecer
  searchField = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, "[name=q]"))
  )

  # Tirar um screenshot
  driver.save_screenshot("open.png")

  # Alterar o tamanho da tela
  driver.set_window_size(1800, 1200)

  # Tirar um screenshot da tela ampliada
  driver.save_screenshot("max.png")

  # Digitar a palavra "orange" na caixa de busca e digitar <Enter>
  searchField.send_keys("orange")
  searchField.send_keys(Keys.ENTER)
  # Esperar por 10 segundos
  time.sleep(10)
  # Tirar um screenshot do resultado da busca
  driver.save_screenshot("search.png")

  # Clicar para a aba de Imagens
  imageTab = driver.find_element(By.CSS_SELECTOR, "#top_nav a")
  imageTab.click()
  # Tirar um screenshot das imagens
  driver.save_screenshot("imagens.png")

  # Fechar o navegador
  driver.quit()

if __name__ == "__main__":
  main()
```
