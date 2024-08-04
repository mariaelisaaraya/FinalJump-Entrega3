const mysql = require('mysql2/promise');
const fs = require('fs')
const data = JSON.parse (fs.readFileSync('trailerflix.json', 'utf8' ))

async function loadData() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'Trailerflix'
    });

    try {
        for (const dato of data) {
            console.log (dato)
            // Insert or ignore genero
            const [generoResult] = await connection.execute(
            'INSERT INTO genero (genero) VALUES (?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)',
                [dato.genero]
            );
            const generoId = generoResult.insertId;

            // Insert media
            const [itemsResult] = await connection.execute(
                'INSERT INTO items (id, poster, titulo, categoria, genero_id, resumen, trailer, temporadas, duracion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [dato.id, dato.poster || null, dato.titulo ||null, dato.categoria || null, generoId, dato.resumen || null, dato.trailer|| null, dato.temporadas || null, dato.duracion || null]
            );

            // Insert tags
            const tags = dato.tags.split(', ').map(tag => tag.trim());
            for (const tag of tags) {
                const [tagResult] = await connection.execute(
                    'INSERT INTO tags (tag) VALUES (?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)',
                    [tag]
                );
                const tagId = tagResult.insertId;
                await connection.execute(
                    'INSERT INTO items_tags (item_id, tag_id) VALUES (?, ?)',
                    [dato.id, tagId]
                );
            }

            // Insert reparto
            const reparto = dato.reparto.split(', ').map(actor => actor.trim());
            for (const actor of reparto) {
                const [actorResult] = await connection.execute(
                    'INSERT INTO actores (nombre) VALUES (?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)',
                    [actor]
                );
                const actorId = actorResult.insertId;
                await connection.execute(
                    'INSERT INTO items_reparto (item_id, actor_id) VALUES (?, ?)',
                    [dato.id, actorId]
                );
            }
        }
        console.log('Data loaded successfully.');
    } catch (error) {
        console.error('Error loading data:', error);
    } finally {
        await connection.end();
    }
}

loadData();
