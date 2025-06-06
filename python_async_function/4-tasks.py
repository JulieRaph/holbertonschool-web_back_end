#!/usr/bin/env python3
"""
Module to call task_wait_random and generate a new asyncio.Task
"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Function to call multiple times wait_random
    and return a list with delays generated
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
