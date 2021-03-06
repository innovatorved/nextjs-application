import axios from "axios";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function EachHero({ hero }) {
    const router = useRouter();

    const id = router.query.id;

    const deleteHero = async () => {
        try {
            const res = await axios.delete(`http://localhost:3000/api/hero/${id}`);
            if (res.data.success) {
                Router.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <div className='rounded-lg p-4 border-2 shadow-md m-4 min-w-fit max-w-xl w-72 mt-12' >
                <h1 className='font-bold mt-1 text-2xl'>{hero.superHero}</h1>
                <p className='mt-3'>{hero.realName}</p>
                <div className="space-x-2">
                    <Link href={`${hero._id}/edit`} passHref>
                        <button className='bg-blue-500 hover:bg-blue-700 mt-3 text-white py-2 px-4 rounded-full text-xs'>
                            Edit Hero
                        </button>
                    </Link>
                    <button className='bg-blue-500 hover:bg-blue-700 mt-3 text-white py-2 px-4 rounded-full text-xs' onClick={deleteHero}>
                        Delete Hero
                    </button>
                </div>
            </div>
        </div>

    );
}

export async function getServerSideProps({ params }) {
    const id = params.id;
    const res = await axios(`http://localhost:3000/api/hero/${id}`);
    // console.log(res);
    const { hero, success } = res.data;
    return {
        props: {
            hero,
        }
    }
}