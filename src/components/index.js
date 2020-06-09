//? In order to import all components like import {Cards,Chart,CountryPicker} from './components'
//? We need to export them from ./components/index.js, which will be looked up first on import.

export { default as Cards } from './Cards/Cards'
export { default as Chart } from './Chart/Chart'
export { default as CountryPicker } from './CountryPicker/CountryPicker'