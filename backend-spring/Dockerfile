FROM maven:3.8.3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:23-jdk
COPY --from=build /target/backend-0.0.1-SNAPSHOT.jar crud-backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "crud-backend.jar"]