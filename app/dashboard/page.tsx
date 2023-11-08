"use client"

import {useState} from 'react'
import Link from 'next/link'

function DashBoard() {
    const [activeTab, setActiveTab] = useState('Projects');
    const [linePosition, setLinePosition] = useState(57);
  
    const handleTabClick = (tab : string) => {
      setActiveTab(tab);
      const element = document.getElementById(tab);
      if (element) {
        setLinePosition(element.offsetLeft);
      }
    }

    return (
        <section className='divide-x-4 divide-y-4'>
            <section className="flex flex-col justify-center">
                <div className='flex justify-center'>
                    <h1 className="bg-gradient-to-r from-primaryv to-primaryp inline-block bg-clip-text text-[#00000000] text-4xl w-fit">
                        Dashboard
                    </h1>
                </div>
                <div className='flex justify-center align-middle items-center mt-12 mr-6'>
                    <ul className='flex flex-row justify-around align-middle items-center w-4/12 relative'>
                        <li className='flex justify-center p-2 ml-1'>
                            <a href="#" onClick={() => handleTabClick('Projects')} id="Projects">
                                Projects
                            </a>
                        </li>
                        <li className='flex justify-center p-2 ml-1'>
                            <a href="#" onClick={() => handleTabClick('People')} id="People">
                                People
                            </a>
                        </li>
                        <li className='flex justify-center p-2'>
                            <a href="#" onClick={() => handleTabClick('All')} id="All">
                                All
                            </a>
                        </li>
                        <div
                            className={`absolute bottom-0 left-0 h-1 bg-primaryv rounded-xl transition-transform transform translate-x-0`}
                            style={{ width: `${activeTab === 'Projects' ? '14%' : activeTab === 'People' ? '12%' : '6%'}`, transform: `translateX(${linePosition - 2.5}px)` }}
                        />
                    </ul>
                </div>
            </section>
        </section>
    );
}


export default DashBoard;
