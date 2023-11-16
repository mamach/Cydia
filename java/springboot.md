- easy to create stand-alone production grade spring based applications.
- springboot sits on top of spring.
- springboot comes with embedded servers like tomcat, jetty etc.
- no need to waste time on boiler plate code, xml configuration, adding jar files, deploying in server etc.
- 


# Problems with Spring
- Needs lot of configuration.
- e.g. for a web app with db you need to use spring MVC and spring data JPA. 
	- create maven project and add all the dependencies for the necessary components like spring MVC, spring data JPA in POM file.		
	- MVC configuration like view resolver, dipatcherServelet, component scan.
	- configuration for db support like datasource, transaction manager.
	- add all the properties of database and finally code.

# How springBoot solves?
- sits on top of spring
- need to tell springboot the type of application so that spring boot adds all jar files and does app configuration.
- to develop springboot using maven following steps have to be followed
	- add the starter package to Maven POM file.
	- add properties like database url in properties file
	- write code :)



# Springboot Componentes
SpringBoot consists of 3 main components
- Starter Parent
	- this is a special starter that provides common configuration. Following dependency should be added to pom.xml
	-
```
<parent>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-parent</artifactId>
<version>2.1.4.RELEASE</version>
</parent>
```

- Starter Package
	- spring boot provides some starter packages that need to be added in Maven file, these will do the necessary configuration.
	- e.g., spring-boot-starter-web, spring-boot-starter-data-jpa, spring-boot-starter-test
```
<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-web</artifactId>
</dependency>

<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-test</artifactId>
</dependency>
```
- Auto Configuration
Based on dependencies in the classpath, springboot tries to configure by defaults. This is known as auto configuration. 
e.g., springboot automatically configures the dispatcherservlet, viewresolver, etc.
e.g., if spring-data-jpa-starter added springboot will automatically configure the necessary beans like transactionManager, EntityManager etc.

# Embedded Servers
- springboot comes with webservers like tomcat and jetty installed.
- when web starter is used by default tomcat configuration is added.
