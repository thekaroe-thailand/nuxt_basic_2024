export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    return {
        message: 'Customer updated',
        customer: body
    }
})