#!/usr/bin/env python3
"""
Module to providing a function named that
takes two integer arguments and return
return a tuple of size two containing a
start index and an end index
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Function to return a tuple start index and end index"""
    start_index = (page - 1) * page_size
    end_size = start_index + page_size
    return start_index, end_size
