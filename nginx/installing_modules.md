# Installing new nginx module
* Copy already installed modules using the following commands
```
nginx -v
```
* To list all the modules available use the following command
```
./configure --help 
```
* To look for specific module use the following command
```
./configure --help | grep keyword
```
* configure with path to modules and flags use the following command.
```
.configure <flags>
```
* Make the source using the following command
```
make
```
* Install using following command
```
make install
```


