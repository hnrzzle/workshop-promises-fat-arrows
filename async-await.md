async and await
===

## cognitive pattern

```js
function getOrderDetails(orderId) {
  let _order;
  return db.find( "orders", orderId )
    .then( order => _order = order )
    .then( ({customerID}) => db.find( "customers") )
    .then( customer => _order.customer = customer )
    .then( () => _order );
}
```

```js
async function getOrderDetails(orderId) {
  const order = await db.find( "orders", orderId );
  order.customer = await db.find( "customers", order.customerId );
  return order;
}
```