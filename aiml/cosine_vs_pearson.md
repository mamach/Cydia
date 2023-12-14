# Cosine vs Pearson
- Use case of cosine for LLM
- Both the metrics used to measure relationships in data.
- Cosine is used in LLM extensively.


## Pearson
- Pearson measures the linear relationship between two vectors, while Cosine measures the angle between two vectors.
- Pearson doesnot consider the scale.
- Null is treated like any other value.

## Cosine
- Cosine captures the directional similarity which is unrelated to magnitude.
- Cosine consider the scale.
- Null or Zeros are ineffective while computing the metric. Because cosine focuses on non-zero dimensions.
- Cosine helps determine how similar one textis to another based on content. 


That is why Cosine and Pearson give different results for the same data. 

example using python
```
from scipy.stats import pearsonr
from sklearn.metrics.pairwise import cosine_similarity

x = np.array([1,2,3,4])
y = np.array([201, 202, 203, 204])

print(f"Pearson: {pearsonr(x,y)[0]}")
print(f"Cosine: {cosine_similarity(x.reshape(1, -1), y.reshape(1,-1))[0][0]:.3f}")
```

# References
[1]. [Why Cosine simialrty used in LLM](https://twitter.com/levikul09/status/1724733257063756268)
