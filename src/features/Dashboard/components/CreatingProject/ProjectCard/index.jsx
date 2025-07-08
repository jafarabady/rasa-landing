import './index.css'
import first from '../../../../../assets/images/first-step-project.svg'
function ProjectCard({ text, stepText, icon }) {
  return (
    <div className="-z-10 max-w-[660px] relative project-card rounded-xl py-6 px-6 flex justify-start items-center gap-6">
      <div className="absolute border-[1.5px] border-badgeBorder bg-bgBadge -top-[14%] right-[2%] py-1 px-2 rounded-full">
        {stepText || 'مرحله اول'}
      </div>
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
        <img src={icon || first} alt="icon-steps" className="w-6 h-6" />
      </div>
      <div className="w-[1px] h-[90px] bg-borderGray" />
      <div className="max-w-[520px] w-full text-projectCardTitle text-sm">{text}</div>
    </div>
  )
}

export default ProjectCard
