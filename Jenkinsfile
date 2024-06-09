pipeline {
    agent any

    environment {
        KUBECONFIG    = '/var/jenkins_home/prod'
        namespace = "${namespace}"
        dockerImage = "${image}"
        deployment = "${deployment}"
    }

    tools {
        nodejs 'NODEJS_JENKINS'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Unit Tests') {
            steps {
                echo 'Running unit tests...'
                // Uncomment the line below if you want to run unit tests
                // sh 'npm test'
            }
        }
        stage('Deploy to GitLab') {
            steps {
                echo 'Deploying to GitLab...'
                sh 'docker login registry.gitlab.com -u odsdaniel99@gmail.com -p Dsol?2603'
                sh 'docker build --no-cache -t registry.gitlab.com/all-docker/image/${dockerImage} .'
                sh 'docker push registry.gitlab.com/all-docker/image/${dockerImage}'
                sh 'docker rmi registry.gitlab.com/all-docker/image/${dockerImage}'
                sh 'rm -rf *'
                sh 'docker builder prune --force'
            }
        }
        stage('Update Kubernetes Cluster') {
            steps {
                echo 'Updating Kubernetes cluster...'
                sh 'kubectl rollout restart deployment/${deployment} --namespace=${namespace}'
            }
        }
    }
}
