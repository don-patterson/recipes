FROM python:3.8
RUN groupadd -r api-user \
  && useradd --no-log-init -rmg api-user api-user \
  && pip install pipenv
WORKDIR /opt/api
COPY Pipfile Pipfile.lock ./
RUN pipenv install --dev --system --deploy
COPY . ./
USER api-user
CMD ["flask", "run", "--host=0.0.0.0"]
