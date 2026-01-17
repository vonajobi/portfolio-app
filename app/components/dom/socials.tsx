import { FiArrowUpRight } from 'react-icons/fi'

export const Socials: React.FC = () => {
  return (
      // <ul className='text-sm font-light text-white/70 cursor-pointer transition-all md:justify-start pointer-events-auto'>
      //   <li className=' flex hover:text-white'>
      //     <a href='https://github.com/vonajobi'>GITHUB</a>
      //     <FiArrowUpRight/>
      //   </li>
      //   <li className='flex hover:text-white'>
      //     <a href='https://www.linkedin.com/in/victoria-onajobi'>LINKEDIN</a>
      //     <FiArrowUpRight/>
      //   </li>
      //   <li className='flex hover:text-white'>
      //     <a href='https://issuu.com/sceneusc/docs/hollywood_s_backyard_scene_magazine_issue_no._2_/6'>FEATURED</a>
      //     <FiArrowUpRight/>
      //   </li>
      // </ul>
      <div className='flex
                      gap-6
                      text-sm 
                      font-light
                      text-white/70

                      md:justify-start
                      md-flex-col

                      transition-all 
                      cursor-pointer 
                      pointer-events-auto'>
        <div className=' flex hover:text-white'>
          <a href='https://github.com/vonajobi'>GITHUB</a>
          <FiArrowUpRight/>
        </div>
        <div className='flex hover:text-white'>
          <a href='https://www.linkedin.com/in/victoria-onajobi'>LINKEDIN</a>
          <FiArrowUpRight/>
        </div>
        <div className='flex hover:text-white'>
          <a href='https://issuu.com/sceneusc/docs/hollywood_s_backyard_scene_magazine_issue_no._2_/6'>FEATURED</a>
          <FiArrowUpRight/>
          {/* <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> */}
        </div>
      </div>
  )
}

