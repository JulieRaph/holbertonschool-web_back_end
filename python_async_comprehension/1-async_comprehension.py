#!/usr/bin/env python3
"""
Module to providing a coroutine will collect 10 random
numbers using an async comprehensiing and
return the 10 random numbers
"""

import asyncio
import random
from typing import AsyncGenerator, List


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Function will collect 10 random numbers with
    async comprehension and return 10 random numbers
    """
    return [value async for value in async_generator()]
