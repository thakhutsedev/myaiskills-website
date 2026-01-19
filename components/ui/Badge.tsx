import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-sm",
        secondary:
          "bg-gray-200 text-gray-800",
        success:
          "bg-accent text-white",
        outline:
          "border border-primary text-primary bg-transparent",
        popular:
          "bg-gradient-to-r from-primary to-accent text-white shadow-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
