---
author: Aslak Hellesøy
pubDatetime: 2025-07-23T09:00:00Z
modDatetime: 2025-07-23T09:00:00Z
title: Vibe coding with Examples
slug: vibe-coding-with-examples
featured: false
draft: false
tags:
  - llm
  - bdd
  - agentic
description: How concrete examples help LLMs write fewer defects
---

Vibe coding is a hot topic. Even the [mainstream media](https://www.theguardian.com/technology/2025/mar/16/ai-software-coding-programmer-expertise-jobs-threat) is talking about it.

> Everyone talks about it, nobody really knows how to do it, everyone thinks everyone else is doing it, so everyone claims they are doing it.

I think most people are making a complete mess out of it. Code is churned out at an insane speed,
but that isn't productive.

> Measuring software productivity by lines of code is like measuring progress on an airplane by how much it weighs. --Bill

If you search for "vibe coding" on [YouTube](https://www.youtube.com/results?search_query=vibe+coding) you'll find _thousands_ of videos.
On [Hacker News](https://hn.algolia.com/?q=vibe+coding) there are _643_ stories.
That's just 6 months after [Andrej Karpathy](https://x.com/karpathy/status/1886192184808149383) gave the practice a name.

I've been working on how to remove ambiguity and misunderstandings from software requirements since 2005, and the techniques I have discovered and helped popularise are _very_ relevant to vibe coding.

I'm throwing my hat in the ring.

## Bugs love ambiguity

I'm sure you would agree with the following statement:

> Ambiguous requirements breed assumptions, and assumptions breed bugs.

This of course applies to LLMs too. Garbage in, garbage out.

I had seen too many software projects fail because of miscommunication and misunderstandings.
Big, up-front requirements didn't work either, so I started looking for a better way.

Since then I have dedicated a decade to this endeavour - training over 50 software teams in how to do it quickly and effectively.
I've written a book about it, and I've spoken at conferences about it.

My discover was that the combination of _stakeholder collaboration_,
_concrete examples_ and _executable specifications_ was a magic cocktail
that helped software teams procude fewer defects and less rework.

I will give you the gist of how that works.

## Example Mapping

The technique is called [example mapping](https://cucumber.io/blog/bdd/example-mapping-introduction/), and it works like this:

- Work with small, incremental requirements, one at a time.
- For each new requirement, come up with a few _concrete_ examples that illustrate it.
- Express each example as a triple of _context_, _action_ and _expected outcome_.

You rinse and repeat until everyone has understood and agreed on the acceptance criteria.

These examples serve two purposes:

- Immediately: uncover a _ton_ of ambiguities and assumptions.
- Later: turn them into automated tests.

You can watch an explanation of the technique here:

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/OhDUlzpbeoc?si=pnYInoCGaTPExwKn&amp;start=480"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

## Concrete examples

After an example mapping session, you might end up with examples like this (I've only included the first example from the video):

```
We're not allowing more than 70% of the seats in the train to be reserved.
For the examples below, an x means a seat is reserved, a . means a seat is available.
A b represents a seat reserved by the current booker.

# Successful reservation
Given two train cars with the following seats
  (xxxxx) (x....)
  (xxxxx) (x....)
When a traveller reserves 3 seats
Then seats should be:
  (xxxxx) (xbb..)
  (xxxxx) (xb...)
```

If you're familiar with [Gherkin](https://cucumber.io/docs/gherkin/), you'll notice that this is not valid Gherkin. It's not meant to be.
Whether or not you're familiar with Gherkin, I'm sure you'll understand what the example is trying to express.

And so will LLMs...

## Giving the examples to the LLM

Now that we have an example (or maybe five), we can give it to the LLM.

```d2 sketch
direction: right
Examples {shape: document}
LLM {shape: oval}
Tests {shape: document}
Code {shape: document}
Examples -> LLM: 1: context {style.animated: true}
LLM -> Tests: 1: generates {style.animated: true}
Tests -> LLM: 2: context {style.animated: true}
LLM -> Code: 2: generates {style.animated: true}
Tests -> Code: 3: verify {style.animated: true}
```

1. Ask the LLM to write tests based on your examples
2. Ask the LLM to to write code based on your tests (_and_ your examples)
3. Run the tests to verify the code

There is another buzzword you might have heard of - [context engineering](https://simonwillison.net/2025/Jun/27/context-engineering/).

That's what we're doing here.
LLMs produce _much_ better output when you provide examples in the context.

There is another bonus - and this is the cherry on the cake for all you vibe coding enthusiasts.

> The requirements are hard-wired to the code through concrete examples, aka _executable specifications_.

Your examples actually produce _two_ artifacts - the tests _and_ the code. The tests serve as a yardstick for the correct implementation.

You should still provide the LLM with additional context from your `CLAUDE.md` or similar, technical details and so on - that just helps it along even further.

## More details

[^1]: This works best with a group where someone understands the problem, someone knows how to implement it, and someone knows how to verify that it's done right. It could be a single person, or it might take up to 5 people.

[^2]: If you end up with too many examples, simplify or split the requirement.

[^3]: It doesn't matter what tool you use. It doesn't have to be [Cucumber](https://cucumber.io).
