// The resolvers told us what to do with queries
// Check if this file is really usefull
const resolvers = {
    Query: {
        links: (_parent, _args, context) => context.prisma.link.findMany(),
        recipes: (_parent, _args, context) => context.prisma.recipe.findMany(),
    },
}
export default resolvers
