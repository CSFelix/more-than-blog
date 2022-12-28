import CONFIG from 'morethan-log.config'
import React from 'react'
import { AiOutlineBarChart, AiOutlineDeploymentUnit } from 'react-icons/ai'

const Product: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">🌟 Service</div>
      <ul className="rounded-2xl mb-9 bg-white dark:bg-zinc-700 p-1 flex flex-col">
        <a
          href={`${CONFIG.projects[0].href}`}
          rel="noreferrer"
          target="_blank"
          className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
        >
          <AiOutlineBarChart className="text-2xl" />
          <div className="text-sm">{CONFIG.projects[0].name}</div>
        </a>
        <a
          href={`${CONFIG.projects[1].href}`}
          rel="noreferrer"
          target="_blank"
          className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
        >
          <AiOutlineDeploymentUnit className="text-2xl" />
          <div className="text-sm">{CONFIG.projects[1].name}</div>
        </a>
      </ul>
    </>
  )
}

export default Product
