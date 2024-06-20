import toast from 'react-hot-toast'

export const getBooks = () => {
  let Books = []
  const storedBooks = localStorage.getItem('Books')
  if (storedBooks) {
    Books = JSON.parse(storedBooks)
  }
  return Books
}
export const saveBook = book => {
  let Books = getBooks()
  const isExist = Books.find(b => b.id === book.id)
  if (isExist) {
    return toast.error('This Book is Already Added to Read !')
  }
  Books.push(book)
  localStorage.setItem('Books', JSON.stringify(Books))
  toast.success('This Book Successfully Added to Read !')
}

export const getWish = () => {
  let Wishs = []
  const storedWish = localStorage.getItem('Wishs')
  if (storedWish) {
    Wishs = JSON.parse(storedWish)
  }
  return Wishs
}
export const saveWish = Wish => {
  let Wishs = getWish()
  let Books = getBooks()
  const a=Books.find(b => b.id === Wish.id)
  if (a) {
    return toast.error(`You cannot add such a book in wish list which is already in reading list!.....`)
  }
  const isExist = Wishs.find(b => b.id === Wish.id)
  if (isExist) {
    return toast.error('This Book is Already Added to Wish !')
  }
  Wishs.push(Wish)
  localStorage.setItem('Wishs', JSON.stringify(Wishs))
  toast.success('This Book Successfully Added to Wish !')

}

export const deleteBook = id => {
  let Books = getBooks()
  const remaining = Books.filter(b => b.id !== id)
  localStorage.setItem('Books', JSON.stringify(remaining))
  toast.success('Book Removed !')
}
export const deleteWish = id => {
  let Books = getWish()
  const remaining = Books.filter(b => b.id !== id)
  localStorage.setItem('Wishs', JSON.stringify(remaining))
  toast.success('Book Removed From Wish!')
}