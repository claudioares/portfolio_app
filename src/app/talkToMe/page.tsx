export default function TalkToMe() {
  return (
    <>
      <div className="bg-black min-h-screen text-green_clean font-bold flex flex-col items-center pt-[12.7rem]">
        <h1 className="flex gap-3 text-[3rem] pb-10">
          Precisando de um <p className="text-[#BD4444]">sistema web</p> ou{' '}
          <p className="text-[#BD4444]">automação</p>?
        </h1>
        <div className="h-[49.9rem] flex items-center gap-[4.2rem]">
          <div className="prose lg:prose-xl prose-h2:{2rem} w-[54.8rem] gap-10 prose-h2:text-green_clean prose-li:text-bermuda">
            <div>
              <h2 className="font-bold text-[2rem]">Como pedir orçamento:</h2>
              <li className="font-normal">Deixe seu nome, telefone e email</li>
            </div>
            <div>
              <h2 className="font-bold text-[2rem]">Deseja automação?</h2>
              <li className="font-normal">
                Descreva os detalhes do que você precisa que seja automatizado
              </li>
              <li className="font-normal">
                Mencione quais passos você gostaria de automatizar
              </li>
            </div>
            <div>
              <h2 className="font-bold text-[2rem]">Deseja sistema web?</h2>
              <li className="font-normal">
                Descreva a visão de quais funcionalidades você imagina para seu
                site
              </li>
              <li className="font-normal">
                Exemplo: Preciso de um sitema que faça X,Y,Z Deixe o link algum
                exemplo, se tiver, de algum site que voce tenha como referência
              </li>
            </div>
          </div>
          <form className="w-[40.2rem] flex flex-col text-green_clean font-normal gap-4">
            <div className="flex gap-9">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-2xl">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="rounded-[0.50rem] h-14 p-3 text-xl"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-2xl">
                  Telefone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="rounded-[0.50rem] h-14 p-3 text-xl"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-2xl">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="rounded-[0.50rem] h-14 p-3 text-xl"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-2xl">
                Como posso te ajudar?
              </label>
              <textarea
                cols={50}
                rows={10}
                id="email"
                wrap="hard"
                className="rounded-[0.50rem] h-[25rem] p-3 font-normal resize-none text-xl"
              />
            </div>
            <p className="font-light text-xl">
              Descreva com o maior numero de detalhes o que você esta
              procurando. Quanto maior o numero de detalhes mais rápido poderei
              entregar um orçamento
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
