import React from 'react'


const Team = () => {
  
  const people = [
    {
      name: 'Sarvesh Kumar',
      role: 'Frontend Developer and Backend Devloper',
      imageUrl:
        'https://th.bing.com/th/id/OIP.y5eaUQRP8dcHIIJlwI9D9gAAAA?w=474&h=484&rs=1&pid=ImgDetMain',
    },
     {   name: 'Swastik sahu',
      role: 'Frontend Devloper',
      imageUrl:
        'https://th.bing.com/th/id/OIP.y5eaUQRP8dcHIIJlwI9D9gAAAA?w=474&h=484&rs=1&pid=ImgDetMain',
  },

      { name: 'Archana Yadav',
      role: 'Frontend Developer',
      imageUrl:
        'https://th.bing.com/th/id/OIP.y5eaUQRP8dcHIIJlwI9D9gAAAA?w=474&h=484&rs=1&pid=ImgDetMain',
    },
    // More people...
  ]
    
    
      return (
        <div className="bg-gray-300 py-24 sm:py-32 ">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                suspendisse.
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12  sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img className="h-48 w-48 rounded-full" src={person.imageUrl} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          
        </div>
      )
    }
  

export default Team