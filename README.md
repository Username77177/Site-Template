# Site Template by Username77177
Я довольно много работаю с сайтами, так что решил создать шаблон для таких проектов.

В данном шаблоне присутствует:
* Сборочный файл `gulpfile.js`
* Директория src, откуда будут браться файлы для компилирования
* Директория output, в которой будут скомпилированные файлы, а также *normalize.css*

**Архив с названием project.tar является ключевым. Распаковывать его нужно с помощью команды `tar -xf project.tar`**

## Быстрое развертывание
Быстро развернуть данный шаблон можно с помощью команды:

```bash
# Прямо в директории с новым проектом
curl https://raw.githubusercontent.com/Username77177/Site-Template/master/project.tar --output project.tar && tar -xf project.tar && rm project.tar

# Создавая новую директорию
echo Введите название новой директории
read inp
mkdir $inp && cd $inp && curl https://raw.githubusercontent.com/Username77177/Site-Template/master/project.tar --output project.tar && tar -xf project.tar && rm project.tar
```
