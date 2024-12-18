# Intro
- LLM are next token prediction models.
- For a given text, the LLM will generate N next token options.
- Each option has probability score.
- Top-k sampling narrows the N options to the highest probability k options.
- Mask out the non-top-k options and apply softmax.
- Finally divide the results by a temperature parameter.
	- temperature > 1 is more randomness.
	- temperature < 1 is less randomness.

- Finally LLM picks the 1 highest probability token as our next token.

## Strategies
- Top-k sampling
- temperature scaling

## Summary
- Generate N next token options.
- Picks top-k options
- Masks out non-top-k options.
- applies soft max.
- scales values by temperature param(for randomness)


# References
- https://x.com/virattt/status/1800291202589196720
