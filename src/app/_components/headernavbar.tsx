"use client"
import { useState } from 'react'
import { Input } from "~/components/ui/input"
import { Card, CardContent } from "~/components/ui/card"
import { ShoppingCart, Heart, User, Search, Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function HeaderNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  return (
    <div className="h-auto bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <nav className="hidden md:flex space-x-4 md:grow md:justify-around md:px-1 lg:px-32">
            <Link href="/" className="text-foreground hover:text-primary hidden xl:block">Home</Link>
            <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
            <Link href="/about" className="text-foreground hover:text-primary">About</Link>
            <Link href="/signup" className="text-foreground hover:text-primary">Sign Up</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Input type="search" placeholder="What are you looking for?" className="pl-8 pr-4" />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            </div>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <div className="relative">
              <Button variant="ghost" size="icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <User className="h-5 w-5" />
              </Button>
              {isDropdownOpen && (
                <Card className="absolute right-0 mt-2 w-72 z-10 bg-black bg-opacity-40 backdrop-blur-sm" >
                  <CardContent className="p-2">
                    <nav className="space-y-2">
                      <Link href="/account" className="block px-4 py-2 hover:bg-slate-700 rounded-md text-white text-l">Manage My Account</Link>
                      <Link href="/orders" className="block px-4 py-2 hover:bg-slate-700 rounded-md text-white text-l">My Order</Link>
                      <Link href="/cancellations" className="block px-4 py-2 hover:bg-slate-700 rounded-md text-white text-l">My Cancellations</Link>
                      <Link href="/reviews" className="block px-4 py-2 hover:bg-slate-700 rounded-md text-white text-l">My Reviews</Link>
                      <Link href="/logout" className="block px-4 py-2 hover:bg-slate-700 rounded-md text-white text-l">Logout</Link>
                    </nav>
                  </CardContent>
                </Card>
              )}
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav className="px-4 py-2 space-y-2">
              <Link href="/" className="block text-foreground hover:text-primary max-w-xl m-auto">Home</Link>
              <Link href="/contact" className="block text-foreground hover:text-primary max-w-xl m-auto">Contact</Link>
              <Link href="/about" className="block text-foreground hover:text-primary max-w-xl m-auto">About</Link>
              <Link href="/signup" className="block text-foreground hover:text-primary max-w-xl m-auto">Sign Up</Link>
            </nav>
            <div className="px-4 py-2">
              <Input type="search" placeholder="What are you looking for?" className="w-full" />
            </div>
          </div>
        )}
      </header>
    </div>
  )
}