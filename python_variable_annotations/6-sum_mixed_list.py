#!/usr/bin/env python3
"""
Module providing a function that take mixed type and return a sum of the float
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Function that return the sum of the float
    """
    return sum(mxd_lst)
