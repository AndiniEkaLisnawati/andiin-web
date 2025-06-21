import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const userTheme = localStorage.theme
    const activeDark = userTheme === "dark" || (!userTheme && systemPrefersDark)
    setIsDark(activeDark)

    html.classList.toggle("dark", activeDark)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const newTheme = isDark ? "light" : "dark"

    localStorage.theme = newTheme
    html.classList.toggle("dark", newTheme === "dark")
    setIsDark(newTheme === "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded transition"
      aria-label="Toggle dark mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "light" : "dark"}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <MdOutlineLightMode className="text-pink-600 cursor-pointer" /> : <MdOutlineDarkMode className="text-pink-600 cursor-pointer" />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
