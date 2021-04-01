# Demo
This is a simple demo backend spring boot application which will serve as a 
template setup for following services.

## What it does
It exposes an endpoint on
```
localhost:8080/accounts
```
which will return a list of persons.


## How To Build
### Without Docker
`./mvnw clean install`  
This will place a .jar file in the /target directory.

### With Docker
`docker image build -t demo:0.1 .`
