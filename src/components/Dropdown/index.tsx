import { useState } from 'react'

import angularIcon from '../../statics/images/image-138.png'
import reactIcon from '../../statics/images/image-140.png'
import vueIcon from '../../statics/images/image-141.png'

import './styles.css'

export const Dropdown = () => {
  const [options, setOptions] = useState(false)

  const handleOptions = () => {
    setOptions((prev) => !prev)
  }

  return (
    <section>
      <div className='dropdown' onClick={handleOptions}>
        <p>Select your news</p>
        <span className='arrow'></span>
        {options && (
          <ul className='options'>
            <li>
              <img
                className='options__icon'
                src={angularIcon}
                alt='Angular Icon'
              />{' '}
              Angular
            </li>
            <li>
              <img className='options__icon' src={reactIcon} alt='React Icon' />{' '}
              React
            </li>
            <li>
              <img className='options__icon' src={vueIcon} alt='Vue Icon' /> Vue
            </li>
          </ul>
        )}
      </div>
    </section>
  )
}
