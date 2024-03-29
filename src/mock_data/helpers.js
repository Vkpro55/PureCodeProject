import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ADMIN_VERTICAL_MENU_ITEMS } from "./constants";

export const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
  };

  export function subtractHours(date, minutes) {
    date.setMinutes(date.getMinutes() - minutes);
    return date;
  }

  export const getAdminVerticalMenuItems = () => {
    // NOTE - You can fetch from server and return here as well
    return ADMIN_VERTICAL_MENU_ITEMS;
  };

  export const findAllParent = (menuItems, menuItem) => {
    let parents = [];
    const parent = findMenuItem(menuItems, menuItem.parentKey);
  
    if (parent) {
      parents.push(parent.key);
      if (parent.parentKey) {
        parents = [...parents, ...findAllParent(menuItems, parent)];
      }
    }
    return parents;
  };
  
  export const getMenuItemFromURL = (items, url) => {
    if (items instanceof Array) {
      for (const item of items) {
        const foundItem = getMenuItemFromURL(item, url);
        if (foundItem) return foundItem;
      }
    } else {
      if (items.url == url) return items;
      if (items.children != null) {
        for (const item of items.children) {
          if (item.url == url) return item;
        }
      }
    }
  };
  
  // flatten the list of all nested routes
  export const flattenRoutes = (routes) => {
    let flatRoutes = [];
  
    routes.forEach((item) => {
      flatRoutes.push(item);
      if (typeof item.children !== "undefined") {
        flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
      }
    });
    return flatRoutes;
  };
  
  export const findMenuItem = (menuItems, menuItemKey) => {
    if (menuItems && menuItemKey) {
      for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].key === menuItemKey) {
          return menuItems[i];
        }
        const found = findMenuItem(menuItems[i].children, menuItemKey);
        if (found) return found;
      }
    }
    return null;
  };
  