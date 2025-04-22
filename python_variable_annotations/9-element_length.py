#!/usr/bin/env python3
"""
Module providing a function to
Annotate the below function parameters
and return values with the appropriate types
"""
from typing import Sequence, List, Tuple, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Function to return types"""
    return [(i, len(i)) for i in lst]
