FROM python:3.8
RUN groupadd -r api-user \
  && useradd --no-log-init -rmg api-user api-user \
  && pip install pipenv
WORKDIR /opt/api
COPY Pipfile Pipfile.lock ./
RUN pipenv install --dev --system --deploy
USER api-user
CMD ["uvicorn", "recipes_api:app", "--host=0.0.0.0", "--reload"]
