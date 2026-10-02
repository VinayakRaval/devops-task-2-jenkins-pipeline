pipeline {

    agent any

    environment {
        IMAGE_NAME = 'devops-task-2-jenkins-pipeline'
        CONTAINER_NAME = 'devops-task-2-app'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub...'

                git branch: 'main',
                    url: 'https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image...'

                sh '''
                    docker build -t ${IMAGE_NAME}:latest .
                '''
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Docker image...'

                sh '''
                    docker rm -f ${CONTAINER_NAME}-test || true

                    docker run -d \
                        --name ${CONTAINER_NAME}-test \
                        -p 8082:80 \
                        ${IMAGE_NAME}:latest

                    sleep 5

                    curl -f http://localhost:8082

                    docker rm -f ${CONTAINER_NAME}-test
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'

                sh '''
                    docker rm -f ${CONTAINER_NAME} || true

                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p 8081:80 \
                        ${IMAGE_NAME}:latest
                '''
            }
        }
    }

    post {
        success {
            echo '======================================'
            echo 'CI/CD Pipeline completed successfully!'
            echo 'Application deployed on port 8081.'
            echo '======================================'
        }

        failure {
            echo 'CI/CD Pipeline failed!'
        }
    }
}
