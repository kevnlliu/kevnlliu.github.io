import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("pages/HomePage/HomePage.tsx"),
  route("about", "pages/AboutMePage/AboutMePage.tsx"),
  route("resume", "pages/ResumePage/ResumePage.tsx"),
] satisfies RouteConfig;
