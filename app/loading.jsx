import './styles/style.css';
import { Load } from './components/components'

const loading = () => {
    return (
        <div className="flex min-h-[82vh] w-[94%] flex-col items-center justify-center mt-16 bg-[#f1f1f1] text-black shadow-xl">
            <Load />
        </div>
    )
}

export default loading