import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Amar Omerika</title>
        <meta
          name="description"
          content="I’m Amar Omerika. I live in Mostar,Bosnia & Herzegovina, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Amar Omerika. I live in Mostar, Bosnia & Herzegovina, where I design the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              I’m React and React Native developer who is always open to suggestions, and willing to learn. I have experience working as part of a team and individually in my company.I worked on multiple projects in my company and finished it successfully and with passion.
              </p>
              <p>
              As a frontend developer, I have a solid foundation in HTML, CSS, and JavaScript, and I keep up with the latest trends and best practices in frontend development. I am well-versed in popular frontend frameworks and libraries, such as React, Next.js, which allow me to create interactive and responsive user interfaces that work seamlessly across devices and browsers.
              In the mobile realm, I specialize in building cross-platform applications using frameworks like React Native. This enables me to create native-like mobile experiences for both Android and iOS platforms, saving time and resources without compromising on quality.
              </p>
              <p>
              If you're looking for a dedicated and skilled frontend web and mobile developer to bring your project to life, I'd love to hear from you! Whether it's a web application, a mobile app, or an interactive website, I am excited to collaborate and turn your vision into reality.
              Thank you for visiting my portfolio, and I hope you enjoy exploring my projects and getting to know more about my journey as a frontend developer. If you have any questions or inquiries, feel free to reach out through the contact section – I'd be delighted to connect with you!
              Let's create remarkable digital experiences together! 🚀
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://www.instagram.com/amaromerika9/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/Amar-Omerika" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://ba.linkedin.com/in/amar-omerika-4b7625208?trk=public_post_feed-actor-name" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:amar.omerika@edu.fit.ba"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
               amar.omerika@edu.fit.ba
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
