import { 
    HeartIcon
} from '@heroicons/react/24/solid'

export default function Footer() {
    return(
        <div className="w-screen h-[5vh] bg-black flex justify-center items-center">
            <p className='flex flex-row gap-1 text-white text-sm'>
                Baked With 
                <HeartIcon className='size-4 text-red-700 mt-1' /> 
                By 
                <a href="https://github.com/bhupenderlost" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                    Bhupender Singh
                </a>
            </p>
        </div>
    )
}