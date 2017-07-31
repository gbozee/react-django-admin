import os
from flask import Flask
from flask_cors import CORS
from flask_graphql import GraphQLView
from .relay import schema
from .data import setup
app = Flask(__name__)
CORS(app)

setup()
app.add_url_rule('/', view_func=GraphQLView.as_view(
    'graphql', schema=schema, graphiql=True))

# Optional, for adding batch query support (used in Apollo-Client)
# app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, batch=True))atch=True))
