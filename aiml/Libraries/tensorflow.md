Tensorflow
* purposely built for neural networks/deep learning
* graph of network operations
* distributing process over cpus /network
* key competitor to Apache Spark
* can run in computer/mobile device.
* saprk(scala), Tensorflow(C++)
* Tensorflow works on GPU's
*

# playground tensorflow
https://playground.tensorflow.org/


# Tensorflow Basics
* conda install tensorflow
* built for linux
* use tensorflow-gpu for gpu based machine
* Tensor is collection of numbers in array/matrix form.
## creating neural network with tensorflow
* load up training and test data
*  Construct graph describing our neural network
* Associate with optimizer(Gradient Descent) to the network
* Run the optimizer with your training data.
* Evaluate trained network with testing data.


# Normalization
* neural networks work best if your input data is normalized, i.e., zero mean and unit variance.
* scikit_learn StandardScalar can do this for you
* many data sets are normalized to begin with like mnist.


Keras
* Highlevel apis to deep learning
* Integration with scikit learn
* Fast Prototyping
