import React from "react";

const PostList = React.lazy(() => import("./views/pages/postlist/PostList"));
const Brand = React.lazy(() => import("./views/brands"));
const Admin = React.lazy(() => import("./views/admin"));

const routes = [
  // { path: "/home/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/home/post", name: "Post", component: PostList },
  { path: "/home/brand", name: "Brand", component: Brand },
  { path: "/home/admin", name: "Admin", component: Admin },
];

export default routes;
