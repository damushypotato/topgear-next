import Image from 'next/image';
import Navbar from './ui/navbar';
import { Roboto } from 'next/font/google';
import clsx from 'clsx';

// load the font for styling
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

// define the home page component
export default function Home() {
    return (
        <main className='main'>
            {/* render the navbar */}
            <Navbar />

            {/* render the home page content */}
            <div className='mt-24 px-60'>
                <div className='text-center'>
                    {/* render the title */}
                    <h1 className='text-5xl font-bold pb-6'>Welcome to ModGear!</h1>

                    {/* render the image */}
                    <div className='flex justify-center p-2'>
                        <Image
                            src='/MODGEAR.png'
                            alt='ModGear'
                            className='rounded-xl'
                            width={600}
                            height={300}
                        />
                    </div>

                    {/* render the description */}
                    <h2 className='text-4xl font-bold p-6'>
                        Want to mod your car? We got you covered.
                    </h2>
                    <div className={clsx(roboto.className, 'text-xl w-5/6 mx-auto')}>
                        <p className='py-2'>
                            ModGear is your one-stop shop for all your car modding needs. We have a
                            wide selection of parts, tuners, and paint options to make your car
                            stand out from the rest.
                        </p>
                        <p className='py-2'>
                            Explore our site to find what you need to make your car truly unique.
                            Whether you are looking for performance parts, a new paint job, or a
                            tuner to help you get the most out of your car, we have you covered.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
