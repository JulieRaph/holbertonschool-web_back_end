#!/usr/bin/env python3
"""
Module providing a Python function that
inserts a new document in a collection based on kwargs
"""
from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """Function that insert a new document in the collection"""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
