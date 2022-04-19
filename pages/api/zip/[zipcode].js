export default async function handler(req, res) {

  const { zipcode } = req.query
  try {

    var location = null
    const response = await fetch(`https://www.zipcodeapi.com/rest/FEVVsOUqNWJ8zDHvwkYfCxGior1sxW8F4bCN3dLJIvcfTxW5rKduEAYfloN7Ukon/info.json/${zipcode}/degrees`)
    location = await response.json()
    await res.status(200).json({ name: location })
  } catch (error) {
    await res.status(401).json({ error: error })

  }
}
