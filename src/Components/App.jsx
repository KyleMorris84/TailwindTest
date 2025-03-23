import '../App.css'
import Banner from './Banner'
import LogIn from './LogIn'

export default function App() {
    return (
        <div className="h-screen bg-gray-200">
            <Banner />
            <div id="content" className="px-2">
                <LogIn />
            </div>
        </div>
    )
}
