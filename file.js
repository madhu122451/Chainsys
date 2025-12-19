function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!Validate(cart)) {
      const err = new Error("cart is invalid");
      reject(err);
    }
    const orderId = 12345;
    if (orderId) {
      resolve("success");
    }
  });
}

createOrder(cart)
  .then((orderId) => {
    return proceedtopayment(orderId);
  })
  .then((showordersummary) => {
    return ordersummarys(showordersummary);
  })
  .then((wallent) => {
    return updatewallet(wallent);
  })
  .catch((err) => {
    console.log(err);
  })
  .then((orderId) => {
    console.log(orderId);
  });






