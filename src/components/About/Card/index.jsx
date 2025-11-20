
import './styles.css';

const Card = (props) => {
    return(
        <>
        <div className="card-about">
            <img className='card-image' src={props.cardImage} alt={props.altImage} />
            <h3 className="card-title">{props.cardTitle} </h3>
            <p className="card-paragraph">{props.cardParagraph}</p>
            <a className={props.class} href={props.urlButton}>{props.cardButtonText}</a>
        </div>
        </>
    )
}

export default Card;