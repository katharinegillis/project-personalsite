pipeline {
    environment {
        DISCORD_WEBHOOK_URL = credentials('discord-jenkins-webhook')
        IMAGE = "registry.ops.katiecordescodes.com/personalsite"
        REGISTRY_CREDENTIALS = "docker-registry-jenkins"
        REGISTRY_URL = "https://registry.ops.katiecordescodes.com"
        DEPLOY_HOST = "198.199.98.217"
        DEPLOY_URL = "katiecordescodes.com"
        DEPLOY_PATH_ROOT = "/home/kcordes/jenkins-dockers"
        DEPLOY_PATH = "/home/kcordes/jenkins-dockers/personalsite"
        DEPLOY_CREDENTIALS = "katie-ubuntu-1804-docker-jenkins"
    }
    agent any
    stages {
        stage("Start") {
            steps {
                discordSend(webhookURL: DISCORD_WEBHOOK_URL, description: "Build started.", link: env.BUILD_URL, title: "${env.JOB_NAME} #${currentBuild.number}", result: "SUCCESS")
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

                    sh "echo '#!/usr/bin/env bash' > temp.sh"
                    sh "echo 'mkdir -p $DEPLOY_PATH' >> temp.sh"
                    sh "echo 'cp -f $DEPLOY_PATH_ROOT/temp/.env-dist $DEPLOY_PATH/.env' >> temp.sh"
                    sh "echo 'cp -f $DEPLOY_PATH_ROOT/temp/docker-compose.yml $DEPLOY_PATH/docker-compose.yml' >> temp.sh"
                    sh "echo 'cp -f $DEPLOY_PATH_ROOT/temp/docker-compose.prod.yml $DEPLOY_PATH/docker-compose.prod.yml' >> temp.sh"
                    sh "echo 'cp -f $DEPLOY_PATH_ROOT/temp/docker-compose.prod-ssl.yml $DEPLOY_PATH/docker-compose.prod-ssl.yml' >> temp.sh"
                    sh "echo 'sed -i s/PERSONALSITE_URL=/PERSONALSITE_URL=$DEPLOY_URL/g $DEPLOY_PATH/.env' >> temp.sh"
                    sh "echo 'chown :kcordes-jenkins $DEPLOY_PATH/*' >> temp.sh"
                    withCredentials([usernamePassword(credentialsId: REGISTRY_CREDENTIALS, usernameVariable: 'username', passwordVariable: 'password')]) {
                        sh "echo '$password' > dockerlogin.txt"
                        sh "echo 'cat $DEPLOY_PATH_ROOT/temp/dockerlogin.txt | docker login --username $username --password-stdin $REGISTRY_URL' >> temp.sh"
                    }
                    sh "echo 'cd $DEPLOY_PATH' >> temp.sh"
                    sh "echo 'docker-compose -f $DEPLOY_PATH/docker-compose.yml -f $DEPLOY_PATH/docker-compose.prod.yml -f $DEPLOY_PATH/docker-compose.prod-ssl.yml pull' >> temp.sh"
                    sh "echo 'docker-compose -f $DEPLOY_PATH/docker-compose.yml -f $DEPLOY_PATH/docker-compose.prod.yml -f $DEPLOY_PATH/docker-compose.prod-ssl.yml up -d --remove-orphans' >> temp.sh"
                    sh "echo 'rm -rf \$HOME/.docker/config.json' >> temp.sh"

                    sh "tar -acf temp.tar.gz dockerlogin.txt temp.sh .env-dist docker-compose.yml docker-compose.prod.yml docker-compose.prod-ssl.yml"

                    withCredentials([sshUserPrivateKey(credentialsId: DEPLOY_CREDENTIALS, keyFileVariable: "keyfile", passphraseVariable: "passphrase", usernameVariable: "username")]) {
                        remote.user = username
                        remote.identityFile = keyfile
                        remote.passphrase = passphrase

                        try {
                            sshPut remote: remote, from: "temp.tar.gz", into: "$DEPLOY_PATH_ROOT/temp.tar.gz", failOnError: true
                        } catch (Exception e1) {
                            sleep 5
                            try {
                                sshPut remote: remote, from: "temp.tar.gz", into: "$DEPLOY_PATH_ROOT/temp.tar.gz", failOnError: true
                            } catch (Exception e2) {
                                sleep 5
                                sshPut remote: remote, from: "temp.tar.gz", into: "$DEPLOY_PATH_ROOT/temp.tar.gz", failOnError: true
                            }
                        }

                        try {
                            sshCommand remote: remote, command: "mkdir -p $DEPLOY_PATH_ROOT/temp; tar -xf $DEPLOY_PATH_ROOT/temp.tar.gz -C $DEPLOY_PATH_ROOT/temp; chmod u+x $DEPLOY_PATH_ROOT/temp/temp.sh; bash $DEPLOY_PATH_ROOT/temp/temp.sh; rm -rf $DEPLOY_PATH_ROOT/temp; rm -rf $DEPLOY_PATH_ROOT/temp.tar.gz", failOnError: true
                        } catch (Exception e1) {
                            sleep 5
                            try {
                                sshCommand remote: remote, command: "mkdir -p $DEPLOY_PATH_ROOT/temp; tar -xf $DEPLOY_PATH_ROOT/temp.tar.gz -C $DEPLOY_PATH_ROOT/temp; chmod u+x $DEPLOY_PATH_ROOT/temp/temp.sh; bash $DEPLOY_PATH_ROOT/temp/temp.sh; rm -rf $DEPLOY_PATH_ROOT/temp; rm -rf $DEPLOY_PATH_ROOT/temp.tar.gz", failOnError: true
                            } catch (Exception e2) {
                                sleep 5
                                sshCommand remote: remote, command: "mkdir -p $DEPLOY_PATH_ROOT/temp; tar -xf $DEPLOY_PATH_ROOT/temp.tar.gz -C $DEPLOY_PATH_ROOT/temp; chmod u+x $DEPLOY_PATH_ROOT/temp/temp.sh; bash $DEPLOY_PATH_ROOT/temp/temp.sh; rm -rf $DEPLOY_PATH_ROOT/temp; rm -rf $DEPLOY_PATH_ROOT/temp.tar.gz", failOnError: true
                            }
                        }
                    }
                }
            }
        }
    }
    post {
        success {
            discordSend(webhookURL: DISCORD_WEBHOOK_URL, description: "Build completed. (${currentBuild.durationString})", link: env.BUILD_URL, result: currentBuild.currentResult, title: "${env.JOB_NAME} #${currentBuild.number}")
        }
        failure {
            discordSend(webhookURL: DISCORD_WEBHOOK_URL, description: "Build failed. (${currentBuild.durationString})", link: env.BUILD_URL, result: currentBuild.currentResult, title: "${env.JOB_NAME} #${currentBuild.number}")
        }
        aborted {
            discordSend(webhookURL: DISCORD_WEBHOOK_URL, description: "Build aborted. (${currentBuild.durationString})", link: env.BUILD_URL, result: currentBuild.currentResult, title: "${env.JOB_NAME} #${currentBuild.number}")
        }
    }
}