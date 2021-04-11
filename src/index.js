import './styles.css';
import Timer from './js/countDownTimer';


const finalTime = new Timer({
  selector: '#timer-1',
  countdown: new Date('Apr 16, 2021'),
});



/* document.addEventListener('DOMContentLoaded', finalTime.renderTimer.bind(finalTime)); */

window.onload = finalTime.renderTimer();