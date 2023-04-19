# 명령어
docker run -d -it --name mynode -p 3000:3000 node
docker run -d -it --name mynode -v E:/react_work/:/app -p 3000:3000 node

# docker volumn 마운트 윈도우dockerf 폴더를 리눅스 docerapp폴더 연결
docker run -d -it --name myweb  -v C:/dockerf:/dockerapp -p 80:80 nginx
# 윈도우 dockerf 폴더를 리눅스 /usr/share/nginx/html 폴더와 연결
docker run -d -it --name myweb  -v C:/dockerf:/usr/share/nginx/html -p 80:80 nginx

# 현재 실행되고 있는 컨테이너 보기
docker ps

# 컨테이너 삭제 명령어
docker rm mynode

# 컨테이너 중지
docker stop mynode

# 현재 도커허브를 통해 받은 images 파일 보기
docker images

# 이미지 삭제
docker rmi node
