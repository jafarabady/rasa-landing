import service from '../../../assets/images/feature-config.svg'
import time from '../../../assets/images/feature-time.svg'
import cloud from '../../../assets/images/feature-cloud.svg'
import shield from '../../../assets/images/feature-shield.svg'
import request from '../../../assets/images/stats-request.svg'
import pods from '../../../assets/images/stats-pods.svg'
import updates from '../../../assets/images/stats-updates.svg'
import database from '../../../assets/images/database.svg'
import server from '../../../assets/images/server.svg'
import host from '../../../assets/images/host.svg'
import support from '../../../assets/images/support.svg'
import supportFramework from '../../../assets/images/gear.svg'
import readyDatabase from '../../../assets/images/ready-database.svg'

const features = [
  { text: 'سرویس‌های کانفیگ شده', icon: service },
  { text: 'استقرار در سریع‌ترین زمان', icon: time },
  { text: 'زیرساخت High Available', icon: cloud },
  { text: 'امنیت داخلی و خارجی', icon: shield },
]
const stats = [
  { text: 'درخواست های سرور', value: '3,455,545', icon: request },
  { text: 'پاد های ساخته شده', value: '400', icon: pods },
  { text: 'آپدیت سرویس ها', value: '3,000', icon: updates },
]
const services = [
  { text: 'دیتابیس های آماده مثل\n' + ' redis و pg و...', icon: database },
  { text: 'سرویس‌ها آماده مثل\n' + ' minio, nginx, rabbitmq', icon: server },
  { text: 'هاست رایگان\n' + 'فایل های استاتیک', icon: host },
  { text: 'پشتیبانی اپلیکیشن در\n' + 'صورت وجود داکر فایل', icon: support },
  { text: 'پشتیبانی زبان ها و فریم \n' + 'ورک های ناشناخته', icon: supportFramework },
  { text: 'دیتابیس های آماده مثل\n' + ' redis و pg و...', icon: readyDatabase },
]
const projectSteps = [
  {
    text:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفادهاز طراحان \n' +
      'گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و \n' +
      'برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی \n' +
      'می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و \n' +
      'متخصصان را می طلبد.',
    step: 'مرحله اول',
    icon: service,
  },
  {
    text:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفادهاز طراحان \n' +
      'گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و \n' +
      'برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی \n' +
      'می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و \n' +
      'متخصصان را می طلبد.',
    step: 'مرحله دوم',
    icon: service,
  },
  {
    text:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفادهاز طراحان \n' +
      'گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و \n' +
      'برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی \n' +
      'می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و \n' +
      'متخصصان را می طلبد.',
    step: 'مرحله سوم',
    icon: service,
  },
]
export { features, stats, services, projectSteps }
