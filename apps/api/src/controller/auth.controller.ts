


export const registerController = async (c: any) => {
    const { email } = await c.req.json()
    console.log(email)
    return c.text('GET /')

}
