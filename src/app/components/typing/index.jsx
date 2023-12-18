import './styles.css';


// eslint-disable-next-line react/prop-types
export default function Typing ({formationDiscripition}) {
    return(
        <>
            <div className='typing_function'>
                <h1 className='description typing_text_config'>{formationDiscripition}</h1>
                <h1 className='cursor typing_text_config'>|</h1>
            </div>
        </>
    )
}