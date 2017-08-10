FROM python:3.6

ENV PYTHONUNBUFFERED 1
RUN git config --global http.sslVerify false
# Requirements have to be pulled and installed here, otherwise caching won't work
COPY requirements.txt /
RUN pip install -r /requirements.txt \
    && groupadd -r django \
    && useradd -r -g django django

COPY ./src /app
RUN find . -type d -name "*__pycache__" | xargs rm -r
RUN find . -type d -name "*.cache*" | xargs rm -r
RUN chown -R django /app

# COPY ./compose/django/entrypoint.sh /entrypoint.sh
# RUN sed -i 's/\r//' /entrypoint.sh
# RUN chmod +x /entrypoint.sh

# COPY ./compose/django/start-dev.sh /start-dev.sh
# RUN sed -i 's/\r//' /start-dev.sh
# RUN chmod +x /start-dev.sh
# RUN pip install -e git+https://gitlab.com/gbozee/api-gateway-client.git@master#egg=tuteria_gateway_client

WORKDIR /app
EXPOSE 80
CMD ["python", "manage.py", "runserver","0.0.0.0:80"]

