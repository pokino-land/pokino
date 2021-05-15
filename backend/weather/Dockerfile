FROM amazoncorretto:11-alpine-jdk

RUN apk update && apk upgrade
RUN apk add --no-cache bash
RUN apk add curl git

WORKDIR /app
RUN mkdir target

COPY . .

RUN sed -i 's/\r$//' mvnw

RUN ./mvnw install

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "target/weather-0.0.1-SNAPSHOT.jar"]
