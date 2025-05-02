#!/usr/bin/env python3
"""
Module providing a Python function that changes
all topics of a school document based on the name
"""
from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """
    Function  changes all topics of a school document

    Args:
        mongo_collection will be the pymongo collection object
        name (string) will be the school name to update
        topics will be the list of topics approached in the school
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}},
    )
