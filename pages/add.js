import React from 'react';
// import next router
import Router from 'next/router';

const axios = require('axios').default;

export default function addNewHero() {
    const createhero = async (e) => {
        e.preventDefault();
        const hero = {
            superHero: e.target.superHero.value,
            realName: e.target.realName.value
        };
        try {
            const res = await axios.post('http://localhost:3002/api/hero', hero);
            if (res.data.success) {
                e.target.superHero.value = '';
                e.target.realName.value = '';
                Router.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={createhero}>
                <h1 className='text-center font-bold text-xl mb-8'>Add New Hero</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="superHero">Superhero</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="superHero" placeholder="Superhero" required={true} />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="realName">Real Name</label>
                    <input name='realName' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="realname" required={true} />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Create Superhero
                    </button>
                </div>
            </form>
        </div>
    )
}
