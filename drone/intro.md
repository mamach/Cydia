# Introduction
Drone can do Photography, Racing, Micro Free style etc.
# Working Principle

# Design

# Inertial Measurement Unit

# Sensors and Calibration

# Components
![Drone Components](./components.jpg)
* Frame
* Motors
* ESC(Electronic Speed Controller)
* Propeller
* Battery
* Flight Controller
* RC Receiver
* PDB(Power Distribution Board)

* FPV Camera
* Video Transmitter/VTX
* 5.8 GHz Antenna

* buzzer
* LED
* HD Camera
* GPS

## Frame
https://oscarliang.com/diatone-2018-gt-m200-frame/

## PDB
Use of PDB these days is negated by FC's and ESC's and AIO(All in one) other components.
Make sure PDB is necessary

## Flight Controller
* FC is brain of the drone. With sensors on board FC can understand how drone is moving.
* Using data provided by these sensors, the FC uses algorithms to calculate how fast each motor should be spinning using stick inputs of TX.
* Most of the wiring will be done around FC in Drone.
* FC should be connected with RX.
* Each of the ESC signal and ground wires need to be connected to FC.
* Some FC supports FPV Camera feed TXed through FC.

## Receiver(RX)
* Buy RX that is compatible with TX.
* PPM or digital serial protocol is being used nowadays.
* Some FC's actually have integrated receivers.
* Never supply 5v to RX that only requires 3.3v.


## ESC(Electronic Speed Controller)
* ESC interprets signals from FC, and translates those signals into phased electrical pulses to determine the speed of brushless motor.
* Make sure FC and ESC uses same protocol DShot600
* Current rating of ESC must be higher than amperage  drawn by motor and props.
* ESC will have 4 input and 3 output
* props spin easier in free air and uses 20-30% less current in flight.


## Motors
* Motors are the main drain of battery.
* Getting efficient combination of motor and propeller is important.
* Motor speed is rated in kV. Lower kV Motor will produce more torque. Higher kV will spin faster.
* Ensure ESC's are rated to withstand amperage of motors.
* Motor rotation can be set in BL_Heli configurator.


## Propeller
* Thousands types of propeller.
* Heavier propeller required more torque.
* blades with higher Aoa


# PID Implementation and Turning

# Flight Controller

## Ardupilot

## APM 2.X and 3.X

## Hobby King KK5.0

## CC3D

## Pixhawk

# Remote Controller

# Quadcopter Dynamics



# References
[1]. [Theory, Design, and Applications of Unmanned Aerial Vehicles- by A. R. Jha Ph.D. (Author),2016]( https://www.amazon.com/s/ref=dp_byline_sr_book_1?ie=UTF8&text=A.+R.+Jha++Ph.D.&search-alias=books&field-author=A.+R.+Jha++Ph.D.&sort=relevancerank )
[2]. [Handbook of Unmanned Aerial Vehicles- Editors: Valavanis, K., Vachtsevanos, George J.(Eds.), 2014]()
[3]. [Jane's Unmanned Aerial Vehicles and Targets -by Kenneth Munson (Editor), 2010](https://www.amazon.in/s/ref=dp_byline_sr_book_1?ie=UTF8&field-author=Kenneth+Munson&search-alias=stripbooks)
[4].[https://oscarliang.com/build-a-quadcopter-beginners-tutorial-1/](https://oscarliang.com/build-a-quadcopter-beginners-tutorial-1/)
[5].[https://blog.owenson.me/build-your-own-quadcopter-flight-controller/](https://blog.owenson.me/build-your-own-quadcopter-flight-controller/)
[6].[http://www.starlino.com/imu_guide.html](http://www.starlino.com/imu_guide.html)
[7].[https://www.intorobotics.com/accelerometer-gyroscope-and-imu-sensors-tutorials](https://www.intorobotics.com/accelerometer-gyroscope-and-imu-sensors-tutorials)
[8].[http://droneinsider.org/the-aerodynamics-of-multirotors/](http://droneinsider.org/the-aerodynamics-of-multirotors/)
[9].[https://blog.owenson.me/build-your-own-quadcopter-flight-controller/](https://blog.owenson.me/build-your-own-quadcopter-flight-controller/)
[10].[https://challenge.toradex.com/projects/10078-autopilot-quadcopter](https://challenge.toradex.com/projects/10078-autopilot-quadcopter)
[11].[http://andrew.gibiansky.com/blog/physics/quadcopter-dynamics/](http://andrew.gibiansky.com/blog/physics/quadcopter-dynamics/)
[12].[http://blog.owenson.me/build-your-own-quadcopter-flight-controller/](http://blog.owenson.me/build-your-own-quadcopter-flight-controller/)