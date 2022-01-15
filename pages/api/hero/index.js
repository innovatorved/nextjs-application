import dbConnect from '../../../db/dbConnect';
import Hero from '../../../models/hero';

dbConnect();

// Get All Records , post all records
export default async (req , res) => {
    const {method} = req;

    switch (method) {
        case 'GET':
            try {
                const heros = await Hero.find({});
                res.status(200).json({success: true , heros});
            }
            catch (err) {
                res.status(400).json({success: false , message: err.message});
            }
            break;

        case 'POST':
            try {
                const hero = await Hero.create(req.body);
                res.status(200).json({success: true , hero});
            }
            catch (err) {
                res.status(400).json({success: false , message: err.message});
            }
            break;
        
        default:
            break;
    }
}