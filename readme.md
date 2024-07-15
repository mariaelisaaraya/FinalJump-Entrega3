Pre-entrega 3
La Pre-entrega 3 requerirá que elabores un proyecto utilizando Node.js y MySQL, acompañado de una documentación adecuada. A continuación, se detallan los pasos a seguir:

Diseño del Modelo de Datos
Análisis del archivo trailerflix.json:

Revisa el contenido del archivo trailerflix.json que se utilizó en las primeras clases.
Analiza todas sus propiedades para identificar las entidades y sus relaciones.
Diseño de la base de datos:

Diseña un modelo de datos para una plataforma de streaming basado en la información del archivo JSON.
Crea al menos 4 o 5 tablas relacionales. Algunas tablas sugeridas son:
contenido
categorías
géneros
actores
Incluye tablas intermedias para conectar algunas de estas tablas entre sí.
Herramienta de diseño:

Utiliza la plataforma DB Designer para realizar un diseño efectivo de la base de datos y sus tablas.
La base de datos se llamará trailerflix y deberá tener al menos 6 tablas.
Exportación del diseño:

Boceta el diseño en una hoja y luego transpórtalo a DB Designer.
Genera el archivo de exportación para crear las tablas y sus relaciones en MySQL.
Migración de Datos
Preparación de los datos:
Utiliza una herramienta de inteligencia artificial sugerida para ayudarte a separar y preparar los datos del archivo JSON.
Asegúrate de tener todo listo para una rápida inserción en MySQL.
Desarrollo del Proyecto Node.js
Estructura del proyecto:

Define la estructura base del proyecto creando el código base de Node.js con Express.
Integra la librería Sequelize para manejar la conexión a la base de datos y los modelos de datos.
Configuración de la conexión a MySQL:

Crea un archivo .env para definir el host, usuario y contraseña de la base de datos.
Prueba la conexión a MySQL enviando un mensaje a la consola (Terminal) de Node.js.
Creación de modelos y endpoints:

Crea una carpeta /models para almacenar los modelos de las tablas SQL.
Define los modelos de datos utilizando Sequelize.
Crea los endpoints necesarios para consultar la información. Los endpoints deben permitir:
Ver información de películas y series.
Ver información de actrices/actores y sus trabajos fílmicos.
Filtrar por una película o serie específica.
Ver solo películas.
Ver solo series.
Otros endpoints que consideres necesarios.
Documentación de endpoints:

Realiza la documentación explicando cómo utilizar los endpoints existentes.
La documentación debe estar en formato Markdown y ser clara y detallada.
Publicación del Proyecto
Repositorio en GitHub:
Crea un repositorio en GitHub.
Publica los siguientes elementos:
La base de datos trailerflix con sus tablas y datos cargados.
El modelo diseñado para su creación.
El código del proyecto Node.js.
La documentación en formato Markdown.
Presentación en la Clase 32
Presentación del Proyecto:
Cada grupo tendrá 5 minutos para presentar su proyecto durante la clase 32.
Habrá un total de 7 grupos presentando sus proyectos.
Espacio de Consultas
Recuerda que en este ejercicio debes:

Diseñar un modelo relacional de base de datos utilizando la información del archivo trailerflix.json.
Crear al menos 6 tablas relacionales y migrar los datos del archivo JSON.
Crear los endpoints necesarios y documentarlos adecuadamente.
Aprovecha el tiempo disponible para avanzar en estos pasos y evitar retrasos en la entrega final. Si tienes alguna duda, no dudes en consultarme.