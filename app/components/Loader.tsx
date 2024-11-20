import { useState, useEffect } from "react"

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      const hideTimer = setTimeout(() => {
        setIsHidden(true)
      }, 400)
      return () => clearTimeout(hideTimer)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isHidden) return null

  return (
    <div
      className={`loader-overlay ${!isLoading ? "fade-out" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#101018",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <img
        src="/images/logo.png"
        alt="Loading..."
        className={`loader-logo ${!isLoading ? "fade-out" : ""}`}
        style={{
          width: "128px",
          height: "128px",
          objectFit: "contain",
          maxWidth: "128px",
          maxHeight: "128px",
        }}
      />
    </div>
  )
}

export default Loader
