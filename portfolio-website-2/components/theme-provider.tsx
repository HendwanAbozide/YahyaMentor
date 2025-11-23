// ... existing code ...
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // <CHANGE> Forced default theme to light for linear mode
  return (
    <NextThemesProvider defaultTheme="light" enableSystem={false} {...props}>
      {children}
    </NextThemesProvider>
  )
}
