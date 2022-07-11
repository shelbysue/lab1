import express from "express";

import { items } from "../data/cart.data";

export const shopRouter = express.Router();

shopRouter.route('/')
.get((req, res) => {
    if (req.query.maxPrice){
    const maxPrice = items.find(
        maxPrice => items.price = Number (req.query.price));
        return res.status(200).json(items);
}})

shopRouter.route('/:id')
.get((req, res) => {
    const item = items.find(items => items.id === Number(req.params.id));

//if shop is undefined we send a 404 eoor corde and error object
    if (!items){
        return res.status(404).json ({ "error": "ID not found: ${res.paramas.id}" });
    }

    return res.status(200).json(items);
});

shopRouter.route('/cart-items')
.post((req, res) => {
    res.json({id: 333, product: 'bread', price: 1.75, quantity: 1});
    return req.params
});