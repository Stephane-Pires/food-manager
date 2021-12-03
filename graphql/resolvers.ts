// The resolvers told us what to do with queries
// We used prisma to retrieve link
const resolvers = {
    Query: {
        links: (_parent, _args, context) => context.prisma.link.findMany(),
    },
}
export default resolvers
