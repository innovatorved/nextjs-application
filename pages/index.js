import Head from 'next/head'
import Link from 'next/link'

const axios = require('axios').default;

export default function index({ heros }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1 className='font-bold text-center m-4 text-2xl'>SuperHero Identity Manager </h1>
        <h5 className="text-center text-xs">{heros.length}</h5>

        <div className='mt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {
            heros.map((hero, index) => {
              return (
                <div className='rounded-lg p-4 border-2 shadow-md max-w-sm m-4' key={index}>
                  <h1 className='font-bold mt-1 text-2xl'>{hero.superHero}</h1>
                  <p className='mt-3'>{hero.realName}</p>
                  <div className='sm:space-x-2 text-xs'>
                    <Link href={`${hero._id}`}>
                      <button className='bg-blue-500 hover:bg-blue-700 mt-3 text-white py-2 px-4 rounded-full'>
                        View Hero
                      </button>
                    </Link>
                    <button className='bg-blue-500 hover:bg-blue-700 mt-3 text-white py-2 px-4 rounded-full'>
                      Edit Hero
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </main>
    </div>
  )
}


export async function getStaticProps(context) {
  const res = await axios("http://localhost:3002/api/hero");
  // console.log(res);
  const { heros } = res.data;

  return {
    props: {
      heros
    }
  };
}