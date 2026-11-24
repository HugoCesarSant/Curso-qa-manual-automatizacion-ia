pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
