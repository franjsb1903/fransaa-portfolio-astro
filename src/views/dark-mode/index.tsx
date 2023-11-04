import { useState, useEffect } from 'preact/hooks'
import SunIcon from '../../components/icons/sun'
import MoonIcon from '../../components/icons/moon'

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(
    window.localStorage?.getItem('theme') ?? 'light',
  )

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div
      className="bg-gray-200 dark:bg-gray-200/[.3] p-2 rounded-md w-[40px] h-[40px] cursor-pointer"
      onClick={handleClick}
    >
      {theme === 'light' ? (
        <SunIcon size={24} color="rgb(250 204 21)" />
      ) : (
        <MoonIcon size={24} color="currentColor" />
      )}
    </div>
  )
}
