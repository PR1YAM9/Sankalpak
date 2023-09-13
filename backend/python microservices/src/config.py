from dotenv import load_dotenv
import os

from sqlalchemy.engine import URL

load_dotenv()

PSQL_USERNAME = os.getenv("PSQL_USERNAME")
PSQL_PASSWORD = os.getenv("PSQL_PASSWORD")

DEBUG = True
PORT = 8000

SQLALCHEMY_DATABASE_URI = URL.create("postgresql",
                username = PSQL_USERNAME, 
                password = PSQL_PASSWORD,
                host = "localhost", 
                database = "oonmitra"
            )