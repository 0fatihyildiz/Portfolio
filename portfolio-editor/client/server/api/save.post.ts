export default defineEventHandler((event) => {
    console.log('event', event)
    return 'hello from save.post.ts!'
})