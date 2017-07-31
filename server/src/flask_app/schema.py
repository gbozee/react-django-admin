import graphene

class Query(graphene.ObjectType):
    hello = graphene.String()

    def resolve_hello(self, *args):
        return "World"

schema = graphene.Schema(query=Query,auto_camelcase=False)
