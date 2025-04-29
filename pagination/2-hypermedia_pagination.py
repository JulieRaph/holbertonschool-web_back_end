#!/usr/bin/env python3
"""
Module to providing a function that implement
get_hyper method and return a dictionary
containing the following key-value pairs
"""
import csv
import math
from typing import List, Tuple, Dict


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Function to return a tuple start index and end index"""
    start_index = (page - 1) * page_size
    end_size = start_index + page_size
    return start_index, end_size


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get a page of the dataset"""
        assert type(page) is int and page > 0
        assert type(page_size) is int and page_size > 0
        start_index, end_index = index_range(page, page_size)

        dataset = self.dataset()
        if start_index >= len(dataset):
            return []
        return dataset[start_index:end_index]

    def get_hyper(
        self, page: int = 1, page_size: int = 10
    ) -> Dict[int, List[List]]:
        """
        Function that return a dictionary
        containing the following key-value pairs
        """
        data = self.get_page(page, page_size)

        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)

        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
