ur5-[lz# YOLO
You Only Look Once

It has 75 Convolutional Layers

# stride, downsmapling
The network downsamples the image by a factor called the stride of the network. 
If the stride of the network is 32 then input image of size 416x416 will yield an output size of 13x13.

# feature map
* depth wise we have Bx(5+C) entries in feature map
* 5 represents center coordinates, dimensions and confidence
* C represents Class ID
* B is number of bounding boxes

* input image has to be divided into a grid of dimensions equal to that of final feature map.
* this is to identify boudning box responsible for identifying particular object.


# Anchors
* Most object detectors predict log-space transforms, or simply offsets to predefined default bounding boxes.
* These offsets applied to anchor boxes to obtain prediction.
* bbox responsible for detecting the dog will be  the one whose anchor has the highest IoU with the ground truth box.
* Dimensions of the bounding box are predicted by applying a log-space transform to the output and then multiplying  with an anchor.

#NMS
Non Maximum Suppression is to cure the problem of multiple detections of the same image.


# Object Detection

# boudning box regression

# IoU and Non maximum suppression(NMS):



References:
[1]. [Implementing Yolo using pytorch](https://blog.paperspace.com/how-to-implement-a-yolo-object-detector-in-pytorch/)
