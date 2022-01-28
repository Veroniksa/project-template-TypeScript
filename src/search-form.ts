import { renderBlock } from './lib.js'

const addZero = (dateNum: number): string => {
  const single: boolean = dateNum < 10

  return (single ? `0${dateNum}` : `${dateNum}`)
}
export interface SearchFormData {
  dateNow: string
  lastDay: Date
  dateTomorrow: string
  price?: number
}

const date: Date = new Date()
const now: string = addZero(date.getDate())
const mounth: string = addZero(date.getMonth() + 1)
const year: number = date.getFullYear()
const tomorrow: string = addZero(date.getDate() + 2)

const dateNow: string = `${year}-${mounth}-${now}`
const dateTomorrow: string = `${year}-${mounth}-${tomorrow}`
const lastDay: Date = new Date(date.getFullYear(), date.getMonth() + 2, 0);

function search(): unknown {
  return console.log(`${dateNow}, ${lastDay}, ${dateTomorrow}`) 
}

function searchForm(SearchForm: SearchFormData) {
  search()
  console.log(SearchForm)
}


export function renderSearchFormBlock(dateNow?: string, lastDay?:Date) {
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dateNow}" min="${dateNow}" max="${lastDay}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dateTomorrow}" min="${dateNow}" max="${lastDay}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div onClick="${searchForm({dateNow, lastDay, dateTomorrow})}"><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
