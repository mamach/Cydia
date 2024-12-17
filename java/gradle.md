# Installing gradle on Ubuntu

## Install Java
```
sudo apt update
sudo apt install openjdk-11-jdk
```

## Download Gradle
```
VERSION=6.5.1
wget https://services.gradle.org/distributions/gradle-${VERSION}-bin.zip -P /tmp
```

## Unzip and copy to opt
```
sudo unzip -d /opt/gradle /tmp/gradle-${VERSION}-bin.zip
```

## Creating symbolic link

```
sudo ln -s /opt/gradle/gradle-${VERSION} /opt/gradle/latest
```

## Setting up PATH
create a new file named ```gradle.sh``` inside ```/etc/profile.d/```
```
sudo nano /etc/profile.d/gradle.sh
```

with content as follows
```
export GRADLE_HOME=/opt/gradle/latest
export PATH=${GRADLE_HOME}/bin:${PATH}

```

make the script executable
```
sudo chmod +x /etc/profile.d/gradle.sh
```

## Verifying Gradle Installation
```
gradle -v
```
