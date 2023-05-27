/*function decreaseTimer(props : any) {
    let minutes = props.minutes;
    let seconds = props.seconds;

    if(seconds > 0 ) {
        seconds--;
    } else if(seconds <= 0) {
        minutes--;
        seconds=59;
    }

    return <h3>{minutes}:{seconds}</h3>
}*/

export default function Timer(props : any) {
    const decreaseTime = ()  => {
        while(props.minutes > 0 && props.seconds > 0 ) {
            if(props.seconds > 0 ) {
                props.seconds--;
            } else if(props.seconds <= 0) {
                props.minutes--;
                props.seconds=59;
            }
        }

        return <h3>{props.minutes}:{props.seconds}</h3>
    }

    return (
      <div className="timer">
          <h3>Temps restant :</h3>
          {decreaseTime()}
      </div>
    );
}