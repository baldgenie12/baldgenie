import Merchants from "../api/MongoDatabaseModels/MerchantModel";


export default async function handler(req, res) {


    const { email } = req.body
    const alreadyRegistered = await Merchants.findOne({ email })
    if (alreadyRegistered) {
        res.status(400).json({ error: "Already registered with this E-Mail" })
        return
    }

    return res.status(200).json({ message: 'sucessfull' })




}
