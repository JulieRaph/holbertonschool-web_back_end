#!/user/bin/env python3
"""
Module providing a function that take a float multiplier
as argument and return the float multiplied
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Function to return a float multiplied"""
    def multiplier_function(value: float) -> float:
        return value * multiplier
    return multiplier_function
