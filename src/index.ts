import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

function getUserData():unknown {

  interface user{
    userName:string
    avatarUrl:string
  }

  localStorage.user = JSON.stringify({ userName: "Wade Warren", avatarUrl: "/img/avatar.png"})
  let user:user = JSON.parse(localStorage.user)

  return console.log(user.userName, user.avatarUrl)
}
getUserData()

function getFavoritesAmount():unknown{

  interface favoritesAmount {
    favoriteItemsAmount:number
  }
  
  localStorage.favoritesAmount = JSON.stringify({ favoriteItemsAmount:0})
  let favoritesAmount: favoritesAmount = JSON.parse(localStorage.favoritesAmount)

  return console.log(favoritesAmount.favoriteItemsAmount)
}
getFavoritesAmount()

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock("Wade Warren", "/img/avatar.png", 0)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
