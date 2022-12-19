import Image, { ImageLoaderProps } from 'next/image'

const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src
}

const cloudflareLoader = (args: ImageLoaderProps) => {
  const params = [`width=${args.width}`]
  if (args.quality) {
    params.push(`quality=${args.quality}`)
  }
  const paramsString = params.join(',')
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(args.src)}`
}

const ImageLoader = (src: string, alt: string) => {
  return (
    <Image
      loader={cloudflareLoader}
      src={src}
      alt={alt}
      width={500}
      height={500}
    />
  )
}

export default ImageLoader
