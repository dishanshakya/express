const { Pool } = require('pg');
const test = require('dotenv').config();

const pool = new Pool({
    user: process.env.PG_USER,
    host:  process.env.PG_HOST,
    database:  process.env.PG_DB,
    password:  process.env.PG_PASSWORD,
    port:  process.env.PG_PORT
});
// orders.map((orders) => {
//     pool.query('insert into \
//         orders(order_id, order_type, date, user_id, product_name,\
//         price, product_status, description, location, contact, imgSource) \
//         values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);', [
//             orders.id, orders.type,
//             new Date().toISOString(), 1, 
//             orders.name, orders.price,
//             'used', orders.description,
//             'Kathmandu', '9761797002', orders.imgSource
//         ])
// })
module.exports = pool;