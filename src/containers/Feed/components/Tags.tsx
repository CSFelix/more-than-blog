import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  data: any
}

const TagsMenu: React.FC<Props> = ({ data }) => {
  const router = useRouter()
  const currentTag = router.query.tag || 'All'

  const handleClickTag = (value: any) => {
    router.push({
      query: {
        ...router.query,
        tag: value,
      },
    })
  }

  return (
    <>
      <div className="p-1 mb-3 dark:text-white">🏷️ Tags</div>
      <ul className="cursor-pointer flex mobile-x-scroll md:block mb-6">
        {Object.keys(data).map((key) => (
          <li
            key={key}
            className={`text-sm  p-1 px-4 my-1 flex-shrink-0 rounded-xl text-gray-500  dark:text-white ${
              key === currentTag && 'bg-white text-black dark:bg-zinc-700 '
            }`}
            onClick={() => handleClickTag(key)}
          >
            <a>{key}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TagsMenu
