# Pre-Entrega 3 🎯

La Pre-entrega 3 requerirá que elabores con tu equipo un proyecto utilizando Node.js y MySQL, acompañado de una documentación adecuada. A continuación, se detalla una **🚦Guía** a seguir:

## Diseño del Modelo de Datos

### 1. Análisis del archivo trailerflix.json:

- Revisa el contenido del archivo trailerflix.json que se utilizó en las primera entrega.
- Analiza todas sus propiedades para identificar las entidades y sus relaciones.

### 2. Diseño de la base de datos:

- Diseña un modelo de datos para una plataforma de streaming basado en la información del archivo JSON.
- Crea al menos **4 o 5 tablas relacionales**. Algunas tablas sugeridas son:
  - **contenido**
  - **categorías**
  - **géneros**
  - **actores**
- Incluye tablas intermedias para conectar algunas de estas tablas entre sí.

### 3. Herramienta de diseño:

- Utiliza la plataforma **DB Designer** para realizar un diseño efectivo de la base de datos y sus tablas.
- La base de datos se llamará **trailerflix** y deberá tener al menos 6 tablas.

### 4. Exportación del diseño:

- Boceta el diseño en una hoja y luego transpórtalo a DB Designer.
- Genera el archivo de exportación para crear las tablas y sus relaciones en MySQL.

## Migración de Datos

### 1. Preparación de los datos:
- Si queres podes utilizar una herramienta de inteligencia artificial para ayudarte a separar y preparar los datos del archivo JSON.
- Asegúrate de tener todo listo para una rápida inserción en MySQL.

## Desarrollo del Proyecto Node.js

### 1. Estructura del proyecto:

- Define la estructura base del proyecto creando el código base de Node.js con Express.
- Integra la librería Sequelize para manejar la conexión a la base de datos y los modelos de datos.

### 2. Configuración de la conexión a MySQL:

- Crea un archivo .env para definir el host, usuario y contraseña de la base de datos.
- Prueba la conexión a MySQL enviando un mensaje a la consola, terminal, de Node.js.

### 3. Creación de modelos y endpoints:

- Crea una carpeta /models para almacenar los modelos de las tablas SQL.
- Define los modelos de datos utilizando Sequelize.
- Crea los endpoints necesarios para consultar la información. Los endpoints deben permitir:
  - Ver información de películas y series.
  - Ver información de actrices/actores y sus trabajos fílmicos.
  - Filtrar por una película o serie específica.
  - Ver solo películas.
  - Ver solo series.
  - Otros endpoints que consideres necesarios.

### 4. Documentación de endpoints:

- Realiza la documentación explicando cómo utilizar los endpoints existentes y lo que consideres necesario.
- La documentación debe estar en formato **Markdown** y ser clara y detallada.

## Publicación del Proyecto

### 1. Repositorio en GitHub:

- Crea un repositorio en **GitHub**.
- Publica los siguientes elementos:
  - La base de datos **trailerflix** con sus tablas y datos cargados.
  - El modelo diseñado para su creación.
  - El código del proyecto **Node.js.**
  - La documentación en formato **Markdown.**
    
## Presentación en la Clase 32 🤝 

### 1. Presentación del Proyecto:
- Cada grupo tendrá 5 minutos para presentar su proyecto durante la clase 32.
- Habrá un total de 7 grupos presentando sus proyectos.

## Espacio de Consultas

Recuerden que en este ejercicio es necesario:

- Diseñar un modelo relacional de base de datos utilizando la información del archivo trailerflix.json.
- Crear al menos 6 tablas relacionales y migrar los datos del archivo JSON.
- Crear los endpoints necesarios y documentarlos adecuadamente.

**Aprovecha el tiempo disponible en clase para avanzar en estos pasos y evitar retrasos en la entrega final.**
