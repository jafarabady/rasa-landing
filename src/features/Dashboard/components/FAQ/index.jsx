import { faqData } from '../../lib'
import React, { useState } from 'react'
import Accordion from '../../../../components/Accordion'
import faqBanner from '../../../../assets/images/faq/faq-banner.png'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const [activeTab, setActiveTab] = useState(0)

  const currentTabData = faqData.find((tab) => tab.id === activeTab)
  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }
  return (
    <>
      <h6 className="text-center text-4xl font-black">سوالات متداول</h6>
      <span className="text-center text-gray block">
        برای ایجاد پروژه جدید مراحل زیر را نیاز است طی کنید.
      </span>

      <div className="flex flex-col md:flex-row items-end justify-center pt-10 gap-10 px-4">
        <div className="hidden md:block w-full max-w-sm md:max-w-sm flex-shrink-0">
          <img src={faqBanner} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="flex flex-col gap-8">
          <div className="w-full flex justify-between items-center gap-4">
            {faqData.map((tab, index) => (
              <div
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setOpenIndex(0)
                }}
                className={`cursor-pointer rounded-md w-full h-10 transition-all duration-200 ${
                  activeTab === tab.id ? 'bg-primary' : 'bg-bgTabs'
                }`}
              />
            ))}
          </div>

          <div className="w-full max-w-xl space-y-4 text-right">
            {currentTabData?.questions.map((item, index) => (
              <React.Fragment key={item.id}>
                <Accordion item={item} index={index} openIndex={openIndex} toggle={toggle} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ
