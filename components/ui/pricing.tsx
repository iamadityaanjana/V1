"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Link } from "lucide-react"
interface PricingPlan {
  name: string
  price: number
  description: string
  features: string[]
  isPopular?: boolean
}

const plans: PricingPlan[] = [
  {
    name: "Free plan",
    price: 0,
    description: "Basic features for up to 10 users.",
    features: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user"
    ]
  },
  {
    name: "Basic plan",
    price: 5,
    description: "Basic features for up to 20 users.",
    features: [
      "Everything in Basic plus...",
      "20+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "40GB individual data each user"
    ],
    isPopular: true
  },
  {
    name: "Pro plan",
    price: 11,
    description: "Advanced features + unlimited users.",
    features: [
      "Everything in Business plus...",
      "Advanced custom fields",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data"
    ]
  }
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(false)

  return (
    <section  className="py-24 px-4 md:px-6 lg:px-8  ">
      <h1 className="text-2xl  px-4 py-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto ">Pricing</h1>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 p-1 mb-8 rounded-full border border-orange-200/50   dark:border-neutral-800/50 bg-white dark:bg-neutral-900">
            <motion.button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                !isAnnual ? "bg-orange-100 text-orange-900 dark:bg-orange-500/90 dark:text-white" 
                  : "text-neutral-600 dark:text-neutral-200 hover:bg-orange-50 dark:hover:bg-neutral-800"
              )}
              animate={{
                backgroundColor: !isAnnual 
                  ? "rgb(255,165,0)" 
                  : "transparent",
              }}
              transition={{ duration: 0.3 }}
            >
              Monthly billing
            </motion.button>
            <motion.button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors relative",
                isAnnual? "bg-orange-100 text-orange-900 dark:bg-orange-500/90 dark:text-white" 
                  : "text-neutral-600 dark:text-neutral-200 hover:bg-orange-50 dark:hover:bg-neutral-800"
              )}
              animate={{
                backgroundColor: isAnnual 
                  ? "rgb(255,165,0)" 
                  : "transparent",
              }}
              transition={{ duration: 0.3 }}
            >
              Annual billing
              <AnimatePresence>
                {isAnnual && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-bold text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/20 rounded-full"
                  >
                    Save 25%
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative bg-white dark:bg-neutral-900 border-orange-200/50 dark:border-neutral-800/50",
                plan.isPopular && "border-orange-500/50 dark:border-orange-500/50"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 text-xs font-medium text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                  Popular
                </div>
              )}
              <CardHeader>
                <h3 className="text-lg font-medium dark:text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-neutral-900 dark:text-white">
                  <motion.span
                    key={isAnnual ? 'annual' : 'monthly'}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl font-bold tracking-tight"
                  >
                    ${isAnnual ? (plan.price * 0.75 * 12).toFixed(0) : plan.price}
                  </motion.span>
                  <span className="ml-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {isAnnual ? "/year" : "/month"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="mt-6">
                <Button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100">
                  Get started
                </Button>
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white tracking-wide uppercase">
                    FEATURES
                  </h4>
                  <ul className="mt-4 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-5 w-5 text-green-500 dark:text-green-400" />
                        </div>
                        <p className="ml-3 text-sm text-neutral-600 dark:text-neutral-400">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

