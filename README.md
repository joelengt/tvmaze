### Tvmaze
Sirviendo el API de TvMaze en el Backend desde modulo de npm, y usando en frontend con ajax.

## Descargar/Clonar
Para tener el proyecto, bajarlo con git:
```
git clone https://github.com/joelengt/tvmaze.git
```
## Instalación
Para correr el proyecto es necesario, tener instalado mongodb, redis en el sistema operativo.
Para instalas los modulos y demás dependencias que usar la app, ejecutar:
```
npm install
```
Luego que de descargue todo, correr mongod, y redis-serve, en una consaola cada uno

```
mongod
redis-server
````
Esto varia si tienes configurado la ruta de path para correrlo en cualquier lugar, en todo caso ve a carpeta de instalacion de cada uno.

## Ejecutar
Una vez todo listo, solo ejecutar:
```
npm start
```
Este comando ejecuta tres procesos: construye el js del frontend, contruye el js del backend, y ejecutar el server.
Si quieres saltar el desarrollo, solo ejecutar:

```
npm run serve
```
Enseguida la app correra en:
```
htto://localhost:3000
```

## Permisos MIT
Copyright (c) 2016 Joel Gonzales Tipismana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
