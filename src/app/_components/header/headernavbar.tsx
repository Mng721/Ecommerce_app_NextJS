"use client"
import { useEffect, useState } from 'react'
import { Input } from "~/components/ui/input"
import { Card, CardContent } from "~/components/ui/card"
import { ShoppingCart, Heart, User, Search, Menu } from 'lucide-react'
import Link from 'next/link'
import { useDebounce } from "use-debounce";
import { Button } from '~/components/ui/button'
import { searchProduct } from '~/app/_service/product'
import { Product } from '~/app/_interfaces/product'
import SearchDropDownContent from './searchdropdowncontent'

export default function HeaderNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchParam, setSearchParam] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedValue] = useDebounce(searchParam, 500);
  const [listSearchProduct, setListSearchProduct] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const element = document?.getElementById("scrollableDiv");
  const [searchDropbarOpen, setSearchDropbarOpen] = useState(false);

  const fetchMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };


  //call khi có search value
  const handleSearch = async (searchValue: string, page: number) => {
    try {
      let res = await searchProduct(searchValue, page);
      if (res.status === 200) {
        if (page === 1) {
          setListSearchProduct(res.data);
        } else {
          setListSearchProduct([...listSearchProduct, ...res.data]);
        }
      }

      if (res.data.length < 10) {
        setHasMore(false);
        return;
      } else {
        setHasMore(true);
        return;
      }
    } catch (e) {
      setListSearchProduct([]);
    }
  };


  //call khi focus vào input
  const setFocus = () => {
    setSearchDropbarOpen(true);
    setCurrentPage(1);
    setHasMore(true);
  };

  useEffect(() => {
    handleSearch(debouncedValue, currentPage);
  }, [currentPage, debouncedValue]);

  return (
    <div className="h-auto bg-background">
      <header className="border-b">
        <div className="lg:container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <nav className="hidden md:flex space-x-4 md:grow md:justify-around md:px-1 xl:px-32">
            <Link href="/" className="text-foreground hover:text-primary hidden xl:block">Home</Link>
            <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
            <Link href="/about" className="text-foreground hover:text-primary">About</Link>
            <Link href="/login" className="text-foreground hover:text-primary">Log in</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Input type="search" placeholder="What are you looking for?" className="pl-8 pr-4"
                value={searchParam}
                onChange={(event) => {
                  setCurrentPage(1);
                  if (element?.scrollTop) element.scrollTop = 0;

                  setSearchParam(event.target.value);
                }}
                onSubmit={() => {
                  console.log(searchParam);
                }}
                onFocus={setFocus}
                onBlur={() => {
                  setSearchDropbarOpen(false);
                  if (element?.scrollTop) element.scrollTop = 0;

                }} />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />

              {searchDropbarOpen &&
                <div className={'absolute border-r-[1px] border-l-[1px] border-b-[1px] overflow-scroll rounded-b-md no-scrollbar max-h-[40vh] top-12 bg-white w-full border-solid border-black z-20 flex flex-col gap-1'}>
                  <SearchDropDownContent
                    listSearchProduct={listSearchProduct}
                    hasMore={hasMore}
                    fetchMoreItem={fetchMoreItem}
                  /></div>}
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
              <Input type="search" placeholder="What are you looking for?" className="w-full" value={searchParam}
                onChange={(event) => {
                  setCurrentPage(1);
                  if (element?.scrollTop) element.scrollTop = 0;

                  setSearchParam(event.target.value);
                }}
                onSubmit={() => {
                  console.log(searchParam);
                }}
                onFocus={setFocus}
                onBlur={() => {
                  setSearchDropbarOpen(false);
                  if (element?.scrollTop) element.scrollTop = 0;

                }} />

              {searchDropbarOpen && isMobileMenuOpen &&
                <SearchDropDownContent
                  listSearchProduct={listSearchProduct}
                  hasMore={hasMore}
                  fetchMoreItem={fetchMoreItem}
                />}
            </div>
          </div>
        )}
      </header>
    </div>
  )
}