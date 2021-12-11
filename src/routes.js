import React from "react";

const PostList = React.lazy(() => import("./views/pages/postlist/PostList"));
const Brand = React.lazy(() => import("./views/brands"));
const Admin = React.lazy(() => import("./views/admin"));

const routes = [
  // { path: "/home/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/home/post", name: "ポストの管理", component: PostList },
  { path: "/home/brand", name: "ブランドの管理", component: Brand },
  { path: "/home/admin", name: "管理者の管理", component: Admin },
];

export default routes;
