import './styles.css'

type TypingFunction = {
  formationDiscripition: string
}

// eslint-disable-next-line react/prop-types
export default function Typing({ formationDiscripition }: TypingFunction) {
  return (
    <>
      <div className="typing_function">
        <h1 className="description typing_text_config">
          {formationDiscripition}
        </h1>
        <h1 className="cursor typing_text_config">&#128172;</h1>
      </div>
    </>
  )
}
