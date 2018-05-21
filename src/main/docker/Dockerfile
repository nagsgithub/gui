# To change this license header, choose License Headers in Project Properties.
# To change this template file, choose Tools | Templates
# and open the template in the editor.
FROM java:8
#copy build/libs/*.jar /tmp
VOLUME /tmp
ADD gui-0.0.1-SNAPSHOT.jar gui.jar
RUN bash -c 'touch /gui.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/gui.jar"]

CMD ["/bin/sh"]
