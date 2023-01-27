import Value from './Value'

import { coreValuesData } from './aboutData'

const CoreValues = () => {
  return (
    <section>
      <div className='container ourValues'>
        <h2 className='ourValuesTitle'>{coreValuesData.coreValuesTitle}</h2>

        <div className='valuesBar valuesBarOne'>
          {coreValuesData.values.slice(0, 2).map(value => {
            return (
              <Value
                key={value.id}
                valueImg={value.img}
                valueTitle={value.title}
                valueDesc={value.desc}
                colorClass={value.colorClass}
              />
            )
          })}
        </div>

        <div className='valuesBar valuesBarTwo'>
          {coreValuesData.values.slice(2).map(value => {
            return (
              <Value
                key={value.id}
                valueImg={value.img}
                valueTitle={value.title}
                valueDesc={value.desc}
                colorClass={value.colorClass}
              />
            )
          })}
        </div>
      </div>
      <div />
    </section>
  )
}

export default CoreValues
