import {
  NotionRenderer,
  Equation,
  Code,
  Collection,
  CollectionRow,
} from 'react-notion-x'
import CONFIG from 'morethan-log.config'
import formatDate from '@libs/formatDate'
import { useRouter } from 'next/router'
import Comments from '@/src/containers/Post/Comments'
import Tag from '../../components/Tag'

const mapPageUrl = (id: any) => {
  return 'https://www.notion.so/' + id.replace(/-/g, '')
}

type Props = {
  children?: any
  blockMap: any
  data: any
}

const Post: React.FC<Props> = ({ children, blockMap, data }) => {
  const router = useRouter()
  return (
    <div
      className={`m-auto max-w-4xl bg-white dark:bg-zinc-700 rounded-3xl py-12 px-6 shadow-md`}
    >
      <article className="m-auto max-w-2xl">
        <h1 className="font-bold text-3xl text-black dark:text-white">
          {data.title}
        </h1>
        {data.type[0] !== 'Page' && (
          <nav className="flex mt-7 items-start text-gray-500 dark:text-gray-400">
            <div className="mr-2 mb-4 md:ml-0">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
            {data.tags && (
              <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags gap-2">
                {data.tags.map((tag: any) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </nav>
        )}
        {children}
        {blockMap && (
          <div className="-mt-4">
            <NotionRenderer
              recordMap={blockMap}
              components={{
                equation: Equation,
                code: Code,
                collection: Collection,
                collectionRow: CollectionRow,
              }}
              mapPageUrl={mapPageUrl}
            />
          </div>
        )}
        {data.type[0] !== 'Page' && (
          <>
            <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
              <a>
                <button
                  onClick={() => router.push('/')}
                  className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
                >
                  ← Back
                </button>
              </a>
              <a>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
                >
                  ↑ Top
                </button>
              </a>
            </div>
            <Comments data={data} />
          </>
        )}
      </article>
    </div>
  )
}

export default Post
