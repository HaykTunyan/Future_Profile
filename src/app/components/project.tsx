import { Inter } from "next/font/google";
import styles from "../../styles/page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Project() {
  return (
    <div className="flex flex-col">
      <div className="flex items-start">
        <h2 className="text-white font-semibold text-lg">Projects</h2>
      </div>
      <div className="mt-10" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:px-20">
        {/* My Lot */}
        <a
          href="https://mylot.am/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            My Lot <span>-&gt;</span>
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">Tecnologis:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}>React JS</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">UI frameworks:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}>Ant Designe</p>
              </div>
            </div>
          </div>
        </a>

        {/* Food Orders */}
        <a
          href="https://food.orders.co/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Food Orders <span>-&gt;</span>
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">Tecnologis:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}>React JS</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">UI frameworks:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}>Material UI</p>
              </div>
            </div>
          </div>
        </a>

        {/* Poly Sheeps */}

        <a
          href="https://poly-sheeps.vercel.app/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Poly Sheeps <span>-&gt;</span>
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">Tecnologis:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}>React JS</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">UI frameworks:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}>Bootstrap </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="mt-10" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:px-20">
        {/* Saynine */}
        <a
          href="https://saynine.ai/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Saynine <span>-&gt;</span>
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">Tecnologis:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}>Next JS</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">UI frameworks:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}>Tailwind Css</p>
              </div>
            </div>
          </div>
        </a>
        {/* NFT Saynine */}
        <a
          href="https://nft-saynine.vercel.app/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            NFT Saynine <span>-&gt;</span>
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">Tecnologis:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}>Next JS</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">UI frameworks:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}> Tailwind Css</p>
              </div>
            </div>
          </div>
        </a>

        {/*  Optify */}

        <a
          href="https://dev.optify.ai/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Optify <span>-&gt;</span>
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">Tecnologis:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}>React JS</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex">
                <p className="text-lg text-white">UI frameworks:</p>
              </div>
              <div className="ml-4">
                <p className={inter.className}>Tailwind Css</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
