import { CustomImageProps } from "@/types/props.types"
import Image from "next/image"

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      quality={100}
      sizes="100vw"
      style={{
        position: "relative",
        width: `${width}px`,
        height: height ? `${height}px` : "auto",
      }}
    />
  )
}

export default CustomImage
