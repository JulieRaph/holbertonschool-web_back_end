#!/usr/bin/env python3
"""
Module to providing a Python function that lists all documents in a collection
"""

from pymongo import MongoClient


def list_all(mongo_collection):
    """List all documents in a MongoDB Collection"""
    return list(mongo_collection.find())
