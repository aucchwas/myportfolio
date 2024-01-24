import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>     
      <div className='flex items-center w-full h-full bg-cover bg-center' 
        style={{backgroundImage: "url(/main-bg.webp)"}}>
        
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>         
          <h1 className='text-[50px] text-white font-semibold'>
            Welcome to <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
              {""}My World
            </span>
          </h1>

          <p className='text-gray-200 hidden md:block'>
            Hello, I am Arnob Das Ucchwas, a Business Information Technology student at Red River Polytechnic in Winnipeg. 
            Currently, I am working as Help Desk, in Bimbo Canada handling customer inquiries and providing solutions for diverse technology issues.
          </p>
                        
          <p className='text-gray-200 hidden md:block'>
            In addition to my academic and professional roles, I have actively volunteered, 
            leading events as the Secretary of the Red River Bangladeshi Student Association and assisting at the Red River Open House.
          </p>       

          <p className='text-gray-200 hidden md:block'>
            With a solid foundation in organizational skills, Microsoft Office proficiency, 
            and a track record of attention to detail, I bring a diverse skill set to any developer position. 
            I am eager to contribute to innovative projects and bring a collaborative and solution-oriented approach to your team.
          </p>

          <div className='flex-col md:flex-row hidden md:flex gap-5'>
            <Link href = "/my-skills" className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              Learn More
            </Link>

            <Link href = "/my-projects" className='rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'/>
              My Projects
            </Link>

            <Link href = "/contact-me" className='rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'/>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
        <Link href = "/my-skills" className='rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
           Learn More
        </Link>

        <Link href = "/my-projects" className='rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
           My Projects
        </Link>

        <Link href = "/contact-me" className='rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
            Contact Me
        </Link>
      </div>

      <div className='absolute bottom-0 right-0 z-[10]'>
        
        <Image 
        src="/horse.png"
        alt='horse'
        height={300}
        width={300}
        className='absolute right-55 top-40'/>

        <Image 
        src = "/cliff.webp"
        alt='cliff'
        height={480}
        width={480}/>

      </div>

      <div className='absolute bottom-0 z-[5] h-auto w-full'>
        
        <Image
        src="/trees.webp"
        alt='trees'
        height={2000}
        width={2000}
        className='h-full w-full'/>

      </div>

      <Image 
        src="/stars.png"
        alt='stars'
        height={300}
        width={300}
        className='absolute left-0 z-[10] top-10'/>
    </main>
  )
}
