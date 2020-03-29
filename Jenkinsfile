pipeline {
    environment {
        DISCORD_WEBHOOK_URL = credentials('discord-jenkins-webhook')
        IMAGE = "registry.ops.atmosol.net/personalsite"
        REGISTRY_CREDENTIALS = "docker-registry-jenkins"
        REGISTRY_URL = "https://registry.ops.atmosol.net"
        DEPLOY_HOST = "198.199.98.217"
        DEPLOY_URL = "katiecordescodes.com"
        DEPLOY_PATH = "/home/kcordes/jenkins-dockers/personalsite"
    }
    agent any
    stages {
        stage("Start") {
            steps {
                discordSend(webhookURL: DISCORD_WEBHOOK_URL, description: "Build started.", link: env.BUILD_URL)
            }
        }
        stage("Build image") {
            steps {
                script {
                    docker.withRegistry(REGISTRY_URL, REGISTRY_CREDENTIALS) {
                        sh "docker-compose -f docker-compose.build.yml build"
                    }
                }
            }
        }
        stage("Upload image") {
            steps {
                script {
                    docker.withRegistry(REGISTRY_URL, REGISTRY_CREDENTIALS) {
                        sh "docker push $IMAGE"
                    }
                }
            }
        }
        stage("Deploy to production") {
            steps {
                script {
                    def remote = [:]
                    remote.name = "deploy"
                    remote.host = DEPLOY_HOST
                    remote.allowAnyHosts = true

                    withCredentials([sshUserPrivateKey(credentialsId: "production-jenkins", keyFileVariable: "keyfile", passphraseVariable: "passphrase", usernameVariable: "username")]) {
                        remote.user = username
                        remote.identityFile = keyfile
                        remote.passphrase = passphrase

                        sshCommand remote: remote, command: "mkdir -p $DEPLOY_PATH"
                        sshPut remote: remote, from: ".env-dist", into: "$DEPLOY_PATH/.env"
                        sshCommand remote: remote, command: "sed -i s/PERSONALSITE_URL=/PERSONALSITE_URL=$DEPLOY_URL/g $DEPLOY_URL/.env"
                        sshPut remote: remote, from: "docker-compose.yml", into: "$DEPLOY_PATH/docker-compose.yml"
                        sshPut remote: remote, from: "docker-compose.prod.yml", into: "$DEPLOY_PATH/docker-compose.prod.yml"
                        sshPut remote: remote, from: "docker-compose.prod-ssl.yml", into: "$DEPLOY_PATH/docker-compose.prod-ssl.yml"
                        sshCommand remote: remote, command: "cd $DEPLOY_PATH; docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml pull; docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml up -d --remove-orphans"
                    }
                }
            }
        }
    }
    post {
        always {
            sh "docker image prune -f"
        }
        success {
            discordSend(webhookURL: DISCORD_WEBHOOK_URL, description: "Build completed.", link: env.BUILD_URL, result: currentBuild.currentResult)
        }
        failure {
            discordSend(webhookURL: DISCORD_WEBHOOK_URL, description: "Build failed.", link: env.BUILD_URL, result: currentBuild.currentResult)
        }
    }
}