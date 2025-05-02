#!/usr/bin/env python3
"""
Module providing a Python script that provides
some stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


def logs_stats(mongo_collection):
    """
    Display statistics about Nginx logs stored in MongoDB

    Args:
        x is the number of documents in this collection
        method = ["GET", "POST", "PUT", "PATCH", "DELETE"] in this order
        mongo_collection will be the pymongo collection object
    """

    if mongo_collection is None:
        return ("No collection found")

    total_logs = mongo_collection.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = mongo_collection.count_documents({"methods": method})
        print(f"\tmethod {method}: {count}")

    status_check = mongo_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"status check: {status_check}")


if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    db = client.logs
    collection = db.nginx

    logs_stats(collection)
