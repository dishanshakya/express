const pool = require('../database/db')

const RecentOrders = async () => {
    const recent = await pool.query('select * from orders');
    return recent.rows
}

const order = async (id) => {
    const data = await pool.query('select * from orders where order_id=$1', [id])
    return data.rows[0]
}

const similarOrders = async (id) => {
    const data = await pool.query('select * from orders where order_id!=$1', [id])
    return data.rows
}

module.exports = {
    RecentOrders,
    order,
    similarOrders
}