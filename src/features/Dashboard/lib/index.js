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
import confluence from '../../../assets/images/technologies/confluence.png'
import Elasticsearch from '../../../assets/images/technologies/Elasticsearch.png'
import pfsense from '../../../assets/images/technologies/pfsense.png'
import opnsense from '../../../assets/images/technologies/opnsense.png'
import Grafana from '../../../assets/images/technologies/Grafana.png'
import Minio from '../../../assets/images/technologies/Minio.png'
import Ceph from '../../../assets/images/technologies/Ceph.png'
import Ansible from '../../../assets/images/technologies/Ansible.png'
import Zabbix from '../../../assets/images/technologies/Zabbix.png'
import prometheus from '../../../assets/images/technologies/prometheus.png'
import vmware from '../../../assets/images/technologies/vmware.png'
import cubaar from '../../../assets/images/technologies/cubaar.png'
import python from '../../../assets/images/technologies/python.png'
import citrix from '../../../assets/images/technologies/citrix.png'
import gitlab from '../../../assets/images/technologies/gitlab.png'
import Elastic from '../../../assets/images/technologies/Elastic.png'
import aws from '../../../assets/images/technologies/aws.png'
import cisco from '../../../assets/images/technologies/cisco.png'
import docker from '../../../assets/images/technologies/docker.png'
import cloudflare from '../../../assets/images/technologies/cloudflare.png'
import jenkins from '../../../assets/images/technologies/jenkins.png'
import nginx from '../../../assets/images/technologies/nginx.png'
import linux from '../../../assets/images/technologies/linux.png'
import Kubernetes from '../../../assets/images/technologies/Kubernetes.png'
import mySQL from '../../../assets/images/technologies/mySQL.png'
import PostgreSQL from '../../../assets/images/technologies/PostgreSQL.png'
import googleCloud from '../../../assets/images/technologies/googlecloud.png'
import nodejs from '../../../assets/images/technologies/nodejs.png'
import go from '../../../assets/images/technologies/go.png'

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

const technologies = {
  desktop: [
    {
      src: confluence,
    },
    {
      src: Elasticsearch,
    },
    {
      src: pfsense,
    },
    {
      src: opnsense,
    },
    {
      src: Grafana,
    },
    {
      src: Minio,
    },
    {
      src: Ceph,
    },
    {
      src: Ansible,
    },
    {
      src: Zabbix,
    },
    {
      src: prometheus,
    },
    {
      src: vmware,
    },
    {
      src: cubaar,
    },
    {
      src: python,
    },
    {
      src: citrix,
    },
    {
      src: gitlab,
    },
    {
      src: Elastic,
    },
    {
      src: aws,
    },
    {
      src: cisco,
    },
    {
      src: docker,
    },
    {
      src: cloudflare,
    },
    {
      src: jenkins,
    },
    {
      src: nginx,
    },
    {
      src: linux,
    },
    {
      src: Kubernetes,
    },
    {
      src: mySQL,
    },
    {
      src: PostgreSQL,
    },
    {
      src: googleCloud,
    },
    {
      src: nodejs,
    },
    {
      src: go,
    },
  ],
  mobile: [
    {
      src: confluence,
    },
    {
      src: Elasticsearch,
    },
    {
      src: pfsense,
    },
    {
      src: opnsense,
    },
    {
      src: Grafana,
    },
    {
      src: Minio,
    },
    {
      src: Zabbix,
    },
    {
      src: prometheus,
    },
    {
      src: vmware,
    },
    {
      src: Elastic,
    },
    {
      src: aws,
    },
    {
      src: cisco,
    },
  ],
}
const faqData = [
  {
    id: 0,
    title: 'تب اول',
    questions: [
      {
        id: 1,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
      {
        id: 2,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
      {
        id: 3,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
      {
        id: 4,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
      {
        id: 5,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
    ],
  },
  {
    id: 1,
    title: 'تب دوم',
    questions: [
      {
        id: 1,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
      {
        id: 2,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
      {
        id: 3,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
    ],
  },
  {
    id: 2,
    title: 'تب سوم',
    questions: [
      {
        id: 1,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
      {
        id: 2,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
      {
        id: 3,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
      {
        id: 4,
        question: 'از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنی?',
        answer:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با \n' +
          'استفاده از طراحان گرافیک است، ',
      },
    ],
  },
]
const cardsData = [
  {
    title: 'حافظه داخلی',
    code: '656664',
    change: '+1.49%',
    diff: '+8.1K this month',
    color: 'text-green-400',
    icon: server,
  },
  {
    title: 'دیسک',
    code: '656664',
    change: '-1.5%',
    diff: '-856 this month',
    color: 'text-red-400',
    icon: server,
  },
  {
    title: 'دیسک',
    code: '656664',
    change: '+2.5%',
    diff: '+12.5K this month',
    color: 'text-green-400',
    icon: server,
  },
  {
    title: 'دیسک',
    code: '656664',
    change: '+2.5%',
    diff: '+12.5K this month',
    color: 'text-green-400',
    icon: server,
  },
  {
    title: 'دیسک',
    code: '656664',
    change: '+2.5%',
    diff: '+12.5K this month',
    color: 'text-green-400',
    icon: server,
  },
  {
    title: 'حافظه داخلی',
    code: '656664',
    change: '+1.49%',
    diff: '+8.1K this month',
    color: 'text-green-400',
    icon: server,
  },
  {
    title: 'دیسک',
    code: '656664',
    change: '+2.5%',
    diff: '+12.5K this month',
    color: 'text-green-400',
    icon: server,
  },
  {
    title: 'دیسک',
    code: '656664',
    change: '+2.5%',
    diff: '+12.5K this month',
    color: 'text-green-400',
    icon: server,
  },
]

export { features, stats, services, projectSteps, technologies, faqData, cardsData }
