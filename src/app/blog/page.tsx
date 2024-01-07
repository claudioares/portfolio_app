import { OpinionForm } from '../components/OpinionForm/opinion.form'

export default function Blog() {
  return (
    <>
      <div className="grid grid-cols-4 bg-black min-h-screen pt-[2.9rem] text-grey flex-col overflow-hidden">
        <div className="fixed border-r-2 w-[32.6rem] h-full p-5 flex flex-col gap-8 justify-center">
          <ul className="flex flex-col gap-4">
            <h2 className="bg-green_clean pl-4 h-14 flex items-center">
              Categorias
            </h2>
            <li>Banco de Dados (1)</li>
            <li>Dicas de Javascript (1)</li>
            <li>Dicas de Programação (1)</li>
            <li>Dicas de Python : (1)</li>
            <li>Dicionário de programador (1)</li>
            <li>Iniciante em programação (1)</li>
          </ul>

          <ul className="flex flex-col gap-6">
            <h2 className="bg-green_clean pl-4 h-14 flex items-center">
              Artigos Recentes
            </h2>
            <li>Qual linguagem de programação aprender em 2024</li>
            <li>Como transformar uma string separada por vírgula em listas</li>
            <li>Como criar uma Virtual Env e um arquivo Python</li>
          </ul>
        </div>
        {/* blog */}
        <div className="ml-[30rem] flex flex-col gap-8 col-span-4 pt-24 items-center ">
          <div className="flex justify-center items-center">
            <h1 className="text-[3rem]">Como validar um CPF em JavaScript</h1>
          </div>
          <div className="bg-green w-[80rem, auto] h-[45rem, auto]">
            <img
              src="https://dicasdeprogramacao.com.br/images/como-validar-um-cpf-em-javascript/destaque.png"
              alt="Imagem do blog"
            />
          </div>
          <div className="w-[80rem] p-8 min-h-screen">
            <p className="">
              Nos últimos anos a forma de validar CPF vem mudando, portanto, com
              todas as mudanças notadas, podemos perceber que os códigos usados
              até então, estão meio que obsoletos. E para que isso seja possível
              é preciso encontrar uma forma mais simples e fácil. Com um gerador
              de CPF todo o processo vai ser garantido e fácil, já que isso vem
              se tornando uma necessidade. VALIDAR CPF A validação do CPF
              através de um gerador de CPF é uma forma que está se tornando um
              hábito bastante usado nos dias atuais. Isso se dá muito devido os
              sistemas estarem cada vez mais complexos visando a fazer com que
              as pessoas coloquem suas informações pessoais. Hoje no país, o CPF
              é talvez o principal documento de uma pessoa física, já que o
              mesmo significa o Cadastro de Pessoa Física. É através dele que a
              Receita Federal pode localizar todos os contribuintes do país. E
              para que você tenha seu CPF validado, o mesmo é feito através de
              uma ferramenta que faz uso de algoritmo em javascript. Geralmente
              este tipo de ferramenta é utilizada para que se faça testes de
              softwares através do site O Gerador de CPF. A criação de software
              para a internet se depara muitas vezes com alguns campos aos quais
              exigem que coloque um CPF válido, isso é certo. E é justamente aí
              que surgem as dúvidas mais frequentes em relação a validar um
              número de CPF, ou seja, como todo esse processo é feito. De uma
              forma geral você poderá até mascarar o CPF para que o mesmo possa
              participar de testes que são fundamentais para que os softwares
              possam ser bem desenvolvidos. E partir da ferramenta que estamos
              colocando à disposição de todos aqui que é validar CPF, podemos
              ajudar a quem precisa desenvolver softwares de qualidade para
              testes. Através da criação de um conjunto de códigos de
              JavaScript, foi possível criar um algoritmo que propõe uma
              ferramenta de fácil uso para todo e qualquer programador. E QUAL O
              PRINCIPAL O OBJETIVO DA FERRAMENTA? Tendo como principal objetivo,
              a ferramenta para validar CPF faz com que CPFs não reais possam
              ser usados nos testes. Criando números de pessoas que não são
              reais, sendo assim, cada número criado não precisa necessariamente
              estar cadastrado no Cadastro de Pessoa Física na Receita Federal.
              Mas, é preciso que todos os programadores estejam sempre atentos
              para qual tipo de linguagem de programação serão usadas. É dito
              isso, devido o CPF usado para os testes, dependendo da plataforma
              em desenvolvimento poderá variar dependendo da linguagem usada.
              Validar o CPF é uma forma encontrada e utilizada para que
              programadores possam ter mais facilidade na hora de testar seus
              softwares para que os mesmos possam ser desenvolvidos da melhor
              forma possível. Não podemos esquecer de lembrar sempre que a
              ferramenta colocada à disposição acima, é uma ferramenta com
              limitações, ou seja, a mesma foi criada apenas para os testes de
              softwares. Caso algum usuário da mesma fizer mau uso da mesma, a
              responsabilidade é inteira do usuário.
            </p>
          </div>
          <OpinionForm />
        </div>
      </div>
    </>
  )
}
