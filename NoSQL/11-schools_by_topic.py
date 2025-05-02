#!/usr/bin/env python3
"""
Module providing a Python function that returns
the list of school having a specific topic
"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """
    Function that return the list with specific topic

    Args:
        mongo_collection will be the pymongo collection object
        topic (string) will be topic searched
    """
    return list(mongo_collection.find({"topics": topic}))
