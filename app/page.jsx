import { UilTwitter, UilMicrosoft } from '@iconscout/react-unicons'
import { mailURL } from '../utils/gmail'

export default function About() {
  return (
    <section className = 'flex flex-col items-end'>
      <p className = 'text-justify tracking-widest text-sm'>
        Hola amigos! I am a engineer to be precise but of more a designer.
        I love to design webpages, that's one side of me. But I have also
        a keen interest in any kind of content that sells. Be flyers, posters, 
        blogs, instagram quotes, book summary, movie reviews or adverts. I use 
        twitter quite often. One can even drop a mail. But hold on, have you 
        seen any of my works which has helped businesses hype up footprints 
        by a meagre 4x? Haha, turn to next before turning to myself!   
      </p>
      <span className = 'flex gap-4 mt-12'>
        <a href = 'https://twitter.com/dasgupta002' className = 'socials'>
          <UilTwitter />
        </a>
        <a href = { mailURL } className = 'socials'>
          <UilMicrosoft />
        </a>
      </span>
    </section>
  )
}