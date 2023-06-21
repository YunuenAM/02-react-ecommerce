import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart: increment quantity
  const [count, setCount] = useState(0)

  // Product Detail: open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu: open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  // Product detail: show product

  const [productToShow, setProductToShow] = useState({})

  // Shopping cart Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping cart Order

  const [order, setOrder] = useState([])

  // Get product
  const [items, setItems] = useState(null)
  // Get product
  const [filteredItems, setFilteredItems] = useState(null)

  // Get product by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems
    }}
    >
      {children}
    </ShoppingCartContext.Provider>

  )
}
