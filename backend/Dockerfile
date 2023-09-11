FROM python:3.9-alpine
ENV PYTHONUNBUFFED 1
WORKDIR /backend
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .