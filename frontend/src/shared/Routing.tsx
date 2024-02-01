
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import Layout from '../components/Layout'
import { Tasks } from '../pages/tasks'
import { Project } from '../pages/project'
import { Workspace } from '../pages/workspace'

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
                    {/* <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/course' element={<Course />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/login' element={<Login />} /> */}
                </Routes>
            </Layout>
        </BrowserRouter>
       
      
    </div>
  )
}
