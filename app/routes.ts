import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/Home.jsx"),
  layout("layouts/WorldLayout.jsx", [
    route("past-adventures", "routes/Past-Adventures.jsx"),
    route("future-adventures", "routes/Future-Adventures.jsx"),
  ]),
] satisfies RouteConfig;
