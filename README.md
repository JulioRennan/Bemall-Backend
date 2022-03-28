
Crie um container docker.

```docker run --name bemall-postgres-db -e POSTGRES_PASSWORD=240301 -p 5432:5432 -d postgres```
 

 ```yarn typeorm migration:run```