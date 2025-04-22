#!/usr/bin/env python3
"""
Module to create a function that measures
how long wait_n takes to execute, then divides
this total time by n to obtain the average
time per call
"""

import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    function to measure the average time
    """
    async def async_time_measure():

        start_time = time.time()
        await wait_n(n, max_delay)
        end_time = time.time()
        total_time = end_time - start_time
        return total_time / n
    return asyncio.run(async_time_measure())
