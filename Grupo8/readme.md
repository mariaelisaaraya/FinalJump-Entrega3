# Documentación de la API TrailerFlix

## Tecnologías Utilizadas

- **JavaScript**: Lenguaje de programación utilizado.
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para Node.js para interacción con bases de datos MySQL.
- **dotenv**: Para gestionar variables de entorno.
- **MySQL**: Sistema de gestión de bases de datos SQL.


## Requisitos

- Node.js y npm instalados.
- MySQL en funcionamiento con la base de datos configurada.
- Dependencias instaladas con `npm install`.

## Instalación

1. Clona el repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd trailerflix
    ```

3. Instala las dependencias:

    ```
    npm install
    ```

4. Configura la base de datos
- Crea la base de datos trailerflix en MySQL
- Ejecuta en MySQL el contenido del archivo trailerflix.sql
- Configura el archivo .ENV
```
DB_HOST="localhost" (Si no estas usando una base de datos local agrega la URL del Host donde se encuentra alojada)
DB_USER="root" (Reemplaza por tu usuario de MySQL)
DB_PASS="" (Agrega tu pasword de MySQL)
DB_NAME="Trailerflix" 
PORT=3000 
```

5. Ejecuta el servidor:

    ```bash
    npm start
    ```

## Endpoints


| Ruta | Función | Parámetros |
|------|---------|------------|
| [/trailerflix/](#1-obtener-todos-los-items) | Obtener Todos los Items | Ninguno |
| [/trailerflix/actor/:nombre](#2-buscar-items-por-actor) | Buscar Items por Actor | `nombre` - Nombre del actor |
| [/trailerflix/id/:id](#3-buscar-un-item-por-su-id) | Buscar un Item por su ID | `id` - ID del item |
| [/trailerflix/titulo/:titulo](#4-buscar-por-título) | Buscar por Título | `titulo` - Título del item |
| [/trailerflix/categoria/:cat](#5-buscar-por-categoría) | Buscar por Categoría | `cat` - Categoría del item |
| [/trailerflix/buscar](#6-buscar-con-parámetros-dinámicos) | Buscar con Parámetros Dinámicos | `titulo`, `categoria`, `genero`, `actor` ,  `tag`,  `resumen`,  `id`,  `temporadas`- Parámetros de búsqueda |


### 1. Obtener Todos los Items

- **Método**: `GET`
- **Ruta**: `/trailerflix/`
- **Descripción**: Obtiene todos los items con su correspondiente género.

**Ejemplo de solicitud**:

```
http://localhost:3000/trailerflix/
```
Respuesta:
```json

[
  {
    "id": 1,
    "poster": "./posters/1.jpg",
    "titulo": "The Crown",
    "categoria": "Serie",
    "genero": "Suceso Real",
    "resumen": "Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.",
    "trailer": "https://www.youtube.com/embed/JWtnJjn6ng0",
    "temporadas": 4,
    "duracion": null,
    "tags": [
      "Drama",
      "Suceso Real"
    ],
    "actores": [
      "Claire Fox",
      "Olivia Colman",
      "Matt Smith",
      "Tobias Menzies",
      "Vanesa Kirby",
      "Helena Bonham Carter"
    ]
  },
  {
    "id": 2,
    "poster": "./posters/2.jpg",
    "titulo": "Riverdale",
    "categoria": "Serie",
    "genero": "Drama",
    "resumen": "El paso a la edad adulta incluye sexo, romance, escuela y familia. Para Archie y sus amigos, también hay misterios oscuros.",
    "trailer": "https://www.youtube.com/embed/HxtLlByaYTc",
    "temporadas": 5,
    "duracion": null,
    "tags": [
      "Drama",
      "Ficción",
      "Misterio"
    ],
    "actores": [
      "Lili Reinhart",
      "Casey Cott",
      "Camila Mendes",
      "Marisol Nichols",
      "Madelaine Petsch",
      "Mädchen Amick"
    ]
  },
    ...]
    
