import React from "react"

interface ServiceTabProps {
  icon: string
  title: string
  description: string
  tags: string[]
}

const ServiceTab: React.FC<ServiceTabProps> = ({
  icon,
  title,
  description,
  tags,
}) => {
  return (
    <div key={title} className="p-6 w-[400px] min-w-[400px] flex flex-col gap-9">
      <img src={icon} alt={title} width={45} height={"auto"} className="opacity-60" />

      <div className="flex flex-col gap-3">
        <p className="text-xl font-medium text-[#FF8C00]">{title}</p>
        <p className="text-sm font-normal text-[#4B4B4B]">{description}</p>
      </div>

      <div className="w-full flex flex-wrap gap-x-4 gap-y-2">
        {tags.map((tag, index) => (
          <p key={index} className="text-xs bg-[#3B6E8C]/40 p-1 text-[#4B4B4B]">
            {tag}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ServiceTab
