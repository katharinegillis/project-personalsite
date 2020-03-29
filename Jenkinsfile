pipeline {
    environment {
        discordWebhookURL = "https://discordapp.com/api/webhooks/693908434063458316/dIjHQzOYQNdlw6eXxVNT6ZlzpqFEfg_SwgzIJDyKz3e1A1481FICpz7Up0xXxPzNAr61"
        image = "registry.ops.atmosol.net/personalsite"
        registryCredentials = "docker-registry-jenkins"
        registryURL = "https://registry.ops.atmosol.net"
        productionHost = "198.199.98.217"
        productionURL = "katiecordescodes.com"
        productionPath = "/home/kcordes/jenkins-dockers/personalsite"
    }
    agent any
    stages {
        stage("Start") {
            steps {
                discordSend(webhookURL: discordWebhookURL, description: "Build started.", link: env.BUILD_URL)
            }
        }
        stage("Build image") {
            steps {
                script {
                    docker.withRegistry(registryURL, registryCredentials) {
                        sh "docker-compose -f docker-compose.build.yml build"
                    }
                }
            }
        }
        stage("Upload image") {
            steps {
                script {
                    docker.withRegistry(registryURL, registryCredentials) {
                        sh "docker push $image"
                    }
                }
            }
        }
        stage("Deploy to production") {
            steps {
                script {
                    def remote = [:]
                    remote.name = "production"
                    remote.host = productionHost
                    remote.allowAnyHosts = true

                    withCredentials([sshUserPrivateKey(credentialsId: "production-jenkins", keyFileVariable: "keyfile", passphraseVariable: "passphrase", usernameVariable: "username")]) {
                        remote.user = username
                        remote.identityFile  keyfile
                        remote.passphrase = passphrase

                        sshCommand remote: remote, command: "mkdir -p $productionPath"
                        sshPut remote: remote, from: ".env-dist", into: "$productionPath/.env"
                        sshCommand remote: remote, command: "sed -i s/PERSONALSITE_URL=/PERSONALSITE_URL=$productionURL/g $productionPath/.env"
                        sshPut remote: remote, from: "docker-compose.yml", into: "$productionPath/docker-compose.yml"
                        sshPut remote: remote, from: "docker-compose.prod.yml", into: "$productionPath/docker-compose.prod.yml"
                        sshPut remote: remote, from: "docker-compose.prod-ssl.yml", into: "$productionPath/docker-compose.prod-ssl.yml"
                        sshCommand remote: remote, command: "docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml pull; docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml up -d --remove-orphans"
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
            discordSend(webhookURL: discordWebhookURL, description: "Build completed.", link: env.BUILD_URL, result: currentBuild.currentResult)
        }
        failure {
            discordSend(webhookURL: discordWebhookURL, description: "Build failed.", link: env.BUILD_URL, result: currentBuild.currentResult)
        }
    }
}