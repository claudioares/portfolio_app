export function OpinionForm() {
  return (
    <>
      <form
        action=""
        className="flex flex-col w-[80rem] items-start gap-8 mb-48"
      >
        <input
          type="text"
          placeholder="Deixe seu comentário..."
          className="h-32 w-full p-12 rounded-2xl text-black"
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="h-16 pl-12 rounded-2xl text-black"
          />
          <button type="submit">Enviar</button>
        </div>

        <div className="flex flex-col gap-8 mt-14 border-t-2 pt-8">
          <div className="flex gap-4">
            <h5 className="font-bold">QuemComentou</h5>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            necessitatibus voluptatem nulla dolore fuga, delectus non aliquam
            est voluptate vel consequatur. Ratione, nisi! Ipsa, nostrum. Alias
            consectetur soluta possimus eius.
          </p>
        </div>
      </form>
    </>
  )
}
