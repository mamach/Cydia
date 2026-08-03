# Deep Learning
* CNN, RNN, Perceptron
* Gradient Descent, autodiff, softmax
* Gradient Descent - ML Optimisation technique to find optimal solution.
Local Minima, optimal minima
* autodiff: first partial derivative approximation, brute force is very expensive.
Softmax:
* converts the final weights into probability, used for classification.
h = 1/(1+ e^(theta*x))

Artificial Neural Networks:
LTU - Linear Threshold Unit
Perceptron: can learn reinforcing weights that lead to correct behavior during training.
Bias:
 
MLP(Multi Layer Perceptron):
hidden layers, this is a deep neural network.
# Modern Deep Neural Network:
Replace the activation function with something better(ReLU)
apply softmax at output
Training using gradient descent.

# playground tensorflow
https://playground.tensorflow.org/

# Backpropagation(Gradient descent using reverse-mode autodiff)
* training MLP weights.
* Compute the output error
* Compute how much each neuron in previous hidden layer contributed.
* Back propagate that error in reverse pass
* Tweak weights to reduce the error using gradient descent.


Activation Functions(Rectifier)
* ReLU(Rectified Linerar Unit)
* ELU(Exponential Linear Unit)
* Hyperbolic tangent
* Logistic Function


Optimization Functions
* Momentum Optimization
* Neserov Accelearated Gradient
* RMSProp(Adaptive Learning Rate)
* Adam(Adaptive Moment Optimization)(Popular choice today)
