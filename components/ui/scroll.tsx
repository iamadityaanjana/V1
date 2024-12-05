"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 left-0 right-0 mx-auto w-fit z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                Scroll Down
              </span>
              <ChevronDown className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

