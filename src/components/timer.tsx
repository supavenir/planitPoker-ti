function decreaseTimer(props : any) {
    let minutes = props.minutes;
    let seconds = props.seconds;

    while(minutes > 0 && seconds > 0) {
        if(seconds > 0 ) {
            seconds--;
        } else if(seconds <= 0) {
            minutes--;
            seconds=59;
        }

        return <h3>{minutes}:{seconds}</h3>
    }
}

export default function Timer(props : any) {
    const decreaseTimerFunction = decreaseTimer(props);

    return (
      <div className="timer">
          <h3>Temps restant :</h3>
          {decreaseTimerFunction}
      </div>
    );
}