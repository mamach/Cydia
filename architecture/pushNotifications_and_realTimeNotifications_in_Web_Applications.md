# Intro
* Extensible, scalable, fault tolerant and high performance system notification handling and processing in any web based application running on 
browser.

# Notification Scenarios

## Transactionl Notifications
* Event Triggered
* Pending Tasks
* Change of status

## System Notifications
* Time sensitive reminders
* Upcoming Events
* News and Announcements
* System Upgrades
* Security alerts.

## User Notifications
* One to one communications
* Asking Feedback

# Types of Notifications
* Onpage/ Real Time Notifications
	* Triggered by server when application is open.
	* User is connected and using the application.
	* Usually opens a browser pop-up or displays a message within the application window.
	* Message delivery managed by the application itself.

* Off Page/ Push Notifications
	* Pushed by the server even when application is not running on browser.
	* User disconnected and not using the application.
	* Opens bubble outside application window.
	* Message delivery managed by individual browser's push service.

* Real time notifications -- using socket connection between Node.js server and Angular application.
* Push Notifications -- using Google FCM registers the Application's service worker on chrome to enable push notifications.

# Components
* Spring boot application(:8080)
	* A rapid application development platform.
* Spring Kafka
	* Supports
* Apach Zookeeper(:9092)
* NodeJS Server(:3000)
* Angular Web App(:8081)
* MongoDB(:27017)

# Architecture
* 

# Data Flow Diagram 
* 

# References
* [Push Notifications and Real Time 
Notifications in Web Applications](https://medium.com/@hallosushant/push-notifications-and-real-time-notifications-in-web-application-89daeafbfe53)


Situations:
* When ever a ticket is assigned, analyst should get notified.
* When ever a ticket is assigned to a workflow group supervisor should get the notifications.
* When ever a ticket is closed requestor should receive a notifications.

# Persisting Data in App user settings 
action(from angular app) -> Rule Engine -> Producer -> Kafka -> Consumer(Database)

# polling/web sockets app user settings