```
[Volver a endpoints](#endpoints)



2. Buscar Items por Actor

    Método: GET
    Ruta: /trailerflix/actor/:nombre
    Descripción: Busca items en los que ha trabajado un actor cuyo nombre contenga la cadena proporcionada.

Ejemplo de solicitud:

```bash
http://localhost:3000/trailerflix/actor/helena
```
Respuesta:

```json

[
  {
    "actor": "Helena Bonham Carter",
    "Items": [
      {
        "id": 1,
        "poster": "./posters/1.jpg",
        "titulo": "The Crown",
        "categoria": "Serie",
        "genero": "Suceso Real",
        "resumen": "Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.",
        "trailer": "https://www.youtube.com/embed/JWtnJjn6ng0",
        "temporadas": 4,
        "duracion": null,
        "tags": [
          "Drama",
          "Suceso Real"
        ],
        "actores": [
          "Claire Fox",
          "Olivia Colman",
          "Matt Smith",
          "Tobias Menzies",
          "Vanesa Kirby",
          "Helena Bonham Carter"
        ]
      },
      {
        "id": 6,
        "poster": "./posters/6.jpg",
        "titulo": "Enola Holmes",
        "categoria": "Película",
        "genero": "Drama",
        "resumen": "La hermana menor de Sherlock, descubre que su madre ha desaparecido y se dispone a encontrarla. En su búsqueda, saca a relucir el sabueso que corre por sus venas y se encuentra con una conspiración que gira en torno a un misterioso lord, demostrando que su ilustre hermano no es el único talento en la familia.",
        "trailer": "https://www.youtube.com/embed/3t1g2pa355k",
        "temporadas": 0,
        "duracion": "97 minutos",
        "tags": [
          "Drama",
          "Ficción",
          "Misterio"
        ],
        "actores": [
          "Helena Bonham Carter",
          "Millie Bobby Brown",
          "Henry Cavill",
          "Sam Claflin",
          "Louis Partridge",
          "Adeel Akhtar"
        ]
      }
    ]
  }
]
```
[Volver a endpoints](#endpoints)

3. Buscar un Item por su ID

    Método: GET
    Ruta: /trailerflix/id/:id
    Descripción: Busca un item por su ID.

Ejemplo de solicitud:

```bash

http://localhost:3000/trailerflix/id/1
```
Respuesta:

```json

[
  {
    "id": 1,
    "poster": "./posters/1.jpg",
    "titulo": "The Crown",
    "categoria": "Serie",
    "genero": "Suceso Real",
    "resumen": "Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.",
    "trailer": "https://www.youtube.com/embed/JWtnJjn6ng0",
    "temporadas": 4,
    "duracion": "",
    "tags": [
      "Drama",
      "Suceso Real"
    ],
    "actores": [
      "Claire Fox",
      "Olivia Colman",
      "Matt Smith",
      "Tobias Menzies",
      "Vanesa Kirby",
      "Helena Bonham Carter"
    ]
  }
]
```
[Volver a endpoints](#endpoints)

4. Buscar por Título

    Método: GET
    Ruta: /trailerflix/titulo/:titulo
    Descripción: Busca items cuyo título contenga la cadena proporcionada.

Ejemplo de solicitud:

```bash

http://localhost:3000/trailerflix/titulo/crown
```
Respuesta:

```json

[
  {
    "id": 1,
    "poster": "./posters/1.jpg",
    "titulo": "The Crown",
    "categoria": "Serie",
    "genero": "Suceso Real",
    "resumen": "Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.",
    "trailer": "https://www.youtube.com/embed/JWtnJjn6ng0",
    "temporadas": 4,
    "duracion": "",
    "tags": [
      "Drama",
      "Suceso Real"
    ],
    "actores": [
      "Claire Fox",
      "Olivia Colman",
      "Matt Smith",
      "Tobias Menzies",
      "Vanesa Kirby",
      "Helena Bonham Carter"
    ]
  }
]
```
[Volver a endpoints](#endpoints)

5. Buscar por Categoría

    Método: GET
    Ruta: /trailerflix/categoria/:cat
    Descripción: Busca items cuya categoría contenga la cadena proporcionada.

Ejemplo de solicitud:

```bash

