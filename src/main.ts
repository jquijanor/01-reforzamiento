import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
//import './bases/02-template-string'
//import './bases/03-object-literal'
//import './bases/05-function'
//import './bases/06-obj-destr'
//import './bases/07-array-destr'
//import './bases/071-Tarea01'
//import './bases/08-ImportExport'
import './bases/081-ImportExport'
import {getHeroByOwner} from './bases/081-ImportExport'
import {Owner} from './Data/Heroes.data'
//import './bases/09-promesas'
//import './bases/10-fetch-api'
import './bases/11-async-await'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div> 
<h1>Hola Mundo...<h1>
</div>
`
console.log(getHeroByOwner(Owner.DC))
