import {useCallback, useState} from 'react'
import {FileWithPath, useDropzone} from 'react-dropzone'
import { Button } from './ui/button'
import Image from 'next/image'

type FileUploaderType = {
    fieldChange: (FIELS: File[]) => void,
    mediaUrl: string
}

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderType) => {
    const [file, setfile] = useState<File[]>([])
    const [fileUrl, setfileUrl] = useState(mediaUrl)

    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        setfile(acceptedFiles)
        fieldChange(acceptedFiles)
        setfileUrl(URL.createObjectURL(acceptedFiles[0]))
    }, [file])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.svg', '.jpeg', '.jpg']
        }
    })

  return (
    <div {...getRootProps()} className='flex justify-center items-center flex-col rounded-xl cursor-pointer border'>
      <input {...getInputProps()} className='cursor-pointer' />
      {
        fileUrl ?
          (
            <>
            <div className='flex items-center justify-center w-full p-5 lg:p-10'>
                <Image src={''} alt="image" className='h-80 lg:h-[480px] w-full rounded-[24px] object-cover object-top' />
            </div>
            <p className='text-light-4 text-center small-regular w-full p-4 border-t border-t-dark-4'>Click or drag photo to replace</p>
            </>
          ) : (
            <div className='flex justify-center items-center flex-col p-7 h-80 lg:h-[612px]'>
                <Image src="/file-upload.svg" alt="file-upload" width={96} height={77} />

                <h3>Drag your photo here</h3>
                <p className='text-light-4 small-regular mb-6'>SVG, PNG, JPG</p>

                <Button variant={'outline'}>
                    Select from computer
                </Button>
            </div>
          )
      }
    </div>
  )
}

export default FileUploader