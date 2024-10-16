export default defineEventHandler((event) => {
    const query = getQuery(event);

    return {
        name: query.name,
        phone: query.phone
    }
})