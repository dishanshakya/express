const {Router} = require('express')
const router = Router()
const { RecentOrders, order, similarOrders } = require('../controller/resourceController')

router.get('/recentorders', async (req, res) => {
    const orders = await RecentOrders()
    res.json(orders)
})

router.get('/orders/:id', async (req, res) => {
    const data = await order(req.params.id)
    res.json(data)
})

router.get('/similarorders/:id', async(req, res) => {
    const data = await similarOrders(req.params.id)
    res.json(data)
})

module.exports = router
