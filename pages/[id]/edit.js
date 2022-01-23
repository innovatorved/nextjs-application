import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
const axios = require('axios').default;

export default function EditHero({ hero }) {
    const [heroInfo, setHeroInfo] = useState(hero);
    const router = useRouter();
    const { id } = router.query;

    const valueChanged = (e) => {
        setHeroInfo({
            ...heroInfo,
            [e.target.name]: e.target.value
        });
    }

    const updateHero = async (e) => {
        e.preventDefault();
        const res = await axios.put(`http://localhost:3000/api/hero/${id}`, heroInfo);
        if (res.data.success) {
            Router.push('/');
        }
    }

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={updateHero}>
                <h1 className='text-center font-bold text-xl mb-8'>Update Hero</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="superHero">Superhero</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="superHero" value={heroInfo.superHero} onChange={valueChanged} placeholder="Superhero" required={true} />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="realName">Real Name</label>
                    <input name='realName' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" value={heroInfo.realName} onChange={valueChanged} placeholder="realname" required={true} />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Update Superhero
                    </button>
                </div>
            </form>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const id = params.id;
    const res = await axios(`http://localhost:3000/api/hero/${id}`);
    const { hero, success } = res.data;
    return {
        props: {
            hero,
        }
    }
}