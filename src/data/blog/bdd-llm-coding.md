---
author: Sat Naing
pubDatetime: 2022-09-23T15:22:00Z
modDatetime: 2025-06-13T16:52:45.934Z
title: LLM-assisted coding with BDD
slug: bdd-llm-coding
featured: false
draft: false
tags:
  - llm
  - bdd
description: How to .
---

How to code with LLMs is a _hot_ topic in programmer circles.

Many programmers (myself included) have been experimenting with LLM-assisted coding/pair programming since LLMs became generally available.

If you search for "vibe coding" on [YouTube](https://www.youtube.com/results?search_query=vibe+coding) you'll find _thousands_ of videos. On [Hacker News](https://hn.algolia.com/?q=vibe+coding) there are _643_ stories. That's just 6 months after [Andrej Karpathy](https://x.com/karpathy/status/1886192184808149383) gave the practice a name.

> Everyone talks about it, nobody really knows how to do it, everyone thinks everyone else is doing it, so everyone claims they are doing it.

## Software defects

Let's talk about _🐞 software defects 🐞_. Would you agree with the following statement?

> Ambiguous requirements breed assumptions, and assumptions breed bugs.

I've dedicated over a decade of my career to the _requirements ambiguity trap_. I've trained hundreds of teams in how to _discover_ ambiguities so they can make _fewer assumptions_ and produce _fewer defects_. Here is how it works:

1. List a few _concrete_ examples that illustrate a new requrement.
2. Express each example as a triple of _context_, _action_ and _expected outcome_.
3. Run each example with a test runner[^3] that understands the format of these examples.

Step 1 and 2 uncover a _ton_ of ambiguities and assumptions. It also tends to bring up new questions. These steps can be repeated until you believe you've explained the requirement and removed enough ambiguity.

Step 3 will obviously fail straight away, but when the requirement is implemented and all the tests are passing, you'll have a reasonably good indicator that you're not way off.

## Popping the LLM cherry

This process of eliminating ambiguity with concrete examples worked really well in the pre-LLM era, and it works equally well with LLMs. That's not surprising - it's a language-oriented approach.

The nice thing about it is that you're no longer beholden to the few obscure tools that know how to run _Given-When-Then_ style functional tests. You can just throw the examples at an LLM and ask it to translate them to tests in your favourite test runner.

There is another bonus - and this is the cherry on the cake for all you vibe coding enthusiasts.

> LLMs produce _much_ better output when you provide examples in the context

Your examples actually produce _two_ artifacts - the tests _and_ the code. The tests serve as a yardstick for the correct implementation.

You should still provide the LLM with additional context from your `CLAUDE.md` or similar, technical details and so on - that just helps it along even further.

## More details

[^1]: This works best with a group where someone understands the problem, someone knows how to implement it, and someone knows how to verify that it's done right. It could be a single person, or it might take up to 5 people.

[^2]: If you end up with too many examples, simplify or split the requirement.

[^3]: It doesn't matter what tool you use. It doesn't have to be [Cucumber](https://cucumber.io).
