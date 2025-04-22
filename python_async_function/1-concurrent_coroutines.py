#!/usr/bin/env python3
"""
Module to create an asynchronous function that calls wait_random
multiple times in parallel, retrieves the generated delays,
and returns these delays sorted in ascending order
"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Function to call multiple times wait_random
    and return a list with delays generated
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
