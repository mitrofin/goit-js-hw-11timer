import './styles.css';
/* import Timer from './js/countDownTimer'; */

class CountdownTimer{
  constructor({ selector, countdown }) {
      this.intervalId = null;
      this.selector = selector;
      this.countdown = countdown;
      this.refs = {
          days: document.querySelector(`${selector} [data-value="days"]`),
          hours: document.querySelector(`${selector} [data-value="hours"]`),
          mins: document.querySelector(`${selector} [data-value="mins"]`),
          secs: document.querySelector(`${selector} [data-value="secs"]`),
          timer: document.querySelector(`${selector} #timer-1`),
      };
      
    }

    renderTimer() {
        this.intervalId = setInterval(() => {
        const currentTime = Date.now();
          const targetTime = this.countdown - currentTime;
          this.updateTimer(this.getTimeComponets(targetTime));
        /*   const time = this.getTimeComponets(targetTime);
          this.updateTimer(time); */
          
      }, 1000);
    }

    
    getTimeComponets(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      return { days, hours, mins, secs };
    }
  
    updateTimer({ days, hours, mins, secs }) {
          this.refs.days.textContent = days,
          this.refs.hours.textContent = hours,
          this.refs.mins.textContent = mins,
          /* if (this.refs.$secs === 01) {
              this.refs.span.label.textContent = "ctreylf";
            } */
            this.refs.secs.textContent = secs;
      
      }

  
    pad(value) { 
        return String(value).padStart(2, '0');
      }
  

    

} 
 /* finalTime.renderTimer(); */

const finalTime = new CountdownTimer({
  selector: '#timer-1',
  countdown: new Date('Apr 16, 2021'),
});

/* finalTime.renderTimer() */

document.addEventListener('DOMContentLoaded', finalTime.renderTimer.bind(finalTime));
