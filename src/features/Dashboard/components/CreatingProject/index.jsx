import React from 'react'
import banner from '../../../../assets/images/project-banner.svg'
import ProjectCard from './ProjectCard'
import Container from '../../../../components/Container'
import { projectSteps } from '../../lib'

function CreatingProject() {
  return (
    <>
      <Container className="flex flex-col gap-4">
        <h6 className="text-center text-4xl font-black">مراحـل ایجـاد پـروژه </h6>
        <span className="text-center text-gray block">
          برای ایجاد پروژه جدید مراحل زیر را نیاز است طی کنید.
        </span>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-16">
            {projectSteps.map((item) => (
              <React.Fragment key={item.step}>
                <ProjectCard stepText={item.step} text={item.text} />
              </React.Fragment>
            ))}
          </div>
          <div className="relative z-10">
            <img draggable="false" className="z-10" src={banner} alt={'banner-project'} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default CreatingProject
