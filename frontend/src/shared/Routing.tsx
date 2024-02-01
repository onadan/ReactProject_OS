
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import Layout from '../components/Layout'
import { Project } from '../pages/Project'
import { Tasks } from '../pages/Tasks'
import { Workspace } from '../pages/Workspace'
import { Tickets } from '../pages/Tickets'


export const Routing = () => {
  return (
    <div>
      
   <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tasks'element={<Tasks />} />
                    <Route path='/projects' element={<Project/>}/>
                    <Route path='/workspace' element={<Workspace />}/>
                    <Route path='/tickets' element={<Tickets/>}/>
                  
                   
                </Routes>
            </Layout>
        </BrowserRouter>

        
       
      
    </div>
  )
}
