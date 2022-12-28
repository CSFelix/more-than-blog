import CONFIG from 'morethan-log.config'
import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../libs/loader'

const Profile: React.FC = () => {
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">💻 Profile</div>
      <div className="w-full p-8 rounded-t-2xl bg-white dark:bg-zinc-700">
        <div className="relative w-full after:content-[''] after:block after:pb-[100%]">
          <Image
            className="block hover:hidden"
            src={CONFIG.profile.image}
            layout="fill"
            loader={imageLoader}
            alt=""
          />
        </div>
      </div>
      <div className="rounded-b-2xl bg-white p-2 mb-9 flex flex-col items-center dark:bg-zinc-700 dark:text-white">
        <div className=" text-xl mb-3 italic font-bold">
          {CONFIG.profile.name}
        </div>
        <div className="mb-6 text-sm ">{CONFIG.profile.description}</div>
      </div>
    </>
  )
}

export default Profile
