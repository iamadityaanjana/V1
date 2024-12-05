"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { Home, LayoutGrid, CreditCard, FileText, Twitter, Github, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  newTab?: boolean
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "#Home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Features",
    href: "#Features",
    icon: <LayoutGrid className="h-4 w-4" />,
  },
  {
    title: "Pricing",
    href: "#Pricing",
    icon: <CreditCard className="h-4 w-4" />,
  },
  {
    title: "Changelog",
    href: "#Changelog",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: <Twitter className="h-4 w-4" />,
    newTab: true
  },
  {
    title: "GitHub",
    href: "https://github.com/yourusername",
    icon: <Github className="h-4 w-4" />,
    newTab: true
  },
]

export function Navbar() {
  const [active, setActive] = React.useState("Home")
  const [isVisible, setIsVisible] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < lastScrollY) {
      // Scrolling up
      setIsVisible(true)
    } else if (latest > 100 && latest > lastScrollY) {
      // Scrolling down and past the threshold
      setIsVisible(false)
    }
    setLastScrollY(latest)
  })

  return (
    <motion.header 
      className="fixed top-7 left-0 right-0 z-50"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto w-fit mt-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:block rounded-full p-2 backdrop-blur-sm bg-orange-100/80 dark:bg-neutral-950/80 border border-orange-200/50 dark:border-neutral-800/50">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={() => setActive(item.title)}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100",
                    active === item.title && "text-neutral-900 dark:text-neutral-100"
                  )}
                  {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {active === item.title && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden px-4">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center gap-2 rounded-full p-2 text-sm font-medium backdrop-blur-sm bg-orange-100/80 dark:bg-neutral-950/80 border border-orange-200/50 dark:border-neutral-800/50 text-neutral-600 dark:text-neutral-400">
                <Menu className="h-4 w-4" />
                Menu
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full pt-16 bg-white dark:bg-gray-900">
              <nav>
                <ul className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        onClick={() => setActive(item.title)}
                        className={cn(
                          "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 transition-colors hover:bg-orange-100 dark:hover:bg-neutral-800",
                          active === item.title && "bg-orange-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                        )}
                        {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  )
}

