import Link from "next/link"
import Image from "next/image"

interface CorpoProps {
  mudarCor: (cor: string) => void;
  mudaLata: (lata: string) => void;
  lataAtual: string;
}
export default function Corpo({ mudarCor, mudaLata, lataAtual }: CorpoProps) {
  return (
    <main className="flex flex-col relative min-h-[calc(100vh-80px)]">
      {/* Conteúdo principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex flex-1 flex-col gap-4  max-w-med pr-15 text-white px-4 md:px-0 md:max-w-2xl">
          <div className="font-black flex flex-col uppercase">
            <h2 className="text-4xl md:text-6xl">That's What</h2>
            <h3 className="text-6xl md:text-9xl">I Like</h3>
          </div>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorum deserunt ut cum ex, voluptatem labore quo? Obcaecati nisi porro corporis, 
            molestias velit doloribus saepe perspiciatis, laboriosam delectus a, 
            omnis tempore?
          </p>
          <Link
            className="w-auto max-w-max py-2 px-5 bg-white text-black rounded-4xl font-medium tracking-[1] uppercase md:mt-5"
            href="#"
          >
            View All Products
          </Link>
        </div>
          {/* Lata grande - absoluta em mobile, normal em desktop */}
          <div className="
            absolute
            hidden
            inset-0
            -z-50
            flex
            items-center
            justify-center
            md:relative 
            md:flex 
            md:flex-1 
            md:items-center 
            md:justify-end 
            md:pr-14 opacity-100 
            md:opacity-100">
            <Image src={`/pepsi${lataAtual}.png`} alt="product" width={260} height={260} className="w-1/2 md:w-[260px] h-auto" />
          </div>

        {/* Redes sociais - à direita */}
        <div className="
          absolute 
          right-0 
          top-0
          w-20
          h-20
          mt-30
          flex 
          flex-col 
          items-end
          gap-y-6 
          px-4 
          md:px-0
          md:mt-50
          md:w-50
          md:h-50
          "
          >
          <ul className="flex flex-col gap-y-6 items-center justify-center">
            <li className="invert transform hover:-translate-y-2 transition duration-300 cursor-pointer">
              <Image src="/facebook.png" alt="Facebook" width={15} height={15} className="w-4 h-6" />
            </li>
            <li className="invert transform hover:-translate-y-2 transition duration-300 cursor-pointer">
              <Image src="/twitter.png" alt="Twitter" width={20} height={20} className="w-5 h-5" />
            </li>
            <li className="invert transform hover:-translate-y-2 transition duration-300 cursor-pointer">
              <Image src="/instagram.png" alt="Instagram" width={20} height={20} className="w-5 h-5" />
            </li>
          </ul>
        </div>

      </div>

      {/* Pequenas imagens de Pepsi - inferior em mobile */}
      <div className="flex justify-center items-center mt-6 md:mt-0">
        <ul className="flex flex-row gap-6 md:gap-10 fixed bottom-4 md:static w-full justify-center px-4">
          <li
            className="transform hover:-translate-y-4 transition duration-300 cursor-pointer"
            onClick={() => {
              mudarCor('#0062be');
              mudaLata('001');
            }}
          >
            <Image src="/pepsi001.png" alt="Pepsi 001" width={40} height={40} className="w-8 h-auto md:w-[40px] md:h-auto" />
          </li>
          <li
            className="transform hover:-translate-y-4 transition duration-300 cursor-pointer"
            onClick={() => {
              mudarCor('#e60c2c');
              mudaLata('002');
            }}
          >
            <Image src="/pepsi002.png" alt="Pepsi 002" width={40} height={40} className="w-8 h-auto md:w-[40px] md:h-auto" />
          </li>
          <li
            className="transform hover:-translate-y-4 transition duration-300 cursor-pointer"
            onClick={() => {
              mudarCor('#1e1e1e');
              mudaLata('003');
            }}
          >
            <Image src="/pepsi003.png" alt="Pepsi 003" width={40} height={40} className="w-8 h-auto md:w-[40px] md:h-auto" />
          </li>
        </ul>
      </div>
    </main>
  )
}