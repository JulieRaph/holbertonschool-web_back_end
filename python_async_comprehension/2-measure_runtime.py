#!/usr/bin/env python3
"""
Module to providing an execution of async_comprehension
4 times in parallel use asyncio.gather
"""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime(t: int = 4) -> float:
    """
    Function to measure the total runtime of
    executing async_comprehension 4 times in parallel
    """
    start_time = time.time()
    await asyncio.gather(*[async_comprehension() for _ in range(t)])
    end_time = time.time()
    total_time = end_time - start_time
    return total_time
