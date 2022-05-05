import React, { FC, ReactNode } from "react";

interface ILayoutNode {
  children?: ReactNode;
}

const Layout: FC<ILayoutNode> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