http://localhost:3000/trailerflix/categoria/serie
```
Respuesta:

```json

[
  {
    "id": 1,
    "poster": "./posters/1.jpg",
    "titulo": "The Crown",
    "categoria": "Serie",
    "genero": "Suceso Real",
    "resumen": "Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.",
    "trailer": "https://www.youtube.com/embed/JWtnJjn6ng0",
    "temporadas": 4,
    "duracion": "",
    "tags": [
      "Drama",
      "Suceso Real"
    ],
    "actores": [
      "Claire Fox",
      "Olivia Colman",
      "Matt Smith",
      "Tobias Menzies",
      "Vanesa Kirby",
      "Helena Bonham Carter"
    ]
  },
  {
    "id": 2,
    "poster": "./posters/2.jpg",
    "titulo": "Riverdale",
    "categoria": "Serie",
    "genero": "Drama",
    "resumen": "El paso a la edad adulta incluye sexo, romance, escuela y familia. Para Archie y sus amigos, también hay misterios oscuros.",
    "trailer": "https://www.youtube.com/embed/HxtLlByaYTc",
    "temporadas": 5,
    "duracion": "",
    "tags": [
      "Drama",
      "Ficción",
      "Misterio"
    ],
    "actores": [
      "Lili Reinhart",
      "Casey Cott",
      "Camila Mendes",
      "Marisol Nichols",
      "Madelaine Petsch",
      "Mädchen Amick"
    ]
  },
    ...]
```
[Volver a endpoints](#endpoints)

6. Buscar con Parámetros Dinámicos

    Método: GET
    Ruta: /trailerflix/buscar
    Descripción: Permite buscar items usando parámetros dinámicos en la URL, pudiendo buscar por título, categoría, resumen, id, temporadas, tags y/o género.

Ejemplo de solicitud:

```bash

http://localhost:3000/trailerflix/buscar?genero=drama&temporadas=1
```
Respuesta:

```json

[
  {
    "id": 5,
    "poster": "./posters/5.jpg",
    "titulo": "Gambito de Dama",
    "categoria": "Serie",
    "genero": "Drama",
    "resumen": "En los cincuenta, una joven de un orfanato descubre que tiene un increíble don para el ajedrez y recorre el arduo camino a la fama mientras lucha contra las adicciones.",
    "trailer": "https://www.youtube.com/embed/lbleRbyGKL4",
    "temporadas": 1,
    "duracion": "",
    "tags": [
      "Drama",
      "Ficción",
      "Sucesos"
    ],
    "actores": [
      "Anya Taylor-Joy",
      "Thomas Brodie-Sangster",
      "Harry Melling",
      "Moses Ingram",
      "Chloe Pirrie",
      "Janina Elkin"
    ]
  },
  {
    "id": 66,
    "poster": "./posters/66.jpg",
    "titulo": "Mare of Easttown",
    "categoria": "Serie",
    "genero": "Drama",
    "resumen": "Mare of Easttown es una miniserie estadounidense de drama y misterio creada por Brad Ingelsby cuenta la historia de Mare Sheehan, una detective de un pequeño pueblo de Pensilvania que investiga un asesinato local mientras trata de evitar que su vida se desmorone a raiz de la muerte de su hijo, su separación, y la posible restitución de su nieto a su madre biológica.",
    "trailer": "https://www.youtube.com/embed/miQqyfO66uw",
    "temporadas": 1,
    "duracion": "N/A",
    "tags": [
      "Drama",
      "Misterio",
      "Crimen",
      "Suspenso"
    ],
    "actores": [
      "Kate Winslet",
      "Cailee Spaeny",
      "Guy Pearce",
      "Julianne Nicholson",
      "Jean Smart",
      "Angourie Rice",
      "Evan Peters",
      "Sosie Bacon",
      "David Denman",
      "Neal Huff",
      "James McArdle",
      "John Douglas Thompson",
      "Joe Tippett",
      "Cameron Mann",
      "Chinasa Ogbuagu"
    ]
  },
    ...]
```

[Volver a endpoints](#endpoints)

