#!/usr/bin/env python3
"""
Module providing a function that mixed type and return a tuple
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Function that return a tuple"""
    return (k, v ** 2)
