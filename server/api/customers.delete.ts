export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    return {
        message: 'Customer deleted',
        id: body.id
    }
})