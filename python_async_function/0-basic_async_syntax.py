#!/usr/bin/env python3
"""
Module to create an asynchronous function that generates a random delay,
then returns its value
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Function to wait a delay and return time of the delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
