interface AchievementTab {
  amount: number
  label: string
  excerpt: string
}

const AchievementTab: React.FC<AchievementTab> = ({
  amount,
  label,
  excerpt,
}) => {
  return (
    <div className={"flex flex-col sm:flex-row h-fit items-center gap-3 py-5"}>
      <div className="flex flex-col items-center gap-1 min-w-[120px]">
        <p className="text-5xl font-bold">{amount}</p>
        <span className="text-sm font-semibold text-center capitalize text-black/70">
          {label}
        </span>
      </div>

      {/* Separator */}
      <div className="h-[50px] w-[1px] bg-black/40" />
      <p className="ml-3 text-base font-normal text-black/70">{excerpt}</p>
    </div>
  )
}

export default AchievementTab
