import logo from '../../assets/hatchfulLogo.webp'

const CreditTimeLine = () => {
  return (
    <section>
      <div className='container creditTimeline'>
        <h2 className='creditTimelineTitle'>
          UNIVERSITY CREDIT (through CSUSM) TIMELINE
        </h2>

        <p className='creditTimelineDesc'>
          Please note Hatching Results has no control over these dates and
          deadlines, these are set by California State University San Marcos.
        </p>

        <div className='timelineTables'>
          <ul className='timelineTable'>
            <li className='logo timelineTableTitle'>
              <img src={logo} alt='' loading='lazy' />
            </li>
            <li className='timelineTableRow'>semester begins</li>
            <li className='timelineTableRow'>last date to register</li>
            <li className='timelineTableRow'>semester ends</li>
            <li className='timelineTableRow'>finals week</li>
            <li className='timelineTableRow'>grades due</li>
            <li className='timelineTableRow'>official transcript available</li>
          </ul>

          {/* <ul className='timelineTable'>
            <li className='timelineTableTitle secBg'>fall 2022</li>
            <li className='timelineTableRow'>august 29</li>
            <li className='timelineTableRow secClr'>december 7</li>
            <li className='timelineTableRow'>december 10</li>
            <li className='timelineTableRow'>december 10-12</li>
            <li className='timelineTableRow'>december 22</li>
            <li className='timelineTableRow secClr'>
              week after grades are posted
            </li>
          </ul> */}

          <ul className='timelineTable'>
            <li className='timelineTableTitle priBg'>spring 2023</li>
            <li className='timelineTableRow'>january 23</li>
            <li className='timelineTableRow secClr'>may 10</li>
            <li className='timelineTableRow'>may 12</li>
            <li className='timelineTableRow'>may 13-18</li>
            <li className='timelineTableRow'>may 25</li>
            <li className='timelineTableRow secClr'>
              week after grades are posted
            </li>
          </ul>

          <ul className='timelineTable'>
            <li className='timelineTableTitle yellowBg'>summer 2023</li>
            <li className='timelineTableRow'>
              july 25 &nbsp;<span className='secClr'>(</span>&nbsp;
              <span className='secClr italic'>tentative</span>&nbsp;
              <span className='secClr'>)</span>
            </li>
            <li className='timelineTableRow secClr'>july 31</li>
            <li className='timelineTableRow'>
              august 12 &nbsp;<span className='secClr'>(</span>&nbsp;
              <span className='secClr italic'>tentative</span>&nbsp;
              <span className='secClr'>)</span>
            </li>
            <li className='timelineTableRow uppercase'>TBD</li>
            <li className='timelineTableRow'>
              August 17 &nbsp;<span className='secClr'>(</span>&nbsp;
              <span className='secClr italic'>tentative</span>&nbsp;
              <span className='secClr'>)</span>
            </li>
            <li className='timelineTableRow secClr'>
              week after grades are posted
            </li>
          </ul>
        </div>

        <p className='creditTimelineDesc fullWidth'>
          NOTE: Tentative dates will be updated in the Spring 2023
        </p>
      </div>
    </section>
  )
}

export default CreditTimeLine
