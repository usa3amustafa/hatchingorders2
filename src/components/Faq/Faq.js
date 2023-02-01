import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faChevronUp,
  faQ,
} from '@fortawesome/free-solid-svg-icons'

import styles from './faq.module.css'

import { useState } from 'react'
import PricingTable from '../PricingTable/PricingTable'

const Faq = ({ faqItems }) => {
  const [selected, setSelected] = useState(null)
  const toggle = i => {
    console.log(i)
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      {/* Faq Item */}
      {faqItems.map((item, i) => {
        return (
          <div className={styles.faqItem} onClick={() => toggle(i)} key={i}>
            <div className={styles.faqTitle}>
              <div className={styles.faqTitleLeft}>
                {item.icon && <FontAwesomeIcon icon={item.icon} />}
                <h2 className={styles.faqTitleText}>{item.title}</h2>
              </div>
              {selected === i ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </div>

            {Array.isArray(item.desc) ? (
              <ul className={`courseDescList ${selected === i && 'active'} `}>
                {item.desc.map((item, i) => {
                  return (
                    <li key={i} className='courseDescListItem'>
                      {item}
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p
                className={`${styles.faqDesc} ${
                  selected === i && styles.active
                } `}
              >
                {item.desc}
                {item.link && (
                  <a className={styles.link} href={item.href} target='_blank'>
                    {item.link}
                  </a>
                )}

                {item.note && (
                  <>
                    <span className='courseDescNote'>{item.note}</span>
                  </>
                )}

                {item.pricingTable && <PricingTable />}
              </p>
            )}
          </div>
        )
      })}
    </>
  )
}

export default Faq
