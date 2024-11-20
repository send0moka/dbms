import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from "react"
import styles from "~/styles/global.css?url"
import Loader from "~/components/Loader"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "DBMS - Graphics Solution" },
    { viewport: "width=device-width,initial-scale=1" },
  ]
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const handleNavigation = () => {
      setShowLoader(true)
    }

    window.addEventListener("popstate", handleNavigation)
    return () => window.removeEventListener("popstate", handleNavigation)
  }, [])

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {showLoader && <Loader />}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  )
}
