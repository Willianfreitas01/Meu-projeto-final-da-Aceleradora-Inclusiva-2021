import {render, screen} from' @test-library/react'
import Header from './Header'


discribe('Header component', ()=> {
it('should render the correct header', ()=>{
render (<header/>)
const logoImage=await screen.findbyAltText ('logotipo minha listinha')
exporct (logoImage).toBeInTheDocument()
})
})