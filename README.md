# React-FastIPI

Small User CRUD App with react as frontend, fastapi as backend.

## Instalation and Run

### Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pdm install
```

Copy `env-example` to `.env` and change values.

```bash
alembic upgrade head
uvicorn main:app
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Access site in http://localhost:5173


## Tech Stack

### Backend

The Backend is made inn FastAPI using SQLModel as base model and schema. The database is postgres. Use https://github.com/gmartindelcye/docker-postgres-pgadmin to deploy postgres as a docker container.


### Frontend

The Frontend is made with React-Vite, Axios, Tailwindcss and MaterialUI. Dependencies are installed.

