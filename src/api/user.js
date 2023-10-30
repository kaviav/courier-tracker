export const OrderDetails = async ({
  TrackingID,
  Address_f,
  Address_t,
  Cost,
  Carrier,
  Size,
  Weight,
  PriorityStatus,
  PaymentStatus,
  Customer,
} = {}) => {
  console.log(PriorityStatus, TrackingID);
  const Order = {
    TrackingID,
    Address_f,
    Address_t,
    Cost,
    Carrier,
    Size,
    Weight,
    PriorityStatus,
    PaymentStatus,
    Customer,
  };

  try {
    const res = await fetch("http://localhost:5000/user/placeorder", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Order),
    });
    return await res.json();
  } catch (err) {
    throw new Error(`Cannot updated order details. ${err}`);
  }
};

export const orderEmail = async ({ Customer, Cost, TrackingID } = {}) => {
  const email = Customer;
  const Order = { email, Cost, TrackingID };

  try {
    const res = await fetch("http://localhost:5000/user/orderemail", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Order),
    });
    return await res.json();
  } catch (err) {
    throw new Error(`Cannot updated order details. ${err}`);
  }
};
