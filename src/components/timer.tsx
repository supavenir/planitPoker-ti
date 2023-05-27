export default function Timer(props : any) {
    return (
      <div className="timer">
          <h3>Temps restant :</h3>
          <h3>{props.minutes}:{props.seconds}</h3>
      </div>
    );
}