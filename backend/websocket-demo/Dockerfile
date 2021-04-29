FROM amazoncorretto:11-alpine-jdk

# Does fail in ./mvnw clean install because it needs to create a folder
# RUN addgroup -S spring && adduser -S spring -G spring
# USER spring:spring

WORKDIR /app
RUN mkdir target

COPY . .

RUN sed -i 's/\r$//' mvnw

RUN ./mvnw install

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "target/websocket-demo-0.0.1-SNAPSHOT.jar"]
