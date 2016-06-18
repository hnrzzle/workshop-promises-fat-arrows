Handling shared data w/o closures
===

Example from [getiblog](https://blog.getify.com/promises-wrong-ways/)

```js
function getOrderDetails(orderId) {
  var _order;

  return db.find( "orders", orderId )
    .then( function(order){
      _order = order;
      return db.find( "customers", order.customerID )
    } )
    .then( function(customer){
      _order.customer = customer;
      return _order;
    } );
}
```

```js
function getOrderDetails(orderID) {
  return db.find( "orders", orderID )
    .then( function(order){
      return db.find( "customers", order.customerID )
        .then( function(customer){
          order.customer = customer;
          return order;
        } );
    } );
}
```

```js
function getOrderDetails(orderID) {
  return db.find("orders", orderID)
    .then(order => Promise.all([order, db.find("customers", order.customerID)]))
    .then(([order, customer]) => {
      order.customer = customer;
      return order;
    });
}
```

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
