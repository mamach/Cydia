# Install python3 in docker container
https://vitux.com/install-python3-on-ubuntu-and-set-up-a-virtual-programming-environment/

# build docker image from docker file
docker build -t flask_web:latest .

# running docker container from a image
docker run -p 8000:8000 -d  flask_web
docker run -it -d -p 8000:8000 ubuntu:18.04

# ssh to a container
ubuntu
* docker exec -it <container id> bash
alpine
* docker exec -it <container id> bin/sh


# create docker image from container
* docker commit <container id>
* docker tag <image id> tag_name

# copy content to container
docker cp foo.txt mycontainer:/foo.txt
docker cp mycontainer:/foo.txt foo.txt
## multiple files
docker cp src/. mycontainer:/target
docker cp mycontainer:/src/. target

# ocr server
docker exec -it b20 /bin/bash
cd projects/image2text/
python3 main.py  -i sample/1579761520485_snip_1.png

# start a stopped container
docker start -ai <container_id>
