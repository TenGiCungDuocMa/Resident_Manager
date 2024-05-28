import React, { useRef, useState } from 'react'
import { DeleteOutlined, EditOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import type { RcFile } from 'antd/es/upload/interface'
import { useHover } from 'usehooks-ts'
import { motion } from 'framer-motion'
import {
  UserOutlined
} from '@ant-design/icons'

type PropsType = {
  image: UploadFile | null
  setImage: React.Dispatch<React.SetStateAction<UploadFile | null>>
}

export type UploadFile = RcFile & { preview: string }

const backDropVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 }
}

const UploadImage = ({ image, setImage }: PropsType) => {
  const [loading, setLoading] = useState(false)
  const imageRef = useRef(null)
  const isHover = useHover(imageRef)

  return (
    <>
        <div
          ref={imageRef}
          className="relative flex h-[9rem] w-[9rem] flex-col items-center justify-center gap-2 rounded-full
          border-2 border-dotted border-borderDefault bg-bgDefault transition-all hover:border-primary"
        >
          <UserOutlined  style={{ fontSize: '60px', color: '#08c' }}/>
          {isHover && image && (
            <>
              <motion.div
                className="absolute top-0 flex h-full w-full items-center 
                  justify-center rounded-full bg-backDrop"
                variants={backDropVariants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ duration: 0.2, type: 'easeOut' }}
              ></motion.div>
              <DeleteOutlined
                className="absolute z-20 text-xl text-danger transition-all hover:scale-125"
                onClick={() => setImage(null)}
              />
            </>
          )}
        </div>
    </>
  )
}

export default UploadImage
