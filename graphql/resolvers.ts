const resolvers = {
    Query: {
        links: (_parent, _args, context) => context.prisma.link.findMany(),
    },
}
export default resolvers
