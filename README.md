# Django Projects

[New Project](#new-project)
  - [VENV](#venv)
  - [PIP](#pip)
  - [Django](#django)
  - [PostgreSQL](#postgresql)
  - [Settings](#settings)

[Nehtový Specialista](#nehtový-specialista)



## New Project

VSCode. Терминал в рабочей директории.

`pwd`

`ls`

`touch README.md`


### VENV

Virtual Environment. Изолированное рабочее пространство, содержит копию интерпретатора Python и пакетный менеджер PIP.

`python --version`

`python -m venv .venv`

`source .venv/bin/activate`


### PIP

Package Installer for Python. Система управления программными пакетами.

`pip install --upgrade pip`

`pip install django`


### Django

Фреймворк для разработки веб-приложений.

`django-admin startproject 'name'`

`cd 'name'`

`python manage.py runserver`

`Ctrl + C`


### PostgreSQL

Объектно-реляционная система управления базами данных.

`psql --version`

`psql postgres`

`\du`

`CREATE USER 'name' WITH PASSWORD 'pasword';`

`l`

`CREATE DATABASE 'name' OWNER 'name';`

`\q`

`pip instal psycopg2-binary`

`pip list`

`clear`

> project/settings.py

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'name',
        'USER': 'user',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

`python manage.py migrate`

`rm db.sqlite3`

`python manage.py createsuperuser`

`python manage.py runserver`

> http://127.0.0.1:8000/admin


### Git

`touch ../.gitignore`

> .gitignore

```txt
.venv
.DS_Store
```

`cd ..`

`git add .`

`git commit -m "Initial commit"`

`git push`

`cd -`


### Settings

`python manage.py startapp 'pages'`

> project/settgings.py

```python
INSTALLED_APPS = [
    'pages',
]
```

`mkdir -p pages/templates/pages`

`mkdir -p pages/static//pages/styles/`

`touch pages/templates/pages/layout.html pages/static/pages/styles/layout.css`

> pages/views.py

```python
def layout(request):
    return render(request, 'pages/layout.html')
```

> projects/urls.py

```python
from pages import views

urlpatterns = [
    path('layout/', views.layout),
]
```

> pages/layout.html

```html
<!DOCTYPE html>
{% load static %}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{% static 'pages/styles/layout.css' %}">
    <title>Layout</title>
</head>
<body>
    <h1>Layout</h1>
</body>
</html>
```

> pages/styles/layout.css

```css
h1{
    color: green;
}
```


### Django Browser Reload

`pip instal django-browser-reload`

> project/settings.py

```python
INSTALLED_APPS = [
    'django_browser_reload',
]

MIDDLEWARE = [
    'django_browser_reload.middleware.BrowserReloadMiddleware',
]
```

> project/urls.py

```python
from django.urls import path, include

urlpatterns = [
    path("__reload__/", include("django_browser_reload.urls")),
]
```



## Nehtový Specialista

    Á Č Ď É Ě Í Ň Ó Ř Š Ť Ú Ů Ý Ž

    á č ď é ě í ň ó ř š ť ú ů ý ž
