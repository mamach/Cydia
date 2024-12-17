# SecureCopy

## From host to local
```
scp username@domain:<paht_of_the_file>  <path_of_file_to_copy> 
```

## From local to host
```
scp <path_of_file_to_copy> username@domain:<paht_of_the_file>
```

## From local to host (with pem file)

```
scp -i <paht_to_pem_file> <path_of_file_to_copy> username@domain:<paht_of_the_file>
```

## From host to local(with pem file)

```
scp -i <paht_to_pem_file> username@domain:<paht_of_the_file> <path_of_file_to_copy>
```
