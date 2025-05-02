#!/usr/bin/env python3
"""
Module providing a coroutine called async_generator that takes no arguments,
and will loop 10 times each time asynchronously wait 1 second
"""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Function to loop 10 times, wait 1 second, and yield a random number"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
