import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import  Home  from './pages/Home'
import  Login  from './pages/Login'
import Cadastro from './pages/Cadastro'
import Categorias from './pages/Categorias'
import Painel from './pages/Dashboard'
import Tv from './pages/Produtos/Tv'

function Router() {
return (
    <BrowserRouter>
    <Routes>
        <Route />

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/categorias' element={<Categorias/>} />
        <Route path='/painel' element={<Painel />} />
        <Route path='/tv' element={<Tv />} />
    </Routes>
    </BrowserRouter>
)

}

export default Router