import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoMenea from '@/images/logos/menea.png'
import logoDietApp from '@/images/logos/diet.png'
import logoKeeperApp from '@/images/logos/keeper.png'
import logoOrdresApp from '@/images/logos/ordres.jpeg'
import logoEcommerce from '@/images/logos/ecommerce.png'




const projects = [
  {
    name: 'Menea Website',
    description:
      'This is a website for a Swedish client for whom I worked. The technologies that I used to build this website are React.js and Tailwind. After finishing the website, I hosted it on loopia.com.',
    link: { href: 'https://menea.se/', label: 'menea.se' },
    logo: logoMenea,
  },
  {
    name: 'Diet app',
    description:
    'This is a simple app in React where you can type a certain amount of calories and the app gives you back three meals you can make in that range of calories. This app is good when you want to track your daily dose of calories but you don˝t know what to cook. For this App, I used Api from spoonacular.com',
    link: { href: 'https://amars-diet-app.netlify.app', label: 'dietApp' },
    logo: logoDietApp,
  },
  {
    name: 'Keeper app',
    description:
    'Keeper App is an app where you can add your notes and delete them.This app was made using React framework.',
    link: { href: 'https://visionary-chimera-800cf2.netlify.app', label: 'keeperApp' },
    logo: logoKeeperApp,
  },
  {
    name: 'Ordres',
    description:
    'Ordres app is made for restaurants around the EU. Guests can place an order within a few clicks or simply by scanning the QR code to access the restaurant menu and place an order, thus reducing the time for both custemer and the restaurant. And also the app is there to provide restaurants with various benefits such as statistics, the most popular deals, customer satisfaction, etc.Technologies that I used for this projects are: React, React Native, Tailwind, Typescript.',
    link: { href: 'https://www.ordres.eu/', label: 'ordres' },
    logo: logoOrdresApp,
  },
  {
    name: 'Ecommerce',
    description:
    'Simple e-commerce web shop built with Next.js and typescript.',
    link: { href: 'https://ecommerceamar.netlify.app/', label: 'ecommerce' },
    logo: logoEcommerce,
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Amar Omerika</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things that I have made have an impact on our future."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
