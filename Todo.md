-   Implement Redis at express
-   Implement Paste Expiration using Cron
-   Deploy to cloud

When Someone Accesses Public Route

Request -> Redis -> Backend -> Redis -> Client (When there is a miss)
Request -> Redis -> Client (When there is a hit)
