import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import styles from "~/styles/global.css?url";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "DBMS - Graphics Solution" },
    { viewport: "width=device-width,initial-scale=1" },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}