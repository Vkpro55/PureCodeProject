import SimpleBar from "simplebar-react";

export const SimplebarReactClient = ({ children, ...options }) => {
  return <SimpleBar {...options}>{children}</SimpleBar>;
};
