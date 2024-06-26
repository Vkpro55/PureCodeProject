
import { LuDot } from "react-icons/lu";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import OrderDetailsCard from "../components/cards/OrderDetailsCard";
import OrderDetailsDataTable from "../components/data-tables/OrderDetailsDataTable";
// import { getOrderHistoryById } from "@/helpers";
import TotalPayment from "./TotalPayment";
import DeliveryDetail from "./DeliveryDetail";
import OrderProgress from "./OrderProgress";
import LogisticsDetails from "./LogisticsDetails";
import { dishesData } from "../mock_data/constants";
import { useEffect, useState } from "react";
import {sleep} from "../mock_data/helpers";
import { orderHistoryData } from "../mock_data/constants";

const columns = [
  {
    key: "name",
    name: "Dish",
  },
  {
    key: "price",
    name: "Price",
  },
  {
    key: "quantity",
    name: "Quantity",
  },
];

const OrderDetails = () => {
  const orderId  = "9f36ca";

  const [order, setOrder] = useState();

  const getOrderHistoryById = async (id) => {
    // You can fetch data from your server here
    await sleep(200);
    return orderHistoryData.find((order) => order.id == id);
  };

  useEffect(() => {
    (async () => {
      const foundOrder = await getOrderHistoryById("#" + orderId);
      if (!foundOrder) {
        console.log('Order not found',orderId)
      } else {
        console.log('mil gya')
        setOrder(foundOrder);
      }
    })();
  }, [orderId]);

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin
          title="Order Details"
          subtitle="Order"
          link="#"
        />
        <div className="rounded-lg border border-default-200">
          <div className="flex flex-wrap items-center gap-3 border-b border-default-200 p-6">
            <h4 className="text-xl font-medium text-default-900">
              Order {order && order.id.toUpperCase()}
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <LuDot />
              <h4 className="text-sm text-default-600">September 23, 2023</h4>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <LuDot />
              <h4 className="text-sm text-default-600">3 Products</h4>
            </div>
            <a
              to="#"
              className="ms-auto text-base font-medium text-primary"
            >
              Back to List
            </a>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              <OrderDetailsCard
                title="Billing Address"
                name="Jaylon Calzoni"
                address=" 2123 Parker st. Allentown, New Mexico 123456"
                email="jaylon.calzoni@mail.com"
                phoneNo="(123) 456-7890"
              />
              <OrderDetailsCard
                title="Shipping Address"
                name="Ryan Westervelt"
                address="2123 Parker st. Allentown, New Mexico 123456"
                email="ryanwestenvelt@mail.com"
                phoneNo="(123) 456-7890"
              />
              <TotalPayment />
              <DeliveryDetail />
              <div className="md:col-span-2 xl:col-span-3">
                <OrderProgress />

                <OrderDetailsDataTable columns={columns} rows={dishesData} />
              </div>
              <div className="md:col-span-2 xl:col-span-1">
                <LogisticsDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
