import {
    burger1IconCategoryImg,
    burgerImg,
    butterCookiesImg,
    chickpeaHummusImg,
    cupIconCategoryImg,
    dessertIconCategoryImg,
    hotChocolateImg,
    noodlesIconCategoryImg,
    noodlesImg,
    pizzaIconCategoryImg,
    pizzaImg,
    redVelvetPastryImg,
    skewerIconCategoryImg,
    spaghettiImg,
    steamedDumplingImg,
    tacoIconCategoryImg,
    vegRiceImg,
    avatar1Img,
    avatar2Img,
    avatar3Img,
    avatar4Img,
    avatar5Img,
  } from "./images";

  import { subtractHours } from "./helpers";

  import {
    LuBarChart2,
    LuBookmark,
    LuBox,
    LuCpu,
    LuFile,
    LuGift,
    LuGrid,
    LuHotel,
    LuInfo,
    LuLayoutGrid,
    LuListOrdered,
    LuLock,
    LuMap,
    LuSettings2,
    LuSoup,
    LuUserCog,
    LuUsers,
    LuWallet,
  } from "react-icons/lu";

export const orderHistoryData = [
    {
      date: "12/03/2022",
      id: "#c0e4f7",
      amount: 359.69,
      status: "refunded",
      dish_id: 1001,
    },
    {
      date: "04/25/2023",
      id: "#12939f",
      amount: 350.3,
      status: "paid",
      dish_id: 1002,
    },
    {
      date: "06/20/2023",
      id: "#9f36ca",
      amount: 67.99,
      status: "cancelled",
      dish_id: 1003,
    },
    {
      date: "03/02/2023",
      id: "#a657a0",
      amount: 21.49,
      status: "paid",
      dish_id: 1005,
    },
    {
      date: "05/05/2023",
      id: "#8cd211",
      amount: 463.61,
      status: "refunded",
      dish_id: 1004,
    },
    {
      date: "06/07/2023",
      id: "#5191a8",
      amount: 333.31,
      status: "refunded",
      dish_id: 1006,
    },
    {
      date: "08/23/2023",
      id: "#6af783",
      amount: 391.0,
      status: "paid",
      dish_id: 1007,
    },
    {
      date: "05/02/2023",
      id: "#a6c5aa",
      amount: 150.63,
      status: "paid",
      dish_id: 1008,
    },
    {
      date: "05/22/2023",
      id: "#b07041",
      amount: 24.81,
      status: "cancelled",
      dish_id: 1009,
    },
    {
      date: "04/13/2023",
      id: "#94516a",
      amount: 72.21,
      status: "paid",
      dish_id: 1010,
    },
  ];

  export const categoriesData = [
    {
      id: 1,
      name: "Coffee",
      image: cupIconCategoryImg,
    },
    {
      id: 2,
      name: "Burger",
      image: burger1IconCategoryImg,
    },
    {
      id: 3,
      name: "Noodles",
      image: noodlesIconCategoryImg,
    },
    {
      id: 4,
      name: "Pizza",
      image: pizzaIconCategoryImg,
    },
    {
      id: 5,
      name: "Wrap",
      image: tacoIconCategoryImg,
    },
    {
      id: 6,
      name: "Appetizers",
      image: skewerIconCategoryImg,
    },
    {
      id: 7,
      name: "Dessert",
      image: dessertIconCategoryImg,
    },
  ];

  export const dishesData = [
    {
      id: 1001,
      category_id: 4,
      restaurant_id: 901,
      name: "Italian Pizza",
      images: [pizzaImg],
      price: 79,
      type: "non-veg",
      tags: ["Pizza", "Hot & Spicy", "Meal", "Bread"],
      quantity: 16,
      review: {
        count: 231,
        stars: 4.5,
      },
      sale: {
        discount: 50,
        type: "percent",
      },
      is_popular: true,
    },
    {
      id: 1002,
      category_id: 2,
      restaurant_id: 902,
      name: "Veg Burger",
      price: 488,
      images: [burgerImg],
      type: "veg",
      tags: ["Burger", "Meal", "Bread"],
      quantity: 20,
      review: {
        count: 523,
        stars: 5,
      },
      sale: {
        discount: 5,
        type: "amount",
      },
      is_popular: true,
    },
    {
      id: 1003,
      category_id: 3,
      restaurant_id: 903,
      name: "Spaghetti",
      price: 23,
      images: [noodlesImg],
      type: "veg",
      tags: ["Noodles", "Hot & Spicy", "Meal"],
      quantity: 10,
      review: {
        count: 6667,
        stars: 4.5,
      },
      is_popular: true,
    },
    {
      id: 1004,
      category_id: 7,
      restaurant_id: 904,
      name: "Red Velvet Cake",
      price: 350,
      images: [redVelvetPastryImg],
      type: "veg",
      tags: ["Sweeties", "Finishers", "Dessert"],
      quantity: 230,
      review: {
        count: 6667,
        stars: 4.5,
      },
      sale: {
        discount: 12,
        type: "amount",
      },
      is_popular: true,
    },
    {
      id: 1005,
      category_id: 6,
      restaurant_id: 905,
      name: "Mix Salad",
      price: 645.2,
      images: [spaghettiImg],
      type: "non-veg",
      tags: ["Meal", "Hot & Spicy"],
      quantity: 0,
      review: {
        count: 4325,
        stars: 5,
      },
    },
    {
      id: 1006,
      category_id: 1,
      restaurant_id: 906,
      name: "Espresso Coffee",
      price: 419.45,
      images: [hotChocolateImg],
      type: "veg",
      tags: ["Beverages", "Coffee"],
      quantity: 23,
      review: {
        count: 1055,
        stars: 5,
      },
    },
    {
      id: 1007,
      category_id: 6,
      restaurant_id: 907,
      name: "Steamed Dumplings",
      price: 58.5,
      images: [steamedDumplingImg],
      type: "veg",
      tags: ["Meal"],
      quantity: 34,
      review: {
        count: 1221,
        stars: 3,
      },
    },
    {
      id: 1008,
      category_id: 6,
      restaurant_id: 908,
      name: "Gujarati Thali",
      price: 58.5,
      images: [vegRiceImg],
      type: "veg",
      tags: ["Meal"],
      quantity: 34,
      review: {
        count: 1221,
        stars: 4.5,
      },
      sale: {
        discount: 40,
        type: "percent",
      },
    },
    {
      id: 1009,
      category_id: 6,
      restaurant_id: 901,
      name: "Chickenpea Hummus",
      price: 58.5,
      images: [chickpeaHummusImg],
      type: "eggetarian",
      tags: ["Meal"],
      quantity: 34,
      review: {
        count: 1221,
        stars: 3.5,
      },
    },
    {
      id: 1010,
      category_id: 7,
      restaurant_id: 902,
      name: "Butter Cookies",
      price: 665,
      images: [butterCookiesImg],
      type: "veg",
      tags: ["Sweeties", "Finishers", "Dessert"],
      quantity: 209,
      review: {
        count: 223,
        stars: 5,
      },
    },
  ].map((dish) => {
    return {
      ...dish,
      category: categoriesData[dish.category_id - 1],
    };
  });

  export const ADMIN_VERTICAL_MENU_ITEMS = [
    {
      key: "dashboard-page",
      label: "Dashboard",
      icon: LuLayoutGrid,
      url: "/admin/dashboard",
      isTitle: true,
    },
    {
      key: "manage-page",
      label: "Manage",
      icon: LuSettings2,
      url: "/admin/manage",
      isTitle: true,
    },
    {
      key: "orders",
      label: "Orders",
      icon: LuListOrdered,
      isTitle: true,
      children: [
        {
          key: "orders-list",
          label: "Orders List",
          url: "/admin/orders",
          parentKey: "orders",
        },
        {
          key: "orders-details",
          label: "Order Details",
          url: "/admin/orders/9f36ca",
          parentKey: "orders",
        },
      ],
    },
    {
      key: "customers",
      label: "Customers",
      icon: LuUsers,
      isTitle: true,
      children: [
        {
          key: "customers-list",
          label: "Customers List",
          url: "/admin/customers",
          parentKey: "customers",
        },
        {
          key: "customers-details",
          label: "Customer Details",
          url: "/admin/customers/701",
          parentKey: "customers",
        },
        {
          key: "customers-add",
          label: "Add Customer",
          url: "/admin/add-customer",
          parentKey: "customers",
        },
        {
          key: "customers-edit",
          label: "Edit Customer",
          url: "/admin/edit-customer",
          parentKey: "customers",
        },
      ],
    },
    {
      key: "restaurants",
      label: "Restaurants",
      icon: LuHotel,
      isTitle: true,
      children: [
        {
          key: "restaurants-list",
          label: "Restaurants List",
          url: "/admin/restaurants",
          parentKey: "restaurants",
        },
        {
          key: "restaurants-details",
          label: "Restaurant Details",
          url: "/admin/restaurants/901",
          parentKey: "restaurants",
        },
        {
          key: "restaurants-add",
          label: "Add Restaurant",
          url: "/admin/add-restaurant",
          parentKey: "restaurants",
        },
        {
          key: "restaurants-edit",
          label: "Edit Restaurant",
          url: "/admin/edit-restaurant",
          parentKey: "restaurants",
        },
      ],
    },
    {
      key: "dishes",
      label: "Dishes",
      icon: LuSoup,
      isTitle: true,
      children: [
        {
          key: "dishes-list",
          label: "Dishes List",
          url: "/admin/dishes",
          parentKey: "dishes",
        },
        {
          key: "dishes-details",
          label: "Dish Details",
          url: "/admin/dishes/1008",
          parentKey: "dishes",
        },
        {
          key: "dishes-add",
          label: "Add Dish",
          url: "/admin/add-dish",
          parentKey: "dishes",
        },
        {
          key: "dishes-edit",
          label: "Edit Dish",
          url: "/admin/edit-dish",
          parentKey: "dishes",
        },
      ],
    },
    {
      key: "sellers",
      label: "Sellers",
      icon: LuUserCog,
      isTitle: true,
      children: [
        {
          key: "sellers-list",
          label: "Sellers List",
          url: "/admin/sellers",
          parentKey: "sellers",
        },
        {
          key: "sellers-details",
          label: "Seller Details",
          url: "/admin/sellers/704",
          parentKey: "sellers",
        },
        {
          key: "sellers-add",
          label: "Add Seller",
          url: "/admin/add-seller",
          parentKey: "sellers",
        },
        {
          key: "sellers-edit",
          label: "Edit Seller",
          url: "/admin/edit-seller",
          parentKey: "sellers",
        },
      ],
    },
    {
      key: "wallet-page",
      label: "Wallet",
      icon: LuWallet,
      url: "/admin/wallet",
      isTitle: true,
    },
    {
      key: "extra-pages",
      label: "Extra Pages",
      icon: LuFile,
      isTitle: true,
      children: [
        {
          key: "extra-pages-starter",
          label: "Starter",
          url: "/admin/extra-pages/starter",
          parentKey: "extra-pages",
        },
        {
          key: "extra-pages-timeline",
          label: "Timeline",
          url: "/admin/extra-pages/timeline",
          parentKey: "extra-pages",
        },
        {
          key: "extra-pages-invoice",
          label: "Invoice",
          url: "/admin/extra-pages/invoice",
          parentKey: "extra-pages",
        },
        {
          key: "extra-pages-gallery",
          label: "Gallery",
          url: "/admin/extra-pages/gallery",
          parentKey: "extra-pages",
        },
        {
          key: "extra-pages-pricing",
          label: "Pricing",
          url: "/admin/extra-pages/pricing",
          parentKey: "extra-pages",
        },
      ],
    },
    {
      key: "auth-pages",
      label: "Authentication",
      icon: LuLock,
      isTitle: true,
      children: [
        {
          key: "auth-pages-login",
          label: "Login",
          url: "/auth/login",
          parentKey: "auth-pages",
        },
        {
          key: "auth-pages-register",
          label: "Register",
          url: "/auth/register",
          parentKey: "auth-pages",
        },
        {
          key: "auth-pages-forgot-password",
          label: "Forgot Password",
          url: "/auth/forgot-password",
          parentKey: "auth-pages",
        },
        {
          key: "auth-pages-reset-password",
          label: "Reset Password",
          url: "/auth/reset-password",
          parentKey: "auth-pages",
        },
        {
          key: "auth-pages-logout",
          label: "Logout",
          url: "/auth/logout",
          parentKey: "auth-pages",
        },
      ],
    },
    {
      key: "error-pages",
      label: "Error Pages",
      icon: LuInfo,
      isTitle: true,
      children: [
        {
          key: "error-pages-not-found",
          label: "Error 404",
          url: "/not-found",
          parentKey: "error-pages",
        },
        {
          key: "error-pages-not-found-alt",
          label: "Error 404 Alt",
          url: "/admin/extra-pages/not-found-alt",
          parentKey: "error-pages",
        },
      ],
    },
    {
      key: "ui-elements",
      label: "UI Elements",
      icon: LuBox,
      url: "/admin/ui-elements",
      isTitle: true,
    },
    {
      key: "widget",
      label: "Widget",
      icon: LuGift,
      url: "/admin/widgets",
      isTitle: true,
    },
    {
      key: "icons",
      label: "Icons",
      icon: LuCpu,
      isTitle: true,
      children: [
        {
          key: "icons-feather",
          label: "Feather",
          url: "/admin/icons/feather",
          parentKey: "icons",
        },
        {
          key: "icons-lucide",
          label: "Lucide",
          url: "/admin/icons/lucide",
          parentKey: "icons",
        },
      ],
    },
    {
      key: "forms",
      label: "Forms",
      icon: LuBookmark,
      isTitle: true,
      children: [
        {
          key: "forms-basic-element",
          label: "Basic Elements",
          url: "/admin/forms/basic-elements",
          parentKey: "forms",
        },
        {
          key: "forms-advanced",
          label: "Advanced",
          url: "/admin/forms/advanced",
          parentKey: "forms",
        },
        {
          key: "forms-editor",
          label: "Editor",
          url: "/admin/forms/editor",
          parentKey: "forms",
        },
        {
          key: "forms-file-uploads",
          label: "File Uploads",
          url: "/admin/forms/file-uploads",
          parentKey: "forms",
        },
        {
          key: "forms-validation",
          label: "Validation",
          url: "/admin/forms/validation",
          parentKey: "forms",
        },
      ],
    },
    {
      key: "apex-charts",
      label: "Apex Charts",
      isTitle: false,
      icon: LuBarChart2,
      children: [
        {
          key: "area-apex",
          label: "Area",
          url: "/admin/charts/area",
          parentKey: "apex-charts",
        },
        {
          key: "bar-apex",
          label: "Bar",
          url: "/admin/charts/bar",
          parentKey: "apex-charts",
        },
        {
          key: "bubble-apex",
          label: "Bubble",
          url: "/admin/charts/bubble",
          parentKey: "apex-charts",
        },
        {
          key: "candlestick-apex",
          label: "Candlestick",
          url: "/admin/charts/candle-stick",
          parentKey: "apex-charts",
        },
        {
          key: "column-apex",
          label: "Column",
          url: "/admin/charts/column",
          parentKey: "apex-charts",
        },
        {
          key: "heatmap-apex",
          label: "Heatmap",
          url: "/admin/charts/heat",
          parentKey: "apex-charts",
        },
        {
          key: "line-apex",
          label: "Line",
          url: "/admin/charts/line",
          parentKey: "apex-charts",
        },
        {
          key: "mixed-apex",
          label: "Mixed",
          url: "/admin/charts/mixed",
          parentKey: "apex-charts",
        },
        {
          key: "timeline-apex",
          label: "Timeline",
          url: "/admin/charts/timeline",
          parentKey: "apex-charts",
        },
        {
          key: "boxplot-apex",
          label: "Boxplot",
          url: "/admin/charts/box-plot",
          parentKey: "apex-charts",
        },
        {
          key: "treemap-apex",
          label: "Treemap",
          url: "/admin/charts/treemap",
          parentKey: "apex-charts",
        },
        {
          key: "pie-apex",
          label: "Pie",
          url: "/admin/charts/pie",
          parentKey: "apex-charts",
        },
        {
          key: "radar-apex",
          label: "Radar",
          url: "/admin/charts/radar",
          parentKey: "apex-charts",
        },
        {
          key: "radialbar-apex",
          label: "RadialBar",
          url: "/admin/charts/radialbar",
          parentKey: "apex-charts",
        },
        {
          key: "scatter-apex",
          label: "Scatter",
          url: "/admin/charts/scatter",
          parentKey: "apex-charts",
        },
        {
          key: "polararea-apex",
          label: "Polar Area",
          url: "/admin/charts/polar-area",
          parentKey: "apex-charts",
        },
        {
          key: "sparklines-apex",
          label: "Sparklines",
          url: "/admin/charts/sparklines",
          parentKey: "apex-charts",
        },
      ],
    },
    {
      key: "tables",
      label: "Tables",
      isTitle: false,
      icon: LuGrid,
      children: [
        {
          key: "tables-basic",
          label: "Basic Tables",
          url: "/admin/tables/basic-tables",
          parentKey: "tables",
        },
        {
          key: "tables-data",
          label: "Data Tables",
          url: "/admin/tables/data-tables",
          parentKey: "tables",
        },
      ],
    },
    {
      key: "maps",
      label: "Maps",
      isTitle: false,
      icon: LuMap,
      children: [
        {
          key: "maps-vector-maps",
          label: "Vector maps",
          url: "/admin/maps/vector",
          parentKey: "maps",
        },
      ],
    },
  ];

  export const currentCurrency = "$";

  export const notificationsData = [
    {
      id: 1,
      name: "Datacorp",
      avatar: avatar1Img,
      subText: "Caleb Flakelar commented on Admin",
      createdAt: subtractHours(new Date(), 1),
    },
    {
      id: 2,
      name: "Admin",
      avatar: avatar2Img,
      subText: "New user registered",
      createdAt: subtractHours(new Date(), 60),
    },
    {
      id: 3,
      name: "Cristina Pride",
      subText: "Hi, How are you? What about our next meeting",
      avatar: avatar3Img,
      createdAt: subtractHours(new Date(), 120),
    },
    {
      id: 4,
      name: "Datacorp",
      avatar: avatar4Img,
      subText: "Caleb Flakelar commented on Admin",
      createdAt: subtractHours(new Date(), 1440),
    },
    {
      id: 5,
      name: "Karen Robinson",
      subText: "Wow ! this admin looks good and awesome design",
      avatar: avatar5Img,
      createdAt: subtractHours(new Date(), 1820),
    },
  ];