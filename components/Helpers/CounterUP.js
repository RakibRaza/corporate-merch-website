import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

const CounterUp = ({ num }) => {
  return (
    <CountUp duration={1} end={num} redraw={true}>
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
        </ReactVisibilitySensor>
      )}
    </CountUp>
  )
}

export default CounterUp;
