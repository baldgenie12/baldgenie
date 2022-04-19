import bcrypt from 'bcrypt'
import UserModal from '../../../MongoDatabaseModels/UserModel'
import MerchantsModal from '../../../MongoDatabaseModels/MerchantModel'

export default async function handler(req, res) {

    const body = req.body
    const account_type = body.account_type
    var userexists=false

    if (account_type === 'Merchant') {
        const userExist = await MerchantsModal.findOne({ email: body.email })
        if (userExist) {
            res.status(200).json({ message: 'Already Resgistered' })
            return
        }
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(body.password, salt)
        const merchant = new MerchantsModal({ account_type, name: body.name, email: body.email, password: hashpass })
        await merchant.save()
    }
    else {
        const userExist = await UserModal.findOne({ email: body.email })
        if (userExist) {
            console.log("--------++++++++++++-----------++++++++++++-----------");
            res.status(200).json({ message: 'Already Resgistered' })
            return
        }
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(body.password, salt)
        const user = new UserModal({ name: body.name, email: body.email, password: hashpass })
        await user.save()
    }




    res.status(200).json({ message: 'Resgistered Sucessfully' })

}
