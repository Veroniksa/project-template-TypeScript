import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getTodosByCount } from "./api.js"
import { cloneDate, addDays} from "flat-rent-sdk"

console.log(cloneDate, addDays)

getTodosByCount(1)

function getUserData(): unknown {

  interface user {
    userName: string
    avatarUrl: string
  }

  localStorage.user = JSON.stringify({ userName: "Wade Warren", avatarUrl: "/img/avatar.png" })
  let user: user = JSON.parse(localStorage.user)

  return console.log(user.userName, user.avatarUrl)
}
getUserData()

function getFavoritesAmount(): unknown {

  interface favoritesAmount {
    favoriteItemsAmount: number
  }

  localStorage.favoritesAmount = JSON.stringify({ favoriteItemsAmount: 6 })
  let favoritesAmount: favoritesAmount = JSON.parse(localStorage.favoritesAmount)

  return console.log(favoritesAmount.favoriteItemsAmount)
}
getFavoritesAmount()

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(localStorage.userName, localStorage.avatarUrl, localStorage.favoriteItemsAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
